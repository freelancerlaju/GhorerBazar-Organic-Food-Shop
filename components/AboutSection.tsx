import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-[#f0fdf4] relative overflow-hidden">
      {/* Background Decorations - Matching Hero Section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200/40 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Accent Lines - Hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="hidden md:block absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-primary to-transparent"></div>
      <div className="hidden md:block absolute top-20 right-0 w-32 h-px bg-gradient-to-l from-primary to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] relative z-10">
        {/* Modern Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-primary text-xs sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">Our Story</span>
            <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-1.5 sm:mt-2"></div>
          </div>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 font-bengali leading-[1.2] tracking-tight px-2 sm:px-4'>
            প্রকৃতির বিশ্বাস, আমাদের <span className="text-primary">প্রতিশ্রুতি</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-[1.6] font-normal px-4 tracking-wide">
            A journey of authenticity, quality, and trust that connects rural Bangladesh with urban families
          </p>
        </div>

        {/* Modern Story Section - Split Layout */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-stretch">
            {/* Left: Content */}
            <div className="order-2 lg:order-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                  <div className="w-6 sm:w-8 md:w-10 h-px bg-gradient-to-r from-primary to-transparent"></div>
                  <span className="text-primary font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">আমাদের গল্প</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 font-bengali leading-[1.2] tracking-tight">
                  From Farm to<br className="hidden sm:block" />
                  <span className="text-primary">Your Home</span>
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-4 text-gray-700">
                <p className="text-xs sm:text-sm md:text-base leading-[1.7] font-normal tracking-wide">
                  <span className="font-semibold text-gray-900">Ghorer Bazar</span> was born from a simple belief: everyone deserves access to pure, authentic, and chemical-free food. Founded in 2020, we started as a small initiative to connect urban families with the finest organic products directly from rural Bangladesh.
                </p>
                <p className="text-xs sm:text-sm md:text-base leading-[1.7] font-normal tracking-wide">
                  Our journey began when we realized how difficult it was to find genuine, unadulterated products in the city. We decided to bridge this gap by traveling to remote villages, meeting farmers personally, and ensuring every product meets our strict quality standards.
                </p>
              </div>

              {/* Modern Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1 sm:pt-2 md:pt-3">
                <div className="group px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-r from-primary/10 to-green-50 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <i className="fa-solid fa-handshake text-primary text-[10px] sm:text-xs"></i>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800">Direct from Farmers</span>
                  </div>
                </div>
                <div className="group px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-full border border-yellow-200 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <i className="fa-solid fa-certificate text-yellow-600 text-[10px] sm:text-xs"></i>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative h-full">
              <div className="relative group h-full">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-full w-full">
                  <img
                    src="./App/Assets/our-story.png"
                    alt="Organic Farming"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge - Responsive */}
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 bg-white rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-2xl border border-gray-100 group-hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-md sm:rounded-lg bg-gradient-to-br from-primary to-green-600 flex items-center justify-center shadow-lg">
                      <i className="fa-solid fa-seedling text-white text-[10px] sm:text-xs md:text-sm"></i>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">2020</div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider">Founded</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-2 -left-2 md:-top-3 md:-left-3 lg:-top-4 lg:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-primary/20 rounded-full -z-10"></div>
                <div className="hidden sm:block absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 border-2 border-green-200/50 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Values & Vision Cards - Modern Clean Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Mission Card */}
          <div className="group relative p-4 sm:p-5 md:p-6 lg:p-7 border border-white/60 rounded-lg sm:rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/60 backdrop-blur-md hover:bg-white/80 hover:shadow-lg shadow-sm">
            <div className="mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/20">
                <i className="fa-solid fa-bullseye text-primary group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"></i>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Our Mission</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-[1.6] font-normal tracking-wide">
                To make authentic, organic, and chemical-free food accessible to every household in Bangladesh while supporting local farmers.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="group relative p-4 sm:p-5 md:p-6 lg:p-7 border border-white/60 rounded-lg sm:rounded-xl hover:border-yellow-400/50 transition-all duration-300 cursor-pointer bg-white/60 backdrop-blur-md hover:bg-white/80 hover:shadow-lg shadow-sm">
            <div className="mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-yellow-100/80 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-yellow-400/20">
                <i className="fa-solid fa-heart text-yellow-600 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"></i>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Our Values</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-[1.6] font-normal tracking-wide">
                Authenticity, transparency, and trust. We believe in honest business practices, fair trade, and building lasting relationships.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative p-4 sm:p-5 md:p-6 lg:p-7 border border-white/60 rounded-lg sm:rounded-xl hover:border-green-500/50 transition-all duration-300 cursor-pointer bg-white/60 backdrop-blur-md hover:bg-white/80 hover:shadow-lg shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-green-100/80 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/20">
                <i className="fa-solid fa-eye text-green-600 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base"></i>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Our Vision</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-[1.6] font-normal tracking-wide">
                To become Bangladesh's most trusted organic food marketplace, where quality meets affordability.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section - Matching Website Colors */}
        <div className="relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2315803d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10">
              <div className="inline-block mb-2 sm:mb-2.5">
                <span className="text-primary text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">Our Achievements</span>
                <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-1.5 sm:mt-2"></div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 font-bengali px-2">আমাদের অর্জন</h3>
              <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm px-4">Numbers that speak for our commitment</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {[
                { number: "15k+", label: "Happy Customers", icon: "fa-users" },
                { number: "500+", label: "Farmers", icon: "fa-tractor" },
                { number: "20+", label: "Product Categories", icon: "fa-layer-group" },
                { number: "50k+", label: "Orders Delivered", icon: "fa-truck-fast" },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="text-center group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <i className={`fa-solid ${stat.icon} text-primary text-xs sm:text-sm md:text-base lg:text-lg`}></i>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-1.5">{stat.number}</div>
                  <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-tight px-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

