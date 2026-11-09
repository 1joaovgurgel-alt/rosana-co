import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Check,
  Info,
  ShieldCheck,
} from 'lucide-react';
import {
  getActiveProducts,
  isReadyToShip,
  getDisplayPrice,
  formatCurrencyBRL,
  buildSingleItemWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/productRules';
import { useBag } from '../context/BagContext';
import { siteConfig } from '../config/siteConfig';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useBag();

  const allProducts = getActiveProducts();
  const product = allProducts.find((p) => p.slug === slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedColorId, setSelectedColorId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    Record<string, string>
  >({});
  const [notes, setNotes] = useState<string>('');
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      setSelectedImageIndex(0);
      setSelectedModel(product.models[0]?.name ?? 'Modelo Padrão');
      setSelectedColorId(product.colors[0]?.id ?? '');
      setQuantity(1);
      setNotes('');

      const initialCustom: Record<string, string> = {};
      product.customizations.forEach((group) => {
        if (group.options[0]) {
          initialCustom[group.label] = group.options[0];
        }
      });
      setSelectedCustomizations(initialCustom);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center space-y-5">
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
          Bolsa não encontrada
        </h1>
        <p className="text-sm text-charcoal-700">
          O modelo que você procura pode ter sido atualizado ou não está mais disponível no catálogo.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 px-6 py-3 min-h-[46px] rounded-xl bg-olive-700 text-ivory-50 text-sm font-medium hover:bg-olive-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Catálogo
        </Link>
      </div>
    );
  }

  const ready = isReadyToShip(product);
  const formattedPrice = getDisplayPrice(product);
  const maxStock = ready && product.stockQuantity ? product.stockQuantity : 10;

  const selectedColor =
    product.colors.find((c) => c.id === selectedColorId) ?? product.colors[0];

  const selectedModelObj = product.models.find((m) => m.name === selectedModel);

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [{ url: product.mainImage, alt: product.name }];

  const handleCustomizationChange = (label: string, value: string) => {
    setSelectedCustomizations((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const buildCurrentItemPayload = () => ({
    productId: product.id,
    productSlug: product.slug,
    productName: product.name,
    mainImage: product.mainImage,
    availability: product.availability,
    unitPrice: ready ? product.price : undefined,
    maxStock: product.stockQuantity,
    selectedModel,
    selectedColor,
    quantity,
    selectedCustomizations,
    notes,
  });

  const handleAddToBag = () => {
    addItem(buildCurrentItemPayload());
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2500);
  };

  const handleDirectWhatsApp = () => {
    const message = buildSingleItemWhatsAppMessage(buildCurrentItemPayload());
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 space-y-10 sm:space-y-16">
      {/* Breadcrumb / Voltar */}
      <nav aria-label="Navegação estrutural" className="flex items-center justify-between">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 py-1.5 text-xs sm:text-sm font-medium text-charcoal-700 hover:text-olive-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o catálogo
        </Link>
        <span className="text-xs text-charcoal-700/70 hidden sm:inline">
          Catálogo / {product.category} / <strong className="text-charcoal-900">{product.name}</strong>
        </span>
      </nav>

      {/* Grid Principal: Fotografias + Configuração do Pedido */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-start">
        {/* 1. Coluna de Fotografias */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 lg:sticky lg:top-28">
          <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-sand-200 shadow-subtle">
            <img
              src={galleryImages[selectedImageIndex]?.url || product.mainImage}
              alt={galleryImages[selectedImageIndex]?.alt || product.name}
              className="w-full h-full object-cover object-center"
            />

            {/* Badge superior */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
              {ready ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 rounded-full text-xs font-medium bg-olive-700 text-ivory-50 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Pronta Entrega
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 rounded-full text-xs font-medium bg-ivory-50/95 text-charcoal-900 border border-sand-300 backdrop-blur-sm shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-olive-700" />
                  Sob encomenda • Sob consulta
                </span>
              )}
            </div>
          </div>

          {galleryImages[selectedImageIndex]?.caption && (
            <p className="text-xs text-center text-charcoal-700/80 italic px-2">
              {galleryImages[selectedImageIndex].caption}
            </p>
          )}

          {/* Miniaturas da Galeria */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-olive-700 shadow-xs'
                      : 'border-sand-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2. Coluna de Informações e Seleção */}
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl border border-sand-200 p-5 sm:p-8 lg:p-10 shadow-subtle space-y-6 sm:space-y-7">
          {/* Cabeçalho do Produto */}
          <div className="border-b border-sand-200 pb-5 sm:pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-olive-700 font-medium">
              <span>{product.category}</span>
              {product.additionalCategories?.map((cat) => (
                <span key={cat} className="text-charcoal-700/60">
                  • {cat}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-charcoal-700/90 leading-relaxed">
              {product.description}
            </p>

            {/* Bloco Automático de Preço / Status */}
            <div className="pt-2">
              {ready && formattedPrice ? (
                <div className="p-4 rounded-2xl bg-olive-50/70 border border-olive-200 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-medium text-olive-800 block">
                      Disponível para Pronta Entrega
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal-900">
                      {formattedPrice}
                    </span>
                    {quantity > 1 && typeof product.price === 'number' && (
                      <span className="block text-xs text-charcoal-700 mt-0.5">
                        Total para {quantity} unidades:{' '}
                        <strong>{formatCurrencyBRL(product.price * quantity)}</strong>
                      </span>
                    )}
                  </div>
                  {typeof product.stockQuantity === 'number' && (
                    <span className="px-3 py-1 rounded-full bg-white border border-olive-200 text-xs font-medium text-olive-800">
                      {product.stockQuantity === 1
                        ? 'Última unidade em estoque'
                        : `${product.stockQuantity} unidades em estoque`}
                    </span>
                  )}
                </div>
              ) : (
                <div className="p-4 sm:p-5 rounded-2xl bg-ivory-100 border border-sand-300 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-olive-800">
                      <Sparkles className="w-4 h-4 text-olive-700 flex-shrink-0" />
                      Feito sob encomenda • Valor sob consulta
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white border border-sand-200 text-charcoal-800">
                      Personalizável
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {siteConfig.institutional.customOrderNotice}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* PASSO 1: ESCOLHER O MODELO / TAMANHO */}
          {product.models.length > 0 && (
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                1. Escolha o modelo / dimensão
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.models.map((model) => {
                  const isSelected = selectedModel === model.name;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setSelectedModel(model.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-olive-700 bg-olive-50/50 ring-1 ring-olive-700'
                          : 'border-sand-300 bg-ivory-50/50 hover:border-olive-600/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-charcoal-900">
                          {model.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-olive-700 flex-shrink-0" />}
                      </div>
                      <span className="block text-xs text-charcoal-700/80 mt-1">
                        {model.dimensions}
                      </span>
                    </button>
                  );
                })}
              </div>
              {selectedModelObj?.description && (
                <p className="text-xs text-charcoal-700/75">
                  {selectedModelObj.description}
                </p>
              )}
            </div>
          )}

          {/* PASSO 2: SELECIONAR A COR DESEJADA */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                2. Cor selecionada:{' '}
                <span className="text-olive-800 font-bold">{selectedColor?.name}</span>
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => {
                const isSelected = selectedColor?.id === color.id;
                return (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setSelectedColorId(color.id)}
                    className={`inline-flex items-center gap-2.5 px-3.5 py-2.5 min-h-[42px] rounded-xl border text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-olive-700 bg-olive-50/60 text-charcoal-900 ring-1 ring-olive-700'
                        : 'border-sand-300 bg-white text-charcoal-800 hover:border-olive-600/40'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-charcoal-900/20 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-charcoal-700/75">
              Deseja outra tonalidade específica? Você pode informar no campo de observações abaixo.
            </p>
          </div>

          {/* PASSO 3: OPÇÕES DE PERSONALIZAÇÃO */}
          {product.customizations.length > 0 && (
            <div className="space-y-4 pt-2 border-t border-sand-200/80">
              <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                3. Opções de personalização
              </span>

              {product.customizations.map((group) => (
                <div key={group.id} className="space-y-2">
                  <label className="block text-xs font-medium text-charcoal-800">
                    {group.label}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((option) => {
                      const active = selectedCustomizations[group.label] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleCustomizationChange(group.label, option)}
                          className={`px-3.5 py-2.5 min-h-[42px] rounded-xl text-xs font-medium border text-left transition-all ${
                            active
                              ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900'
                              : 'bg-ivory-50 text-charcoal-800 border-sand-300 hover:border-olive-600/40'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PASSO 4: QUANTIDADE (RESPEITANDO ESTOQUE EM PRONTA ENTREGA) */}
          <div className="space-y-2 pt-2 border-t border-sand-200/80">
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800">
              4. Quantidade
            </label>
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <div className="inline-flex items-center rounded-xl border border-sand-300 bg-ivory-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Diminuir quantidade"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-charcoal-800 hover:bg-white disabled:opacity-40 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium text-sm text-charcoal-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(maxStock, q + 1))}
                  disabled={quantity >= maxStock}
                  aria-label="Aumentar quantidade"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-charcoal-800 hover:bg-white disabled:opacity-40 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {ready && product.stockQuantity && (
                <span className="text-xs text-charcoal-700/80">
                  Limite a pronta entrega: <strong>{product.stockQuantity}</strong>{' '}
                  {product.stockQuantity === 1 ? 'unidade' : 'unidades'}
                </span>
              )}
            </div>
          </div>

          {/* PASSO 5: OBSERVAÇÕES OU SOLICITAÇÕES ESPECIAIS */}
          <div className="space-y-2">
            <label
              htmlFor="special-notes"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800"
            >
              5. Observações ou solicitações especiais (opcional)
            </label>
            <textarea
              id="special-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: Gostaria da alça com 5 cm a mais, ou desejo combinar duas cores..."
              className="w-full rounded-xl bg-ivory-50 border border-sand-300 p-3 text-sm text-charcoal-900 placeholder:text-charcoal-700/50 focus:outline-none focus:border-olive-700"
            />
          </div>

          {/* BOTÕES DE AÇÃO: ADICIONAR À SACOLA + WHATSAPP DIRETO */}
          <div className="pt-2 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Botão Principal WhatsApp conforme status */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3.5 px-5 min-h-[48px] rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 font-medium text-sm flex items-center justify-center gap-2.5 shadow-subtle transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {ready ? 'Comprar pelo WhatsApp' : 'Solicitar orçamento'}
              </button>

              {/* Adicionar à Sacola de Pedidos */}
              <button
                type="button"
                onClick={handleAddToBag}
                className="w-full py-3.5 px-5 min-h-[48px] rounded-xl bg-white hover:bg-ivory-100 text-charcoal-900 border border-sand-300 font-medium text-sm flex items-center justify-center gap-2 transition-all"
              >
                {addedFeedback ? (
                  <>
                    <Check className="w-4 h-4 text-olive-700" />
                    Adicionada à sacola!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-olive-700" />
                    Adicionar à sacola de pedidos
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-ivory-50 border border-sand-200 flex items-start gap-2.5 text-xs text-charcoal-700 leading-relaxed">
              <Info className="w-4 h-4 text-olive-700 flex-shrink-0 mt-0.5" />
              <span>
                Você pode adicionar mais de um modelo à <strong>Sacola de Pedidos</strong> para enviar tudo em uma única mensagem organizada pelo WhatsApp. Nenhuma cobrança é feita automaticamente no site.
              </span>
            </div>
          </div>

          {/* Detalhes Artesanais da Peça */}
          <div className="pt-4 border-t border-sand-200 space-y-3">
            <h2 className="font-serif text-xl font-medium text-charcoal-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-olive-700 flex-shrink-0" />
              Detalhes de Acabamento Artesanal
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
              {product.craftsmanshipDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-600 mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Outros Modelos Sugeridos */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 sm:pt-12 border-t border-sand-200">
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
              Conheça também outros modelos
            </h2>
            <Link
              to="/catalogo"
              className="text-xs sm:text-sm font-medium text-olive-700 hover:underline underline-offset-4 whitespace-nowrap"
            >
              Ver catálogo
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
