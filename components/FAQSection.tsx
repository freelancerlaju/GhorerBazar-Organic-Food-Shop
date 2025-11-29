import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I place an order?",
    answer: "You can browse our products, add items to your cart, and proceed to checkout. We accept cash on delivery, bKash, and bank transfers. Simply fill in your delivery address and confirm your order."
  },
  {
    question: "What are your delivery charges?",
    answer: "We offer free delivery for orders above ৳1000 within Dhaka city. For orders below ৳1000, a delivery charge of ৳50 applies. Outside Dhaka, delivery charges vary by location and will be calculated at checkout."
  },
  {
    question: "How long does delivery take?",
    answer: "We typically deliver within 24-48 hours for orders within Dhaka. For outside Dhaka, delivery takes 3-5 business days depending on your location. You'll receive SMS updates about your order status."
  },
  {
    question: "Are your products really organic?",
    answer: "Yes! All our products are sourced directly from farmers and certified organic suppliers. We personally visit farms to ensure quality and authenticity. Many products are lab-tested for purity and chemical-free certification."
  },
  {
    question: "Can I return or exchange products?",
    answer: "We offer a 7-day return policy for unopened products in original packaging. If you're not satisfied with the quality, contact us within 24 hours of delivery for a full refund or replacement. No questions asked!"
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer special pricing for bulk orders (usually 10+ items or ৳5000+). Contact us directly at +8801321208940 or email support@ghorerbazar.com for custom quotes."
  },
  {
    question: "How do I store the products?",
    answer: "Most products should be stored in a cool, dry place away from direct sunlight. Oils and ghee should be kept in airtight containers. Honey should be stored at room temperature. Specific storage instructions are included with each product."
  },
  {
    question: "Do you ship outside Bangladesh?",
    answer: "Currently, we only ship within Bangladesh. However, we're working on international shipping options. Subscribe to our newsletter to be notified when international shipping becomes available."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD), bKash, Nagad, Rocket, and bank transfers. For online payments, you can use bKash or bank transfer. All payment details are shared after order confirmation."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is confirmed, you'll receive an order ID via SMS. You can track your order status by calling our customer service at 09642-922922 or by logging into your account (coming soon)."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => {
      // If clicking the same FAQ that's already open, close it
      if (prevIndex === index) {
        return null;
      }
      // Otherwise, open the clicked FAQ (this will automatically close the previous one)
      return index;
    });
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-[#f5f5f5] relative overflow-hidden">
      {/* Subtle Background Glass Orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
        {/* Minimalist Header with Glass Effect */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto">
          <div className=" uppercase tracking-widest bg-gray-200/50 backdrop-blur-sm rounded-full px-2 w-fit mx-auto">
            <span className="text-primary font-bold text-[10px]">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 font-bengali leading-tight px-2 py-4">
            আপনার <span className="text-primary font-bold">প্রশ্ন</span>
            <br className="hidden sm:block" />
            <span className="text-primary font-bold ">আমাদের উত্তর</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto px-2 py">
            Find answers to common questions about our products, delivery, and services.
          </p>
        </div>

        {/* Minimalist FAQ Items with Glassmorphism */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
                  openIndex === index 
                    ? 'bg-white/70 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5' 
                    : 'bg-white/50 backdrop-blur-md border border-gray-200/50 hover:bg-white/60 hover:border-gray-300/50 hover:shadow-md'
                }`}
                style={{animationDelay: `${index * 0.03}s`}}
              >
                {/* Glass Overlay Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 transition-all duration-500 ${
                  openIndex === index ? 'from-primary/5 via-primary/3 to-primary/5' : 'group-hover:from-primary/3 group-hover:via-primary/2 group-hover:to-primary/3'
                }`}></div>
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-8 lg:py-6 flex items-start sm:items-center justify-between text-left transition-all duration-500 relative z-10 gap-3"
                >
                  {/* Question Text */}
                  <span className={`text-sm sm:text-base md:text-base lg:text-lg font-bold text-gray-900 transition-all duration-500 flex-1 ${
                    openIndex === index ? 'text-primary font-bold' : 'group-hover:text-gray-700'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Glass Toggle Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 backdrop-blur-sm mt-0.5 sm:mt-0 ${
                    openIndex === index 
                      ? 'bg-primary/10 text-primary rotate-180 border border-primary/20' 
                      : 'bg-white/40 text-gray-400 border border-gray-200/50 group-hover:bg-primary/5 group-hover:text-gray-600 group-hover:border-primary/10'
                  }`}>
                    <i className="fa-solid fa-chevron-down text-[10px] sm:text-xs"></i>
                  </div>
                </button>
                
                {/* Answer Content with Glass Effect */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 pt-0 relative z-10">
                    <div className="pt-2 border-t border-gray-200/50">
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-sm lg:text-base font-medium pt-3 sm:pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Contact CTA with Glassmorphism */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-lg mb-6 sm:mb-8">
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Still have questions?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
              <a
                href="tel:+8801321208940"
                className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/60 backdrop-blur-xl border border-gray-200/50 text-gray-900 font-bold hover:border-primary/30 hover:text-primary transition-all duration-500 shadow-sm hover:shadow-md flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500"></span>
                <i className="fa-solid fa-phone text-xs relative z-10"></i>
                <span className="relative z-10">Call Now</span>
              </a>
              <a
                href="mailto:support@ghorerbazar.com"
                className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl bg-primary/90 backdrop-blur-xl text-white font-bold hover:bg-primary transition-all duration-500 shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></span>
                <i className="fa-solid fa-envelope text-xs relative z-10"></i>
                <span className="relative z-10">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

