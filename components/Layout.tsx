
import React from 'react';
import { Currency, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, toggleDarkMode, cartCount }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-[#0a1a2f] text-white shadow-lg">
        {/* Top bar */}
        <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between text-[11px] font-bold">
          <div className="flex items-center gap-3">
            <div className="relative inline-block">
              <select className="bg-transparent border-none p-0 pr-6 focus:ring-0 text-white cursor-pointer appearance-none">
                <option className="text-black">EN</option>
                <option className="text-black">ES</option>
              </select>
              <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[14px]">expand_more</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="relative inline-block">
              <select className="bg-transparent border-none p-0 pr-6 focus:ring-0 text-white cursor-pointer appearance-none">
                <option className="text-black">USD</option>
                <option className="text-black">PEN</option>
                <option className="text-black">EUR</option>
              </select>
              <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[14px]">expand_more</span>
            </div>
          </div>
          <button 
            className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition-all" 
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined text-[16px]">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white">settings_input_antenna</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-tight tracking-tight uppercase">DS3</h1>
              <p className="text-[10px] opacity-70 tracking-[0.1em] -mt-1 uppercase">Comunicaciones</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              </button>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-industrial-red text-[8px] w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {children}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-2 pb-8 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold">Catalog</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">request_quote</span>
          <span className="text-[10px] font-bold">Quotes</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Account</span>
        </button>
      </nav>
      
      {/* Mobile Indicator */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full z-[60] pointer-events-none"></div>
    </div>
  );
};

export default Layout;
