
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import { CATEGORIES, TOP_PRODUCTS, PARTNERS } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} cartCount={cartCount}>
      {/* Hero Section */}
      <div className="px-4 py-4">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-2xl min-h-[260px] relative shadow-2xl" 
          style={{ 
            backgroundImage: 'linear-gradient(0deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJjVUvfvOus_hlANIXtc1y8hiZ1o9jFcaIypeiktMZ2pw52slgF581nTVa8JioLOejZNMbj3x07CsDNiAMkMO4yZ-Snp9Ox3fJ4p2IN7fb546qfr4i5I2-RXNQOrxyY7NZSGuJdypD0I5mksQBfSYl7jTeOnd6HP8eyc71WHAhEeb9lnydwIsj5mza6UUxHe5suE17aVEkAcTgCD_kSRI4VC-Yobto13n1yRyfychvx9ultQF9hlfiO-PWatFQOM4MlLPEB7LwpUk")' 
          }}
        >
          <div className="flex flex-col p-6 items-start relative z-10">
            <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-3">
              Professional Infrastructure
            </span>
            <h2 className="text-white text-3xl font-extrabold leading-tight">
              Elite Wireless Performance
            </h2>
            <p className="text-white/70 text-sm mt-2 font-medium max-w-[250px]">
              Equip your network with industry-leading antenna technology.
            </p>
            <button className="mt-5 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95 group">
              Explore Catalog
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Categories</h3>
          <button className="text-[11px] font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      {/* Top Rated Equipment */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Top Rated Equipment</h3>
          <button className="text-[11px] font-bold text-primary hover:underline">Trending</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {TOP_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-10 mb-6 bg-slate-100/50 dark:bg-slate-900/50 py-8">
        <h3 className="text-slate-400 text-[10px] font-black leading-tight tracking-[0.25em] uppercase text-center mb-8">
          Official Partners
        </h3>
        <div className="flex items-center gap-12 overflow-x-auto hide-scrollbar px-6">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center min-w-[100px] grayscale opacity-40 hover:opacity-100 transition-all cursor-default"
            >
              <span className="material-symbols-outlined text-4xl mb-2">{partner.icon}</span>
              <span className="text-[11px] font-black tracking-widest">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default App;
