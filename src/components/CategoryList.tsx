import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory, Language } from '../types/menu';

interface CategoryListProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  language: Language;
  isDarkMode: boolean;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  language,
  isDarkMode,
}) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'pije-freskuese': return '🥤';
      case 'pije-te-ngrohta': return '☕';
      case 'mëngjes': return '🍳';
      case 'sallatat': return '🥗';
      case 'sanduiqet': return '🥪';
      case 'hamburgerët': return '🍔';
      case 'grillada': return '🍖';
      case 'pizza': return '🍕';
      case 'Pastas  ': return '🍝';
      default: return '🍴';
    }
  };

  const getCategoryColor = (categoryId: string, isActive: boolean) => {
    const colors = {
      'pije-freskuese': isActive ? 'from-blue-500 to-cyan-500' : 'from-blue-100 to-cyan-100',
      'pije-te-ngrohta': isActive ? 'from-amber-500 to-orange-500' : 'from-amber-100 to-orange-100',
      'mëngjes': isActive ? 'from-yellow-500 to-amber-500' : 'from-yellow-100 to-amber-100',
      'sallatat': isActive ? 'from-green-500 to-emerald-500' : 'from-green-100 to-emerald-100',
      'sanduiqet': isActive ? 'from-purple-500 to-violet-500' : 'from-purple-100 to-violet-100',
      'hamburgerët': isActive ? 'from-red-500 to-rose-500' : 'from-red-100 to-rose-100',
      'grillada': isActive ? 'from-orange-500 to-red-500' : 'from-orange-100 to-red-100',
      'pizza': isActive ? 'from-red-500 to-pink-500' : 'from-red-100 to-pink-100',
      'Pastas  ': isActive ? 'from-indigo-500 to-purple-500' : 'from-indigo-100 to-purple-100',
    };
    return colors[categoryId as keyof typeof colors] || (isActive ? 'from-gray-500 to-gray-600' : 'from-gray-100 to-gray-200');
  };

  return (
    <div className={`border-b shadow-lg transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-black/50 via-gray-900/50 to-black/50 border-gray-700' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-6">
        {/* Compact Mobile Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`relative overflow-hidden rounded-xl p-3 transition-all duration-300 shadow-md hover:shadow-lg border-2 ${
                  isActive 
                    ? 'border-white shadow-xl transform scale-105' 
                    : 'border-transparent hover:border-white/50'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${getCategoryColor(category.id, isActive).split(' ')[0].replace('from-', '')}, ${getCategoryColor(category.id, isActive).split(' ')[1].replace('to-', '')})`
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/10 rounded-full translate-y-3 -translate-x-3"></div>
                </div>

                {/* Red Line Hover Effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-8 h-0.5 bg-red-500 rounded-full shadow-lg"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-1">
                  <motion.div 
                    className="text-lg mb-0.5"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getCategoryIcon(category.id)}
                  </motion.div>
                  <span className={`text-xs font-bold leading-tight text-center ${
                    isActive ? 'text-white' : 'text-gray-700'
                  } max-w-full break-words`}>
                    {category.name[language]}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full shadow-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Category count indicator */}
        <motion.div 
          className="mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={`inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-black/40 border-gray-600 text-gray-300' 
              : 'bg-white/80 border-gray-200 text-gray-600'
          }`}>
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">
              {categories.length} {language === 'en' ? 'Categories Available' : 'Kategori të Disponueshme'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryList;