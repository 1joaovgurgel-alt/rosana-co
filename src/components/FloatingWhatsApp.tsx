import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildGeneralContactUrl } from '../utils/productRules';

export const FloatingWhatsApp: React.FC = () => {
  const url = buildGeneralContactUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Rosana&Co pelo WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-olive-700 hover:bg-olive-800 text-ivory-50 shadow-elevated border border-ivory-50/20 transition-all duration-300 hover:-translate-y-0.5 group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-xs font-medium pr-0.5 hidden sm:inline">
        Atendimento WhatsApp
      </span>
    </a>
  );
};
