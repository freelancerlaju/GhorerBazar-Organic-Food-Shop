import React, { useState } from 'react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: number, delta: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onViewDetails,
  cartItems = [],
  onUpdateQuantity
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get current quantity from cart
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const subtotal = quantity > 0 ? product.price * quantity : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    
    // Reset button state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleQuantityChange = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation();
    if (onUpdateQuantity && product.id) {
      onUpdateQuantity(product.id, delta);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full relative cursor-pointer transition-all duration-300 ease-out group"
      style={{
        // Material Design 3: Realistic drop shadow - cards appear to lift off screen
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      }}
      onMouseEnter={(e) => {
        // Elevated state: Deeper shadow showing card is floating higher
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.12)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        // Rest state: Card sits on surface
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onClick={() => onViewDetails(product)}
    >
      {/* Image Container - Edge-to-edge hero image card with depth */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        {/* High-resolution food photograph - edge-to-edge */}
        <img 
          src={imageError ? "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" : product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          onError={() => setImageError(true)}
          style={{
            // High contrast lighting emphasizes texture
            filter: 'contrast(1.05) saturate(1.1)'
          }}
        />
        
        {/* Material Design Badges - Elevated chips with realistic shadows */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-white uppercase tracking-wide ${
              product.badge === 'Sale' 
                ? 'bg-red-500' 
                : 'bg-orange-500'
            }`}
            style={{
              // Chip elevation - floats above image
              boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
            }}>
              {product.badge}
            </span>
          )}
          {product.originalPrice && discountPercentage > 0 && (
            <span className="text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-green-500 text-white uppercase tracking-wide"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)'
            }}>
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Material Design FAB - Floating Action Button with deep shadow (highest layer) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center transition-all duration-200 z-30 ${
            isWishlisted 
              ? 'text-red-500 opacity-100' 
              : 'text-gray-700 opacity-0 group-hover:opacity-100'
          }`}
          style={{
            // FAB has deepest shadow - highest elevation layer
            boxShadow: '0 4px 12px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.2)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart text-sm sm:text-base`}></i>
        </button>

        {/* Out of Stock Overlay */}
        {product.availability === 'Out of Stock' && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
            <span className="bg-white text-gray-900 text-sm font-bold px-5 py-2.5 rounded-xl"
            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content Section - Material Design Card Content (tactile surface) */}
      <div className="flex flex-col flex-grow p-3 sm:p-4 min-h-[200px] sm:min-h-[220px]">
        {/* Category Chip - Material Design Chip */}
        <div className="mb-1.5">
          <span className="inline-block text-[9px] sm:text-[10px] font-bold text-primary bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Product Title - Bold, sans-serif typography (Material Design) */}
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 line-clamp-2 font-bengali leading-tight tracking-tight">
          {product.bengaliTitle || product.title}
        </h3>
        
        {/* Weight/Details - Secondary text */}
        {product.weight && (
          <p className="text-[10px] sm:text-xs text-gray-600 mb-2 font-normal leading-relaxed">
            {product.weight}
          </p>
        )}

        {/* Rating - Material Design */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            <i className="fa-solid fa-star text-xs text-amber-500"></i>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-700 font-bold">5.0</span>
        </div>

        {/* Price & Add to Cart Section - Fixed position at bottom */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          {quantity > 0 ? (
            /* When items in cart: Show price, subtotal and quantity controls in same space */
            <div className="flex items-center justify-between gap-2">
              {/* Left Side: Price and Subtotal */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#DE2D25] tracking-tight whitespace-nowrap">৳{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[10px] sm:text-xs text-gray-500 line-through font-medium whitespace-nowrap">
                      ৳{product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] sm:text-[10px] text-gray-600 font-medium">Subtotal:</span>
                  <span className="text-xs sm:text-sm font-bold text-primary">৳{subtotal}</span>
                </div>
              </div>
              {/* Right Side: Quantity Controls */}
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border border-gray-200 flex-shrink-0">
                <button
                  onClick={(e) => handleQuantityChange(e, -1)}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center font-bold text-sm sm:text-base shadow-sm"
                  style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                  }}
                >
                  <i className="fa-solid fa-minus text-[8px] sm:text-[10px]"></i>
                </button>
                <span className="text-sm sm:text-base font-bold text-gray-900 min-w-[1.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={(e) => handleQuantityChange(e, 1)}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white hover:bg-green-700 transition-all duration-200 flex items-center justify-center font-bold text-sm sm:text-base shadow-sm"
                  style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                  }}
                >
                  <i className="fa-solid fa-plus text-[8px] sm:text-[10px]"></i>
                </button>
              </div>
            </div>
          ) : (
            /* When no items in cart: Show price and Add to Cart button */
            <div className="flex items-center justify-between gap-2">
              {/* Price - Left Side */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#DE2D25] tracking-tight whitespace-nowrap">৳{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[10px] sm:text-xs text-gray-500 line-through font-medium whitespace-nowrap">
                      ৳{product.originalPrice}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="text-[9px] sm:text-[10px] text-green-600 font-bold mt-0.5 uppercase tracking-wide whitespace-nowrap">
                    Save ৳{product.originalPrice - product.price}
                  </span>
                )}
              </div>

              {/* Add to Cart Button - Right Side */}
              <button 
                onClick={handleAdd}
                disabled={product.availability === 'Out of Stock' || isAdded}
                className={`h-8 sm:h-9 px-3 sm:px-4 rounded-full font-bold text-[10px] sm:text-xs transition-all duration-200 flex items-center justify-center gap-1.5 uppercase tracking-wide flex-shrink-0 ${
                  isAdded 
                    ? 'bg-green-500 text-white'
                    : product.availability === 'Out of Stock'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-green-700 active:bg-green-800'
                }`}
                style={{
                  // Button elevation - raised above card surface
                  boxShadow: product.availability === 'Out of Stock' || isAdded 
                    ? 'none' 
                    : '0 2px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)'
                }}
                onMouseEnter={(e) => {
                  if (product.availability !== 'Out of Stock' && !isAdded) {
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3), 0 2px 5px rgba(0,0,0,0.2)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (product.availability !== 'Out of Stock' && !isAdded) {
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isAdded ? (
                  <>
                    <i className="fa-solid fa-check text-[10px] sm:text-xs"></i>
                    <span className="hidden sm:inline">Added</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-shopping-cart text-[10px] sm:text-xs"></i>
                    <span className="hidden sm:inline">Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};