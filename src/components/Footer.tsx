import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Clock, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildGeneralContactUrl } from '../utils/productRules';

export const Footer: React.FC = () => {
  const whatsappUrl = buildGeneralContactUrl();

  return (
    <footer className="bg-white border-t border-sand-200 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Coluna 1: Marca */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-medium text-charcoal-900">
                Rosana<span className="text-olive-600 italic font-normal">&amp;</span>Co
              </span>
            </Link>
            <p className="font-serif italic text-lg text-olive-700">
              “{siteConfig.brand.tagline}”
            </p>
            <p className="text-sm text-charcoal-700/85 leading-relaxed max-w-sm">
              {siteConfig.brand.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ivory-100 hover:bg-olive-50 text-charcoal-800 hover:text-olive-800 border border-sand-200 text-xs font-medium transition-colors"
              >
                <Instagram className="w-4 h-4 text-olive-700" />
                {siteConfig.contact.instagramHandle}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Atendimento
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal-700">
              <li>
                <Link to="/" className="hover:text-olive-700 transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-olive-700 transition-colors">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/pronta-entrega" className="hover:text-olive-700 transition-colors">
                  Vitrine Pronta Entrega
                </Link>
              </li>
              <li>
                <Link to="/personalize" className="hover:text-olive-700 transition-colors">
                  Personalize sua Bolsa
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-olive-700 transition-colors">
                  Sobre a Rosana&amp;Co
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-olive-700 transition-colors">
                  Política de Privacidade e Pedidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Categorias */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              Modelos
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal-700">
              <li>
                <Link
                  to="/catalogo?categoria=Bolsas+de+ombro"
                  className="hover:text-olive-700 transition-colors"
                >
                  Bolsas de ombro
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=Bolsas+de+m%C3%A3o"
                  className="hover:text-olive-700 transition-colors"
                >
                  Bolsas de mão
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=Bolsas+transversais"
                  className="hover:text-olive-700 transition-colors"
                >
                  Bolsas transversais
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=Bolsas+pequenas"
                  className="hover:text-olive-700 transition-colors"
                >
                  Bolsas pequenas
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=Bolsas+grandes"
                  className="hover:text-olive-700 transition-colors"
                >
                  Bolsas grandes
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo?categoria=Modelos+especiais"
                  className="hover:text-olive-700 transition-colors"
                >
                  Modelos especiais
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato e Atendimento */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              Contato &amp; Atendimento
            </h3>
            <ul className="space-y-3 text-sm text-charcoal-700">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-olive-700 flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-charcoal-900">WhatsApp</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-olive-700 transition-colors"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-olive-700 flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-charcoal-900">Instagram</span>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-olive-700 transition-colors"
                  >
                    {siteConfig.contact.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-olive-700 flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-charcoal-900">E-mail</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-olive-700 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-olive-700 flex-shrink-0 mt-1" />
                <span>{siteConfig.contact.serviceHours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-olive-700 flex-shrink-0 mt-1" />
                <span>{siteConfig.contact.locationNote}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-700/75">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="w-3.5 h-3.5 text-olive-600" /> para valorizar o crochê artesanal brasileiro.
          </p>
        </div>
      </div>
    </footer>
  );
};
