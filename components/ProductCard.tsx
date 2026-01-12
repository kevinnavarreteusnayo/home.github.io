
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 transition-transform active:scale-95 group">
      <div className="relative aspect-square bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
        <img 
          alt={product.name} 
          className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal transform transition-transform group-hover:scale-110" 
          src={product.image}
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-primary/10 text-primary text-[9px] font-black px-1.5 py-0.5 rounded border border-primary/20 backdrop-blur-md">
            {product.spec}
          </span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{product.category}</p>
        <h4 className="text-sm font-extrabold truncate">{product.name}</h4>
        <div className="flex items-center justify-between mt-3">
          <span className="text-industrial-red font-black text-base">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white size-8 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
