'use client';

import React from 'react';
import { Trash2, FolderOpen } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';

interface RecycleBinAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

export function RecycleBinApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus
}: RecycleBinAppProps) {
  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<Trash2 className="w-4 h-4 text-slate-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 p-6 text-center flex flex-col items-center justify-center bg-white/40">
        <FolderOpen className="w-12 h-12 text-slate-300 mb-2" />
        <h3 className="text-sm font-bold text-slate-700">Recycle Bin is empty</h3>
        <p className="text-xs text-slate-500 mt-1">
          No legacy or deprecated code found. Oliots Digital builds clean code!
        </p>
      </div>
    </WindowShell>
  );
}
