import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-[#f0fdf4]">
      {/* Abstract Blurred Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200/40 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-[100px] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center">
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-green-700 font-bold text-xs uppercase tracking-widest mb-4 lg:mb-6 shadow-sm animate-fade-in w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
              <span className="whitespace-nowrap">100% Natural & Organic</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-bengali leading-[1.1] text-gray-900 mb-4 lg:mb-5 animate-slide-down">
              শুদ্ধতার ছোঁয়া, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500 relative inline-block">
                প্রকৃতির দান
                <svg className="absolute w-full h-2.5 lg:h-3 -bottom-1 left-0 text-yellow-400 opacity-60 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 18.0084 10 75.8828 7.00095C108.311 5.32077 165.719 -2.57143 197.957 1.99975" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mb-5 lg:mb-6 animate-slide-down" style={{animationDelay: '0.1s'}}>
              Experience the true essence of nature with our premium collection of organic foods. Sourced directly from artisans, delivered fresh to your door.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6 lg:mb-8 animate-slide-down" style={{animationDelay: '0.2s'}}>
              <a href="#products" className="px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                <i className="fa-solid fa-basket-shopping"></i> Shop Now
              </a>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white/60 backdrop-blur-md border border-white/60 text-gray-800 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base hover:bg-white hover:shadow-lg transition-all flex items-center gap-2 group">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-play text-xs"></i>
                </div>
                Our Process
              </button>
            </div>
            
            {/* Glass Stats Card */}
            <div className="inline-flex items-center gap-4 lg:gap-6 p-3 lg:p-4 bg-white/40 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/50 animate-fade-in w-fit" style={{animationDelay: '0.4s'}}>
              <div className="flex -space-x-3 lg:-space-x-4 flex-shrink-0">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[2px] lg:border-[3px] border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover"/>
                  </div>
                ))}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[2px] lg:border-[3px] border-white bg-gray-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">+2k</div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex text-yellow-400 text-xs mb-0.5 lg:mb-1">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-xs lg:text-sm font-bold text-gray-700 whitespace-nowrap">Trusted by 15k+ People</p>
              </div>
            </div>
          </div>

          {/* Right Image & Floating Elements */}
          <div className="w-full lg:w-1/2 relative animate-fade-in flex items-center" style={{animationDelay: '0.3s'}}>
            <div className="relative z-10 mx-auto max-w-[500px] lg:max-w-full w-full">
              <img 
                src="/App/Assets/hero-image.avif" 
                alt="Organic Grocery" 
                className="w-full h-auto rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] relative z-10 border-[6px] border-white/50"
              />
              
              {/* Glass Floating Card 1 */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:-left-6 lg:top-10 lg:-left-12 bg-white/80 backdrop-blur-xl p-2 sm:p-2.5 md:p-3 lg:p-4 pr-2 sm:pr-3 md:pr-4 lg:pr-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/60 flex items-center gap-2 sm:gap-3 md:gap-4 animate-float z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-500 text-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-sm sm:text-base md:text-xl lg:text-2xl shadow-lg shadow-green-500/30 flex-shrink-0">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Delivery</p>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg leading-tight">30 Mins</p>
                </div>
              </div>

              {/* Glass Floating Card 2 */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:-right-4 lg:bottom-10 lg:-right-8 bg-white/80 backdrop-blur-xl p-2 sm:p-2.5 md:p-3 lg:p-4 pr-2 sm:pr-3 md:pr-4 lg:pr-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/60 flex items-center gap-2 sm:gap-3 md:gap-4 animate-float-delayed z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-yellow-400 text-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-sm sm:text-base md:text-xl lg:text-2xl shadow-lg shadow-yellow-400/30 flex-shrink-0">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Quality</p>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Premium</p>
                </div>
              </div>
              
              {/* Decorative circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-green-500/10 rounded-[3.5rem] -z-10 rotate-3"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

