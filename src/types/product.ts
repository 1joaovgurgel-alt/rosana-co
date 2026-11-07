export type ProductCategory =
  | 'Bolsas de ombro'
  | 'Bolsas de mão'
  | 'Bolsas transversais'
  | 'Bolsas pequenas'
  | 'Bolsas grandes'
  | 'Modelos especiais';

export type AvailabilityStatus = 'pronta-entrega' | 'sob-encomenda' | 'indisponivel';

export interface ProductColorOption {
  id: string;
  name: string;
  hex: string;
  availableForImmediateDelivery?: boolean;
}

export interface ProductCustomizationGroup {
  id: string;
  label: string;
  description?: string;
  required?: boolean;
  options: string[];
}

export interface ProductVariantModel {
  id: string;
  name: string;
  dimensions: string;
  description?: string;
}

export interface Product {
  /** Identificador único usado na URL amigável (/bolsa/:slug) */
  id: string;
  slug: string;
  /** Nome comercial da bolsa */
  name: string;
  /** Subtítulo curto para listagens */
  subtitle: string;
  /** Descrição completa e detalhada da peça */
  description: string;
  /** Detalhes técnicos e de acabamento artesanal */
  craftsmanshipDetails: string[];
  /** Categoria principal + categorias secundárias para filtros */
  category: ProductCategory;
  additionalCategories?: ProductCategory[];
  /** Fotografia principal */
  mainImage: string;
  /** Galeria de fotografias adicionais */
  gallery: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  /** Variações de modelo/formato dentro da mesma linha */
  models: ProductVariantModel[];
  /** Cores disponíveis */
  colors: ProductColorOption[];
  /** Opções de personalização */
  customizations: ProductCustomizationGroup[];
  /**
   * Status de disponibilidade:
   * - 'pronta-entrega': exibe o preço cadastrado e controla limite pelo estoque
   * - 'sob-encomenda': oculta qualquer preço e exibe "Feito sob encomenda / Sob consulta"
   * - 'indisponivel': não permite compra
   */
  availability: AvailabilityStatus;
  /**
   * Preço em reais (R$).
   * IMPORTANTE: A interface nunca exibe este valor se availability !== 'pronta-entrega'.
   */
  price?: number;
  /** Quantidade disponível em estoque para Pronta Entrega */
  stockQuantity?: number;
  /** Exibe na seção "Modelos em Destaque" da página inicial */
  featured: boolean;
  /** Controla se o produto aparece no site (true = ativo, false = oculto) */
  active: boolean;
}

export interface BagItem {
  cartItemId: string;
  productId: string;
  productSlug: string;
  productName: string;
  mainImage: string;
  availability: AvailabilityStatus;
  unitPrice?: number;
  maxStock?: number;
  selectedModel: string;
  selectedColor: ProductColorOption;
  quantity: number;
  selectedCustomizations: Record<string, string>;
  notes: string;
}
