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
 * Como gerenciar o catálogo:
 * 1. Para adicionar uma nova bolsa, copie um dos blocos abaixo e altere os dados.
 * 2. Para mudar entre Pronta Entrega e Sob Encomenda:
 *    - 'pronta-entrega': O site exibirá automaticamente o preço (price) e o estoque (stockQuantity).
 *    - 'sob-encomenda': O site ocultará automaticamente qualquer preço e exibirá "Feito sob encomenda" + botão "Solicitar orçamento".
 * 3. Para ocultar um produto sem apagá-lo, mude `active: true` para `active: false`.
 */
export const productsData: Product[] = [
  {
    id: 'prod-olivia',
    slug: 'bolsa-olivia',
    name: 'Bolsa Olívia',
    subtitle: 'Trama estruturada de ombro com argolas acetinadas',
    description:
      'A Bolsa Olívia traduz a essência da Rosana&Co. Tecida manualmente com ponto estruturado de alta densidade, apresenta silhueta elegante para o dia a dia ou ocasiões especiais, com alça confortável de ombro e acabamento impecável.',
    craftsmanshipDetails: [
      'Fio náutico/algodão premium de toque macio e estrutura firme',
      'Fechamento magnético embutido com acabamento discreto',
      'Ferragens em banho dourado acetinado',
      'Produzida 100% à mão no ateliê Rosana&Co',
    ],
    category: 'Bolsas de ombro',
    additionalCategories: ['Modelos especiais'],
    mainImage: 'images/products/bolsa-olivia.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-olivia.jpg',
        alt: 'Bolsa Olívia em crochê artesanal verde oliva — vista frontal',
        caption: 'Acabamento em verde oliva com argolas douradas acetinadas',
      },
      {
        url: 'images/products/hero-banner.jpg',
        alt: 'Bolsa Olívia em composição de luz natural no ateliê',
        caption: 'Detalhe da trama artesanal sob luz natural',
      },
    ],
    models: [
      {
        id: 'olivia-media',
        name: 'Tamanho Clássico (Médio)',
        dimensions: '28 cm (largura) × 20 cm (altura) × 9 cm (profundidade)',
        description: 'Comporta celular, carteira, óculos e necessaire compacta.',
      },
      {
        id: 'olivia-compacta',
        name: 'Tamanho Compacto',
        dimensions: '23 cm (largura) × 16 cm (altura) × 7 cm (profundidade)',
        description: 'Versão delicada para eventos e passeios leves.',
      },
    ],
    colors: [
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: true },
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'acabamento-ferragem',
        label: 'Acabamento dos Metais',
        required: true,
        options: ['Dourado Acetinado (Padrão)', 'Níquel Prateado', 'Sem metais aparentes (Alça 100% crochê)'],
      },
      {
        id: 'forro-interno',
        label: 'Forro Interno em Algodão Cru',
        required: true,
        options: ['Com forro interno', 'Sem forro (trama fechada original)'],
      },
    ],
    availability: 'pronta-entrega',
    price: 289.0,
    stockQuantity: 3,
    featured: true,
    active: true,
  },

  {
    id: 'prod-aurora',
    slug: 'bolsa-aurora',
    name: 'Bolsa Aurora',
    subtitle: 'Modelo de mão escultural em tons naturais',
    description:
      'Delicada e sofisticada, a Bolsa Aurora destaca o contraste suave entre o crochê artesanal em tom areia e a alça de mão estruturada. Ideal para compor produções elegantes, casamentos diurnos, jantares e encontros especiais.',
    craftsmanshipDetails: [
      'Ponto fantasia autoral com textura em relevo delicado',
      'Alça de mão anatômica trabalhada artesanalmente',
      'Base estruturada que mantém o formato da peça ao apoiar',
      'Feita à mão com atenção a cada arremate',
    ],
    category: 'Bolsas de mão',
    additionalCategories: ['Bolsas pequenas', 'Modelos especiais'],
    mainImage: 'images/products/bolsa-aurora.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-aurora.jpg',
        alt: 'Bolsa Aurora de mão em crochê bege claro e marfim',
        caption: 'Textura artesanal em tom areia natural',
      },
    ],
    models: [
      {
        id: 'aurora-clutch-alca',
        name: 'Modelo de Mão Estruturado',
        dimensions: '24 cm (largura) × 17 cm (altura) × 8 cm (profundidade)',
      },
      {
        id: 'aurora-com-corrente',
        name: 'Com Alça Removível Adicional',
        dimensions: '24 cm (largura) × 17 cm (altura) + alça removível de 110 cm',
      },
    ],
    colors: [
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA', availableForImmediateDelivery: true },
      { id: 'off-white', name: 'Off-White Marfim', hex: '#F5F1E8', availableForImmediateDelivery: true },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: false },
      { id: 'amendoa', name: 'Caramelo Amêndoa', hex: '#A67553', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'tipo-alca',
        label: 'Detalhe da Alça',
        required: true,
        options: ['Alça de mão em crochê estruturado', 'Alça de mão + corrente dourada removível', 'Alça com detalhe em madeira natural'],
      },
      {
        id: 'fecho',
        label: 'Tipo de Fechamento',
        required: true,
        options: ['Botão imantado invisível', 'Fecho em moldura retrô'],
      },
    ],
    availability: 'pronta-entrega',
    price: 259.0,
    stockQuantity: 2,
    featured: true,
    active: true,
  },

  {
    id: 'prod-serena',
    slug: 'bolsa-serena',
    name: 'Bolsa Serena',
    subtitle: 'Transversal leve e versátil para todos os momentos',
    description:
      'Pensada para mulheres que valorizam praticidade sem abrir mão da sofisticação artesanal. A Bolsa Serena possui alça longa confortável para uso transversal ou tiracolo, mantendo seus itens essenciais sempre seguros e organizados.',
    craftsmanshipDetails: [
      'Design leve pensado para conforto prolongado no ombro',
      'Trama fechada que protege o conteúdo interno',
      'Alça longa com opção de regulagem sob medida',
      'Acabamento suave que não marca roupas delicadas',
    ],
    category: 'Bolsas transversais',
    additionalCategories: ['Bolsas pequenas'],
    mainImage: 'images/products/bolsa-serena.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-serena.jpg',
        alt: 'Bolsa Serena transversal em crochê off-white com corrente delicada',
        caption: 'Versatilidade e leveza em off-white natural',
      },
    ],
    models: [
      {
        id: 'serena-padrao',
        name: 'Transversal Clássica',
        dimensions: '21 cm (largura) × 15 cm (altura) × 6,5 cm (profundidade)',
      },
      {
        id: 'serena-plus',
        name: 'Transversal Média',
        dimensions: '25 cm (largura) × 18 cm (altura) × 8 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6', availableForImmediateDelivery: true },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739', availableForImmediateDelivery: true },
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA', availableForImmediateDelivery: false },
      { id: 'cacau', name: 'Marrom Cacau', hex: '#4E3B31', availableForImmediateDelivery: false },
    ],
    customizations: [
      {
        id: 'comprimento-alca',
        label: 'Comprimento da Alça Transversal',
        required: true,
        options: ['Padrão (110 cm)', 'Alça menor (100 cm)', 'Alça maior (122 cm)', 'Alça mista (crochê + elo dourado)'],
      },
      {
        id: 'tassel-pingente',
        label: 'Pingente Artesanal (Tassel)',
        required: false,
        options: ['Sem pingente (minimalista)', 'Com tassel na mesma cor da bolsa', 'Com medalha discreta banhada'],
      },
    ],
    availability: 'pronta-entrega',
    price: 235.0,
    stockQuantity: 4,
    featured: true,
    active: true,
  },

  {
    id: 'prod-celeste',
    slug: 'bolsa-celeste',
    name: 'Bolsa Elegance Celeste',
    subtitle: 'Bolsa grande artesanal feita sob medida para sua rotina',
    description:
      'Espaçosa, imponente e totalmente personalizável. A Bolsa Elegance Celeste é tecida sob encomenda com pontos entrelaçados que conferem resistência e caimento fluido. Perfeita para acompanhar dias intensos, viagens ou passeios elegantes.',
    craftsmanshipDetails: [
      'Amplo espaço interno com base reforçada em ponto duplo',
      'Alças de ombro macias com comprimento personalizável',
      'Possibilidade de combinação bicolor ou monocromática',
      'Produzida exclusivamente sob encomenda na cor escolhida',
    ],
    category: 'Bolsas grandes',
    additionalCategories: ['Bolsas de ombro'],
    mainImage: 'images/products/bolsa-celeste.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-celeste.jpg',
        alt: 'Bolsa Elegance Celeste grande em crochê artesanal tom amêndoa e areia',
        caption: 'Trama ampla em tons naturais terrosos e areia',
      },
    ],
    models: [
      {
        id: 'celeste-tote-media',
        name: 'Tote Média-Grande',
        dimensions: '36 cm (largura) × 28 cm (altura) × 12 cm (profundidade)',
      },
      {
        id: 'celeste-tote-maxi',
        name: 'Maxi Tote Especial',
        dimensions: '42 cm (largura) × 32 cm (altura) × 14 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'amendoa', name: 'Caramelo Amêndoa', hex: '#A67553' },
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA' },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6' },
      { id: 'cacau', name: 'Marrom Cacau', hex: '#4E3B31' },
      { id: 'preto-ebano', name: 'Preto Ébano', hex: '#232220' },
    ],
    customizations: [
      {
        id: 'tamanho-alca',
        label: 'Altura da Alça de Ombro',
        required: true,
        options: ['Alça padrão de ombro (26 cm de vão)', 'Alça maior (32 cm de vão)', 'Alça dupla reforçada'],
      },
      {
        id: 'forro-bolso',
        label: 'Acabamento Interno',
        required: true,
        options: ['Sem forro (trama estruturada)', 'Forro de algodão cru com bolso interno', 'Forro com fechamento em zíper'],
      },
      {
        id: 'combinacao-cores',
        label: 'Estilo de Cor',
        required: true,
        options: ['Cor única (Monocromática)', 'Bicolor com borda contrastante (informar na observação)'],
      },
    ],
    availability: 'sob-encomenda',
    // Preço não exibido por ser sob encomenda (controlado automaticamente pela regra do sistema)
    featured: true,
    active: true,
  },

  {
    id: 'prod-flora',
    slug: 'bolsa-flora',
    name: 'Bolsa Flora Atelier',
    subtitle: 'Edição especial com textura botânica feita sob encomenda',
    description:
      'Um modelo autoral criado para destacar o trabalho manual em sua forma mais artística. A Bolsa Flora combina pontos em relevo orgânico e silhueta contemporânea, sendo confeccionada sob medida conforme as preferências de cada cliente.',
    craftsmanshipDetails: [
      'Design autoral exclusivo da coleção modelos especiais',
      'Trama tridimensional inspirada em formas botânicas naturais',
      'Personalização completa de cores, alça e acabamentos',
      'Peça numerada e produzida artesanalmente sob consulta',
    ],
    category: 'Modelos especiais',
    additionalCategories: ['Bolsas pequenas', 'Bolsas de mão'],
    mainImage: 'images/products/bolsa-flora.jpg',
    gallery: [
      {
        url: 'images/products/bolsa-flora.jpg',
        alt: 'Bolsa Flora Atelier modelo especial em crochê verde sálvia e marfim',
        caption: 'Modelo autoral com textura botânica em verde oliva suave e off-white',
      },
    ],
    models: [
      {
        id: 'flora-mini-bucket',
        name: 'Formato Mini Bucket Autoral',
        dimensions: '20 cm (largura) × 19 cm (altura) × 11 cm (base)',
      },
      {
        id: 'flora-ombro-festa',
        name: 'Formato Tiracolo de Festa',
        dimensions: '22 cm (largura) × 15 cm (altura) × 7 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
      { id: 'salvia', name: 'Verde Sálvia Suave', hex: '#8A9A78' },
      { id: 'off-white', name: 'Off-White Pérola', hex: '#F5F1E8' },
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA' },
      { id: 'amendoa', name: 'Terracota Suave', hex: '#A67553' },
    ],
    customizations: [
      {
        id: 'alca-especial',
        label: 'Configuração de Alça',
        required: true,
        options: ['Alça de pulso trabalhada em nó', 'Alça longa removível em corrente dourada', 'Ambas as alças (mão + tiracolo)'],
      },
      {
        id: 'personalizacao-inicial',
        label: 'Detalhe Personalizado',
        required: false,
        options: ['Padrão sem inicial', 'Pingente discreto personalizado (consultar opções)'],
      },
    ],
    availability: 'sob-encomenda',
    featured: true,
    active: true,
  },

  {
    id: 'prod-helena',
    slug: 'bolsa-helena',
    name: 'Bolsa Helena',
    subtitle: 'Bolsa de ombro clássica com ponto espinha de peixe',
    description:
      'A Bolsa Helena une o charme da trama espinha de peixe a um formato clássico de ombro que valoriza qualquer produção. Confeccionada sob encomenda para que você escolha a cor exata, o comprimento da alça e o tipo de acabamento interno.',
    craftsmanshipDetails: [
      'Ponto espinha de peixe executado manualmente com precisão',
      'Estrutura pensada para manter a elegância com uso frequente',
      'Alça ergonômica que se adapta perfeitamente ao ombro',
      'Totalmente personalizável em cores e dimensões de alça',
    ],
    category: 'Bolsas de ombro',
    additionalCategories: ['Bolsas grandes'],
    mainImage: 'images/products/hero-banner.jpg',
    gallery: [
      {
        url: 'images/products/hero-banner.jpg',
        alt: 'Bolsa Helena de ombro em crochê artesanal sobre pedra natural',
        caption: 'Acabamento sofisticado em verde oliva e off-white',
      },
      {
        url: 'images/products/bolsa-olivia.jpg',
        alt: 'Detalhe de ponto artesanal da linha de ombro Rosana&Co',
        caption: 'Detalhe de ferragens e ponto estruturado',
      },
    ],
    models: [
      {
        id: 'helena-media',
        name: 'Helena Média (Uso Diário)',
        dimensions: '31 cm (largura) × 23 cm (altura) × 10 cm (profundidade)',
      },
      {
        id: 'helena-grande',
        name: 'Helena Grande',
        dimensions: '37 cm (largura) × 27 cm (altura) × 12 cm (profundidade)',
      },
    ],
    colors: [
      { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
      { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6' },
      { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA' },
      { id: 'amendoa', name: 'Caramelo Amêndoa', hex: '#A67553' },
      { id: 'cacau', name: 'Marrom Cacau', hex: '#4E3B31' },
    ],
    customizations: [
      {
        id: 'alca-helena',
        label: 'Tamanho da Alça',
        required: true,
        options: ['Alça padrão de ombro', 'Alça maior (+6 cm)', 'Alça menor para uso próximo ao braço'],
      },
      {
        id: 'forro-helena',
        label: 'Forro Interno',
        required: true,
        options: ['Com forro em algodão cru e divisória', 'Sem forro'],
      },
    ],
    availability: 'sob-encomenda',
    featured: false,
    active: true,
  },
];
