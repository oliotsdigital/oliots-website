'use client';

import React from 'react';
import { Monitor, Sparkles, Trash2 } from 'lucide-react';
import { ShortcutItem, WindowId } from '@/models/window.model';

interface DesktopShortcutIconProps {
  shortcut: ShortcutItem;
  isSelected: boolean;
  onSelect: (id: WindowId) => void;
  onOpen: (id: WindowId) => void;
}

export function DesktopShortcutIcon({
  shortcut,
  isSelected,
  onSelect,
  onOpen
}: DesktopShortcutIconProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(shortcut.id);
    onOpen(shortcut.id); // One-click opening on desktop & mobile
  };

  const renderIconGraphic = () => {
    if (shortcut.type === 'app') {
      return (
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-winblue-600 drop-shadow-md group-hover:scale-105 transition-transform">
          <Monitor className="w-8 h-8 text-winblue-600" />
        </div>
      );
    }

    if (shortcut.type === 'copilot') {
      return (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-sky-400 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
          <Sparkles className="w-6 h-6" />
        </div>
      );
    }

    if (shortcut.type === 'recycle') {
      return (
        <div className="w-12 h-12 flex items-center justify-center text-2xl text-slate-500 group-hover:scale-105 transition-transform">
          <Trash2 className="w-7 h-7 text-slate-500" />
        </div>
      );
    }

    // Folder icons with customized internal SVG accents
    return (
      <div className="win11-folder-icon flex items-center justify-center group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 64 52" className="w-12 h-12">
          <path
            d="M4 10 C4 6 7 4 11 4 L24 4 C27 4 29 6 31 8 L35 12 L53 12 C57 12 60 15 60 19 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
            fill="#ffca28"
          />
          <path
            d="M4 18 C4 15 6 13 9 13 L55 13 C58 13 60 15 60 18 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
            fill="#ffd54f"
          />
          {shortcut.id === 'services-app' && (
            <>
              <rect x="22" y="22" width="20" height="18" rx="3" fill="#0067C0" opacity="0.9" />
              <path d="M28 31 L36 31 M32 27 L32 35" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}
          {shortcut.id === 'about-app' && (
            <>
              <circle cx="32" cy="31" r="9" fill="#00bcd4" />
              <path d="M32 26 L32 28 M32 31 L32 36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}
          {shortcut.id === 'blog-app' && (
            <>
              <rect x="23" y="23" width="18" height="16" rx="2" fill="#5c6bc0" />
              <path d="M26 27 L38 27 M26 31 L35 31 M26 35 L32 35" stroke="#ffffff" strokeWidth="1.8" />
            </>
          )}
          {shortcut.id === 'contact-app' && (
            <>
              <rect x="21" y="24" width="22" height="15" rx="3" fill="#26a69a" />
              <path d="M22 25 L32 32 L42 25" stroke="#ffffff" strokeWidth="2" fill="none" />
            </>
          )}
          {shortcut.id === 'appointment-app' && (
            <>
              <rect x="22" y="23" width="20" height="17" rx="2" fill="#ff7043" />
              <rect x="22" y="23" width="20" height="5" fill="#d84315" />
              <circle cx="32" cy="33" r="2" fill="#ffffff" />
            </>
          )}
        </svg>
      </div>
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`desktop-shortcut flex flex-col items-center text-center group cursor-pointer touch-manipulation pointer-events-auto ${
        isSelected ? 'selected-icon' : ''
      }`}
    >
      {renderIconGraphic()}
      <span className="text-[11px] font-medium text-slate-800 leading-tight mt-1 px-1 rounded bg-white/40 group-hover:bg-white/80 shadow-xs backdrop-blur-xs">
        {shortcut.label}
      </span>
    </div>
  );
}
