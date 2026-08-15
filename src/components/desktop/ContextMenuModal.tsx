'use client';

import React from 'react';
import { Layers, Sparkles, ChevronRight } from 'lucide-react';
import { WindowId } from '@/models/window.model';

interface ContextMenuModalProps {
  isOpen: boolean;
  x: number;
  y: number;
  onClose: () => void;
  onOpenWindow: (id: WindowId) => void;
}

export function ContextMenuModal({
  isOpen,
  x,
  y,
  onClose,
  onOpenWindow
}: ContextMenuModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="contextMenu"
      style={{ left: `${x}px`, top: `${y}px` }}
      className="fixed z-50 w-52 win11-mica rounded-xl p-1.5 shadow-win-context text-xs space-y-1"
    >
      <button
        onClick={() => {
          onOpenWindow('services-app');
          onClose();
        }}
        className="w-full text-left px-3 py-1.5 rounded-md hover:bg-slate-200/60 flex items-center space-x-2 cursor-pointer"
      >
        <Layers className="w-3.5 h-3.5 text-winblue-600" />
        <span>View Services</span>
      </button>

      <div className="border-t border-slate-200 my-1"></div>

      <button
        onClick={onClose}
        className="w-full text-left px-3 py-1.5 rounded-md hover:bg-slate-200/60 flex items-center justify-between cursor-pointer"
      >
        <span>Sort desktop icons</span>
        <ChevronRight className="w-3 h-3 text-slate-400" />
      </button>

      <button
        onClick={onClose}
        className="w-full text-left px-3 py-1.5 rounded-md hover:bg-slate-200/60 flex items-center justify-between cursor-pointer"
      >
        <span>Refresh Desktop</span>
        <span className="text-[10px] text-slate-400">F5</span>
      </button>

      <div className="border-t border-slate-200 my-1"></div>

      <button
        onClick={() => {
          onOpenWindow('ai-terminal');
          onClose();
        }}
        className="w-full text-left px-3 py-1.5 rounded-md hover:bg-slate-200/60 flex items-center space-x-2 text-purple-600 font-semibold cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        <span>Ask Copilot AI</span>
      </button>
    </div>
  );
}
