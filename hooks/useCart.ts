import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            // If quantity reaches 0 or below, remove the item from cart
            if (newQuantity <= 0) {
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(item => item !== null) as CartItem[]; // Remove items with quantity 0 or less
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return {
    cartItems,
    cartCount,
    addToCart,
    updateCartQuantity,
    removeFromCart,
  };
};

