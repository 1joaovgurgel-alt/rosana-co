import { BagItem, Product } from '../types/product';
import { productsData } from '../data/products';
import { siteConfig } from '../config/siteConfig';

/**
 * REGRAS AUTOMÁTICAS DE DISPONIBILIDADE E PREÇO
 * ---------------------------------------------
 * - Apenas produtos com availability === 'pronta-entrega' e estoque > 0 são considerados Pronta Entrega.
 * - Produtos 'sob-encomenda' NUNCA exibem preço, mesmo que haja valor numérico no arquivo.
 */

export function isReadyToShip(product: Product): boolean {
  return (
    product.active &&
    product.availability === 'pronta-entrega' &&
    typeof product.price === 'number' &&
    product.price > 0 &&
    (product.stockQuantity === undefined || product.stockQuantity > 0)
  );
}

export function isMadeToOrder(product: Product): boolean {
  return product.active && product.availability === 'sob-encomenda';
}

export function isProductAvailableForPurchase(product: Product): boolean {
  if (!product.active || product.availability === 'indisponivel') {
    return false;
  }
  if (product.availability === 'pronta-entrega') {
    return (product.stockQuantity ?? 1) > 0;
  }
  return true;
}

/**
 * Formata valor em Reais (R$) apenas quando permitido pela regra de negócio
 */
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Retorna o preço formatado SOMENTE se o produto for Pronta Entrega.
 * Caso seja Sob Encomenda, retorna null (garantindo que nunca apareça preço).
 */
export function getDisplayPrice(product: Product): string | null {
  if (isReadyToShip(product) && typeof product.price === 'number') {
    return formatCurrencyBRL(product.price);
  }
  return null;
}

/**
 * Retorna todos os produtos ativos
 */
export function getActiveProducts(): Product[] {
  return productsData.filter((p) => p.active);
}

/**
 * Retorna apenas produtos em destaque ativos
 */
export function getFeaturedProducts(): Product[] {
  return getActiveProducts().filter((p) => p.featured);
}

/**
 * Retorna apenas produtos disponíveis a Pronta Entrega
 */
export function getReadyToShipProducts(): Product[] {
  return getActiveProducts().filter((p) => isReadyToShip(p));
}

/**
 * Retorna apenas produtos feitos Sob Encomenda
 */
export function getMadeToOrderProducts(): Product[] {
  return getActiveProducts().filter((p) => isMadeToOrder(p));
}

/**
 * Gera URL oficial wa.me com mensagem codificada
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Gera mensagem automática para um único item (Compra direta ou Solicitação de Orçamento)
 */
export function buildSingleItemWhatsAppMessage(item: Omit<BagItem, 'cartItemId'>): string {
  const isImmediate = item.availability === 'pronta-entrega' && typeof item.unitPrice === 'number';
  const availabilityLabel = isImmediate ? 'Pronta entrega' : 'Sob encomenda';

  const customizationsEntries = Object.entries(item.selectedCustomizations).filter(
    ([, val]) => Boolean(val && val.trim())
  );
  const customizationsText =
    customizationsEntries.length > 0
      ? customizationsEntries.map(([label, val]) => `${label}: ${val}`).join(' | ')
      : 'Padrão do modelo';

  const lines: string[] = [
    'Olá! Conheci a Rosana&Co pelo site e gostaria de fazer um pedido.',
    '',
    'Gostaria de solicitar:',
    '',
    `Produto: ${item.productName}`,
    `Modelo: ${item.selectedModel}`,
    `Cor: ${item.selectedColor.name}`,
    `Quantidade: ${item.quantity} ${item.quantity === 1 ? 'unidade' : 'unidades'}`,
    `Disponibilidade: ${availabilityLabel}`,
    `Personalização: ${customizationsText}`,
  ];

  if (isImmediate && typeof item.unitPrice === 'number') {
    const subtotal = item.unitPrice * item.quantity;
    lines.push(`Valor unitário: ${formatCurrencyBRL(item.unitPrice)}`);
    if (item.quantity > 1) {
      lines.push(`Subtotal estimado: ${formatCurrencyBRL(subtotal)}`);
    }
  }

  if (item.notes && item.notes.trim().length > 0) {
    lines.push(`Observações: ${item.notes.trim()}`);
  }

  lines.push('');

  if (isImmediate) {
    lines.push('Gostaria de confirmar a disponibilidade imediata e combinar o envio.');
  } else {
    lines.push('Gostaria de consultar o valor e o prazo de produção.');
  }

  lines.push('');
  lines.push('Aguardo o retorno. Obrigada!');

  return lines.join('\n');
}

