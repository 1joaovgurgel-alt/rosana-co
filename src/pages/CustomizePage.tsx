import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Sparkles, MessageCircle, ArrowRight, Layers, Scissors } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import {
  buildCustomBagInquiryUrl,
  getMadeToOrderProducts,
} from '../utils/productRules';
import { ProductCard } from '../components/ProductCard';

export const CustomizePage: React.FC = () => {
  const customInquiryUrl = buildCustomBagInquiryUrl();
  const madeToOrderProducts = getMadeToOrderProducts();

  const colorPaletteShowcase = [
    { name: 'Verde Oliva Autoral', hex: '#4A5739', desc: 'Nossa cor assinatura: elegante, orgânica e atemporal.' },
    { name: 'Off-White Natural', hex: '#F3EFE6', desc: 'Luminoso e delicado, combina com todas as ocasiões.' },
    { name: 'Bege Areia', hex: '#D4C3AA', desc: 'Tom neutro acolhedor que valoriza o relevo dos pontos.' },
    { name: 'Verde Sálvia Suave', hex: '#8A9A78', desc: 'Frescor botânico com toque contemporâneo.' },
    { name: 'Caramelo Amêndoa', hex: '#A67553', desc: 'Terroso sofisticado para bolsas de uso diário.' },
    { name: 'Marrom Cacau', hex: '#4E3B31', desc: 'Profundidade clássica e alta versatilidade.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">
      {/* Hero Personalização */}
      <section className="rounded-3xl bg-white border border-sand-200 overflow-hidden shadow-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-50 border border-olive-200 text-olive-800 text-xs font-medium">
              <Palette className="w-3.5 h-3.5" />
              Feita sob medida para o seu estilo
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal-900 leading-tight">
              {siteConfig.institutional.customSectionTitle}
            </h1>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-charcoal-700/90 leading-relaxed">
              {siteConfig.institutional.customSectionBody.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-sand-300 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {siteConfig.institutional.customOrderNotice}
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-3">
              <a
                href={customInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 font-medium text-sm shadow-subtle transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Quero personalizar minha bolsa
              </a>
              <Link
                to="/catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-ivory-50 hover:bg-ivory-100 text-charcoal-900 border border-sand-300 font-medium text-sm transition-colors"
              >
                Escolher modelo no catálogo
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-ivory-100 p-4 sm:p-8 h-full grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="images/products/bolsa-tassel-terracota.jpg"
              alt="Bolsa artesanal personalizada em tom terracota"
              className="rounded-2xl aspect-square sm:aspect-[3/4] object-cover w-full shadow-xs"
            />
            <img
              src="images/products/bolsa-franja-vermelha.jpg"
              alt="Bolsa artesanal personalizada com franjas laterais"
              className="rounded-2xl aspect-square sm:aspect-[3/4] object-cover w-full shadow-xs sm:mt-8"
            />
          </div>
        </div>
      </section>

      {/* O que pode ser personalizado */}
      <section className="space-y-6 sm:space-y-8">
        <div className="max-w-2xl">
          <span className="text-[11px] sm:text-xs font-medium text-olive-700 uppercase tracking-wider">
            Liberdade de Criação
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
            O que você pode personalizar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-700/85">
            Cada detalhe é alinhado com você antes de iniciarmos a produção manual da sua peça.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Cores &amp; Combinações
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Escolha entre tons monocromáticos clássicos ou combinações bicolores harmoniosas em nossa cartela de fios selecionados.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Alças &amp; Medidas
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Solicite alças de ombro maiores ou menores, alças transversais sob medida, correntes ou alças 100% tecidas em crochê.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Forro, Fechos &amp; Detalhes
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Defina se prefere forro interno em algodão cru, fecho magnético invisível, pingentes tassel artesanais ou ferragens específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Cartela de Cores Inspiracional */}
      <section className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-10 lg:p-12 shadow-subtle space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-medium text-olive-700 uppercase tracking-wider">
              Tons Naturais &amp; Sofisticados
            </span>
            <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Nossa Cartela de Cores Principais
            </h2>
            <p className="mt-2 text-sm text-charcoal-700/85 max-w-2xl">
              Trabalhamos com uma seleção de tons elegantes e atemporais. Também podemos consultar outras cores específicas pelo WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {colorPaletteShowcase.map((swatch) => (
            <div
              key={swatch.name}
              className="flex items-start gap-3.5 sm:gap-4 p-4 rounded-2xl bg-ivory-50 border border-sand-200"
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-charcoal-900/15 flex-shrink-0 shadow-inner"
                style={{ backgroundColor: swatch.hex }}
              />
              <div>
                <h3 className="font-serif text-lg font-medium text-charcoal-900">
                  {swatch.name}
                </h3>
                <p className="text-xs text-charcoal-700/80 mt-0.5 leading-relaxed">
                  {swatch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modelos Sob Encomenda */}
      <section className="space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-olive-700">
              <Sparkles className="w-3.5 h-3.5" />
              Selecione e Configure no Site
            </span>
            <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Modelos Sob Encomenda em Destaque
            </h2>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:underline underline-offset-4"
          >
            Ver todo o catálogo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {madeToOrderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
