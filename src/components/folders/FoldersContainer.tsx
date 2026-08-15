'use client';

import React from 'react';
import { 
  FolderCode, 
  Box, 
  Briefcase, 
  FolderTree, 
  FolderClock, 
  Calendar 
} from 'lucide-react';
import { WindowId } from '@/models/window.model';

interface FoldersContainerProps {
  onOpenFolder: (id: WindowId) => void;
}

interface FolderConfig {
  id: WindowId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const FOLDERS: FolderConfig[] = [
  {
    id: 'services-app',
    label: 'Services',
    icon: FolderCode,
    iconBg: 'bg-blue-50 border-blue-100 text-blue-600',
    iconColor: 'group-hover:text-blue-600'
  },
  {
    id: 'products-app',
    label: 'Products',
    icon: Box,
    iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    iconColor: 'group-hover:text-indigo-600'
  },
  {
    id: 'portfolio-app',
    label: 'Portfolio',
    icon: Briefcase,
    iconBg: 'bg-violet-50 border-violet-100 text-violet-600',
    iconColor: 'group-hover:text-violet-600'
  },
  {
    id: 'blog-app',
    label: 'Blogs',
    icon: FolderTree,
    iconBg: 'bg-teal-50 border-teal-100 text-teal-600',
    iconColor: 'group-hover:text-teal-600'
  },
  {
    id: 'contact-app',
    label: 'Contact us',
    icon: FolderClock,
    iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
    iconColor: 'group-hover:text-purple-600'
  },
  {
    id: 'appointment-app',
    label: 'Book appointment',
    icon: Calendar,
    iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    iconColor: 'group-hover:text-emerald-600'
  }
];

export function FoldersContainer({ onOpenFolder }: FoldersContainerProps) {
  return (
    <div className="w-full bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-8">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <span className="text-xs font-extrabold text-slate-400 tracking-wider uppercase">
          DIRECTORY MODULES
        </span>
        <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full animate-pulse">
          Click to get started
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {FOLDERS.map((folder) => {
          const IconComponent = folder.icon;
          return (
            <button
              key={folder.id}
              onClick={() => onOpenFolder(folder.id)}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer space-y-2.5 touch-manipulation"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${folder.iconBg}`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-slate-800 transition-colors text-center ${folder.iconColor}`}>
                {folder.label}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                Click to get started →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
