/**
 * ARQUIVO CENTRALIZADO DE CONFIGURAÇÃO DA LOJA — ROSANA&CO
 * ---------------------------------------------------------
 * Para alterar o número de WhatsApp, o @ do Instagram, textos institucionais
 * ou dados de atendimento, edite apenas este arquivo.
 */

export const siteConfig = {
  brand: {
    name: 'Rosana&Co',
    tagline: 'Feitas à mão, pensadas para você.',
    segment: 'Bolsas femininas artesanais de crochê',
    shortDescription:
      'Peças autorais tecidas ponto a ponto à mão, unindo elegância atemporal, fios selecionados e o cuidado do trabalho manual.',
  },

  contact: {
    /**
     * Número oficial do WhatsApp no formato internacional (apenas dígitos: DDI + DDD + Número)
     * Exemplo: '5511999999999' -> [PREENCHER COM O NÚMERO OFICIAL DA LOJA]
     */
    whatsappNumber: '5511999999999',
    whatsappDisplay: '(11) 99999-9999 [Configurar número oficial]',
    instagramHandle: '@rosanaandco',
    instagramUrl: 'https://instagram.com/rosanaandco',
    email: 'contato@rosanaandco.com.br',
    locationNote: 'Ateliê de produção artesanal • Envio para todo o Brasil (consultar frete pelo WhatsApp)',
    serviceHours: 'Segunda a Sexta, das 9h às 18h • Sábado, das 9h às 13h',
  },

  institutional: {
    heroSubtitle:
      'Cada bolsa da Rosana&Co nasce do tempo dedicado a cada ponto. Criamos peças femininas, versáteis e exclusivas que celebram a beleza do feito à mão.',
    customOrderNotice:
      'Cada peça é produzida artesanalmente, com carinho e atenção aos detalhes. Você pode personalizar seu modelo escolhendo cores e detalhes de acordo com seu gosto. Entre em contato para consultar valores e prazos de produção.',
    customSectionTitle: 'Uma bolsa, infinitas possibilidades.',
    customSectionBody: [
      'Na Rosana&Co, você escolhe os detalhes e nós transformamos sua ideia em uma peça feita à mão. Nossos modelos podem ser personalizados de acordo com seu estilo, com opções de cores e detalhes especiais.',
      'Entre em contato e crie uma bolsa com a sua personalidade.',
    ],
    aboutEssence: {
      title: 'A essência do feito à mão',
      lead: 'Na Rosana&Co, acreditamos que um acessório verdadeiramente especial carrega a delicadeza do toque humano e a paciência do trabalho artesanal.',
      paragraphs: [
        'Nossas bolsas femininas de crochê são produzidas individualmente, respeitando o tempo de cada trama e a estrutura de cada modelo. Não trabalhamos com produção industrial em série: cada peça recebe atenção minuciosa desde a escolha dos fios até o acabamento das alças e fechos.',
        'Oferecemos tanto peças a pronta entrega — prontas para acompanhar a sua rotina imediatamente — quanto a possibilidade de encomendas personalizadas, onde você escolhe cores, tamanhos de alça e detalhes que harmonizam com o seu estilo.',
      ],
      pillars: [
        {
          title: 'Produção Artesanal',
          description:
            'Tramas firmes e pontos cuidadosamente executados à mão, garantindo estrutura, beleza e durabilidade em cada bolsa.',
        },
        {
          title: 'Atenção aos Detalhes',
          description:
            'Acabamentos delicados, ferragens selecionadas e harmonia de tons naturais pensados para valorizar diferentes ocasiões.',
        },
        {
          title: 'Exclusividade em Cada Peça',
          description:
            'Por serem feitas manualmente, nenhuma bolsa é idêntica à outra. Você leva consigo uma criação única.',
        },
        {
          title: 'Encomendas Personalizadas',
          description:
            'Liberdade para escolher a cartela de cores e os acabamentos que mais combinam com a sua personalidade.',
        },
      ],
    },
  },
} as const;
