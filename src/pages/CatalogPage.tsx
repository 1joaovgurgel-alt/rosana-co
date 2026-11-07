import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { ProductCategory } from '../types/product';
import {
  getActiveProducts,
  isReadyToShip,
  isMadeToOrder,
} from '../utils/productRules';
import { ProductCard } from '../components/ProductCard';
import { siteConfig } from '../config/siteConfig';

type AvailabilityFilter = 'todos' | 'pronta-entrega' | 'sob-encomenda';

export const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('categoria') || 'Todas';
  const initialAvailability =
    (searchParams.get('disponibilidade') as AvailabilityFilter) || 'todos';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedAvailability, setSelectedAvailability] =
    useState<AvailabilityFilter>(initialAvailability);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const catParam = searchParams.get('categoria');
    const availParam = searchParams.get('disponibilidade') as AvailabilityFilter | null;
    if (catParam) setSelectedCategory(catParam);
    if (availParam && ['todos', 'pronta-entrega', 'sob-encomenda'].includes(availParam)) {
      setSelectedAvailability(availParam);
    }
  }, [searchParams]);

  const allProducts = useMemo(() => getActiveProducts(), []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Filtro de categoria (principal ou secundária)
      if (selectedCategory !== 'Todas') {
        const matchesPrimary = product.category === selectedCategory;
        const matchesSecondary = product.additionalCategories?.includes(
          selectedCategory as ProductCategory
        );
        if (!matchesPrimary && !matchesSecondary) return false;
      }

      // Filtro de disponibilidade
      if (selectedAvailability === 'pronta-entrega' && !isReadyToShip(product)) {
        return false;
      }
      if (selectedAvailability === 'sob-encomenda' && !isMadeToOrder(product)) {
        return false;
      }

      // Filtro de busca por texto
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inName = product.name.toLowerCase().includes(q);
        const inSubtitle = product.subtitle.toLowerCase().includes(q);
        const inDesc = product.description.toLowerCase().includes(q);
        const inColor = product.colors.some((c) => c.name.toLowerCase().includes(q));
        if (!inName && !inSubtitle && !inDesc && !inColor) return false;
      }

      return true;
    });
  }, [allProducts, selectedCategory, selectedAvailability, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const nextParams = new URLSearchParams(searchParams);
    if (cat === 'Todas') {
      nextParams.delete('categoria');
    } else {
      nextParams.set('categoria', cat);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const handleAvailabilityChange = (avail: AvailabilityFilter) => {
    setSelectedAvailability(avail);
    const nextParams = new URLSearchParams(searchParams);
    if (avail === 'todos') {
      nextParams.delete('disponibilidade');
    } else {
      nextParams.set('disponibilidade', avail);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const clearFilters = () => {
    setSelectedCategory('Todas');
    setSelectedAvailability('todos');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    selectedCategory !== 'Todas' ||
    selectedAvailability !== 'todos' ||
    searchQuery.trim() !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
      {/* Cabeçalho da Página */}
      <div className="border-b border-sand-200 pb-8">
        <span className="text-xs font-medium text-olive-700 uppercase tracking-wider">
          Coleção Completa Rosana&amp;Co
        </span>
        <h1 className="mt-1 font-serif text-4xl sm:text-5xl font-medium text-charcoal-900">
          Catálogo de Bolsas Artesanais
        </h1>
        <p className="mt-3 text-base text-charcoal-700/85 max-w-2xl leading-relaxed">
          Explore todos os nossos modelos feitos à mão. Escolha uma peça disponível a pronta entrega ou personalize um modelo sob encomenda na sua cor preferida.
        </p>
      </div>

      {/* Painel de Filtros */}
      <div className="bg-white rounded-2xl border border-sand-200 p-5 sm:p-6 shadow-subtle space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Busca */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-charcoal-700/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome do modelo, cor ou estilo..."
              aria-label="Buscar bolsas no catálogo"
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-ivory-50 border border-sand-300 text-sm text-charcoal-900 placeholder:text-charcoal-700/50 focus:outline-none focus:border-olive-600"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-700/60 hover:text-charcoal-900"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filtro de Disponibilidade */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-charcoal-700 mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-olive-700" />
              Disponibilidade:
            </span>
            <button
              type="button"
              onClick={() => handleAvailabilityChange('todos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                selectedAvailability === 'todos'
                  ? 'bg-olive-700 text-ivory-50'
                  : 'bg-ivory-100 text-charcoal-800 hover:bg-sand-200/70'
              }`}
            >
              Todos os modelos
            </button>
            <button
              type="button"
              onClick={() => handleAvailabilityChange('pronta-entrega')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                selectedAvailability === 'pronta-entrega'
                  ? 'bg-olive-700 text-ivory-50'
                  : 'bg-ivory-100 text-charcoal-800 hover:bg-sand-200/70'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Pronta Entrega
            </button>
            <button
              type="button"
              onClick={() => handleAvailabilityChange('sob-encomenda')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                selectedAvailability === 'sob-encomenda'
                  ? 'bg-olive-700 text-ivory-50'
                  : 'bg-ivory-100 text-charcoal-800 hover:bg-sand-200/70'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Sob Encomenda
            </button>
          </div>
        </div>

        {/* Categorias */}
        <div className="pt-4 border-t border-sand-200/80">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-medium text-charcoal-700">
              Categorias de bolsas:
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium text-olive-700 hover:underline underline-offset-4"
              >
                Limpar todos os filtros
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleCategoryChange('Todas')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'Todas'
                  ? 'bg-charcoal-900 text-ivory-50 shadow-2xs'
                  : 'bg-ivory-50 text-charcoal-800 border border-sand-200 hover:border-olive-600/40'
              }`}
            >
              Todas as categorias
            </button>
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-charcoal-900 text-ivory-50 shadow-2xs'
                    : 'bg-ivory-50 text-charcoal-800 border border-sand-200 hover:border-olive-600/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Aviso quando filtrado por Sob Encomenda */}
      {selectedAvailability === 'sob-encomenda' && (
        <div className="p-5 rounded-2xl bg-ivory-100 border border-sand-300 text-sm text-charcoal-800 leading-relaxed">
          <p className="font-medium text-olive-800 mb-1">
            Informação sobre peças Sob Encomenda:
          </p>
          <p>{siteConfig.institutional.customOrderNotice}</p>
        </div>
      )}

      {/* Contagem e Grid de Produtos */}
      <div>
        <div className="mb-6 flex items-center justify-between text-xs text-charcoal-700">
          <span>
            Exibindo <strong>{filteredProducts.length}</strong>{' '}
            {filteredProducts.length === 1 ? 'modelo encontrado' : 'modelos encontrados'}
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-sand-200 p-12 text-center max-w-lg mx-auto my-8 space-y-4">
            <h3 className="font-serif text-2xl text-charcoal-900">
              Nenhuma bolsa encontrada com esses filtros
            </h3>
            <p className="text-sm text-charcoal-700/80">
              Tente remover algum filtro ou confira todo o nosso catálogo para encontrar seu modelo ideal.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-olive-700 text-ivory-50 text-xs font-medium hover:bg-olive-800 transition-colors"
            >
              Mostrar todos os modelos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showDirectWhatsAppButton={isReadyToShip(product)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Rodapé de ajuda no catálogo */}
      <div className="p-8 rounded-3xl bg-white border border-sand-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="font-serif text-2xl font-medium text-charcoal-900">
            Deseja uma combinação especial de cores?
          </h3>
          <p className="text-sm text-charcoal-700/85 max-w-xl">
            Qualquer modelo do catálogo pode ser confeccionado na cor que você preferir sob encomenda.
          </p>
        </div>
        <Link
          to="/personalize"
          className="px-6 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-ivory-50 text-sm font-medium transition-colors whitespace-nowrap"
        >
          Saiba como personalizar
        </Link>
      </div>
    </div>
  );
};
