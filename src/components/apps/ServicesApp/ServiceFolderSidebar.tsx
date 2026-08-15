'use client';

import React from 'react';
import { ServiceItem } from '@/models/service.model';
import { Layers } from 'lucide-react';

interface ServiceFolderSidebarProps {
  services: ServiceItem[];
  selectedServiceId: string | null;
  onSelectService: (id: string | null) => void;
  activeCategory: string;
  onSelectCategory: (cat: any) => void;
}

export function ServiceFolderSidebar({
  services,
  selectedServiceId,
  onSelectService,
  activeCategory,
  onSelectCategory
}: ServiceFolderSidebarProps) {
  const categoryFolders = [
    { id: 'all', label: 'All Folders', count: services.length, color: '#0067C0' },
    { id: 'web', label: 'Web Apps', count: services.filter(s => s.category === 'web').length, color: '#00bcd4' },
    { id: 'software', label: 'Software', count: services.filter(s => s.category === 'software').length, color: '#5c6bc0' },
    { id: 'ai', label: 'AI Agents', count: services.filter(s => s.category === 'ai').length, color: '#8e24aa' },
    { id: 'growth', label: 'SEO & Growth', count: services.filter(s => s.category === 'growth').length, color: '#26a69a' },
  ];

  return (
    <aside className="w-full md:w-72 bg-slate-50/90 border-r border-slate-200/90 flex flex-col flex-shrink-0 p-3.5 overflow-y-auto">
      {/* Sidebar Title Header */}
      <div className="flex items-center space-x-2 px-1 mb-3 text-xs font-black text-slate-700 uppercase tracking-wider">
        <Layers className="w-4 h-4 text-winblue-600" />
        <span>Service Folders</span>
      </div>

      {/* Category Main Folders Icon Grid */}
      <div className="mb-5">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
          Categories
        </div>
        <div className="grid grid-cols-2 gap-2">
          {categoryFolders.map(cat => {
            const isActive = activeCategory === cat.id && selectedServiceId === null;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onSelectService(null);
                }}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all active:scale-95 group ${
                  isActive
                    ? 'bg-winblue-600/10 border-winblue-600 ring-2 ring-winblue-500/20 bg-white shadow-xs'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                }`}
              >
                {/* 3D Folder Icon */}
                <div className="w-10 h-10 mb-1 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg viewBox="0 0 64 52" className="w-10 h-10">
                    <path
                      d="M4 10 C4 6 7 4 11 4 L24 4 C27 4 29 6 31 8 L35 12 L53 12 C57 12 60 15 60 19 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
                      fill="#ffca28"
                    />
                    <path
                      d="M4 18 C4 15 6 13 9 13 L55 13 C58 13 60 15 60 18 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
                      fill="#ffd54f"
                    />
                    <circle cx="48" cy="38" r="6" fill={cat.color} opacity="0.9" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800 leading-tight truncate w-full">
                  {cat.label}
                </span>
                <span className="text-[9px] text-slate-500 font-mono mt-0.5">
                  {cat.count} files
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual Service Item Folders Icon Grid */}
      <div className="border-t border-slate-200 pt-3">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
          Capability Folders
        </div>
        <div className="grid grid-cols-2 gap-2">
          {services.map(svc => {
            const isSelected = selectedServiceId === svc.id;
            return (
              <div
                key={svc.id}
                onClick={() => onSelectService(svc.id)}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all active:scale-95 group ${
                  isSelected
                    ? 'bg-winblue-600/10 border-winblue-600 ring-2 ring-winblue-500/20 bg-white shadow-xs'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                }`}
              >
                {/* Service Specific Folder Graphic */}
                <div className="w-10 h-10 mb-1 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg viewBox="0 0 64 52" className="w-10 h-10">
                    <path
                      d="M4 10 C4 6 7 4 11 4 L24 4 C27 4 29 6 31 8 L35 12 L53 12 C57 12 60 15 60 19 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
                      fill="#ffca28"
                    />
                    <path
                      d="M4 18 C4 15 6 13 9 13 L55 13 C58 13 60 15 60 18 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
                      fill="#ffd54f"
                    />
                    <rect x="22" y="24" width="20" height="16" rx="2" fill="#0067C0" opacity="0.9" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight line-clamp-2 w-full">
                  {svc.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
