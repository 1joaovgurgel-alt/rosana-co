import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">
      <div className="bg-white rounded-3xl border border-sand-200 p-8 sm:p-12 shadow-subtle space-y-6">
        <div>
          <span className="text-xs font-medium text-olive-700 uppercase tracking-wider">
            Transparência &amp; Segurança
          </span>
          <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
            Política de Privacidade e Funcionamento dos Pedidos
          </h1>
        </div>

        <div className="space-y-5 text-sm sm:text-base text-charcoal-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-charcoal-900">
              1. Como funcionam os pedidos no site
            </h2>
            <p>
              O site da <strong>{siteConfig.brand.name}</strong> funciona como um catálogo interativo e organizador de pedidos. Não coletamos dados de cartão de crédito nem processamos pagamentos automáticos diretamente nas páginas do site.
            </p>
            <p>
              Ao selecionar seus modelos na Sacola de Pedidos e clicar em <em>“Finalizar pedido pelo WhatsApp”</em>, você será redirecionada para uma conversa direta com o atendimento oficial da loja, onde confirmaremos disponibilidade, frete, prazo de confecção e formas de pagamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-charcoal-900">
              2. Diferença entre Pronta Entrega e Sob Encomenda
            </h2>
            <p>
              <strong>Produtos a Pronta Entrega:</strong> apresentam o valor em Reais (R$) diretamente na página e possuem estoque limitado para envio imediato após a confirmação pelo WhatsApp.
            </p>
            <p>
              <strong>Produtos Sob Encomenda:</strong> são confeccionados artesanalmente sob medida conforme as cores e detalhes escolhidos por você. Os valores e prazos de produção são informados de forma transparente durante o atendimento pelo WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-charcoal-900">
              3. Privacidade e Armazenamento Local
            </h2>
            <p>
              Utilizamos apenas o armazenamento local do seu navegador (<code>localStorage</code>) para manter os itens selecionados na sua Sacola de Pedidos enquanto você navega pelo site. Nenhuma informação pessoal é compartilhada com terceiros.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-2xl font-medium text-charcoal-900">
              4. Canais Oficiais de Contato
            </h2>
            <p>
              Para qualquer dúvida ou solicitação, entre em contato pelos canais configurados da loja:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>WhatsApp: {siteConfig.contact.whatsappDisplay}</li>
              <li>Instagram: {siteConfig.contact.instagramHandle}</li>
              <li>E-mail: {siteConfig.contact.email}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
