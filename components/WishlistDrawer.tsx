import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemove: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemove,
  onAddToCart
}) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-heart text-secondary"></i>
            Wishlist 
            <span className="text-sm font-normal text-gray-500">({wishlistItems.length} items)</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-secondary transition-colors">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
                 <i className="fa-regular fa-heart text-4xl text-secondary opacity-80"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-8 max-w-[220px] leading-relaxed">
                Save your favorite items here to purchase later.
              </p>
              <button 
                onClick={onClose} 
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-black transition-all transform hover:-translate-y-1"
              >
                Explore Products
              </button>
            </div>
          ) : (
            wishlistItems.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 relative group">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md border" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 line-clamp-1 font-bengali">
                    {item.bengaliTitle || item.title}
                  </h4>
                  <p className="text-primary font-bold mt-1">৳{item.price}</p>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <button 
                        onClick={() => onAddToCart(item)}
                        className="text-sm bg-primary text-white px-3 py-1.5 rounded-md hover:bg-green-800 transition-colors flex items-center gap-1 shadow-sm"
                    >
                        <i className="fa-solid fa-cart-plus"></i> Add
                    </button>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-sm text-red-500 hover:text-red-700 px-2 py-1.5 transition-colors border border-red-100 rounded-md hover:bg-red-50"
                      title="Remove from wishlist"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};