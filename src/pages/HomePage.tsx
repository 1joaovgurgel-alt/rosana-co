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

  const customInquiryUrl = buildCustomBagInquiryUrl();
  const generalContactUrl = buildGeneralContactUrl();

  const instagramGallery = [
    {
      src: 'images/products/bolsa-duo-offwhite.jpg',
      alt: 'Bolsa Pérola Duo em crochê off-white com corrente',
      caption: 'Bolsa Pérola Duo em Off-White',
    },
    {
      src: 'images/products/bolsa-ombro-areia.jpg',
      alt: 'Bolsa Hobo Areia Natural de ombro',
      caption: 'Conforto e leveza em Bege Aveia',
    },
    {
      src: 'images/products/bolsa-aba-malva.jpg',
      alt: 'Bolsa Satchel Rosê Malva com aba canelada',
      caption: 'Aba texturizada em Rosê Malva',
    },
    {
      src: 'images/products/mochila-preta.jpg',
      alt: 'Mochila & Bolsa Conversível Ébano',
      caption: 'Mochila Conversível 2 em 1',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* 1. HERO BANNER PRINCIPAL */}
      <section className="relative bg-ivory-100/70 border-b border-sand-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Texto */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sand-200 text-xs font-medium text-olive-700 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ateliê de Bolsas Femininas em Crochê</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal-900 leading-[1.1] tracking-tight">
                {siteConfig.brand.tagline}
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700/90 leading-relaxed max-w-xl">
                {siteConfig.institutional.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/catalogo"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 font-medium text-sm shadow-subtle transition-all"
                >
                  Conheça nossos modelos
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/pronta-entrega"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-ivory-100 text-charcoal-900 border border-sand-300 font-medium text-sm transition-colors"
                >
                  Ver bolsas a pronta entrega
                </Link>
              </div>

              {/* Diferenciais discretos */}
              <div className="pt-6 border-t border-sand-200/90 grid grid-cols-3 gap-4 text-xs text-charcoal-700">
                <div>
                  <span className="font-serif text-lg font-semibold text-charcoal-900 block">
                    100% Manual
                  </span>
                  <span>Ponto a ponto com acabamento de boutique</span>
                </div>
                <div>
                  <span className="font-serif text-lg font-semibold text-charcoal-900 block">
                    Sob Medida
                  </span>
                  <span>Personalize cores, alças e detalhes</span>
                </div>
                <div>
                  <span className="font-serif text-lg font-semibold text-charcoal-900 block">
                    Pronta Entrega
                  </span>
                  <span>Peças selecionadas para envio imediato</span>
                </div>
              </div>
            </div>

            {/* Coluna Fotografia Principal */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-elevated border border-sand-200">
                <div className="aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-ivory-100">
                  <img
                    src="images/products/hero-banner.jpg"
                    alt="Bolsa de crochê artesanal Rosana&Co em verde oliva e off-white"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-charcoal-700">
                  <span className="font-serif italic text-base text-charcoal-900">
                    Coleção Autoral Rosana&amp;Co — Fios selecionados e trama estruturada
                  </span>
                  <Link
                    to="/catalogo"
                    className="font-medium text-olive-700 hover:underline underline-offset-4"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-medium text-olive-700 tracking-wider uppercase">
              Curadoria da Marca
            </span>
            <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Modelos em Destaque
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-700/85 max-w-2xl">
              Conheça nossas criações mais procuradas, unindo tramas artesanais delicadas, conforto no uso e versatilidade.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-800 underline-offset-4 hover:underline"
          >
            Ver todo o catálogo ({featuredProducts.length}+ modelos)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. VITRINE DE BOLSAS A PRONTA ENTREGA */}
      <section className="bg-white border-y border-sand-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-medium mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Disponibilidade Imediata
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
                Bolsas a Pronta Entrega
              </h2>
              <p className="mt-2 text-sm sm:text-base text-charcoal-700/85 max-w-2xl">
                Peças já finalizadas em nosso ateliê, com valor definido e prontas para envio imediato após confirmação pelo WhatsApp.
              </p>
            </div>
            <Link
              to="/pronta-entrega"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ivory-100 hover:bg-olive-50 text-olive-800 border border-sand-300 text-sm font-medium transition-colors"
            >
              Acessar vitrine Pronta Entrega
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {readyProducts.length === 0 ? (
            <div className="p-8 rounded-2xl bg-ivory-50 border border-sand-200 text-center">
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {readyProducts.map((product) => (
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-100 text-charcoal-800 border border-sand-300 text-xs font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 text-olive-700" />
              Feito especialmente para você
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Modelos Personalizados &amp; Sob Encomenda
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-700/85 max-w-2xl">
              {siteConfig.institutional.customOrderNotice}
            </p>
          </div>
          <Link
            to="/catalogo?disponibilidade=sob-encomenda"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-800 underline-offset-4 hover:underline"
          >
            Ver todos sob encomenda
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {customOrderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. BANNER ESPECIAL: PERSONALIZE SUA BOLSA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-olive-800 text-ivory-50 overflow-hidden shadow-elevated border border-olive-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-olive-700 text-ivory-100 text-xs font-medium border border-olive-600">
                <Palette className="w-3.5 h-3.5" />
                Ateliê de Personalização Rosana&amp;Co
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                {siteConfig.institutional.customSectionTitle}
              </h2>

              <div className="space-y-4 text-ivory-100/90 text-sm sm:text-base leading-relaxed">
                {siteConfig.institutional.customSectionBody.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href={customInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-ivory-50 hover:bg-white text-olive-900 font-medium text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-olive-700" />
                  Quero personalizar minha bolsa
                </a>
                <Link
                  to="/personalize"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-olive-700/70 hover:bg-olive-700 text-ivory-50 border border-olive-500/40 font-medium text-sm transition-colors"
                >
                  Ver opções de cores e detalhes
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 h-full bg-olive-900/40 p-6 sm:p-8 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="images/products/bolsa-tassel-terracota.jpg"
                  alt="Personalização de bolsas em tons terrosos e areia"
                  className="rounded-2xl aspect-[4/5] object-cover w-full border border-ivory-50/15"
                />
                <div className="p-3.5 rounded-xl bg-olive-900/70 border border-olive-700 text-xs text-ivory-100">
                  <span className="font-serif text-base font-medium text-white block">
                    Cartela Exclusiva
                  </span>
                  Off-white, areia, terracota, verde oliva, preto ébano e carmim.
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="p-3.5 rounded-xl bg-olive-900/70 border border-olive-700 text-xs text-ivory-100">
                  <span className="font-serif text-base font-medium text-white block">
                    Alças &amp; Detalhes
                  </span>
                  Escolha comprimentos de alça, correntes, tassel ou franjas.
                </div>
                <img
                  src="images/products/bolsa-franja-vermelha.jpg"
                  alt="Bolsa personalizada com franjas laterais"
                  className="rounded-2xl aspect-[4/5] object-cover w-full border border-ivory-50/15"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO REALIZAR UM PEDIDO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-medium text-olive-700 uppercase tracking-wider">
            Simples, Humano &amp; Transparente
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
            Como realizar seu pedido
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-700/85">
            Nosso processo une a praticidade de escolher todos os detalhes no site com o atendimento próximo pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-xl font-semibold">
              1
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Escolha seu Modelo
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Navegue pelas bolsas a <strong>Pronta Entrega</strong> (com preço exibido e envio imediato) ou pelos modelos <strong>Sob Encomenda</strong> para personalização.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-xl font-semibold">
              2
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Selecione Cores e Detalhes
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Na página da bolsa, escolha a cor desejada, tamanho, opções de alça ou forro, quantidade e adicione observações especiais à sua sacola.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-sand-200 shadow-subtle space-y-3">
            <div className="w-11 h-11 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 flex items-center justify-center font-serif text-xl font-semibold">
              3
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Envie pelo WhatsApp
            </h3>
            <p className="text-sm text-charcoal-700/85 leading-relaxed">
              Ao finalizar a sacola, o site monta automaticamente uma mensagem organizada com seu pedido para nosso WhatsApp, onde confirmamos disponibilidade, prazo e pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SOBRE A MARCA (RESUMO INSTITUCIONAL) */}
      <section className="bg-ivory-100/80 border-y border-sand-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-sand-200 bg-white p-2.5 shadow-subtle">
                <img
                  src="images/products/bolsa-ombro-areia.jpg"
                  alt="Detalhe do acabamento artesanal da Rosana&Co"
                  className="w-full aspect-[4/4] object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-olive-700 uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                Sobre a Rosana&amp;Co
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
                {siteConfig.institutional.aboutEssence.title}
              </h2>
              <p className="text-base text-charcoal-800 font-medium leading-relaxed">
                {siteConfig.institutional.aboutEssence.lead}
              </p>
              <p className="text-sm sm:text-base text-charcoal-700/90 leading-relaxed">
                {siteConfig.institutional.aboutEssence.paragraphs[0]}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-sm font-medium transition-colors"
                >
                  Conhecer nossa essência
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={generalContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-ivory-50 text-charcoal-900 border border-sand-300 text-sm font-medium transition-colors"
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
        <div className="bg-white rounded-3xl border border-sand-200 p-8 sm:p-10 lg:p-12 shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-olive-700">
                <Instagram className="w-4 h-4" />
                <span>Acompanhe nosso dia a dia no ateliê</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
                Siga {siteConfig.contact.instagramHandle} no Instagram
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700/85 max-w-xl">
                Veja vídeos dos bastidores da produção artesanal, novas combinações de cores e bolsas recém-saídas do ateliê.
              </p>
            </div>

            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-sm font-medium transition-colors self-start md:self-center"
            >
              <Instagram className="w-4 h-4" />
              Conheça nosso Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-medium text-ivory-50">
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
