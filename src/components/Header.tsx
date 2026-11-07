import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react';
import { useBag } from '../context/BagContext';
import { siteConfig } from '../config/siteConfig';

export const Header: React.FC = () => {
  const { openBag, totalItemsCount } = useBag();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', to: '/' },
    { label: 'Catálogo de Bolsas', to: '/catalogo' },
    { label: 'Pronta Entrega', to: '/pronta-entrega' },
    { label: 'Personalize sua Bolsa', to: '/personalize' },
    { label: 'Sobre a Rosana&Co', to: '/sobre' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/95 backdrop-blur-md border-b border-sand-200/80">
      {/* Top subtle banner */}
      <div className="bg-olive-800 text-ivory-100 text-xs py-2 px-4 text-center">
        <span>
          Peças 100% feitas à mão • Modelos a pronta entrega e criações personalizadas sob encomenda
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              className="p-2 -ml-2 rounded-xl text-charcoal-800 hover:bg-ivory-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logotipo Rosana&Co */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex flex-col items-center lg:items-start"
            >
              <span className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal-900 group-hover:text-olive-700 transition-colors">
                Rosana<span className="text-olive-600 italic font-normal">&amp;</span>Co
              </span>
              <span className="text-[10px] tracking-[0.22em] text-charcoal-700/75 uppercase -mt-1">
                Crochê Artesanal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-olive-700 border-olive-700'
                      : 'text-charcoal-700 border-transparent hover:text-charcoal-900 hover:border-sand-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Instagram + Sacola */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Rosana&Co"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-charcoal-700 hover:text-olive-700 hover:bg-ivory-100 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden md:inline">{siteConfig.contact.instagramHandle}</span>
            </a>

            <button
              type="button"
              onClick={openBag}
              aria-label="Abrir sacola de pedidos"
              className="relative inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-sand-200 hover:border-olive-600/40 text-charcoal-900 shadow-xs transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-olive-700" />
              <span className="text-xs font-medium hidden sm:inline">Sacola</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-[11px] font-semibold bg-olive-700 text-ivory-50">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sand-200 px-4 pt-3 pb-6 space-y-3 shadow-elevated">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-olive-50 text-olive-800'
                      : 'text-charcoal-800 hover:bg-ivory-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-sand-200 flex items-center justify-between px-3">
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-olive-700"
            >
              <Instagram className="w-4 h-4" />
              {siteConfig.contact.instagramHandle}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openBag();
              }}
              className="text-sm font-medium text-charcoal-800 underline underline-offset-4"
            >
              Ver sacola ({totalItemsCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
