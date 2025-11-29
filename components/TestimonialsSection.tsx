import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => {
        const maxIndex = TESTIMONIALS_DATA.length - itemsPerPage;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerPage, isPaused]);

  const nextSlide = () => {
    const maxIndex = TESTIMONIALS_DATA.length - itemsPerPage;
    setCurrentTestimonialIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = TESTIMONIALS_DATA.length - itemsPerPage;
    setCurrentTestimonialIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    const maxIndex = TESTIMONIALS_DATA.length - itemsPerPage;
    setCurrentTestimonialIndex(Math.min(index, maxIndex));
  };

  return (
    <section 
      className="py-10 md:py-20 bg-gradient-to-br from-gray-50 via-green-50 to-[#f0fdf4] relative overflow-hidden" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Elements - Responsive sizes */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
        {/* Section Header - Responsive typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
            <i className="fa-solid fa-star text-xs sm:text-sm"></i>
            <span className="whitespace-nowrap">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-bengali leading-tight px-2">
            গ্রাহকরা কি <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">বলছেন?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed">
            Don't just take our word for it. Join thousands of satisfied customers who trust Ghorer Bazar for their daily organic needs.
          </p>
        </div>

        {/* Carousel Container - Responsive for mobile, tablet, desktop */}
        <div className="relative group" ref={carouselRef}>
          {/* Slides Track - Responsive padding */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * (100 / itemsPerPage)}%)` }}
            >
              {TESTIMONIALS_DATA.map((item, index) => {
                // Calculate center card index - for mobile (1 card), tablet (2 cards), desktop (3 cards)
                let centerIndex;
                if (itemsPerPage === 1) {
                  centerIndex = currentTestimonialIndex; // Mobile: current card is center
                } else if (itemsPerPage === 2) {
                  centerIndex = currentTestimonialIndex; // Tablet: first visible card is center
                } else {
                  centerIndex = currentTestimonialIndex + Math.floor(itemsPerPage / 2); // Desktop: middle card
                }
                const isCenterCard = index === centerIndex;
                
                return (
                  <div 
                    key={item.id} 
                    className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    {/* Material Card - Responsive design with consistent spacing */}
                    <div 
                      className={`bg-white rounded-xl sm:rounded-2xl h-full flex flex-col relative overflow-hidden transition-all duration-500 ${
                        isCenterCard 
                          ? 'scale-100 opacity-100' 
                          : itemsPerPage === 1 
                            ? 'opacity-100' // Mobile: all cards same size
                            : 'scale-[0.95] opacity-70'
                      }`}
                      style={{
                        // Material Design shadows - responsive
                        boxShadow: isCenterCard || itemsPerPage === 1
                          ? '0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.12)' 
                          : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                        // Ensure consistent spacing regardless of scale
                        transformOrigin: 'center center'
                      }}
                      onMouseEnter={(e) => {
                        if (isCenterCard || itemsPerPage === 1) {
                          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.18), 0 6px 12px rgba(0,0,0,0.15)';
                          if (isCenterCard) {
                            e.currentTarget.style.transform = 'scale(1) translateY(-4px)';
                          } else {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                          }
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isCenterCard || itemsPerPage === 1) {
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.12)';
                          if (isCenterCard) {
                            e.currentTarget.style.transform = 'scale(1) translateY(0)';
                          } else {
                            e.currentTarget.style.transform = 'translateY(0)';
                          }
                        }
                      }}
                    >
                      {/* Large subtle quotation mark - Responsive size */}
                      <i className="fa-solid fa-quote-left absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-100 opacity-30 z-0"></i>
                      
                      {/* Content - Responsive padding with consistent spacing */}
                      <div className="relative z-10 flex flex-col h-full px-4 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5 md:px-6 md:pt-6 md:pb-6 lg:px-8 lg:pt-8 lg:pb-8 min-h-0">
                        {/* Avatar and Header Section - Responsive spacing */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 flex-shrink-0">
                          {/* Circular Avatar - Responsive sizes */}
                          <div 
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0"
                            style={{
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                          >
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          
                          {/* Name, Role and Stars */}
                          <div className="flex-1 min-w-0">
                            {/* Name - Responsive typography */}
                            <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5 leading-tight">
                              {item.name.split(' ')[0]} {item.name.split(' ')[1]?.[0]}.
                            </h4>
                            
                            {/* Role/Designation - Responsive chip */}
                            <span className="inline-block text-[9px] sm:text-[10px] font-bold text-primary bg-green-50 px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5 sm:mb-2">
                              {item.role}
                            </span>
                            
                            {/* Rating Display - Responsive */}
                            <div className="flex items-center gap-0.5 sm:gap-1 mt-1.5 sm:mt-2">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i 
                                  key={i} 
                                  className={`fa-star text-[10px] sm:text-xs md:text-sm ${
                                    i < item.rating 
                                      ? 'fa-solid text-amber-500' 
                                      : 'fa-regular text-gray-300'
                                  }`}
                                ></i>
                              ))}
                              <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-bold ml-0.5 sm:ml-1">
                                {item.rating}.0
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Review Text - Responsive typography */}
                        <div className="flex-grow flex items-start mb-4 sm:mb-5 min-h-0">
                          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base font-normal">
                            "{item.quote}"
                          </p>
                        </div>

                        {/* Verified Badge - Responsive, fixed bottom spacing */}
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <i className="fa-solid fa-check text-green-600 text-[8px] sm:text-xs"></i>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                            Verified Purchase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls - Responsive: Desktop/Tablet only */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute top-1/2 -left-4 md:-left-6 lg:-left-8 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full items-center justify-center text-gray-700 hover:text-primary transition-all z-20 focus:outline-none"
            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left text-sm md:text-base"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute top-1/2 -right-4 md:-right-6 lg:-right-8 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full items-center justify-center text-gray-700 hover:text-primary transition-all z-20 focus:outline-none"
            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right text-sm md:text-base"></i>
          </button>

          {/* Mobile Navigation - Swipe indicators */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md"
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md"
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>

        {/* Pagination Dots - Responsive */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 gap-1.5 sm:gap-2">
          {Array.from({ length: Math.ceil(TESTIMONIALS_DATA.length - itemsPerPage + 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentTestimonialIndex === idx 
                ? 'bg-primary w-6 sm:w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

