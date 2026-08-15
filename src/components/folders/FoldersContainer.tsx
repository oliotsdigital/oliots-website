'use client';

import React from 'react';
import { 
  FolderCode, 
  FolderGit2, 
  FolderTree, 
  FolderClock, 
  FolderPlus,
  Sparkles, 
  Trash2
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
    id: 'about-app',
    label: 'About Us',
    icon: FolderGit2,
    iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    iconColor: 'group-hover:text-indigo-600'
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
    label: 'Contact Us',
    icon: FolderClock,
    iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
    iconColor: 'group-hover:text-purple-600'
  },
  {
    id: 'appointment-app',
    label: 'Appointment',
    icon: FolderPlus,
    iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    iconColor: 'group-hover:text-emerald-600'
  },
  {
    id: 'ai-terminal',
    label: 'Copilot AI',
    icon: Sparkles,
    iconBg: 'bg-cyan-50 border-cyan-100 text-cyan-600',
    iconColor: 'group-hover:text-cyan-600'
  },
  {
    id: 'recycle-app',
    label: 'Recycle Bin',
    icon: Trash2,
    iconBg: 'bg-slate-100 border-slate-200 text-slate-600',
    iconColor: 'group-hover:text-slate-600'
  }
];

export function FoldersContainer({ onOpenFolder }: FoldersContainerProps) {
  return (
    <div className="w-full bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {FOLDERS.map((folder) => {
          const IconComponent = folder.icon;
          return (
            <button
              key={folder.id}
              onClick={() => onOpenFolder(folder.id)}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/70 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer space-y-3 touch-manipulation"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${folder.iconBg}`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-slate-800 transition-colors ${folder.iconColor}`}>
                {folder.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