/**
 * Gera mensagem organizada para múltiplos itens na Sacola de Pedidos
 */
export function buildBagWhatsAppMessage(items: BagItem[]): string {
  if (items.length === 1) {
    return buildSingleItemWhatsAppMessage(items[0]);
  }

  const lines: string[] = [
    'Olá! Conheci a Rosana&Co pelo site e gostaria de fazer um pedido.',
    '',
    'Gostaria de solicitar:',
    '',
  ];

  let hasReadyItems = false;
  let hasCustomItems = false;
  let readyTotal = 0;

  items.forEach((item, index) => {
    const isImmediate = item.availability === 'pronta-entrega' && typeof item.unitPrice === 'number';
    if (isImmediate) {
      hasReadyItems = true;
      readyTotal += (item.unitPrice ?? 0) * item.quantity;
    } else {
      hasCustomItems = true;
    }

    const availabilityLabel = isImmediate ? 'Pronta entrega' : 'Sob encomenda';
    const customizationsEntries = Object.entries(item.selectedCustomizations).filter(
      ([, val]) => Boolean(val && val.trim())
    );
    const customizationsText =
      customizationsEntries.length > 0
        ? customizationsEntries.map(([label, val]) => `${label}: ${val}`).join(' | ')
        : 'Padrão do modelo';

    lines.push(`--- Item ${index + 1} ---`);
    lines.push(`Produto: ${item.productName}`);
    lines.push(`Modelo: ${item.selectedModel}`);
    lines.push(`Cor: ${item.selectedColor.name}`);
    lines.push(`Quantidade: ${item.quantity} ${item.quantity === 1 ? 'unidade' : 'unidades'}`);
    lines.push(`Disponibilidade: ${availabilityLabel}`);
    lines.push(`Personalização: ${customizationsText}`);

    if (isImmediate && typeof item.unitPrice === 'number') {
      lines.push(
        `Valor cadastrado: ${formatCurrencyBRL(item.unitPrice * item.quantity)} (${item.quantity}x ${formatCurrencyBRL(
          item.unitPrice
        )})`
      );
    }

    if (item.notes && item.notes.trim().length > 0) {
      lines.push(`Observações: ${item.notes.trim()}`);
    }

    lines.push('');
  });

  if (hasReadyItems) {
    lines.push(`Total dos itens a pronta entrega: ${formatCurrencyBRL(readyTotal)}`);
  }

  if (hasCustomItems && hasReadyItems) {
    lines.push(
      'Gostaria de confirmar os itens a pronta entrega e consultar o valor e o prazo de produção dos modelos sob encomenda.'
    );
  } else if (hasCustomItems) {
    lines.push('Gostaria de consultar o valor e o prazo de produção.');
  } else {
    lines.push('Gostaria de confirmar a disponibilidade e consultar o envio.');
  }

  lines.push('');
  lines.push('Aguardo o retorno. Obrigada!');

  return lines.join('\n');
}

/**
 * Mensagem para o botão "Quero personalizar minha bolsa"
 */
export function buildCustomBagInquiryUrl(): string {
  const msg = [
    'Olá! Conheci a Rosana&Co pelo site e gostaria de personalizar uma bolsa de crochê feita à mão.',
    '',
    'Gostaria de conversar sobre as opções de modelos, cores disponíveis, valores e prazo de produção.',
    '',
    'Aguardo o retorno. Obrigada!',
  ].join('\n');

  return buildWhatsAppUrl(msg);
}

/**
 * Mensagem de atendimento geral pelo WhatsApp
 */
export function buildGeneralContactUrl(): string {
  const msg =
    'Olá! Conheci a Rosana&Co pelo site e gostaria de tirar uma dúvida sobre as bolsas artesanais.';
  return buildWhatsAppUrl(msg);
}
