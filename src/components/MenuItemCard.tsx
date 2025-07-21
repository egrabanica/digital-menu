import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem, Language } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
  language: Language;
  isDarkMode: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, language, isDarkMode }) => {
  // Function to get default image based on item type
  const getDefaultImage = (itemId: string) => {
    // Map specific items to appropriate optimized images
    const imageMap: { [key: string]: string } = {
      // Refreshing Drinks - WebP format for better compression
      'ujë-natyral': 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'ujë-mineral': 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Laçin': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'coca-cola': 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'fanta': 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'schweppes': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'ice Tea': 'https://images.pexels.com/photos/1556679/pexels-photo-1556679.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'redbull': 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Lengje': 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Lemonadë': 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Boronicë': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      
      // Hot Drinks
      'espresso': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'macchiato': 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Bambi': 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'caffe-latte': 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'nescafe': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'turkish coffe': 'https://images.pexels.com/photos/2061611/pexels-photo-2061611.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'double espresso': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'Filter Tea': 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      'çaj rusi': 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      
      // Breakfast
      'supe-pule': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
      'supe-vici': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
      'supe-perimesh': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'omlet-me-Pershute': 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
      'omlet-suxhuk': 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
      'omlet-shtepiak': 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
      'llokuma': 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      'long me Pogaçe': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Speca në Kajmak': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Mëngjes Shtëpiak': 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Salads
      'sallata-me-mish-pule': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-tuna': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-greke': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-mixe': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-me-mish-viqi': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-shopska': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'chef-salad': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sallata-gjelbert': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Sandwiches
      'sandwiç-me-proshutë': 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sandwiç-me-suxhuk': 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sanduiq-me-mish-pule': 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sanduiq-tuna': 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      'sanduiq-shtepiak': 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Hamburgers
      'hamburger-classic': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      'hamburger shtëpiak': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      'chicken-burger-classic': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      'chicken-Burger-shtëpiak': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      'double-burger': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pomfrit': 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=400',
      'suxhuk-shtëpiak': 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
      'cheese-burger': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Grilled
      'Specialitet Shtëpiak': 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Ramstek me Sos': 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Mish Viçi': 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Mish i Kombinuar': 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      'File Pule Natyrale': 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
      'File Pule me Sos': 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Kaqik Pule': 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Shnicell Pule': 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Pizza
      'pizza-margherita': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-vegetariane': 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-proshute': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-salami': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-family': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-shtepie': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-Tuna': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-boloneze': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-me-mish-pule': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pizza-familjare': 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      
      // Pastas
      'pene-napoli': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pene-Arabiata': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pene-Carbonara': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'pene-me-Mish-Pule': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Rigatoni al Frono': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Shpageti Boloneze': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Shpageti Napoli': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Tagliatele me Kërpudha': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    
    const imageId = imageMap[itemId];
    if (imageId) {
      return imageId;
    }
    
    // Fallback to generic food image
    return 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-200 group cursor-pointer backdrop-blur-sm ${
        isDarkMode 
          ? 'bg-gray-800/90 border-gray-700 hover:border-brand-red/40' 
          : 'bg-white border-gray-100 hover:border-brand-red/20'
      }`}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.imageUrl || getDefaultImage(item.id)} 
          alt={item.name[language]}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getDefaultImage(item.id);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
      </div>
        
      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 group-hover:text-brand-red transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {item.name[language]}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {item.description[language]}
        </p>
        
        {/* Pricing Section */}
        <div className="mb-4">
          {item.sizes ? (
            // Pizza sizes
            <>
              <div className={`text-xs font-medium mb-2 uppercase tracking-wide ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {language === 'en' ? 'Available Sizes' : 'Madhësia'}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.sizes.map((size, index) => (
                  <div key={index} className={`bg-gradient-to-r border px-3 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all duration-200 ${
                    isDarkMode 
                      ? 'from-gray-700 to-gray-600 border-gray-600 text-gray-200 hover:from-brand-red/10 hover:to-red-900/20' 
                      : 'from-gray-50 to-gray-100 border-gray-200 text-gray-800 hover:from-brand-red/5 hover:to-red-50'
                  }`}>
                    <span className="text-brand-red">{size.size.charAt(0)}</span> €{size.price.toFixed(2)}
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Single price items
            <>
              <div className={`text-xs font-medium mb-2 uppercase tracking-wide ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {language === 'en' ? 'Price' : 'Çmimi'}
              </div>
              <div className={`bg-gradient-to-r border border-brand-red/20 px-3 py-2 rounded-lg font-bold text-sm shadow-sm inline-block ${
                isDarkMode 
                  ? 'from-brand-red/20 to-red-900/30 text-gray-200' 
                  : 'from-brand-red/10 to-red-50 text-gray-800'
              }`}>
                <span className="text-brand-red">€{item.price?.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
        
        {/* Decorative line */}
        <div className={`mt-4 pt-4 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-100'
        }`}>
          <div className="w-8 h-0.5 bg-brand-red rounded-full group-hover:w-16 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;