import React from 'react';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { Product, CartItem } from '../types';

interface ProductsSectionProps {
  products: Product[];
  selectedCategory: string | string[] | null;
  onCategoryChange: (category: string | string[] | null) => void;
  filteredProducts: Product[];
  wishlistItems: Product[];
  cartItems?: CartItem[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onUpdateQuantity?: (id: number, delta: number) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  selectedCategory,
  onCategoryChange,
  filteredProducts,
  wishlistItems,
  cartItems = [],
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  onUpdateQuantity,
}) => {
  return (
    <section id="products" className="container mx-auto px-4 lg:px-[100px] py-10 md:py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-primary font-bold uppercase tracking-wider text-sm bg-green-50 px-3 py-1 rounded-full mb-2 inline-block">Our Collection</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">Featured Products</h2>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        products={products}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
            isWishlisted={wishlistItems.some(item => item.id === product.id)}
            onToggleWishlist={onToggleWishlist}
            onViewDetails={onViewDetails}
            cartItems={cartItems}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>
    </section>
  );
};

