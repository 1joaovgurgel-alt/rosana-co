import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Instagram,
  MessageCircle,
  Palette,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import {
  getFeaturedProducts,
  getReadyToShipProducts,
  getMadeToOrderProducts,
  buildCustomBagInquiryUrl,
  buildGeneralContactUrl,
} from '../utils/productRules';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const readyProducts = getReadyToShipProducts();
  const customOrderProducts = getMadeToOrderProducts();

  // Deduplica os modelos exibidos na vitrine "Modelos em Destaque" (top 3)
  // para que a seção "Sob Encomenda" na Home mostre outros modelos do ateliê sem repetição
  const topFeaturedSlice = featuredProducts.slice(0, 3);
  const topFeaturedIds = new Set(topFeaturedSlice.map((p) => p.id));
  const nonOverlappingCustom = customOrderProducts.filter((p) => !topFeaturedIds.has(p.id));
  const homeCustomShowcase = [
    ...nonOverlappingCustom,
    ...customOrderProducts.filter((p) => topFeaturedIds.has(p.id)),
  ].slice(0, 3);

  const customInquiryUrl = buildCustomBagInquiryUrl();
  const generalContactUrl = buildGeneralContactUrl();

  const instagramGallery = [
    {
      src: 'images/products/bolsa-duo-offwhite.jpg',
      alt: 'Bolsa Pérola Duo em crochê off-white com corrente',
      caption: 'Bolsa Média Off-White',
    },
    {
      src: 'images/products/bolsa-ombro-areia.jpg',
      alt: 'Bolsa Hobo Areia Natural de ombro',
      caption: 'Hobo Areia Natural',
    },
    {
      src: 'images/products/bolsa-aba-malva.jpg',
      alt: 'Bolsa Satchel Rosê Malva com aba canelada',
      caption: 'Satchel Rosê Malva',
    },
    {
      src: 'images/products/mochila-preta.jpg',
      alt: 'Mochila & Bolsa Conversível Ébano',
      caption: 'Mochila Conversível 2 em 1',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16">
      {/* 1. HERO BANNER PRINCIPAL — Otimizado para impacto imediato no Mobile e Desktop */}
      <section className="relative bg-ivory-100/70 border-b border-sand-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-9 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
            {/* Coluna Texto e Ações */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sand-200 text-[11px] sm:text-xs font-medium text-olive-700 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Ateliê de Bolsas Femininas em Crochê</span>
              </div>

              <h1 className="font-serif text-[34px] leading-[1.1] sm:text-5xl lg:text-6xl font-medium text-charcoal-900 tracking-tight">
                {siteConfig.brand.tagline}
              </h1>

              <p className="text-sm sm:text-lg text-charcoal-700/90 leading-relaxed max-w-xl">
                {siteConfig.institutional.heroSubtitle}
              </p>

              {/* Fotografia Principal no Mobile (exibida logo abaixo do subtítulo para compor a primeira dobra) */}
              <div className="lg:hidden pt-1">
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-elevated border border-sand-200">
                  <div className="aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-ivory-100">
                    <img
                      src="images/products/hero-banner.jpg"
                      alt="Bolsa de crochê artesanal Rosana&Co"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-2 px-1.5 py-0.5 flex items-center justify-between gap-2 text-[11px] text-charcoal-700">
                    <span className="font-serif italic text-sm text-charcoal-900 truncate">
                      Coleção Autoral Rosana&amp;Co
                    </span>
                    <Link
                      to="/catalogo"
                      className="font-medium text-olive-700 hover:underline underline-offset-4 flex-shrink-0"
                    >
                      Ver coleção →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Botões de Ação Principais */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                <Link
                  to="/catalogo"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-olive-700 hover:bg-olive-800 active:bg-olive-900 text-ivory-50 font-medium text-sm shadow-subtle transition-all"
                >
                  Conheça nossos modelos
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/pronta-entrega"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-ivory-100 active:bg-ivory-200/60 text-charcoal-900 border border-sand-300 font-medium text-sm transition-colors"
                >
                  Ver bolsas a pronta entrega
                </Link>
              </div>

              {/* Diferenciais discretos — Cards compactos no mobile e colunas elegantes no desktop */}
              <div className="pt-3 sm:pt-6 border-t border-sand-200/90 grid grid-cols-3 gap-1.5 sm:gap-4 text-xs text-charcoal-700">
                <div className="bg-white/75 sm:bg-transparent px-1.5 py-2.5 sm:p-0 rounded-xl border border-sand-200/80 sm:border-0 text-center sm:text-left">
                  <span className="font-serif text-[13px] sm:text-lg font-semibold text-charcoal-900 block leading-tight whitespace-nowrap">
                    100% Manual
                  </span>
                  <span className="text-[10px] sm:text-xs text-charcoal-700/85 mt-0.5 block leading-snug">
                    <span className="sm:hidden">Ponto a ponto</span>
                    <span className="hidden sm:inline">Ponto a ponto com acabamento de boutique</span>
                  </span>
                </div>
                <div className="bg-white/75 sm:bg-transparent px-1.5 py-2.5 sm:p-0 rounded-xl border border-sand-200/80 sm:border-0 text-center sm:text-left">
                  <span className="font-serif text-[13px] sm:text-lg font-semibold text-charcoal-900 block leading-tight whitespace-nowrap">
                    Sob Medida
                  </span>
                  <span className="text-[10px] sm:text-xs text-charcoal-700/85 mt-0.5 block leading-snug">
                    <span className="sm:hidden">Cores e alças</span>
                    <span className="hidden sm:inline">Personalize cores, alças e detalhes</span>
                  </span>
                </div>
                <div className="bg-white/75 sm:bg-transparent px-1.5 py-2.5 sm:p-0 rounded-xl border border-sand-200/80 sm:border-0 text-center sm:text-left">
                  <span className="font-serif text-[13px] sm:text-lg font-semibold text-charcoal-900 block leading-tight whitespace-nowrap">
                    Pronta Entrega
                  </span>
                  <span className="text-[10px] sm:text-xs text-charcoal-700/85 mt-0.5 block leading-snug">
                    <span className="sm:hidden">Envio rápido</span>
                    <span className="hidden sm:inline">Peças selecionadas para envio imediato</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna Fotografia Principal no Desktop */}
            <div className="hidden lg:block lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-elevated border border-sand-200">
                <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-ivory-100">
                  <img
                    src="images/products/hero-banner.jpg"
                    alt="Bolsa de crochê artesanal Rosana&Co"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-charcoal-700">
                  <span className="font-serif italic text-base text-charcoal-900">
                    Coleção Autoral Rosana&amp;Co — Fios selecionados e trama estruturada
                  </span>
                  <Link
                    to="/catalogo"
                    className="font-medium text-olive-700 hover:underline underline-offset-4 flex-shrink-0"
                  >
                    Explorar coleção
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUTOS EM DESTAQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <span className="text-[11px] sm:text-xs font-medium text-olive-700 tracking-wider uppercase">
              Curadoria da Marca
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
              Modelos em Destaque
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-charcoal-700/85 max-w-2xl leading-relaxed">
              Conheça nossas criações mais procuradas, unindo tramas artesanais delicadas, conforto no uso e versatilidade.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-olive-700 hover:text-olive-800 underline-offset-4 hover:underline self-start md:self-auto py-1"
          >
            Ver todo o catálogo ({featuredProducts.length}+ modelos)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {topFeaturedSlice.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. VITRINE DE BOLSAS A PRONTA ENTREGA */}
      <section className="bg-white border-y border-sand-200 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-[11px] sm:text-xs font-medium mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Disponibilidade Imediata
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
                Bolsas a Pronta Entrega
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-charcoal-700/85 max-w-2xl leading-relaxed">
                Peças já finalizadas em nosso ateliê, com valor definido e prontas para envio imediato após confirmação pelo WhatsApp.
              </p>
            </div>
            <Link
              to="/pronta-entrega"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-ivory-100 hover:bg-olive-50 text-olive-800 border border-sand-300 text-xs sm:text-sm font-medium transition-colors self-start md:self-auto"
            >
              Acessar vitrine Pronta Entrega
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {readyProducts.length === 0 ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-ivory-50 border border-sand-200 text-center">
              <p className="font-serif text-xl text-charcoal-900">
                No momento todas as nossas bolsas estão sendo confeccionadas sob encomenda.
              </p>
              <Link
                to="/catalogo"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-olive-700 underline"
              >
                Ver modelos para encomenda personalizada
              </Link>
            </div>
          ) : readyProducts.length === 1 ? (
            /* Layout adaptativo quando há 1 peça exclusiva a pronta entrega, evitando espaço vazio */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              <div className="lg:col-span-5">
                <ProductCard
                  product={readyProducts[0]}
                  showDirectWhatsAppButton={true}
                />
              </div>
              <div className="lg:col-span-7 rounded-2xl bg-ivory-50 border border-sand-200 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-olive-700 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    Peça Única Pronta para Envio
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 leading-snug">
                    Receba sua bolsa artesanal sem aguardar o prazo de confecção
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700/90 leading-relaxed">
                    Nossas bolsas a pronta entrega são peças recém-finalizadas no ateliê, revisadas ponto a ponto e disponíveis em quantidade limitada para envio imediato.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white border border-sand-200/90">
                      <span className="font-serif text-base font-semibold text-charcoal-900 block">
                        Envio Rápido
                      </span>
                      <span className="text-xs text-charcoal-700/80">
                        Peça já pronta e embalada com cuidado após confirmação no WhatsApp.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-sand-200/90">
                      <span className="font-serif text-base font-semibold text-charcoal-900 block">
                        Deseja outra cor?
                      </span>
                      <span className="text-xs text-charcoal-700/80">
                        Qualquer modelo também pode ser tecido sob encomenda no seu tom preferido.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    to={`/bolsa/${readyProducts[0].slug}`}
                    className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-xs sm:text-sm font-medium transition-colors"
                  >
                    Ver detalhes da {readyProducts[0].name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/personalize"
                    className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-ivory-100 text-charcoal-900 border border-sand-300 text-xs sm:text-sm font-medium transition-colors"
                  >
                    Encomendar em outra cor
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {readyProducts.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showDirectWhatsAppButton={true}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. SEÇÃO DE MODELOS PERSONALIZADOS E SOB ENCOMENDA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-100 text-charcoal-800 border border-sand-300 text-[11px] sm:text-xs font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 text-olive-700" />
              Feito especialmente para você
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
              Modelos Personalizados &amp; Sob Encomenda
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-charcoal-700/85 max-w-2xl leading-relaxed">
              {siteConfig.institutional.customOrderNotice}
            </p>
          </div>
          <Link
            to="/catalogo?disponibilidade=sob-encomenda"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-olive-700 hover:text-olive-800 underline-offset-4 hover:underline self-start md:self-auto py-1"
          >
            Ver todos sob encomenda ({customOrderProducts.length})
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {homeCustomShowcase.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. BANNER ESPECIAL: PERSONALIZE SUA BOLSA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-olive-800 text-ivory-50 overflow-hidden shadow-elevated border border-olive-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-700 text-ivory-100 text-[11px] sm:text-xs font-medium border border-olive-600">
                <Palette className="w-3.5 h-3.5" />
                Ateliê de Personalização Rosana&amp;Co
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                {siteConfig.institutional.customSectionTitle}
              </h2>

              <div className="space-y-3 sm:space-y-4 text-ivory-100/90 text-xs sm:text-base leading-relaxed">
                {siteConfig.institutional.customSectionBody.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                <a
                  href={customInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-ivory-50 hover:bg-white text-olive-900 font-medium text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-olive-700 flex-shrink-0" />
                  Quero personalizar minha bolsa
                </a>
                <Link
                  to="/personalize"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-olive-700/70 hover:bg-olive-700 text-ivory-50 border border-olive-500/40 font-medium text-xs sm:text-sm transition-colors"
                >
                  Ver opções de cores e detalhes
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 h-full bg-olive-900/40 p-5 sm:p-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="images/products/bolsa-tassel-terracota.jpg"
                  alt="Personalização de bolsas em tons terrosos e areia"
                  className="rounded-2xl aspect-square sm:aspect-[4/5] object-cover w-full border border-ivory-50/15"
                />
                <div className="p-3 sm:p-3.5 rounded-xl bg-olive-900/70 border border-olive-700 text-[11px] sm:text-xs text-ivory-100 leading-snug">
                  <span className="font-serif text-sm sm:text-base font-medium text-white block mb-0.5">
                    Cartela Exclusiva
                  </span>
                  Off-white, areia, terracota, verde oliva, preto ébano e carmim.
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 sm:pt-6">
                <div className="p-3 sm:p-3.5 rounded-xl bg-olive-900/70 border border-olive-700 text-[11px] sm:text-xs text-ivory-100 leading-snug">
                  <span className="font-serif text-sm sm:text-base font-medium text-white block mb-0.5">
                    Alças &amp; Detalhes
                  </span>
                  Escolha comprimentos de alça, correntes, tassel ou franjas.
                </div>
                <img
                  src="images/products/bolsa-franja-vermelha.jpg"
                  alt="Bolsa personalizada com franjas laterais"
                  className="rounded-2xl aspect-square sm:aspect-[4/5] object-cover w-full border border-ivory-50/15"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO REALIZAR UM PEDIDO — Cards horizontais compactos no mobile, colunas no desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-medium text-olive-700 uppercase tracking-wider">
            Simples, Humano &amp; Transparente
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
            Como realizar seu pedido
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-charcoal-700/85">
            Nosso processo une a praticidade de escolher todos os detalhes no site com o atendimento próximo pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle flex items-start gap-4 md:flex-col md:gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-lg sm:text-xl font-semibold flex-shrink-0">
              1
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
                Escolha seu Modelo
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700/85 leading-relaxed">
                Navegue pelas bolsas a <strong>Pronta Entrega</strong> (com preço exibido e envio imediato) ou pelos modelos <strong>Sob Encomenda</strong> para personalização.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle flex items-start gap-4 md:flex-col md:gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-lg sm:text-xl font-semibold flex-shrink-0">
              2
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
                Selecione Cores e Detalhes
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700/85 leading-relaxed">
                Na página da bolsa, escolha a cor desejada, tamanho, opções de alça ou forro, quantidade e adicione observações especiais à sua sacola.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle flex items-start gap-4 md:flex-col md:gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-lg sm:text-xl font-semibold flex-shrink-0">
              3
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
                Envie pelo WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700/85 leading-relaxed">
                Ao finalizar a sacola, o site monta automaticamente uma mensagem organizada com seu pedido para nosso WhatsApp, onde confirmamos disponibilidade, prazo e pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOBRE A MARCA (RESUMO INSTITUCIONAL) */}
      <section className="bg-ivory-100/80 border-y border-sand-200 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-sand-200 bg-white p-2 sm:p-2.5 shadow-subtle">
                <img
                  src="images/products/bolsa-ombro-areia.jpg"
                  alt="Detalhe do acabamento artesanal da Rosana&Co"
                  className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-olive-700 uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                Sobre a Rosana&amp;Co
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900 leading-tight">
                {siteConfig.institutional.aboutEssence.title}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed">
                {siteConfig.institutional.aboutEssence.lead}
              </p>
              <p className="text-xs sm:text-base text-charcoal-700/90 leading-relaxed">
                {siteConfig.institutional.aboutEssence.paragraphs[0]}
              </p>
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <Link
                  to="/sobre"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-xs sm:text-sm font-medium transition-colors"
                >
                  Conhecer nossa essência
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={generalContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-ivory-50 text-charcoal-900 border border-sand-300 text-xs sm:text-sm font-medium transition-colors"
                >
                  Falar com o ateliê
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CHAMADA PARA O INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-sand-200 p-5 sm:p-10 lg:p-12 shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-olive-700">
                <Instagram className="w-4 h-4" />
                <span>Acompanhe nosso dia a dia no ateliê</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
                Siga {siteConfig.contact.instagramHandle} no Instagram
              </h2>
              <p className="text-xs sm:text-base text-charcoal-700/85 max-w-xl leading-relaxed">
                Veja vídeos dos bastidores da produção artesanal, novas combinações de cores e bolsas recém-saídas do ateliê.
              </p>
            </div>

            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-xs sm:text-sm font-medium transition-colors self-start md:self-center"
            >
              <Instagram className="w-4 h-4" />
              Conheça nosso Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {instagramGallery.map((item, index) => (
              <a
                key={index}
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-ivory-100 border border-sand-200 block"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 via-charcoal-900/10 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                  <span className="text-[11px] sm:text-xs font-medium text-ivory-50 leading-tight">
                    {item.caption}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
