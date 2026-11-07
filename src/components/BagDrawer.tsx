import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Info } from 'lucide-react';
import { useBag } from '../context/BagContext';
import {
  formatCurrencyBRL,
  buildBagWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/productRules';

export const BagDrawer: React.FC = () => {
  const {
    items,
    isBagOpen,
    closeBag,
    removeItem,
    updateItemQuantity,
    clearBag,
    totalItemsCount,
  } = useBag();

  if (!isBagOpen) return null;

  const readyItems = items.filter(
    (item) => item.availability === 'pronta-entrega' && typeof item.unitPrice === 'number'
  );
  const customItems = items.filter((item) => item.availability !== 'pronta-entrega');

  const readySubtotal = readyItems.reduce(
    (sum, item) => sum + (item.unitPrice ?? 0) * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    const message = buildBagWhatsAppMessage(items);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      aria-labelledby="bag-drawer-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-xs transition-opacity"
        onClick={closeBag}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-ivory-50 shadow-2xl border-l border-sand-200 flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-sand-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-olive-700" />
              <h2 id="bag-drawer-title" className="font-serif text-2xl font-medium text-charcoal-900">
                Sacola de Pedidos
              </h2>
              {totalItemsCount > 0 && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-olive-100 text-olive-800">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={closeBag}
              aria-label="Fechar sacola"
              className="p-2 rounded-full text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Itens */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-14 h-14 rounded-full bg-ivory-100 border border-sand-200 flex items-center justify-center mx-auto mb-4 text-olive-700">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal-900 mb-2">
                  Sua sacola está vazia
                </h3>
                <p className="text-sm text-charcoal-700/80 mb-6 leading-relaxed">
                  Explore nosso catálogo de bolsas artesanais em crochê, escolha suas cores e personalizações preferidas e adicione à sua sacola.
                </p>
                <Link
                  to="/catalogo"
                  onClick={closeBag}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-olive-700 text-ivory-50 hover:bg-olive-800 transition-colors"
                >
                  Conhecer nossos modelos
                </Link>
              </div>
            ) : (
              <>
                {items.map((item) => {
                  const isImmediate =
                    item.availability === 'pronta-entrega' && typeof item.unitPrice === 'number';
                  const customEntries = Object.entries(item.selectedCustomizations).filter(
                    ([, v]) => Boolean(v)
                  );
                  const maxAllowed =
                    item.availability === 'pronta-entrega' && item.maxStock
                      ? item.maxStock
                      : 10;

                  return (
                    <div
                      key={item.cartItemId}
                      className="p-4 rounded-2xl bg-white border border-sand-200/90 shadow-subtle space-y-3"
                    >
                      <div className="flex gap-4">
                        <Link
                          to={`/bolsa/${item.productSlug}`}
                          onClick={closeBag}
                          className="w-20 h-24 rounded-xl overflow-hidden bg-ivory-100 flex-shrink-0 border border-sand-200"
                        >
                          <img
                            src={item.mainImage}
                            alt={item.productName}
                            className="w-full h-full object-cover"
                          />
                        </Link>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span
                                className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-md mb-1 ${
                                  isImmediate
                                    ? 'bg-olive-100 text-olive-800'
                                    : 'bg-sand-100 text-charcoal-800'
                                }`}
                              >
                                {isImmediate ? 'Pronta Entrega' : 'Sob Encomenda'}
                              </span>
                              <Link
                                to={`/bolsa/${item.productSlug}`}
                                onClick={closeBag}
                                className="block font-serif text-lg font-medium text-charcoal-900 hover:text-olive-700"
                              >
                                {item.productName}
                              </Link>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.cartItemId)}
                              aria-label={`Remover ${item.productName}`}
                              className="p-1.5 text-charcoal-700/60 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="mt-1.5 text-xs text-charcoal-700 space-y-1">
                            <p>
                              <span className="font-medium text-charcoal-900">Modelo:</span>{' '}
                              {item.selectedModel}
                            </p>
                            <p className="flex items-center gap-1.5">
                              <span className="font-medium text-charcoal-900">Cor:</span>
                              <span
                                className="w-3 h-3 rounded-full border border-charcoal-900/20 inline-block"
                                style={{ backgroundColor: item.selectedColor.hex }}
                              />
                              <span>{item.selectedColor.name}</span>
                            </p>
                            {customEntries.map(([label, val]) => (
                              <p key={label}>
                                <span className="font-medium text-charcoal-900">{label}:</span>{' '}
                                {val}
                              </p>
                            ))}
                            {item.notes && (
                              <p className="italic text-charcoal-700/90 bg-ivory-100 p-2 rounded-lg mt-1">
                                “{item.notes}”
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantidade e Valor */}
                      <div className="pt-3 border-t border-sand-200/70 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateItemQuantity(item.cartItemId, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            aria-label="Diminuir quantidade"
                            className="w-7 h-7 rounded-lg border border-sand-300 flex items-center justify-center text-charcoal-800 disabled:opacity-40 hover:bg-ivory-100"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium text-charcoal-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateItemQuantity(item.cartItemId, item.quantity + 1)
                            }
                            disabled={item.quantity >= maxAllowed}
                            aria-label="Aumentar quantidade"
                            className="w-7 h-7 rounded-lg border border-sand-300 flex items-center justify-center text-charcoal-800 disabled:opacity-40 hover:bg-ivory-100"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          {isImmediate && item.maxStock && item.quantity >= item.maxStock && (
                            <span className="text-[11px] text-olive-700 ml-1">
                              (Limite em estoque)
                            </span>
                          )}
                        </div>

                        <div className="text-right">
                          {isImmediate && typeof item.unitPrice === 'number' ? (
                            <span className="font-serif text-lg font-semibold text-charcoal-900">
                              {formatCurrencyBRL(item.unitPrice * item.quantity)}
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-olive-700">
                              Valor sob consulta
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={clearBag}
                    className="text-xs text-charcoal-700/70 hover:text-charcoal-900 underline underline-offset-4"
                  >
                    Limpar sacola
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Rodapé da Sacola */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-sand-200 space-y-4">
              <div className="space-y-1.5 text-sm">
                {readyItems.length > 0 && (
                  <div className="flex items-baseline justify-between">
                    <span className="text-charcoal-700">
                      Subtotal (Pronta Entrega):
                    </span>
                    <span className="font-serif text-xl font-semibold text-charcoal-900">
                      {formatCurrencyBRL(readySubtotal)}
                    </span>
                  </div>
                )}

                {customItems.length > 0 && (
                  <div className="flex items-baseline justify-between text-xs text-olive-800">
                    <span>Itens sob encomenda ({customItems.length}):</span>
                    <span className="font-medium">Orçamento e prazo pelo WhatsApp</span>
                  </div>
                )}
              </div>

              <div className="p-3 rounded-xl bg-ivory-100 border border-sand-200 flex gap-2.5 text-xs text-charcoal-700 leading-relaxed">
                <Info className="w-4 h-4 text-olive-700 flex-shrink-0 mt-0.5" />
                <p>
                  O envio da mensagem não realiza cobrança automática. Confirmaremos a disponibilidade, o valor final com frete e o prazo diretamente com você pelo WhatsApp.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-5 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 font-medium text-sm flex items-center justify-center gap-2.5 shadow-subtle transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Finalizar pedido pelo WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
