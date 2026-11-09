import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import {
  getReadyToShipProducts,
  buildGeneralContactUrl,
} from '../utils/productRules';
import { ProductCard } from '../components/ProductCard';

export const ReadyToShipPage: React.FC = () => {
  const readyProducts = getReadyToShipProducts();
  const whatsappUrl = buildGeneralContactUrl();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-12 lg:py-16 space-y-8 sm:space-y-12">
      {/* Cabeçalho da Vitrine */}
      <div className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-10 lg:p-12 shadow-subtle">
        <div className="max-w-3xl space-y-3.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-100 text-olive-800 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Vitrine Exclusiva • Envio Imediato
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal-900 leading-tight">
            Bolsas a Pronta Entrega
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700/90 leading-relaxed">
            Esta vitrine reúne as bolsas artesanais da Rosana&amp;Co que já estão finalizadas em nosso ateliê e disponíveis para compra imediata. Todas possuem valor definido e quantidade controlada conforme nosso estoque real.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs text-charcoal-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ivory-100 border border-sand-200">
              • Peças revisadas e prontas para embalar
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ivory-100 border border-sand-200">
              • Confirmação rápida pelo WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Grid de Produtos a Pronta Entrega */}
      {readyProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-sand-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5">
          <div className="w-12 h-12 rounded-full bg-ivory-100 border border-sand-200 flex items-center justify-center mx-auto text-olive-700">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
            Nossas peças a pronta entrega esgotaram no momento
          </h2>
          <p className="text-sm text-charcoal-700/85 leading-relaxed">
            Como nossa produção é 100% manual, as unidades a pronta entrega são limitadas. Você pode encomendar qualquer modelo do catálogo personalizado nas suas cores preferidas!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              to="/catalogo"
              className="px-6 py-3.5 min-h-[46px] rounded-xl bg-olive-700 text-ivory-50 text-sm font-medium hover:bg-olive-800 transition-colors inline-flex items-center justify-center"
            >
              Ver modelos sob encomenda
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 min-h-[46px] rounded-xl bg-ivory-100 text-charcoal-900 border border-sand-300 text-sm font-medium hover:bg-sand-200/60 transition-colors inline-flex items-center justify-center"
            >
              Consultar próximas peças pelo WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center justify-between text-xs text-charcoal-700">
            <span>
              Mostrando <strong>{readyProducts.length}</strong>{' '}
              {readyProducts.length === 1
                ? 'modelo disponível para pronta entrega'
                : 'modelos disponíveis para pronta entrega'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {readyProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showDirectWhatsAppButton={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Chamada para Encomendas Personalizadas */}
      <div className="rounded-3xl bg-ivory-100 border border-sand-300 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
            Gostou de um modelo, mas prefere outra cor?
          </h2>
          <p className="text-sm text-charcoal-700/90 leading-relaxed">
            Todos os nossos modelos podem ser confeccionados sob encomenda com a combinação de cores e detalhes de alça que você escolher.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <Link
            to="/personalize"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-sm font-medium transition-colors"
          >
            Personalizar minha bolsa
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-white hover:bg-ivory-50 text-charcoal-900 border border-sand-300 text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-olive-700" />
            Tirar dúvidas
          </a>
        </div>
      </div>
    </div>
  );
};
