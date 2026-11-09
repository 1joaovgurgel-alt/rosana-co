import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Sparkles, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildGeneralContactUrl, buildCustomBagInquiryUrl } from '../utils/productRules';

export const AboutPage: React.FC = () => {
  const { aboutEssence } = siteConfig.institutional;
  const whatsappUrl = buildGeneralContactUrl();
  const customUrl = buildCustomBagInquiryUrl();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">
      {/* Cabeçalho Institucional */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-50 border border-olive-200 text-olive-800 text-xs font-medium">
            <HeartHandshake className="w-3.5 h-3.5" />
            Essência &amp; Trabalho Manual
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal-900 leading-tight">
            {aboutEssence.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-olive-700 leading-relaxed">
            “{siteConfig.brand.tagline}”
          </p>

          <p className="text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed">
            {aboutEssence.lead}
          </p>

          <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-charcoal-700/90 leading-relaxed">
            {aboutEssence.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-1 flex flex-col sm:flex-row gap-3">
            <Link
              to="/catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-sm font-medium transition-colors"
            >
              Conhecer nossas bolsas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-white hover:bg-ivory-100 text-charcoal-900 border border-sand-300 text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-olive-700" />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-4">
            <img
              src="images/products/bolsa-duo-offwhite.jpg"
              alt="Bolsa Pérola Duo produzida artesanalmente pela Rosana&Co"
              className="rounded-2xl sm:rounded-3xl aspect-square sm:aspect-[4/5] object-cover w-full border border-sand-200 shadow-subtle"
            />
          </div>
          <div className="space-y-4 sm:pt-8">
            <img
              src="images/products/bolsa-ombro-areia.jpg"
              alt="Detalhe dos pontos artesanais da Bolsa Hobo Areia"
              className="rounded-2xl sm:rounded-3xl aspect-square sm:aspect-[4/5] object-cover w-full border border-sand-200 shadow-subtle"
            />
          </div>
        </div>
      </section>

      {/* Pilares da Marca */}
      <section className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-12 shadow-subtle space-y-6 sm:space-y-8">
        <div className="max-w-2xl">
          <span className="text-[11px] sm:text-xs font-medium text-olive-700 uppercase tracking-wider">
            Nossos Valores
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
            Cuidado em cada ponto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {aboutEssence.pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-ivory-50 border border-sand-200 space-y-2"
            >
              <div className="inline-flex items-center gap-2 text-olive-700 font-serif text-xl sm:text-2xl font-medium">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <h3>{pillar.title}</h3>
              </div>
              <p className="text-sm text-charcoal-700/90 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato e Instagram */}
      <section className="rounded-3xl bg-olive-800 text-ivory-50 p-6 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2.5 sm:space-y-3 max-w-xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-medium text-white">
            Deseja encomendar uma peça ou tirar dúvidas?
          </h2>
          <p className="text-sm sm:text-base text-ivory-100/90 leading-relaxed">
            Nosso atendimento é realizado diretamente pelo WhatsApp e pelo Instagram, com toda a atenção para ajudar você a escolher ou personalizar sua bolsa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <a
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-ivory-50 hover:bg-white text-olive-900 font-medium text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-olive-700" />
            Falar no WhatsApp
          </a>
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-olive-700 hover:bg-olive-600 text-ivory-50 border border-olive-500/40 font-medium text-sm transition-colors"
          >
            <Instagram className="w-4 h-4" />
            {siteConfig.contact.instagramHandle}
          </a>
        </div>
      </section>
    </div>
  );
};
