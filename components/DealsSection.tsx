import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, CartItem } from '../types';

interface DealsSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistItems: Product[];
  cartItems?: CartItem[];
  onViewDetails: (product: Product) => void;
  onUpdateQuantity?: (id: number, delta: number) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistItems,
  cartItems = [],
  onViewDetails,
  onUpdateQuantity,
}) => {
  // Get products with badges (Sale/Hot) or significant discounts
  const deals = products.filter(p => 
    p.badge || (p.originalPrice && ((p.originalPrice - p.price) / p.originalPrice) > 0.1)
  ).slice(0, 8);

  return (
    <section id="offer" className="py-10 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 lg:px-[100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-bold text-xs uppercase tracking-widest mb-4 animate-pulse">
            <i className="fa-solid fa-fire"></i>
            Limited Time Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-bengali">
            বিশেষ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">অফার</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't miss out on these amazing deals! Stock up on your favorite organic products at unbeatable prices.
          </p>
        </div>

        {/* Deals Grid - Using same ProductCard component */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {deals.map(product => (
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

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <span>View All Deals</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

