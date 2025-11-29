import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0e27] pt-10 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f172a] to-[#020617]"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h1v1H0zm39 0h1v1h-1zm0 39h1v1h-1zM0 39h1v1H0z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Subtle Accent Glows */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-green-500/6 rounded-full blur-3xl"></div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
        {/* Newsletter Section - Top of Footer */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-green-500/8 to-emerald-500/10 border border-primary/20 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-3 sm:mb-4">
              <i className="fa-solid fa-envelope text-primary text-[10px] sm:text-xs"></i>
              <span className="text-[10px] sm:text-xs font-semibold text-white">Newsletter</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-2 px-2">
              Stay <span className="text-primary">Connected</span>
            </h3>
            <p className="text-gray-400 mb-5 sm:mb-6 text-xs sm:text-sm px-2">Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto px-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 focus:border-primary focus:outline-none text-white placeholder-gray-500 transition-all duration-200 text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-green-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <a href="#" className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                  <i className="fa-solid fa-leaf text-white text-xl sm:text-2xl"></i>
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">Ghorer</span>
                <span className="text-xl sm:text-2xl font-bold text-primary block">Bazar</span>
              </div>
            </a>
            
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
              Bringing the purity of rural Bangladesh to your doorstep. We are committed to providing 100% organic, chemical-free, and ethically sourced food products.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 target_blank">
              {[
                { icon: 'fa-facebook-f', href: 'https://www.facebook.com/fb.freelancerlaju', label: 'Facebook' },
                { icon: 'fa-instagram', href: 'https://www.instagram.com/freelancerlaju', label: 'Instagram' },
                { icon: 'fa-x', href: 'https://www.x.com/freelancerlaju', label: 'X (Twitter)' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"

                  
                  className="group w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <i className={`fa-brands ${social.icon} text-gray-400 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-5 sm:h-6 bg-primary rounded-full"></div>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { href: '#', label: 'Home', icon: 'fa-home' },
                { href: '#products', label: 'All Products', icon: 'fa-box' },
                { href: '#offer', label: 'Special Offers', icon: 'fa-fire' },
                { href: '#about', label: 'Our Story', icon: 'fa-book' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 group"
                  >
                    <i className={`fa-solid ${link.icon} text-primary text-xs w-4 group-hover:scale-110 transition-transform`}></i>
                    <span className="text-xs sm:text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

           {/* Column 3: Customer Care */}
           <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-5 sm:h-6 bg-primary rounded-full"></div>
              <span>Customer Care</span>
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { href: '#', label: 'My Account', icon: 'fa-user' },
                { href: '#', label: 'Track Order', icon: 'fa-truck-fast' },
                { href: '#', label: 'Privacy Policy', icon: 'fa-shield-halved' },
                { href: '#', label: 'Terms & Conditions', icon: 'fa-file-contract' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 group"
                  >
                    <i className={`fa-solid ${link.icon} text-primary text-xs w-4 group-hover:scale-110 transition-transform`}></i>
                    <span className="text-xs sm:text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-5 sm:h-6 bg-primary rounded-full"></div>
              <span>Contact Us</span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { icon: 'fa-location-dot', text: 'House #12, Road #5, Dhanmondi, Dhaka-1209, Bangladesh' },
                { icon: 'fa-phone', text: '+8801321208940', mono: true },
                { icon: 'fa-envelope', text: 'support@ghorerbazar.com' }
              ].map((contact, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <i className={`fa-solid ${contact.icon} text-primary text-xs sm:text-sm`}></i>
                  </div>
                  <span className={`text-gray-400 text-xs sm:text-sm pt-1.5 sm:pt-2 group-hover:text-gray-300 transition-colors ${contact.mono ? 'font-mono' : ''}`}>
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 pb-6 sm:pb-8 md:pb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left Side: Copyright with Dynamic Year */}
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} Ghorer Bazar. All rights reserved.
              </p>
            </div>

            {/* Right Side: Design and Develop by */}
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-xs sm:text-sm">
                Design and develop by{' '}
                <a 
                  href="https://www.facebook.com/fb.freelancerlaju" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-green-400 transition-colors duration-200 font-semibold"
                >
                  freelancerlaju
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

