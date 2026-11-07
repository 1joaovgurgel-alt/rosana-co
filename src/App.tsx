import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BagProvider } from './context/BagContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BagDrawer } from './components/BagDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ReadyToShipPage } from './pages/ReadyToShipPage';
import { CustomizePage } from './pages/CustomizePage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BagProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogo" element={<CatalogPage />} />
              <Route path="/bolsa/:slug" element={<ProductDetailPage />} />
              <Route path="/pronta-entrega" element={<ReadyToShipPage />} />
              <Route path="/personalize" element={<CustomizePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/privacidade" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          <Footer />
          <BagDrawer />
          <FloatingWhatsApp />
        </div>
      </HashRouter>
    </BagProvider>
  );
};

export default App;
