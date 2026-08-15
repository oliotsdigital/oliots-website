'use client';

import React from 'react';
import { ServiceCategory } from '@/models/service.model';

interface ServiceTabFilterProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
}

export function ServiceTabFilter({ activeCategory, onSelectCategory }: ServiceTabFilterProps) {
  const tabs: { key: ServiceCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web & Digital' },
    { key: 'software', label: 'Software' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'growth', label: 'Growth' }
  ];

  return (
    <div className="flex flex-wrap gap-1.5 text-xs font-medium">
      {tabs.map(tab => {
        const isActive = activeCategory === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onSelectCategory(tab.key)}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              isActive
                ? 'bg-winblue-600 text-white shadow-sm font-semibold'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
