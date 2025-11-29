import React from 'react';
import { Product } from '../types';

interface CategoryFilterProps {
  products: Product[];
  selectedCategory: string | string[] | null;
  onCategoryChange: (category: string | string[] | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  products,
  selectedCategory,
  onCategoryChange
}) => {
  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category))).sort();

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
            selectedCategory === null
              ? 'bg-primary text-white shadow-lg shadow-green-600/20'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <i className="fa-solid fa-th-large mr-2"></i>
          All Products
        </button>
        {categories.map(category => {
          const isSelected = Array.isArray(selectedCategory) 
            ? selectedCategory.includes(category)
            : selectedCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-primary text-white shadow-lg shadow-green-600/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
              <span className="text-xs opacity-75">
                ({products.filter(p => p.category === category).length})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

