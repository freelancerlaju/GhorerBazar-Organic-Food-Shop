import React from 'react';

interface NewsletterSectionProps {
  onSubscribe: (message: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  return (
    <section className="py-10 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      <div className="container mx-auto px-4 lg:px-[100px] relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto shadow-2xl">
          <i className="fa-regular fa-paper-plane text-4xl text-yellow-300 mb-4 inline-block animate-bounce"></i>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Organic Family</h2>
          <p className="text-green-100 mb-8 max-w-lg mx-auto text-lg">Subscribe to our newsletter to receive exclusive offers, health tips, and updates on new harvest arrivals.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); onSubscribe('Subscribed successfully!'); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-gray-800 shadow-lg placeholder:text-gray-400"
              required
            />
            <button type="submit" className="px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg flex items-center justify-center gap-2">
              Subscribe <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
          <p className="text-green-200 text-xs mt-4">No spam, just pure goodness. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

