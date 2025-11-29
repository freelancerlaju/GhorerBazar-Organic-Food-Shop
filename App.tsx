import React, { useState } from 'react';
import { AppLayout } from './components/AppLayout';
import { MainContent } from './components/MainContent';
import { CheckoutPage } from './components/CheckoutPage';
import { useCart } from './hooks/useCart';
import { useWishlist } from './hooks/useWishlist';
import { useToast } from './hooks/useToast';
import { useProductFilters } from './components/ProductFilters';
import { PRODUCTS } from './constants';
import { Product } from './types';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | string[] | null>(null);

  const { cartItems, cartCount, addToCart, updateCartQuantity, removeFromCart } = useCart();
  const { wishlistItems, wishlistCount, toggleWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const { filteredProducts } = useProductFilters(PRODUCTS, selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast(`Added ${product.title} to cart`);
  };

  const handleToggleWishlist = (product: Product) => {
    const wasAdded = toggleWishlist(product);
    if (wasAdded) {
      showToast(`Added ${product.title} to wishlist`);
    } else {
      showToast(`Removed ${product.title} from wishlist`);
    }
  };

  const handleShare = (product: Product) => {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!");
  };

  const handleUpdateCartQuantity = (id: number, delta: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      updateCartQuantity(id, delta);
      
      if (newQuantity <= 0) {
        showToast(`Removed ${item.title} from cart`, 'info');
      } else if (delta > 0) {
        showToast(`Increased ${item.title} quantity to ${newQuantity}`, 'success');
      } else {
        showToast(`Decreased ${item.title} quantity to ${newQuantity}`, 'info');
      }
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      removeFromCart(id);
      showToast(`Removed ${item.title} from cart`, 'info');
    }
  };

  const handleRemoveFromWishlist = (id: number) => {
    const item = wishlistItems.find(item => item.id === id);
    if (item) {
      removeFromWishlist(id);
      showToast(`Removed ${item.title} from wishlist`, 'info');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast('Your cart is empty', 'warning');
      return;
    }

    // Close cart drawer
    setIsCartOpen(false);
    
    // Open checkout page
    setIsCheckoutOpen(true);
  };

  const handleBackFromCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
      <AppLayout
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        selectedProduct={selectedProduct}
        isCartOpen={isCartOpen}
        isWishlistOpen={isWishlistOpen}
        isSearchOpen={isSearchOpen}
        onCloseCart={() => setIsCartOpen(false)}
        onCloseWishlist={() => setIsWishlistOpen(false)}
        onCloseSearch={() => setIsSearchOpen(false)}
        onSetSelectedProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onToggleWishlist={handleToggleWishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onShare={handleShare}
        onCheckout={handleCheckout}
      >
      {isCheckoutOpen ? (
        <CheckoutPage
          cartItems={cartItems}
          onBack={handleBackFromCheckout}
        />
      ) : (
        <MainContent
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          selectedCategory={selectedCategory}
          filteredProducts={filteredProducts}
          wishlistItems={wishlistItems}
          cartItems={cartItems}
          onCartClick={() => setIsCartOpen(true)}
          onWishlistClick={() => setIsWishlistOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onCategoryChange={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onViewDetails={setSelectedProduct}
          onUpdateQuantity={handleUpdateCartQuantity}
          onSubscribe={showToast}
        />
      )}
    </AppLayout>
  );
};