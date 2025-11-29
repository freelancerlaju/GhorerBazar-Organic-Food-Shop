import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBack: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onBack }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [isProcessing, setIsProcessing] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    termsAccepted: false,
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = deliveryMethod === 'delivery' ? 50 : 0;
  const discount = discountApplied ? 10 : 0;
  const total = subtotal + shipping - discount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the Terms and Conditions');
      return;
    }
    
    setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
    alert('Order placed successfully!');
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      setDiscountApplied(true);
      setDiscountCode('');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl text-center max-w-md w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <i className="fa-solid fa-shopping-cart text-3xl sm:text-4xl text-primary"></i>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Your cart is empty</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Add some items to your cart before checkout.</p>
          <button
            onClick={onBack}
            className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4 flex-wrap gap-3">
          <button
            onClick={onBack}
              className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-primary transition-colors group"
          >
              <i className="fa-solid fa-arrow-left text-base sm:text-lg group-hover:-translate-x-1 transition-transform"></i>
              <span className="font-medium text-sm sm:text-base hidden xs:inline">Back</span>
          </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center">
                <i className="fa-solid fa-leaf text-white text-xs sm:text-sm"></i>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">Ghorer Bazar</span>
            </div>

            {/* Progress Steps */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 hidden md:inline">Cart</span>
              </div>
              <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-primary"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 hidden md:inline">Review</span>
              </div>
              <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-primary"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-white flex items-center justify-center text-[10px] sm:text-xs font-bold ring-2 ring-primary/30">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold text-primary hidden md:inline">Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Checkout</h1>
              <p className="text-sm sm:text-base text-gray-600">Complete your order details</p>
            </div>

            {/* Delivery Options Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <i className="fa-solid fa-truck text-primary text-xs sm:text-sm"></i>
                </div>
                <span className="text-sm sm:text-base md:text-lg">Delivery Method</span>
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 transition-all text-left ${
                    deliveryMethod === 'delivery'
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      deliveryMethod === 'delivery'
                        ? 'border-primary bg-primary'
                        : 'border-gray-300'
                    }`}>
                      {deliveryMethod === 'delivery' && (
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                    <i className={`fa-solid fa-truck text-base sm:text-lg md:text-xl ${
                      deliveryMethod === 'delivery' ? 'text-primary' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Delivery</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 hidden sm:block">Home delivery available</p>
                </button>
                <button
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 transition-all text-left ${
                    deliveryMethod === 'pickup'
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      deliveryMethod === 'pickup'
                        ? 'border-primary bg-primary'
                        : 'border-gray-300'
                    }`}>
                      {deliveryMethod === 'pickup' && (
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                    <i className={`fa-solid fa-box text-base sm:text-lg md:text-xl ${
                      deliveryMethod === 'pickup' ? 'text-primary' : 'text-gray-400'
                    }`}></i>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Pick up</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 hidden sm:block">Collect from store</p>
                </button>
              </div>
            </div>

            {/* Shipping Information Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <i className="fa-solid fa-user text-primary text-xs sm:text-sm"></i>
                </div>
                <span className="text-sm sm:text-base md:text-lg">Shipping Information</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-2 sm:px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white text-xs sm:text-sm">
                        <option>+880</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="">Choose country</option>
                      <option value="BD">Bangladesh</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Enter state"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="mt-0.5 sm:mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0"
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
                    I have read and agree to the Terms and Conditions.
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Review your cart</h3>

              {/* Cart Items */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6 max-h-64 sm:max-h-72 md:max-h-80 overflow-y-auto pr-1 sm:pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-100 last:border-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-xs sm:text-sm">
                        {item.bengaliTitle || item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">
                        {item.quantity}x ৳{item.price}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-primary">
                        ৳{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <i className="fa-solid fa-tag absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm"></i>
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-xs sm:text-sm"
                      placeholder="Discount code"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyDiscount}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-xs sm:text-sm whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 md:mb-6 border border-gray-200">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-gray-900">৳{shipping}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-semibold text-green-600">-৳{discount}</span>
                    </div>
                  )}
                  <div className="pt-2.5 sm:pt-3 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-bold text-gray-900">Total</span>
                      <span className="text-xl sm:text-2xl font-bold text-primary">৳{total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pay Now Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing || !formData.termsAccepted}
                className={`w-full py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 rounded-lg sm:rounded-xl font-bold text-white text-base sm:text-lg transition-all mb-4 sm:mb-5 md:mb-6 ${
                  isProcessing || !formData.termsAccepted
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-green-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-spinner fa-spin text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">Processing...</span>
                  </span>
                ) : (
                  'Pay Now'
                )}
              </button>

              {/* Security Message */}
              <div className="text-center pt-3 sm:pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  <i className="fa-solid fa-lock text-primary text-xs sm:text-sm"></i>
                  <span>Secure Checkout - SSL Encrypted</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                  Ensuring your financial and personal details are secure during every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
