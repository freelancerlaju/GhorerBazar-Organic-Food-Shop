import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onShare: (product: Product) => void;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  initial: string;
  color: string;
}

const MOCK_REVIEWS: Review[] = [
  { id: 1, author: "Rahim Ahmed", rating: 5, date: "2 days ago", comment: "The quality of this product is amazing. I can really taste the difference compared to regular store-bought ones. Highly recommended!", initial: "R", color: "bg-blue-100 text-blue-600" },
  { id: 2, author: "Salma Begum", rating: 4, date: "1 week ago", comment: "Packaging was good and delivery was fast. The product seems authentic.", initial: "S", color: "bg-purple-100 text-purple-600" },
  { id: 3, author: "Tanvir Hasan", rating: 5, date: "2 weeks ago", comment: "Absolutely love it! Will order again.", initial: "T", color: "bg-green-100 text-green-600" },
  { id: 4, author: "Nusrat Jahan", rating: 5, date: "3 weeks ago", comment: "Best organic shop in town. Fresh and pure.", initial: "N", color: "bg-pink-100 text-pink-600" },
  { id: 5, author: "Karim Ullah", rating: 3, date: "1 month ago", comment: "Good product but delivery took a bit longer than expected.", initial: "K", color: "bg-yellow-100 text-yellow-600" },
  { id: 6, author: "Farhana Akter", rating: 5, date: "1 month ago", comment: "My kids love the honey. Very tasty.", initial: "F", color: "bg-indigo-100 text-indigo-600" },
  { id: 7, author: "Rafiqul Islam", rating: 4, date: "2 months ago", comment: "Decent price for the quality. Satisfied.", initial: "R", color: "bg-orange-100 text-orange-600" },
];

