import { useState } from 'react';
import { Product } from '../types';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const toggleWishlist = (product: Product): boolean => {
    let wasAdded = false;
    setWishlistItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      wasAdded = true;
      return [...prev, product];
    });
    return wasAdded;
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const isWishlisted = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    wishlistCount: wishlistItems.length,
    toggleWishlist,
    removeFromWishlist,
    isWishlisted,
  };
};

