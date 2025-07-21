import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types/menu';
import { menuData } from './data/menuData';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import MenuItemCard from './components/MenuItemCard';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState<string>(menuData.categories[0].id);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll to top when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentCategory = menuData.categories.find(cat => cat.id === activeCategory);

  return (
    <div className={`min-h-screen relative transition-all duration-500 ${
      isDarkMode 
        ? 'bg-restaurant-dark text-white' 
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      
      {/* Category Navigation */}
      <CategoryList
        categories={menuData.categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={`${activeCategory}-header`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-center mb-12 backdrop-blur-sm rounded-3xl py-8 px-6 shadow-lg border transition-all duration-300 ${
              isDarkMode
                ? 'bg-black/40 border-white/10 text-white'
                : 'bg-white/60 border-white/20 text-gray-900'
            }`}
          >
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentCategory?.name[language]}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-red-600 mx-auto mb-4 rounded-full shadow-sm"></div>
            <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' 
                ? `Discover our ${currentCategory?.items.length} delicious options` 
                : `Zbuloni ${currentCategory?.items.length} opsionet tona të shijshme`
              }
            </p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentCategory?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <MenuItemCard
                    item={item}
                    language={language}
                    isDarkMode={isDarkMode}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
