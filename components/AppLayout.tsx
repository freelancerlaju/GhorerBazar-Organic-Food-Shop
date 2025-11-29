import React from 'react';
import { SearchModal } from './SearchModal';
import { CartDrawer } from './CartDrawer';
import { WishlistDrawer } from './WishlistDrawer';
import { ProductDetails } from './ProductDetailsModal';
import { PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';

interface AppLayoutProps {
  cartItems: CartItem[];
  wishlistItems: Product[];
  selectedProduct: Product | null;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  onCloseCart: () => void;
  onCloseWishlist: () => void;
  onCloseSearch: () => void;
  onSetSelectedProduct: (product: Product | null) => void;
  onAddToCart: (product: Product) => void;
  onUpdateCartQuantity: (id: number, delta: number) => void;
  onRemoveFromCart: (id: number) => void;
  onToggleWishlist: (product: Product) => void;
  onRemoveFromWishlist: (id: number) => void;
  onShare: (product: Product) => void;
  onCheckout?: () => void;
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  cartItems,
  wishlistItems,
  selectedProduct,
  isCartOpen,
  isWishlistOpen,
  isSearchOpen,
  onCloseCart,
  onCloseWishlist,
  onCloseSearch,
  onSetSelectedProduct,
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onToggleWishlist,
  onRemoveFromWishlist,
  onShare,
  onCheckout,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      <SearchModal
        isOpen={isSearchOpen}
        onClose={onCloseSearch}
        products={PRODUCTS}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
        onViewDetails={onSetSelectedProduct}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={onCloseCart} 
        cartItems={cartItems} 
        onUpdateQuantity={onUpdateCartQuantity}
        onRemove={onRemoveFromCart}
        onCheckout={onCheckout}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={onCloseWishlist}
        wishlistItems={wishlistItems}
        onRemove={onRemoveFromWishlist}
        onAddToCart={onAddToCart}
      />

      {selectedProduct ? (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => onSetSelectedProduct(null)}
          onAddToCart={onAddToCart}
          wishlist={wishlistItems}
          onToggleWishlist={onToggleWishlist}
          onViewDetails={onSetSelectedProduct}
          onShare={onShare}
        />
      ) : (
        children
      )}
    </div>
  );
};

