import React from 'react';
import { useRouter } from 'next/navigation';

// 'value' must match the category strings used in the seller upload form
const categories = [
  {
    name: 'Audio',
    value: 'Audio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
    ),
  },
  {
    name: 'Watches',
    value: 'Watch',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>
    ),
  },
  {
    name: 'Smartphones',
    value: 'Smartphone',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    ),
  },
  {
    name: 'Laptops',
    value: 'Laptop',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
    ),
  },
  {
    name: 'Cameras',
    value: 'Camera',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
    ),
  },
  {
    name: 'Accessories',
    value: 'Accessories',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
];

const BrowseByCategory = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center pt-14">
      <h2 className="text-2xl font-medium text-center">Browse by Category</h2>
      <p className="text-gray-500 text-center mt-2 mb-8">Find the perfect tech for every need</p>
      
      <div className="grid grid-cols-3 gap-6 w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => router.push(`/all-products?category=${category.value}`)}
            className="flex flex-col items-center justify-center p-8 rounded-xl cursor-pointer bg-slate-100 text-black hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-white shadow-sm">
              {category.icon}
            </div>
            <h3 className="font-semibold text-lg">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
