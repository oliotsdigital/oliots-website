'use client';

import React from 'react';
import { Monitor, Send, CalendarCheck, Sparkles } from 'lucide-react';
import { WindowId } from '@/models/window.model';

interface StartMenuAppItemProps {
  id: WindowId;
  label: string;
  type: 'app' | 'folder' | 'copilot' | 'contact' | 'booking';
  onOpenApp: (id: WindowId) => void;
}

export function StartMenuAppItem({ id, label, type, onOpenApp }: StartMenuAppItemProps) {
  const renderIcon = () => {
    if (type === 'app') {
      return (
        <div className="w-10 h-10 rounded-xl bg-winblue-600 text-white flex items-center justify-center text-lg shadow">
          <Monitor className="w-5 h-5" />
        </div>
      );
    }
    if (type === 'contact') {
      return (
        <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-lg shadow">
          <Send className="w-5 h-5" />
        </div>
      );
    }
    if (type === 'booking') {
      return (
        <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg shadow">
          <CalendarCheck className="w-5 h-5" />
        </div>
      );
    }
    if (type === 'copilot') {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-sky-400 text-white flex items-center justify-center text-lg shadow">
          <Sparkles className="w-5 h-5" />
        </div>
      );
    }

    return (
      <div className="w-10 h-10 rounded-xl fill-current text-winfolder">
        <svg viewBox="0 0 64 52" className="w-10 h-10">
          <path
            d="M4 10 C4 6 7 4 11 4 L24 4 C27 4 29 6 31 8 L35 12 L53 12 C57 12 60 15 60 19 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
            fill="#ffca28"
          />
          <path
            d="M4 18 C4 15 6 13 9 13 L55 13 C58 13 60 15 60 18 L60 42 C60 46 57 49 53 49 L11 49 C7 49 4 46 4 42 Z"
            fill="#ffd54f"
          />
        </svg>
      </div>
    );
  };

  return (
    <button
      onClick={() => onOpenApp(id)}
      className="p-2.5 rounded-xl hover:bg-slate-200/50 flex flex-col items-center space-y-1.5 transition-colors cursor-pointer"
    >
      {renderIcon()}
      <span className="text-[11px] text-slate-800 font-medium">{label}</span>
    </button>
  );
}
