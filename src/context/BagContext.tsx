import React, { createContext, useContext, useState, useEffect } from 'react';
import { BagItem } from '../types/product';

interface BagContextValue {
  items: BagItem[];
  isBagOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
  addItem: (item: Omit<BagItem, 'cartItemId'>) => void;
  removeItem: (cartItemId: string) => void;
  updateItemQuantity: (cartItemId: string, newQuantity: number) => void;
  clearBag: () => void;
  totalItemsCount: number;
}

const BagContext = createContext<BagContextValue | undefined>(undefined);

const STORAGE_KEY = 'rosana_co_bag_v1';

export const BagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore storage errors
    }
    return [];
  });

  const [isBagOpen, setIsBagOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const openBag = () => setIsBagOpen(true);
  const closeBag = () => setIsBagOpen(false);

  const addItem = (newItem: Omit<BagItem, 'cartItemId'>) => {
    setItems((prev) => {
      const customKey = JSON.stringify(newItem.selectedCustomizations);
      const existingIndex = prev.findIndex(
        (existing) =>
          existing.productId === newItem.productId &&
          existing.selectedModel === newItem.selectedModel &&
          existing.selectedColor.id === newItem.selectedColor.id &&
          JSON.stringify(existing.selectedCustomizations) === customKey &&
          existing.notes.trim() === newItem.notes.trim()
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const target = updated[existingIndex];
        const maxAllowed =
          target.availability === 'pronta-entrega' && target.maxStock
            ? target.maxStock
            : 10;
        const combinedQuantity = Math.min(target.quantity + newItem.quantity, maxAllowed);
        updated[existingIndex] = {
          ...target,
          quantity: combinedQuantity,
        };
        return updated;
      }

      const cartItemId = `${newItem.productId}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 7)}`;

      return [...prev, { ...newItem, cartItemId }];
    });
    setIsBagOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateItemQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId !== cartItemId) return item;
        const maxAllowed =
          item.availability === 'pronta-entrega' && item.maxStock ? item.maxStock : 10;
        return {
          ...item,
          quantity: Math.min(Math.max(1, newQuantity), maxAllowed),
        };
      })
    );
  };

  const clearBag = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BagContext.Provider
      value={{
        items,
        isBagOpen,
        openBag,
        closeBag,
        addItem,
        removeItem,
        updateItemQuantity,
        clearBag,
        totalItemsCount,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export function useBag(): BagContextValue {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag deve ser utilizado dentro de um BagProvider');
  }
  return context;
}
