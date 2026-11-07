# Rosana&Co — Site Oficial e Catálogo de Bolsas Artesanais de Crochê

Bem-vindo(a) à documentação oficial de execução e manutenção do site da **Rosana&Co** ("Feitas à mão, pensadas para você.").

Este projeto foi desenvolvido com uma **arquitetura estática moderna e modular** (React + TypeScript + Vite + Tailwind CSS), **sem necessidade de banco de dados ou serviços externos**, permitindo manutenção simples, carregamento rápido e hospedagem gratuita ou de baixíssimo custo.

---

## Sumário

1. [Como executar o projeto localmente](#1-como-executar-o-projeto-localmente)
2. [Estrutura de pastas do projeto](#2-estrutura-de-pastas-do-projeto)
3. [Como alterar o nome, textos, WhatsApp e Instagram da loja](#3-como-alterar-o-nome-textos-whatsapp-e-instagram-da-loja)
4. [Como cadastrar uma nova bolsa no catálogo](#4-como-cadastrar-uma-nova-bolsa-no-catálogo)
5. [Como trocar ou adicionar fotografias](#5-como-trocar-ou-adicionar-fotografias)
6. [Como adicionar cores e opções de personalização](#6-como-adicionar-cores-e-opções-de-personalização)
7. [Como alterar um produto entre Pronta Entrega e Sob Encomenda](#7-como-alterar-um-produto-entre-pronta-entrega-e-sob-encomenda)
8. [Como inserir e atualizar preços e estoque](#8-como-inserir-e-atualizar-preços-e-estoque)
9. [Como publicar (fazer deploy) do site](#9-como-publicar-fazer-deploy-do-site)

---

## 1. Como executar o projeto localmente

### Pré-requisitos
- Ter o **Node.js** instalado (versão 18 ou superior recomendada).

### Passo a passo
1. Abra o terminal na pasta raiz do projeto (`Rosana&Co`).
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

Para gerar a versão final otimizada para publicação:
```bash
npm run build
```

---

## 2. Estrutura de pastas do projeto

Toda a manutenção de produtos, fotos e configurações é concentrada em apenas **3 locais principais**, sem precisar alterar componentes visuais:

```text
Rosana&Co/
├── public/
│   └── images/
│       └── products/           # <-- PASTA DE FOTOGRAFIAS DAS BOLSAS
├── src/
│   ├── config/
│   │   └── siteConfig.ts       # <-- CONFIGURAÇÕES GERAIS (WhatsApp, Instagram, Textos)
│   ├── data/
│   │   └── products.ts         # <-- CADASTRO CENTRALIZADO DE TODAS AS BOLSAS
│   ├── types/
│   │   └── product.ts          # Definições de tipos e categorias
│   ├── utils/
│   │   └── productRules.ts     # Regras automáticas de preço, estoque e mensagem do WhatsApp
│   ├── context/
│   │   └── BagContext.tsx      # Gerenciamento da Sacola de Pedidos
│   ├── components/             # Cabeçalho, Rodapé, Card de Produto, Sacola e Botão Flutuante
│   └── pages/                  # Páginas: Início, Catálogo, Produto, Pronta Entrega, Personalize, Sobre
```

---

## 3. Como alterar o nome, textos, WhatsApp e Instagram da loja

Abra o arquivo:
`src/config/siteConfig.ts`

Nele você encontrará o objeto `siteConfig` dividido em:
- **`brand`**: Nome da marca (`name`), frase de destaque (`tagline`) e descrição curta.
- **`contact`**:
  - `whatsappNumber`: Número oficial do WhatsApp contendo apenas números com código do país (55) + DDD + número. Exemplo: `'5511988887777'`.
  - `whatsappDisplay`: Como o número aparece escrito no rodapé. Exemplo: `'(11) 98888-7777'`.
  - `instagramHandle`: Nome do perfil. Exemplo: `'@rosanaandco'`.
  - `instagramUrl`: Link completo do perfil. Exemplo: `'https://instagram.com/rosanaandco'`.
  - `email`, `locationNote`, `serviceHours`: Informações exibidas no rodapé e página de contato.
- **`institutional`**: Textos da seção "Sobre a Rosana&Co", "Personalize sua Bolsa" e avisos de encomenda.

Ao alterar esses valores em `src/config/siteConfig.ts`, **todas as páginas, botões e links do WhatsApp e Instagram são atualizados automaticamente**.

---

## 4. Como cadastrar uma nova bolsa no catálogo

Abra o arquivo:
`src/data/products.ts`

Para adicionar uma nova bolsa, copie um objeto existente dentro da lista `productsData` e preencha os campos:

```ts
{
  id: 'prod-valentina',
  slug: 'bolsa-valentina', // Usado no link da página: /bolsa/bolsa-valentina
  name: 'Bolsa Valentina',
  subtitle: 'Bolsa de mão estruturada com alça trançada',
  description: 'Descrição completa e detalhada da bolsa...',
  craftsmanshipDetails: [
    'Produzida 100% à mão',
    'Fecho magnético embutido',
  ],
  category: 'Bolsas de mão', // Categorias válidas: 'Bolsas de ombro' | 'Bolsas de mão' | 'Bolsas transversais' | 'Bolsas pequenas' | 'Bolsas grandes' | 'Modelos especiais'
  additionalCategories: ['Bolsas pequenas'],
  mainImage: '/images/products/bolsa-valentina.jpg',
  gallery: [
    {
      url: '/images/products/bolsa-valentina.jpg',
      alt: 'Bolsa Valentina vista frontal',
      caption: 'Acabamento em verde oliva',
    },
  ],
  models: [
    {
      id: 'valentina-unico',
      name: 'Tamanho Único',
      dimensions: '24 cm × 18 cm × 8 cm',
    },
  ],
  colors: [
    { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
    { id: 'off-white', name: 'Off-White Natural', hex: '#F3EFE6' },
  ],
  customizations: [
    {
      id: 'alca',
      label: 'Tipo de Alça',
      required: true,
      options: ['Alça padrão', 'Alça maior'],
    },
  ],
  availability: 'pronta-entrega', // ou 'sob-encomenda'
  price: 270.0,
  stockQuantity: 2,
  featured: true, // true = aparece nos Destaques da Página Inicial
  active: true,   // true = visível no site | false = oculta o produto sem precisar apagar
}
```

---

## 5. Como trocar ou adicionar fotografias

1. Coloque os arquivos de imagem (`.jpg`, `.png` ou `.webp`) dentro da pasta:
   `public/images/products/`
2. Dê nomes simples, sem espaços ou acentos (ex.: `bolsa-olivia-detalhe.jpg`).
3. No arquivo `src/data/products.ts`, referencie o caminho começando com `/images/products/nome-do-arquivo.jpg` nos campos `mainImage` e `gallery`.

---

## 6. Como adicionar cores e opções de personalização

Dentro de cada produto em `src/data/products.ts`:

### Para adicionar ou editar cores (`colors`):
Adicione um item com nome e código hexadecimal (`hex`) da cor:
```ts
colors: [
  { id: 'verde-oliva', name: 'Verde Oliva', hex: '#4A5739' },
  { id: 'areia', name: 'Bege Areia', hex: '#D4C3AA' },
  { id: 'terracota', name: 'Terracota Suave', hex: '#A66E4E' },
]
```

### Para adicionar opções de personalização (`customizations`):
Você pode criar quantos grupos desejar para cada bolsa (ex.: Tamanho da Alça, Forro Interno, Fecho, Tassel):
```ts
customizations: [
  {
    id: 'tamanho-alca',
    label: 'Comprimento da Alça',
    required: true,
    options: ['Alça padrão', 'Alça maior (+8 cm)', 'Alça transversal removível'],
  },
]
```

---

## 7. Como alterar um produto entre Pronta Entrega e Sob Encomenda

No arquivo `src/data/products.ts`, localize o produto desejado e altere o campo `availability`:

- **Para Pronta Entrega:**
  ```ts
  availability: 'pronta-entrega',
  price: 289.0,
  stockQuantity: 3,
  ```
  **O que acontece automaticamente:**
  - O produto passa a aparecer na página exclusiva **Pronta Entrega** e na seção de Pronta Entrega da página inicial.
  - O preço em reais (`R$ 289,00`) é exibido.
  - O seletor de quantidade respeita o limite de `stockQuantity`.
  - O botão principal exibe **"Comprar pelo WhatsApp"**.

- **Para Sob Encomenda / Personalizável:**
  ```ts
  availability: 'sob-encomenda',
  ```
  **O que acontece automaticamente:**
  - O produto **sai imediatamente** da vitrine de Pronta Entrega.
  - **Nenhum preço é exibido** (mesmo que o campo `price` ainda exista no cadastro).
  - Aparece a identificação **"Feito sob encomenda • Valor sob consulta"**.
  - O botão principal muda para **"Solicitar orçamento"**.

- **Para desativar temporariamente um produto:**
  Basta alterar `active: false` ou `availability: 'indisponivel'`.

---

## 8. Como inserir e atualizar preços e estoque

No arquivo `src/data/products.ts`:
- Altere o campo numérico `price` (use ponto para centavos, ex.: `259.90` será formatado automaticamente como `R$ 259,90`).
- Altere o campo `stockQuantity` (ex.: `stockQuantity: 1` mostrará automaticamente o aviso *"Última peça disponível"*).
- Caso `stockQuantity` chegue a `0`, o produto deixará de ser listado como disponível para compra imediata.

---

## 9. Como publicar (fazer deploy) do site

Como o projeto utiliza arquitetura estática (sem banco de dados), ele pode ser hospedado gratuitamente na **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages**.

### Publicando na Vercel ou Netlify (Recomendado)
1. Suba o código do projeto para um repositório no GitHub.
2. Crie uma conta na [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) e conecte o repositório.
3. Configurações de build (detectadas automaticamente):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Os arquivos `vercel.json` e `public/_redirects` já estão configurados no projeto para garantir que todas as URLs amigáveis (`/catalogo`, `/pronta-entrega`, `/bolsa/...`) funcionem perfeitamente.
5. Sempre que você atualizar um produto em `src/data/products.ts` ou uma foto em `public/images/products/` e enviar (`git push`), o novo deploy atualizará o site em poucos segundos com HTTPS ativo automaticamente.
