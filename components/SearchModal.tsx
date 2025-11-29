import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistItems: Product[];
  onViewDetails: (product: Product) => void;
}

const SEARCH_HISTORY_KEY = 'ghorer-bazar-search-history';
const MAX_HISTORY_ITEMS = 10;

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistItems,
  onViewDetails
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search query to history
  const saveToHistory = (query: string) => {
    if (!query.trim()) return;
    
    const trimmedQuery = query.trim();
    setSearchHistory(prev => {
      // Remove duplicate and add to beginning
      const updated = [trimmedQuery, ...prev.filter(item => item.toLowerCase() !== trimmedQuery.toLowerCase())];
      // Keep only last MAX_HISTORY_ITEMS
      const limited = updated.slice(0, MAX_HISTORY_ITEMS);
      
      try {
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(limited));
      } catch (error) {
        console.error('Failed to save search history:', error);
      }
      
      return limited;
    });
  };

  // Handle search from history
  const handleHistoryClick = (query: string) => {
    setSearchQuery(query);
    saveToHistory(query);
  };

  // Clear search history
  const clearHistory = () => {
    setSearchHistory([]);
    try {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
      console.error('Failed to clear search history:', error);
    }
  };

  // Handle product view details - close search modal when product is clicked
  const handleViewDetails = (product: Product) => {
    if (searchQuery.trim()) {
      saveToHistory(searchQuery);
    }
    onViewDetails(product);
    onClose(); // Close the search modal
  };

  // Handle Enter key to save search
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      saveToHistory(searchQuery);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.bengaliTitle?.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-4xl mx-auto mt-20 rounded-2xl shadow-2xl max-h-[80vh] flex flex-col animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search products, categories, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary text-lg"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-6">
          {searchQuery.trim() === '' ? (
            <div>
              {searchHistory.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <i className="fa-solid fa-clock-rotate-left text-primary"></i>
                      Recent Searches
                    </h3>
                    <button
                      onClick={clearHistory}
                      className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <i className="fa-solid fa-trash text-xs"></i>
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.map((query, index) => (
                      <button
                        key={index}
                        onClick={() => handleHistoryClick(query)}
                        className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium text-gray-700 transition-all duration-200 flex items-center gap-2 group"
                      >
                        <i className="fa-solid fa-clock-rotate-left text-xs text-gray-400 group-hover:text-white"></i>
                        <span>{query}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <i className="fa-solid fa-magnifying-glass text-6xl text-gray-200 mb-4"></i>
                  <p className="text-gray-500 text-lg">Start typing to search for products...</p>
                </div>
              )}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <i className="fa-solid fa-box-open text-6xl text-gray-200 mb-4"></i>
              <p className="text-gray-600 text-lg font-semibold mb-2">No products found</p>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-4">
                Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    isWishlisted={wishlistItems.some(item => item.id === product.id)}
                    onToggleWishlist={onToggleWishlist}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

