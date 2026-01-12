
import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <a 
      href={`#${category.id}`}
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 items-start shadow-sm hover:border-primary hover:shadow-md transition-all group"
    >
      <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined">{category.icon}</span>
      </div>
      <h2 className="text-sm font-bold">{category.name}</h2>
    </a>
  );
};

export default CategoryCard;
