'use client';

import React from 'react';
import { WindowId } from '@/models/window.model';

interface WindowShellProps {
  id: WindowId;
  title: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  className?: string;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export function WindowShell({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  className = '',
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  children
}: WindowShellProps) {
  if (!isOpen) return null;

  return (
    <div
      id={id}
      style={{ zIndex }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
      className={`os-window fixed left-0 right-0 top-0 bottom-12 w-full h-[calc(100vh-48px)] h-[calc(100dvh-48px)] win11-mica flex flex-col shadow-win-window pointer-events-auto rounded-none ${
        isMinimized ? 'hidden-window' : ''
      } ${isMaximized ? 'maximized' : ''} ${className}`}
    >
      {/* Title Bar */}
      <header className="h-11 sm:h-9 bg-white/90 border-b border-slate-200/90 px-3 flex items-center justify-between flex-shrink-0 cursor-move">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 truncate pr-2">
          {icon}
          <h2 className="truncate text-xs font-bold">{title}</h2>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={e => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-9 h-8 rounded-lg hover:bg-slate-200/80 active:scale-95 text-slate-700 font-bold text-xs flex items-center justify-center cursor-pointer touch-manipulation"
            title="Minimize"
            aria-label="Minimize Window"
          >
            —
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              onMaximize();
            }}
            className="w-9 h-8 rounded-lg hover:bg-slate-200/80 active:scale-95 text-slate-700 font-bold text-xs flex items-center justify-center cursor-pointer touch-manipulation"
            title="Maximize"
            aria-label="Maximize Window"
          >
            ☐
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
            className="w-9 h-8 rounded-lg bg-red-100/80 hover:bg-red-600 hover:text-white active:scale-95 text-red-600 font-bold text-sm flex items-center justify-center cursor-pointer touch-manipulation transition-all"
            title="Close"
            aria-label="Close Window"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Window Body Main Section */}
      <main className="flex-1 flex flex-col overflow-hidden relative pointer-events-auto">
        {children}
      </main>
    </div>
  );
}
