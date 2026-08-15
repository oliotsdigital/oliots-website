'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { AboutOverviewCard } from './AboutOverviewCard';
import { AboutStatsGrid } from './AboutStatsGrid';

interface AboutAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

export function AboutApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus
}: AboutAppProps) {
  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<Users className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/50">
        <AboutOverviewCard />
        <AboutStatsGrid />
      </div>
    </WindowShell>
  );
}
