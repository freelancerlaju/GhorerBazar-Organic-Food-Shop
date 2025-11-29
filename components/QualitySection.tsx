import React from 'react';

export const QualitySection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50 to-[#f0fdf4] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-green-200/30 rounded-full blur-[80px] sm:blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-yellow-200/30 rounded-full blur-[60px] sm:blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-7 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
                <i className="fa-solid fa-star text-xs sm:text-sm"></i> Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-bengali leading-tight mb-3 sm:mb-4 text-gray-900">
                গ্রাম বাংলার <span className="text-primary relative inline-block">খাঁটি স্বাদ
                  <svg className="absolute w-full h-2 sm:h-3 -bottom-0.5 sm:-bottom-1 left-0 text-yellow-400 opacity-60 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 18.0084 10 75.8828 7.00095C108.311 5.32077 165.719 -2.57143 197.957 1.99975" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                </span> এখন আপনার ঘরে
              </h2>
            </div>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We don't just sell products; we deliver a promise of purity. Our team travels to the remotest corners of Bangladesh to source the best ingredients directly from farmers, ensuring zero adulteration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {[
                { icon: "fa-leaf", title: "Chemical Free", desc: "No artificial preservatives", bgColor: "bg-primary/10", iconColor: "text-primary" },
                { icon: "fa-hand-holding-heart", title: "Ethical Sourcing", desc: "Fair trade with farmers", bgColor: "bg-yellow-400/10", iconColor: "text-yellow-600" },
                { icon: "fa-flask", title: "Lab Tested", desc: "Certified for purity", bgColor: "bg-primary/10", iconColor: "text-primary" },
                { icon: "fa-award", title: "Premium Quality", desc: "Grade A products only", bgColor: "bg-yellow-400/10", iconColor: "text-yellow-600" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary group cursor-default">
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 ${item.iconColor} text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg mb-1 text-gray-900 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#about" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30 transition-all transform hover:-translate-y-1"
            >
              Explore Our Story
              <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400/20 rounded-full blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <img 
                  src="/App/Assets/grocery-business.avif" 
                  alt="Quality Assurance" 
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover transform transition-transform duration-700 hover:scale-[1.02] border-2 sm:border-4 border-white"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                {/* Guarantee Badge */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:-right-8 bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 max-w-[200px] sm:max-w-[240px] md:max-w-[260px] z-20 animate-float">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-green-600 flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                      <i className="fa-solid fa-check text-sm sm:text-base md:text-lg"></i>
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg text-gray-900 leading-tight">Money Back Guarantee</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                    If you are not satisfied with the quality, we offer a 100% refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

