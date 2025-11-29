import { Product } from '../types';

export const useProductFilters = (
  products: Product[],
  selectedCategory: string | string[] | null
) => {
  const filteredProducts = selectedCategory
    ? Array.isArray(selectedCategory)
      ? products.filter(product => selectedCategory.includes(product.category))
      : products.filter(product => product.category === selectedCategory)
    : products;

  return { filteredProducts };
};