export const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  onBack,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onViewDetails,
  onShare
}) => {
  const isOutOfStock = product.availability === 'Out of Stock';
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const [activeImage, setActiveImage] = useState(product.image);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'info' | 'specs' | 'reviews'>('info');
  const [openBenefitIndex, setOpenBenefitIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [product]);

  useEffect(() => {
    setActiveImage(product.image);
    setIsZoomed(false);
    setActiveTab('info');
    setOpenBenefitIndex(null);
    setReviews(MOCK_REVIEWS);
    setCurrentPage(1);
    setShowReviewForm(false);
    setNewReview({ name: '', rating: 5, comment: '' });
  }, [product]);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = images.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setActiveImage(images[nextIndex]);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = images.indexOf(activeImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveImage(images[prevIndex]);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) handleNextImage();
    if (isRightSwipe) handlePrevImage();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const toggleBenefit = (index: number) => {
    setOpenBenefitIndex(openBenefitIndex === index ? null : index);
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;
    const review: Review = {
      id: Date.now(),
      author: newReview.name,
      rating: newReview.rating,
      date: "Just now",
      comment: newReview.comment,
      initial: newReview.name.charAt(0).toUpperCase(),
      color: "bg-teal-100 text-teal-600"
    };
    setReviews([review, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ name: '', rating: 5, comment: '' });
    setCurrentPage(1);
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={onBack} 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              <span className="hidden sm:inline font-medium">Back</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-primary cursor-pointer">Home</span>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="capitalize hover:text-primary cursor-pointer">{product.category}</span>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="text-gray-900 font-medium truncate max-w-xs">{product.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isWishlisted 
                    ? 'bg-red-50 text-red-500' 
                    : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart text-sm`}></i>
              </button>
              <button 
                onClick={() => onShare(product)}
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 hover:bg-blue-50 hover:text-blue-500 flex items-center justify-center transition-all"
              >
                <i className="fa-solid fa-share-nodes text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Image Section */}
          <div className="space-y-2 sm:space-y-3">
            <div 
              className="relative bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden aspect-square max-w-sm sm:max-w-md mx-auto sm:mx-0 sm:max-w-full group border border-gray-200"
              onMouseEnter={() => !isOutOfStock && setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img 
                src={activeImage} 
                alt={product.title} 
                className={`w-full h-full object-cover transition-transform duration-300 ${isOutOfStock ? 'grayscale opacity-60' : ''}`}
                style={{
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  transform: isZoomed && !isOutOfStock ? 'scale(2)' : 'scale(1)'
                }}
              />
              
              {images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-20"
                  >
                    <i className="fa-solid fa-chevron-left text-xs sm:text-sm"></i>
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-20"
                  >
                    <i className="fa-solid fa-chevron-right text-xs sm:text-sm"></i>
                  </button>
                </>
              )}

              {product.badge && (
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-white shadow-lg ${
                    product.badge === 'Sale' ? 'bg-red-500' : 'bg-orange-500'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {isOutOfStock && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
                  <span className="bg-red-500 text-white font-bold px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg uppercase text-xs sm:text-sm tracking-wider shadow-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center sm:justify-start">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-md sm:rounded-lg border-2 overflow-hidden transition-all ${
                      activeImage === img 
                        ? 'border-primary shadow-md ring-2 ring-primary/20' 
                        : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info - Redesigned to match image */}
          <div className="flex flex-col max-w-lg mx-auto sm:max-w-full">
            {/* Product Name */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2 font-bengali leading-tight">
              {product.bengaliTitle || product.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm">
              {product.description || `${product.title} - Premium quality product with authentic ingredients.`}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className={`fa-star text-green-500 text-[10px] sm:text-xs ${star <= Math.floor(parseFloat(averageRating)) ? 'fa-solid' : 'fa-regular'}`}></i>
                ))}
              </div>
              <span className="text-gray-700 text-[10px] sm:text-xs">({reviews.length})</span>
            </div>

            {/* Price */}
            <div className="mb-2 sm:mb-3">
              <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">৳{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base md:text-lg text-gray-400 line-through">৳{product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mb-3 sm:mb-4">
              <span className={`inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold ${
                isOutOfStock 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {isOutOfStock ? 'Out of Stock' : 'In Stock'}
              </span>
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <button 
                onClick={() => !isOutOfStock && onAddToCart(product)}
                disabled={isOutOfStock}
                className={`flex-1 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg font-bold text-xs sm:text-sm md:text-base shadow-md transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                  isOutOfStock 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-green-700 text-white hover:shadow-lg'
                }`}
              >
                <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                  isWishlisted 
                    ? 'bg-red-50 border-red-300 text-red-500' 
                    : 'bg-white border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-500'
                }`}
              >
                <i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart text-sm sm:text-base md:text-lg`}></i>
              </button>
            </div>

            {/* Characteristics Section - Collapsible */}
            <div className="mb-3 sm:mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenBenefitIndex(openBenefitIndex === 0 ? null : 0)}
                className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-[10px] sm:text-xs md:text-sm truncate pr-2">
                  {product.bengaliTitle || product.title}: Characteristics
                </span>
                <i className={`fa-solid fa-chevron-down text-gray-400 text-[10px] sm:text-xs transition-transform flex-shrink-0 ${openBenefitIndex === 0 ? 'rotate-180' : ''}`}></i>
              </button>
              {openBenefitIndex === 0 && (
                <div className="p-2.5 sm:p-3 pt-0 border-t border-gray-100">
                  <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-gray-600">
                    {product.benefits && product.benefits.length > 0 ? (
                      product.benefits.map((benefit, idx) => (
                        <div key={idx}>
                          <p className="font-semibold text-gray-900 mb-0.5 sm:mb-1">{benefit.title}</p>
                          <p>{benefit.content}</p>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-1">
                        <p><strong>Category:</strong> {product.category}</p>
                        {product.weight && <p><strong>Weight:</strong> {product.weight}</p>}
                        {product.description && <p>{product.description}</p>}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Action Links - Horizontal Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
              <button className="flex items-center gap-1 sm:gap-1.5 text-gray-900 hover:text-primary transition-colors text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                <i className="fa-solid fa-palette text-gray-700 text-[10px] sm:text-xs"></i>
                <span className="hidden sm:inline">Compare color</span>
                <span className="sm:hidden">Compare</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-1.5 text-gray-900 hover:text-primary transition-colors text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                <i className="fa-solid fa-question-circle text-gray-700 text-[10px] sm:text-xs"></i>
                <span className="hidden sm:inline">Ask a question</span>
                <span className="sm:hidden">Question</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-1.5 text-gray-900 hover:text-primary transition-colors text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                <i className="fa-solid fa-truck text-gray-700 text-[10px] sm:text-xs"></i>
                <span className="hidden md:inline">Delivery & Return</span>
                <span className="md:hidden">Delivery</span>
              </button>
              <button 
                onClick={() => onShare(product)}
                className="flex items-center gap-1 sm:gap-1.5 text-gray-900 hover:text-primary transition-colors text-[10px] sm:text-xs md:text-sm whitespace-nowrap"
              >
                <i className="fa-solid fa-share-nodes text-gray-700 text-[10px] sm:text-xs"></i>
                <span>Share</span>
              </button>
            </div>

            {/* Delivery Section */}
            <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6.75V16.5M8.25 18.75H5.625c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H15.75m-7.5-6h6m-6-3h6m-6 0v3m0 0v3m0-3h6m-6 0H9" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm mb-0.5">Free Delivery</p>
                  <button className="text-[10px] sm:text-xs text-gray-600 hover:text-primary underline break-words">
                    Enter your Postal code for Delivery Availability.
                  </button>
                </div>
              </div>
            </div>

            {/* Return Section */}
            <div className="p-2.5 sm:p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm mb-0.5">Return Delivery</p>
                  <p className="text-[10px] sm:text-xs text-gray-600">
                    Free 30days Delivery Returns.{' '}
                    <button className="text-primary hover:underline font-medium">Details</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {[
                { id: 'info', label: 'Product Details', icon: 'fa-info-circle' },
                { id: 'specs', label: 'Nutrition & Ingredients', icon: 'fa-flask' },
                { id: 'reviews', label: `Reviews (${reviews.length})`, icon: 'fa-star' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <i className={`fa-solid ${tab.icon} mr-2`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {activeTab === 'info' && (
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 font-bengali">বিস্তারিত বিবরণ</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                    <p>{product.description} Our {product.title.toLowerCase()} is sourced directly from the best farms to ensure you get the purest quality possible.</p>
                    <p>Every batch is tested for purity and safety. No artificial colors, preservatives, or chemical additives are used in our processing.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-heart-pulse text-primary"></i>
                    Health Benefits
                  </h4>
                  <div className="space-y-2">
                    {product.benefits ? product.benefits.map((benefit, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleBenefit(idx)}
                          className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <i className="fa-solid fa-check-circle text-primary text-xs"></i>
                            <span className="font-semibold text-xs sm:text-sm">{benefit.title}</span>
                          </div>
                          <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${openBenefitIndex === idx ? 'rotate-180' : ''}`}></i>
                        </button>
                        {openBenefitIndex === idx && (
                          <div className="p-3 pt-0 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
                            {benefit.content}
                          </div>
                        )}
                      </div>
                    )) : (
                      <p className="text-gray-500 text-sm">No specific benefits listed.</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-flask text-primary"></i>
                    Nutritional Facts
                  </h3>
                  {product.nutritionalInfo ? (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Nutrient</th>
                            <th className="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-bold text-gray-700">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                            <tr key={key} className="hover:bg-gray-50">
                              <td className="px-4 sm:px-6 py-3 text-gray-600 font-medium text-xs sm:text-sm">{key}</td>
                              <td className="px-4 sm:px-6 py-3 text-gray-900 text-right font-bold text-xs sm:text-sm">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">Nutritional information not available.</p>
                  )}
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-list text-primary"></i>
                    Ingredients
                  </h3>
                  {product.ingredients ? (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.ingredients.map((ing, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                          {ing}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 mb-6 text-sm">Single ingredient product.</p>
                  )}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <i className="fa-solid fa-circle-info text-primary mt-0.5"></i>
                      <span><strong>Storage:</strong> Store in a cool, dry place away from direct sunlight. Keep container tightly sealed.</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary/5 to-green-50 rounded-xl p-6 text-center sticky top-24">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa-star text-yellow-400 text-sm ${parseFloat(averageRating) >= star ? 'fa-solid' : 'fa-regular'}`}></i>
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Based on {reviews.length} reviews</p>
                    <button 
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="w-full py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-all text-xs sm:text-sm"
                    >
                      {showReviewForm ? 'Cancel' : 'Write Review'}
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                  {showReviewForm && (
                    <form onSubmit={handleSubmitReview} className="bg-white rounded-xl p-4 sm:p-6 border-2 border-primary/20">
                      <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Share your experience</h3>
                      <div className="mb-3 sm:mb-4">
                        <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Rating</label>
                        <div className="flex gap-1 sm:gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({...newReview, rating: star})}
                              className={`text-xl sm:text-2xl transition-transform hover:scale-110 ${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                              <i className="fa-solid fa-star"></i>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <input 
                          type="text" 
                          required
                          value={newReview.name}
                          onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                          className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <textarea 
                          required
                          value={newReview.comment}
                          onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                          className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary h-20 sm:h-24 text-sm"
                          placeholder="Your review"
                        ></textarea>
                      </div>
                      <button type="submit" className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold hover:bg-green-700 transition-colors text-sm">
                        Submit Review
                      </button>
                    </form>
                  )}
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-sm sm:text-base`}>
                            {review.initial}
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 text-sm sm:text-base">{review.author}</h5>
                            <div className="flex gap-0.5 sm:gap-1 text-yellow-400 text-xs sm:text-sm">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className={`fa-star ${review.rating >= star ? 'fa-solid' : 'fa-regular'}`}></i>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-400 text-xs">{review.date}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{review.comment}</p>
                    </div>
                  ))}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
                      <button 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                          currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm ${
                            currentPage === page 
                              ? 'bg-primary text-white' 
                              : 'bg-white border border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                          currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 sm:pt-12 border-t border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 font-bengali">Related Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlist.some(item => item.id === p.id)}
                  onToggleWishlist={onToggleWishlist}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
