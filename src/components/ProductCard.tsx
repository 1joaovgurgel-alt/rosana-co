import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { Product } from '../types/product';
import {
  getDisplayPrice,
  isReadyToShip,
  buildSingleItemWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/productRules';

interface ProductCardProps {
  product: Product;
  showDirectWhatsAppButton?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showDirectWhatsAppButton = false,
}) => {
  const ready = isReadyToShip(product);
  const formattedPrice = getDisplayPrice(product);

  const defaultColor = product.colors[0];
  const defaultModel = product.models[0]?.name ?? 'Modelo Padrão';

  const handleDirectWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const defaultCustomizations: Record<string, string> = {};
    product.customizations.forEach((group) => {
      if (group.options[0]) {
        defaultCustomizations[group.label] = group.options[0];
      }
    });

    const msg = buildSingleItemWhatsAppMessage({
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      mainImage: product.mainImage,
      availability: product.availability,
      unitPrice: ready ? product.price : undefined,
      maxStock: product.stockQuantity,
      selectedModel: defaultModel,
      selectedColor: defaultColor,
      quantity: 1,
      selectedCustomizations: defaultCustomizations,
      notes: '',
    });

    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="group flex flex-col bg-white border border-sand-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-elevated hover:border-olive-600/30">
      <Link
        to={`/bolsa/${product.slug}`}
        className="relative aspect-square w-full overflow-hidden bg-ivory-100 block"
      >
        <img
          src={product.mainImage}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge de Disponibilidade */}
        <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex flex-wrap gap-1.5">
          {ready ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-olive-700 text-ivory-50 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              Pronta Entrega
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-ivory-50/95 text-charcoal-800 border border-sand-300 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-olive-600 flex-shrink-0" />
              Feito sob encomenda
            </span>
          )}
        </div>

        {/* Indicador de Estoque na Pronta Entrega */}
        {ready && typeof product.stockQuantity === 'number' && (
          <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-3.5">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-ivory-50/95 text-charcoal-800 backdrop-blur-sm border border-sand-200 shadow-2xs">
              {product.stockQuantity === 1
                ? 'Última peça disponível'
                : `${product.stockQuantity} unidades disponíveis`}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6 justify-between gap-3.5 sm:gap-4">
        <div>
          <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs text-charcoal-700/75 mb-1">
            <span className="truncate">{product.category}</span>
            {product.customizations.length > 0 && (
              <span className="text-olive-700 font-medium flex-shrink-0">Personalizável</span>
            )}
          </div>

          <Link
            to={`/bolsa/${product.slug}`}
            className="block group-hover:text-olive-700 transition-colors"
          >
            <h3 className="font-serif text-[22px] sm:text-2xl font-medium text-charcoal-900 tracking-tight leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1 text-xs sm:text-sm text-charcoal-700/85 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Cores disponíveis */}
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="text-[11px] sm:text-xs text-charcoal-700/70">Cores:</span>
            <div className="flex items-center gap-1.5" aria-label="Cores disponíveis">
              {product.colors.slice(0, 5).map((color) => (
                <span
                  key={color.id}
                  title={color.name}
                  className="w-4 h-4 rounded-full border border-charcoal-900/20 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-[11px] text-charcoal-700/70">
                  +{product.colors.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rodapé do Card: Preço (apenas se Pronta Entrega) ou Status Sob Consulta + Botão */}
        <div className="pt-3.5 sm:pt-4 border-t border-sand-200/80 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-2">
            {ready && formattedPrice ? (
              <div>
                <span className="text-[11px] sm:text-xs text-charcoal-700/70 block">
                  Disponível hoje
                </span>
                <span className="font-serif text-2xl font-semibold text-charcoal-900">
                  {formattedPrice}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-[11px] sm:text-xs text-charcoal-700/70 block">
                  Produção artesanal
                </span>
                <span className="text-xs sm:text-sm font-medium text-olive-700">
                  Sob consulta • Personalizável
                </span>
              </div>
            )}

            <Link
              to={`/bolsa/${product.slug}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-olive-700 hover:text-olive-800 underline-offset-4 hover:underline flex-shrink-0 py-1"
            >
              Ver detalhes
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Link
              to={`/bolsa/${product.slug}`}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-olive-700 text-ivory-50 hover:bg-olive-800 active:bg-olive-900 transition-colors"
            >
              {ready ? 'Selecionar bolsa' : 'Personalizar e orçar'}
            </Link>

            {showDirectWhatsAppButton && ready && (
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-ivory-100 text-olive-800 border border-olive-600/30 hover:bg-olive-50 active:bg-olive-100 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-olive-700" />
                Comprar direto pelo WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
