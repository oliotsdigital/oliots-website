'use client';

import React from 'react';
import { WindowId } from '@/models/window.model';
import { TaskbarNav } from './TaskbarNav';
import { SystemTrayClock } from './SystemTrayClock';

interface TaskbarFooterProps {
  audioEnabled: boolean;
  onToggleAudio: () => void;
  currentTime: string;
  currentDate: string;
  onToggleStartMenu: () => void;
  onToggleWindow: (id: WindowId) => void;
}

export function TaskbarFooter({
  audioEnabled,
  onToggleAudio,
  currentTime,
  currentDate,
  onToggleStartMenu,
  onToggleWindow
}: TaskbarFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 win11-taskbar-glass z-[100] flex items-center justify-between px-2 sm:px-3 shadow-win-taskbar pointer-events-auto">
      <div className="w-24 hidden sm:block"></div>

      <TaskbarNav
        onToggleStartMenu={onToggleStartMenu}
        onToggleWindow={onToggleWindow}
      />

      <SystemTrayClock
        audioEnabled={audioEnabled}
        onToggleAudio={onToggleAudio}
        currentTime={currentTime}
        currentDate={currentDate}
      />
    </footer>
  );
}
