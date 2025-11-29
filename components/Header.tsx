import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { CartItem } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  wishlistCount: number;
  onWishlistClick: () => void;
  onSearchClick: () => void;
  onCategoryChange?: (category: string | string[] | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, wishlistCount, onWishlistClick, onSearchClick, onCategoryChange }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    if (link.href === '#products' && link.category !== undefined && onCategoryChange) {
      e.preventDefault();
      onCategoryChange(link.category);
      // Scroll to products section
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (link.href.startsWith('#')) {
      e.preventDefault();
      const targetId = link.href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (link.category === null && onCategoryChange) {
        onCategoryChange(null);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-30">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 lg:px-[100px] flex justify-between items-center">
          <p className="hidden sm:block opacity-90">Welcome to Ghorer Bazar - Authentic Organic Food</p>
          <div className="flex items-center gap-4 ml-auto font-medium">
            <a href="tel:+8801321208940" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
              <i className="fa-solid fa-phone"></i> +8801 3021-44805
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:09642922922" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
              <i className="fa-solid fa-headset"></i> 0912-3456789
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full animate-fade-in-down bg-white/80 backdrop-blur-md shadow-lg' : 'relative bg-white shadow-md'}`}>
        <div className="container mx-auto px-4 lg:px-[100px] py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 text-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            {/* Logo */}
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-leaf text-primary text-2xl md:text-3xl"></i>
              <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                Ghorer<span className="text-primary">Bazar</span>
              </span>
            </a>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                onClick={onSearchClick}
                readOnly
                className="w-full border-2 border-gray-100 bg-gray-50 rounded-full py-2 px-5 pl-10 focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <button 
                onClick={onSearchClick}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors"
              >
                Search
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={onWishlistClick}
                className="relative flex flex-col items-center text-gray-600 hover:text-secondary transition-colors group"
              >
                <div className="relative">
                  <i className="fa-regular fa-heart text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium hidden md:block mt-1">Wishlist</span>
              </button>

              <button 
                onClick={onCartClick}
                className="relative flex flex-col items-center text-gray-600 hover:text-primary transition-colors group"
              >
                <div className="relative">
                  <i className="fa-solid fa-cart-shopping text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium hidden md:block mt-1">Cart</span>
              </button>


              <button className="hidden md:flex flex-col items-center text-gray-600 hover:text-primary transition-colors group">
                <i className="fa-regular fa-user text-xl mb-1 group-hover:scale-110 transition-transform"></i>
                <span className="text-xs font-medium">Account</span>
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="mt-3 md:hidden relative">
             <input 
                type="text" 
                placeholder="Search..." 
                onClick={onSearchClick}
                readOnly
                className="w-full border border-gray-200 bg-gray-50 rounded-lg py-2 px-4 pl-9 focus:outline-none focus:border-primary cursor-pointer"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Navigation Bar - Desktop */}
        <div className="hidden md:block border-t border-gray-100">
          <div className="container mx-auto px-4 lg:px-[100px]">
            <nav className="flex items-center justify-center gap-8 py-3">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors cursor-pointer ${link.special ? 'text-secondary' : 'text-gray-700'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl animate-slide-down">
          <nav className="flex flex-col p-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`py-3 border-b border-gray-50 text-sm font-bold cursor-pointer ${link.special ? 'text-secondary' : 'text-gray-700'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="py-3 text-gray-700 text-sm font-bold flex items-center gap-2">
               <i className="fa-regular fa-user"></i> My Account
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};