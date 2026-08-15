'use client';

import React from 'react';
import { WindowId } from '@/models/window.model';
import { X, Minimize2, Maximize2 } from 'lucide-react';

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
  if (!isOpen || isMinimized) return null;

  return (
    <div
      id={id}
      style={{ zIndex: zIndex + 50 }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
      className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 pointer-events-auto transition-all animate-fadeIn overflow-y-auto z-[100]"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized 
            ? 'w-full h-full rounded-none' 
            : 'max-w-5xl h-[92vh] max-h-[860px]'
        } ${className}`}
      >
        {/* Title Bar Header */}
        <header className="h-12 sm:h-11 bg-slate-50/90 border-b border-slate-200/90 px-4 sm:px-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800 truncate pr-2">
            {icon}
            <h2 className="truncate font-extrabold text-slate-900">{title}</h2>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              className="w-8 h-8 rounded-xl hover:bg-slate-200/80 active:scale-95 text-slate-600 font-bold text-xs flex items-center justify-center cursor-pointer transition-all"
              title="Minimize"
              aria-label="Minimize Window"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMaximize();
              }}
              className="w-8 h-8 rounded-xl hover:bg-slate-200/80 active:scale-95 text-slate-600 font-bold text-xs flex items-center justify-center cursor-pointer transition-all"
              title="Maximize"
              aria-label="Maximize Window"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 font-bold text-xs flex items-center justify-center cursor-pointer transition-all ml-1"
              title="Close"
              aria-label="Close Window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Modal Body Main Section */}
        <main className="flex-1 flex flex-col overflow-y-auto relative bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
