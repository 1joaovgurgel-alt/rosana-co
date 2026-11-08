import { Product, ProductCategory } from '../types/product';

/**
 * LISTA DE CATEGORIAS DO CATÁLOGO
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Bolsas de ombro',
  'Bolsas de mão',
  'Bolsas transversais',
  'Bolsas pequenas',
  'Bolsas grandes',
  'Modelos especiais',
];

/**
 * ARQUIVO CENTRALIZADO DE PRODUTOS — ROSANA&CO
 * ---------------------------------------------
 * Catálogo oficial atualizado com as fotografias reais das bolsas da Rosana&Co.
 *
 * Como gerenciar o catálogo:
 * 1. Para adicionar uma nova bolsa, copie um dos blocos abaixo e altere os dados.
 * 2. Para mudar entre Pronta Entrega e Sob Encomenda:
 *    - 'pronta-entrega': O site exibirá automaticamente o preço (price) e o estoque (stockQuantity).
 *    - 'sob-encomenda': O site ocultará automaticamente qualquer preço e exibirá "Feito sob encomenda" + botão "Solicitar orçamento".
 * 3. Para ocultar um produto sem apagá-lo, mude `active: true` para `active: false`.
 */
export const productsData: Product[] = [
  {
    id: 'prod-duo-offwhite',
    slug: 'bolsa-perola-duo',
    name: 'Bolsa Pérola Duo',
    subtitle: 'Alça de ombro em crochê + corrente prateada e tassel lateral',
    description:
      'Versátil, luminosa e sofisticada. A Bolsa Pérola Duo em tom Off-White combina a delicadeza da alça de ombro trabalhada artesanalmente em crochê com uma corrente prateada alongada, permitindo diferentes formas de uso. Acompanha tassel lateral e plaquinha metálica discreta.',
    craftsmanshipDetails: [
      'Trama estruturada feita 100% à mão com pontos uniformes',
      'Dupla opção de uso: alça de ombro em crochê + alça de corrente prateada',
      'Acompanha pingente tassel artesanal em tom off-white com argola mosquetão',
      'Aplicação de plaquinha metálica prateada frontal',
    ],
    category: 'Bolsas de ombro',
    additionalCategories: ['Bolsas transversais', 'Bolsas pequenas', 'Modelos especiais'],
    mainImage: 'images/products/bolsa-duo-offwhite.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-duo-offwhite.jpg',
        alt: 'Bolsa Pérola Duo em crochê off-white com alça de corrente e tassel',
        caption: 'Bolsa Pérola Duo em Off-White Natural com corrente e tassel',
      },
      {
        url: 'images/products/bolsa-tassel-preta.jpg',
        alt: 'Variação da linha com tassel no tom Preto Ébano',
        caption: 'Também disponível em outras cores da cartela',
      },
    ],
    models: [
      {
        id: 'perola-padrao',
        name: 'Modelo Clássico Duo (Ombro + Corrente)',
        dimensions: '24 cm (largura) × 16 cm (altura) × 5 cm (profundidade)',
        description: 'Ideal para celular, documentos, chaves, batom e carteira compacta.',
      },
      {
        id: 'perola-media',
        name: 'Tamanho Médio',
        dimensions: '27 cm (largura) × 19 cm (altura) × 7 cm (profundidade)',
        description: 'Versão com espaço extra para óculos de sol e necessaire pequena.',
      },
    ],
    colors: [
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: true },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B', availableForImmediateDelivery: true },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841', availableForImmediateDelivery: true },
      { id: 'areia', name: 'Bege Aveia', hex: '#C6A988', availableForImmediateDelivery: false },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'config-alca',
        label: 'Configuração de Alças',
        required: true,
        options: [
          'Dupla: Alça de ombro em crochê + Corrente prateada (Como na foto)',
          'Apenas alça longa em crochê',
          'Com corrente dourada',
        ],
      },
      {
        id: 'detalhe-tassel',
        label: 'Pingente Tassel Lateral',
        required: true,
        options: ['Com tassel artesanal removível', 'Sem tassel (minimalista)'],
      },
    ],
    availability: 'pronta-entrega',
    price: 189.0,
    stockQuantity: 2,
    featured: true,
    active: true,
  },

  {
    id: 'prod-ombro-areia',
    slug: 'bolsa-natural-areia',
    name: 'Bolsa Hobo Areia Natural',
    subtitle: 'Bolsa de ombro espaçosa com alça contínua em crochê',
    description:
      'Com design orgânico, minimalista e acolhedor, a Bolsa Hobo Areia Natural é perfeita para acompanhar a rotina com leveza e elegância. Sua alça integrada em crochê proporciona máximo conforto no ombro, enquanto sua trama encorpada acomoda todos os seus itens essenciais.',
    craftsmanshipDetails: [
      'Modelagem estilo Hobo/Tote com alça de ombro anatômica integrada',
      'Trama fechada de ponto baixo com toque macio e alta durabilidade',
      'Visual clean e atemporal em tom neutro fácil de combinar',
      'Confeccionada manualmente ponto a ponto',
    ],
    category: 'Bolsas de ombro',
    additionalCategories: ['Bolsas grandes'],
    mainImage: 'images/products/bolsa-ombro-areia.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-ombro-areia.jpg',
        alt: 'Bolsa de ombro em crochê tom bege areia natural',
        caption: 'Bolsa Hobo em tom Bege Aveia / Areia Natural',
      },
    ],
    models: [
      {
        id: 'areia-media-grande',
        name: 'Tamanho Padrão de Ombro',
        dimensions: '30 cm (largura) × 24 cm (altura) × 9 cm (profundidade)',
        description: 'Espaço ideal para o dia a dia: carteira, celular, óculos, agenda e necessaire.',
      },
      {
        id: 'areia-maxi',
        name: 'Tamanho Grande (Maxi)',
        dimensions: '36 cm (largura) × 28 cm (altura) × 11 cm (profundidade)',
        description: 'Versão ampla para quem precisa levar mais itens na rotina.',
      },
    ],
    colors: [
      { id: 'areia', name: 'Bege Aveia / Areia', hex: '#C6A988', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: false },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841', availableForImmediateDelivery: false },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'altura-alca',
        label: 'Comprimento da Alça de Ombro',
        required: true,
        options: ['Alça padrão confortável (Como na foto)', 'Alça maior (+6 cm)', 'Alça menor'],
      },
      {
        id: 'fechamento-interno',
        label: 'Fechamento e Forro',
        required: true,
        options: ['Botão magnético embutido', 'Com forro interno de algodão', 'Trama original sem forro'],
      },
    ],
    availability: 'pronta-entrega',
    price: 219.0,
    stockQuantity: 2,
    featured: true,
    active: true,
  },

  {
    id: 'prod-tassel-terracota',
    slug: 'bolsa-transversal-terracota',
    name: 'Bolsa Transversal Terracota',
    subtitle: 'Tiracolo artesanal em tom terroso com tassel e alça trançada',
    description:
      'A Bolsa Transversal Terracota traz o aconchego dos tons terrosos naturais em uma peça prática e cheia de charme. Possui alça longa trabalhada em crochê, argolas laterais prateadas, plaquinha metálica e um delicado pingente tassel feito à mão na mesma tonalidade.',
    craftsmanshipDetails: [
      'Alça longa em crochê resistente para uso transversal ou lateral no ombro',
      'Pingente tassel volumoso feito manualmente no mesmo fio da bolsa',
      'Argolas articuladas e plaquinha metálica centralizada',
      'Estrutura retangular elegante que mantém o formato',
    ],
    category: 'Bolsas transversais',
    additionalCategories: ['Bolsas pequenas', 'Bolsas de ombro'],
    mainImage: 'images/products/bolsa-tassel-terracota.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-tassel-terracota.jpg',
        alt: 'Bolsa transversal de crochê na cor terracota amêndoa com tassel',
        caption: 'Acabamento em Terracota Amêndoa com tassel lateral',
      },
      {
        url: 'images/products/bolsa-tassel-preta.jpg',
        alt: 'Mesmo modelo na versão Preto Ébano',
        caption: 'Versão do modelo na cor Preto Ébano',
      },
    ],
    models: [
      {
        id: 'terracota-padrao',
        name: 'Transversal Clássica',
        dimensions: '24 cm (largura) × 17 cm (altura) × 5 cm (profundidade)',
      },
      {
        id: 'terracota-media',
        name: 'Transversal Média',
        dimensions: '27 cm (largura) × 20 cm (altura) × 7 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841', availableForImmediateDelivery: true },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: true },
      { id: 'areia', name: 'Bege Aveia', hex: '#C6A988', availableForImmediateDelivery: false },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'tamanho-alca-transversal',
        label: 'Tamanho da Alça',
        required: true,
        options: ['Padrão transversal (110 cm)', 'Alça maior (120 cm)', 'Alça menor de ombro (95 cm)'],
      },
      {
        id: 'opcao-tassel',
        label: 'Detalhe de Tassel',
        required: true,
        options: ['Com tassel lateral (Como na foto)', 'Sem tassel'],
      },
    ],
    availability: 'pronta-entrega',
    price: 179.0,
    stockQuantity: 3,
    featured: true,
    active: true,
  },

  {
    id: 'prod-tassel-preta',
    slug: 'bolsa-transversal-noite',
    name: 'Bolsa Clássica Ébano',
    subtitle: 'Transversal preta atemporal com tassel removível e alça macia',
    description:
      'Indispensável no guarda-roupa feminino, a Bolsa Clássica Ébano combina com qualquer produção — do passeio casual ao jantar especial. Confeccionada à mão em fio preto intenso, conta com alça longa trançada, ferragens prateadas e pingente tassel removível com mosquetão.',
    craftsmanshipDetails: [
      'Cor preta clássica de fácil manutenção e alta versatilidade',
      'Pingente tassel com fecho mosquetão prateado (pode ser usado ou removido)',
      'Alça em crochê espesso que não machuca o ombro',
      'Feita à mão com acabamento de alfaiataria artesanal',
    ],
    category: 'Bolsas transversais',
    additionalCategories: ['Bolsas pequenas', 'Bolsas de ombro'],
    mainImage: 'images/products/bolsa-tassel-preta.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-tassel-preta.jpg',
        alt: 'Bolsa de crochê preta transversal com tassel lateral',
        caption: 'Bolsa Clássica Ébano com tassel e ferragens prateadas',
      },
      {
        url: 'images/products/bolsa-tassel-terracota.jpg',
        alt: 'Variação em tom Terracota Amêndoa',
        caption: 'Disponível também em Terracota Amêndoa',
      },
    ],
    models: [
      {
        id: 'ebano-padrao',
        name: 'Transversal Clássica',
        dimensions: '24 cm (largura) × 17 cm (altura) × 5 cm (profundidade)',
      },
      {
        id: 'ebano-corrente',
        name: 'Versão com Alça Dupla (Crochê + Corrente)',
        dimensions: '24 cm (largura) × 17 cm (altura) + corrente adicional',
      },
    ],
    colors: [
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: true },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841', availableForImmediateDelivery: true },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'alca-ebano',
        label: 'Estilo da Alça',
        required: true,
        options: [
          'Alça longa em crochê (Como na foto)',
          'Alça de ombro + corrente prateada',
          'Alça maior personalizada',
        ],
      },
      {
        id: 'metais-ebano',
        label: 'Cor dos Metais',
        required: true,
        options: ['Prateado (Padrão da foto)', 'Dourado'],
      },
    ],
    availability: 'pronta-entrega',
    price: 179.0,
    stockQuantity: 2,
    featured: false,
    active: true,
  },

  {
    id: 'prod-franja-vermelha',
    slug: 'bolsa-carmim-franjas',
    name: 'Bolsa Carmim Boho',
    subtitle: 'Modelo especial com franjas laterais e alça longa em crochê',
    description:
      'Cheia de personalidade e delicadeza artesanal, a Bolsa Carmim Boho destaca-se pelas franjas laterais duplas e pela trama horizontal marcada. Uma peça autoral feita sob encomenda para mulheres que desejam um ponto de cor elegante ou que preferem personalizá-la em tons neutros.',
    craftsmanshipDetails: [
      'Acabamento lateral exclusivo com franjas em fio macio',
      'Trama estruturada com relevo horizontal linear',
      'Alça longa confortável tecida manualmente',
      'Totalmente personalizável na cor de sua preferência',
    ],
    category: 'Modelos especiais',
    additionalCategories: ['Bolsas transversais', 'Bolsas pequenas'],
    mainImage: 'images/products/bolsa-franja-vermelha.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-franja-vermelha.jpg',
        alt: 'Bolsa de crochê vermelha com franjas laterais e alça longa',
        caption: 'Bolsa Carmim Boho com franjas laterais artesanais',
      },
    ],
    models: [
      {
        id: 'carmim-padrao',
        name: 'Tamanho Clássico com Franjas',
        dimensions: '24 cm (largura) × 17 cm (altura) × 5 cm (profundidade)',
      },
      {
        id: 'carmim-sem-franja',
        name: 'Versão Lisa (Sem Franjas Laterais)',
        dimensions: '24 cm (largura) × 17 cm (altura) × 5 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'vermelho-carmim', name: 'Vermelho Carmim (Foto)', hex: '#C81D25' },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6' },
      { id: 'areia', name: 'Bege Aveia', hex: '#C6A988' },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841' },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B' },
    ],
    customizations: [
      {
        id: 'acabamento-lateral',
        label: 'Acabamento das Laterais',
        required: true,
        options: [
          'Com franjas nas duas laterais (Como na foto)',
          'Com apenas 1 tassel lateral',
          'Sem franjas (acabamento liso)',
        ],
      },
      {
        id: 'comprimento-alca-boho',
        label: 'Comprimento da Alça',
        required: true,
        options: ['Alça transversal padrão', 'Alça maior', 'Alça curta de ombro'],
      },
    ],
    availability: 'sob-encomenda',
    featured: true,
    active: true,
  },

  {
    id: 'prod-mochila-preta',
    slug: 'mochila-bolsa-ebano',
    name: 'Mochila & Bolsa Conversível Ébano',
    subtitle: 'Design 2 em 1 com aba texturizada, fecho metálico e tassel lateral',
    description:
      'Praticidade e elegância artesanal em uma peça versátil. A Mochila & Bolsa Conversível Ébano possui aba frontal com ponto em relevo horizontal, fecho metálico de encaixe seguro, alças confortáveis em crochê que permitem uso como mochila ou bolsa de ombro, além de pingente tassel removível.',
    craftsmanshipDetails: [
      'Modelagem funcional 2 em 1: pode ser usada como mochila ou bolsa de ombro',
      'Aba estruturada com textura canelada horizontal e fecho metálico tic-tac',
      'Acompanha pingente tassel volumoso removível com mosquetão prateado',
      'Amplo espaço interno com base firme tecida à mão',
    ],
    category: 'Bolsas grandes',
    additionalCategories: ['Bolsas de ombro', 'Modelos especiais'],
    mainImage: 'images/products/mochila-preta.jpg',
    gallery: [
      {
        url: 'images/products/mochila-preta.jpg',
        alt: 'Mochila e bolsa de crochê preta com aba texturizada e tassel',
        caption: 'Mochila & Bolsa Conversível na cor Preto Ébano',
      },
      {
        url: 'images/products/bolsa-aba-malva.jpg',
        alt: 'Versão com aba texturizada na cor Rosê Malva',
        caption: 'Detalhe da aba canelada também disponível no tom Rosê Malva',
      },
    ],
    models: [
      {
        id: 'mochila-padrao',
        name: 'Mochila Conversível Média/Grande',
        dimensions: '27 cm (largura) × 26 cm (altura) × 10 cm (profundidade)',
        description: 'Ideal para rotina diária, passeios e viagens, mantendo as mãos livres com elegância.',
      },
      {
        id: 'mochila-compacta',
        name: 'Versão Mini Mochila',
        dimensions: '23 cm (largura) × 22 cm (altura) × 8 cm (profundidade)',
        description: 'Formato mais compacto e delicado para o dia a dia.',
      },
    ],
    colors: [
      { id: 'preto', name: 'Preto Ébano (Foto)', hex: '#1E1D1B', availableForImmediateDelivery: true },
      { id: 'malva', name: 'Rosê Malva / Nude Antigo', hex: '#9E766E', availableForImmediateDelivery: false },
      { id: 'areia', name: 'Bege Aveia', hex: '#C6A988', availableForImmediateDelivery: false },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: false },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'alca-mochila',
        label: 'Configuração das Alças',
        required: true,
        options: [
          'Alças conversíveis (Mochila + Ombro como na foto)',
          'Alça longa única para uso transversal',
          'Alças de mochila com regulagem extra',
        ],
      },
      {
        id: 'tassel-mochila',
        label: 'Pingente Tassel',
        required: true,
        options: ['Com tassel lateral removível (Como na foto)', 'Sem tassel'],
      },
    ],
    availability: 'pronta-entrega',
    price: 249.0,
    stockQuantity: 2,
    featured: true,
    active: true,
  },

  {
    id: 'prod-aba-malva',
    slug: 'bolsa-aba-rose-malva',
    name: 'Bolsa Satchel Rosê Malva',
    subtitle: 'Bolsa estruturada com aba canelada, fecho clássico e alça removível',
    description:
      'Delicada, feminina e cheia de charme artesanal. A Bolsa Satchel Rosê Malva destaca-se pela aba frontal trabalhada em ponto relevo horizontal, fecho metálico clássico, tassel lateral longo e alça em crochê presa por mosquetões prateados.',
    craftsmanshipDetails: [
      'Aba frontal com acabamento canelado em relevo feito à mão',
      'Fecho metálico frontal de encaixe prático e seguro',
      'Alça em crochê trançado com mosquetões prateados articulados',
      'Acompanha tassel artesanal longo na mesma tonalidade da peça',
    ],
    category: 'Bolsas transversais',
    additionalCategories: ['Bolsas de ombro', 'Modelos especiais'],
    mainImage: 'images/products/bolsa-aba-malva.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-aba-malva.jpg',
        alt: 'Bolsa de crochê Rosê Malva com aba canelada, fecho metálico e tassel',
        caption: 'Bolsa Satchel na cor Rosê Malva / Nude Antigo',
      },
      {
        url: 'images/products/mochila-preta.jpg',
        alt: 'Variação da linha na cor Preto Ébano',
        caption: 'Linha disponível também no formato mochila na cor Preto Ébano',
      },
    ],
    models: [
      {
        id: 'malva-satchel-media',
        name: 'Modelo Satchel Transversal / Ombro',
        dimensions: '26 cm (largura) × 21 cm (altura) × 8 cm (profundidade)',
        description: 'Excelente espaço interno para carteira, celular, óculos e itens pessoais.',
      },
      {
        id: 'malva-mochila',
        name: 'Versão Mochila Conversível (2 em 1)',
        dimensions: '27 cm (largura) × 26 cm (altura) × 10 cm (profundidade)',
        description: 'Mesmo acabamento com alças duplas para uso como mochila ou bolsa.',
      },
    ],
    colors: [
      { id: 'malva', name: 'Rosê Malva / Nude Antigo (Foto)', hex: '#9E766E', availableForImmediateDelivery: true },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: false },
      { id: 'areia', name: 'Bege Aveia', hex: '#C6A988', availableForImmediateDelivery: false },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841', availableForImmediateDelivery: false },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'alca-satchel',
        label: 'Estilo de Alça',
        required: true,
        options: [
          'Alça longa transversal/ombro com mosquetão (Como na foto)',
          'Alças duplas estilo mochila conversível',
          'Alça maior personalizada',
        ],
      },
      {
        id: 'tassel-satchel',
        label: 'Detalhe Lateral',
        required: true,
        options: ['Com tassel longo artesanal (Como na foto)', 'Sem tassel'],
      },
    ],
    availability: 'pronta-entrega',
    price: 229.0,
    stockQuantity: 2,
    featured: true,
    active: true,
  },

  {
    id: 'prod-atelier-sob-medida',
    slug: 'bolsa-personalizada-atelier',
    name: 'Bolsa Exclusiva Sob Encomenda',
    subtitle: 'Escolha o formato, a cor do fio, o tipo de alça e os acabamentos',
    description:
      'Deseja combinar o formato de uma bolsa com a alça ou a cor de outro modelo? Nesta opção sob encomenda você configura sua bolsa Rosana&Co exatamente como sonhou: escolha entre modelagem Hobo de ombro, transversal com tassel ou modelo Duo com corrente.',
    craftsmanshipDetails: [
      'Confeccionada sob medida especialmente para o seu pedido',
      'Escolha livre entre todas as cores da nossa cartela de fios',
      'Opção de alça em crochê, alça dupla com corrente ou alça de mão',
      'Atendimento próximo pelo WhatsApp para alinhar cada detalhe',
    ],
    category: 'Bolsas de mão',
    additionalCategories: ['Modelos especiais', 'Bolsas de ombro', 'Bolsas grandes'],
    mainImage: 'images/products/bolsa-tassel-terracota.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-duo-offwhite.jpg',
        alt: 'Opção com alça dupla em off-white',
        caption: 'Opção 1: Modelo Duo com alça de ombro + corrente',
      },
      {
        url: 'images/products/bolsa-ombro-areia.jpg',
        alt: 'Opção Hobo de ombro em areia',
        caption: 'Opção 2: Modelo Hobo espaçoso de ombro',
      },
      {
        url: 'images/products/bolsa-tassel-preta.jpg',
        alt: 'Opção transversal preta com tassel',
        caption: 'Opção 3: Modelo Transversal com tassel',
      },
      {
        url: 'images/products/bolsa-franja-vermelha.jpg',
        alt: 'Opção com franjas laterais',
        caption: 'Opção 4: Modelo com franjas laterais',
      },
      {
        url: 'images/products/mochila-preta.jpg',
        alt: 'Opção Mochila Conversível com aba e fecho',
        caption: 'Opção 5: Mochila & Bolsa Conversível com aba canelada',
      },
      {
        url: 'images/products/bolsa-aba-malva.jpg',
        alt: 'Opção Satchel com aba e tassel',
        caption: 'Opção 6: Modelo Satchel com aba e fecho metálico',
      },
    ],
    models: [
      {
        id: 'custom-mochila',
        name: 'Formato Mochila Conversível (Aba + Fecho)',
        dimensions: '27 cm × 26 cm',
      },
      {
        id: 'custom-satchel',
        name: 'Formato Satchel com Aba Canelada',
        dimensions: '26 cm × 21 cm',
      },
      {
        id: 'custom-duo',
        name: 'Formato Duo (Ombro + Corrente)',
        dimensions: '24 cm × 16 cm',
      },
      {
        id: 'custom-hobo',
        name: 'Formato Hobo (Bolsa Média/Grande)',
        dimensions: '30 cm × 24 cm',
      },
      {
        id: 'custom-transversal',
        name: 'Formato Transversal Retangular',
        dimensions: '24 cm × 17 cm',
      },
    ],
    colors: [
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6' },
      { id: 'areia', name: 'Bege Aveia / Areia', hex: '#C6A988' },
      { id: 'malva', name: 'Rosê Malva / Nude Antigo', hex: '#9E766E' },
      { id: 'terracota', name: 'Terracota Amêndoa', hex: '#8D5841' },
      { id: 'preto', name: 'Preto Ébano', hex: '#1E1D1B' },
      { id: 'vermelho-carmim', name: 'Vermelho Carmim', hex: '#C81D25' },
    ],
    customizations: [
      {
        id: 'custom-alca-escolha',
        label: 'Preferência de Alça',
        required: true,
        options: [
          'Alça longa transversal em crochê',
          'Alça de ombro + corrente metálica',
          'Alça integrada estilo Hobo',
          'Alça curta de mão',
        ],
      },
      {
        id: 'custom-detalhe-escolha',
        label: 'Detalhes Especiais',
        required: true,
        options: [
          'Com tassel lateral',
          'Com franjas laterais',
          'Minimalista (sem tassel/franjas)',
        ],
      },
    ],
    availability: 'sob-encomenda',
    featured: true,
    active: true,
  },
];
