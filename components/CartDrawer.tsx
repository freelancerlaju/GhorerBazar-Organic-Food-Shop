import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity,
  onRemove,
  onCheckout
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Reset loading when drawer closes
  React.useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleCheckout = () => {
    if (!onCheckout) return;
    
    setIsLoading(true);
    // Small delay to show loading state, then proceed
    setTimeout(() => {
      onCheckout();
    }, 300);
  };

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
            <i className="fa-solid fa-basket-shopping text-primary"></i>
            Shopping Cart 
            <span className="text-sm font-normal text-gray-500">({cartItems.length} items)</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-secondary transition-colors">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
                 <i className="fa-solid fa-basket-shopping text-4xl text-primary opacity-80"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-8 max-w-[220px] leading-relaxed">
                Looks like you haven't added any organic goodness yet.
              </p>
              <button 
                onClick={onClose} 
                className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-green-700 transition-all hover:shadow-green-500/30 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Start Shopping <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md border" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 line-clamp-1 font-bengali">
                    {item.bengaliTitle || item.title}
                  </h4>
                  <p className="text-primary font-bold mt-1">৳{item.price}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Control */}
                    <div className="flex items-center border rounded-md">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-medium min-w-[2rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-secondary transition-colors p-2"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">৳{subtotal}</span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className={`w-full bg-primary text-white py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                isLoading 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:bg-green-800'
              }`}
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};