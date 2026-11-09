import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, MessageCircle, ChevronRight } from 'lucide-react';
import { useBag } from '../context/BagContext';
import { siteConfig } from '../config/siteConfig';
import { buildGeneralContactUrl } from '../utils/productRules';

export const Header: React.FC = () => {
  const { openBag, totalItemsCount } = useBag();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Início', to: '/' },
    { label: 'Catálogo de Bolsas', to: '/catalogo' },
    { label: 'Pronta Entrega', to: '/pronta-entrega' },
    { label: 'Personalize sua Bolsa', to: '/personalize' },
    { label: 'Sobre a Rosana&Co', to: '/sobre' },
  ];

  const whatsappUrl = buildGeneralContactUrl();

  return (
    <header className="sticky top-0 z-40 bg-ivory-50/95 backdrop-blur-md border-b border-sand-200/80">
      {/* Top subtle banner — compact single line on mobile, full text on desktop */}
      <div className="bg-olive-800 text-ivory-100 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 text-center leading-tight">
        <span className="sm:hidden font-medium tracking-wide">
          Feitas à mão • Pronta entrega &amp; Sob encomenda
        </span>
        <span className="hidden sm:inline">
          Peças 100% feitas à mão • Modelos a pronta entrega e criações personalizadas sob encomenda
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[48px_1fr_48px] sm:grid-cols-3 items-center h-16 sm:h-20 lg:flex lg:justify-between">
          {/* Mobile menu button (Left on mobile) */}
          <div className="flex items-center justify-start lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] -ml-2 rounded-xl text-charcoal-800 hover:bg-ivory-100 active:bg-ivory-200/70 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logotipo Rosana&Co (Centered on mobile, Left on desktop) */}
          <div className="flex items-center justify-center lg:justify-start min-w-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left py-1"
            >
              <span className="font-serif text-[26px] sm:text-3xl lg:text-4xl font-medium tracking-tight text-charcoal-900 group-hover:text-olive-700 transition-colors leading-none whitespace-nowrap">
                Rosana<span className="text-olive-600 italic font-normal">&amp;</span>Co
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-charcoal-700/75 uppercase mt-1 whitespace-nowrap">
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

          {/* Actions: Instagram + Sacola (Right on mobile and desktop) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Rosana&Co"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-charcoal-700 hover:text-olive-700 hover:bg-ivory-100 transition-colors min-h-[40px]"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden md:inline">{siteConfig.contact.instagramHandle}</span>
            </a>

            <button
              type="button"
              onClick={openBag}
              aria-label="Abrir sacola de pedidos"
              className="relative inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-sand-200 hover:border-olive-600/40 active:bg-ivory-100 text-charcoal-900 shadow-xs transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-olive-700 flex-shrink-0" />
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

      {/* Mobile Drawer Navigation + Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[92px] bg-charcoal-900/30 backdrop-blur-xs lg:hidden z-30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-40 lg:hidden bg-white border-b border-sand-200 px-4 pt-3 pb-6 space-y-4 shadow-elevated max-h-[calc(100vh-92px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1" aria-label="Menu móvel">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-olive-50 text-olive-800 border border-olive-200/60'
                        : 'text-charcoal-800 hover:bg-ivory-100 active:bg-ivory-200/60'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-charcoal-700/40" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-sand-200 space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2.5 rounded-xl bg-olive-700 text-ivory-50 text-xs font-medium shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2.5 rounded-xl bg-ivory-100 text-charcoal-900 border border-sand-200 text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-olive-700" />
                  {siteConfig.contact.instagramHandle}
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBag();
                }}
                className="w-full flex items-center justify-center gap-2 min-h-[44px] py-2.5 rounded-xl bg-ivory-50 border border-sand-200 text-xs font-medium text-charcoal-800"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-olive-700" />
                Abrir Sacola de Pedidos ({totalItemsCount}{' '}
                {totalItemsCount === 1 ? 'item' : 'itens'})
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
