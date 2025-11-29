import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { DealsSection } from './DealsSection';
import { ProductsSection } from './ProductsSection';
import { QualitySection } from './QualitySection';
import { TestimonialsSection } from './TestimonialsSection';
import { NewsletterSection } from './NewsletterSection';
import { AboutSection } from './AboutSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';

interface MainContentProps {
  cartCount: number;
  wishlistCount: number;
  selectedCategory: string | string[] | null;
  filteredProducts: Product[];
  wishlistItems: Product[];
  cartItems?: CartItem[];
  onCartClick: () => void;
  onWishlistClick: () => void;
  onSearchClick: () => void;
  onCategoryChange: (category: string | string[] | null) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onUpdateQuantity?: (id: number, delta: number) => void;
  onSubscribe: (message: string) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  cartCount,
  wishlistCount,
  selectedCategory,
  filteredProducts,
  wishlistItems,
  cartItems = [],
  onCartClick,
  onWishlistClick,
  onSearchClick,
  onCategoryChange,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  onUpdateQuantity,
  onSubscribe,
}) => {
  return (
    <>
      <Header 
        cartCount={cartCount}
        onCartClick={onCartClick}
        wishlistCount={wishlistCount}
        onWishlistClick={onWishlistClick}
        onSearchClick={onSearchClick}
        onCategoryChange={onCategoryChange}
      />

      <main>
        <HeroSection />

        {/* Deals Section */}
        <DealsSection
          products={PRODUCTS}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlistItems={wishlistItems}
          cartItems={cartItems}
          onViewDetails={onViewDetails}
          onUpdateQuantity={onUpdateQuantity}
        />

        <ProductsSection
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          filteredProducts={filteredProducts}
          wishlistItems={wishlistItems}
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          onViewDetails={onViewDetails}
          onUpdateQuantity={onUpdateQuantity}
        />

        {/* Quality Guarantee / Feature Section */}
        <QualitySection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section
        <NewsletterSection onSubscribe={onSubscribe} /> */}

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </>
  );
};

