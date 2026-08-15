'use client';

import React from 'react';
import { Volume2, VolumeX, Wifi, BatteryMedium } from 'lucide-react';

interface SystemTrayClockProps {
  audioEnabled: boolean;
  onToggleAudio: () => void;
  currentTime: string;
  currentDate: string;
}

export function SystemTrayClock({
  audioEnabled,
  onToggleAudio,
  currentTime,
  currentDate
}: SystemTrayClockProps) {
  return (
    <div className="flex items-center space-x-2 text-xs text-slate-700">
      <button
        onClick={onToggleAudio}
        className="p-1.5 rounded hover:bg-slate-200 cursor-pointer"
        title="Toggle Sound Effects"
      >
        {audioEnabled ? (
          <Volume2 className="w-4 h-4 text-slate-700" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400" />
        )}
      </button>

      <div className="hidden sm:flex items-center space-x-2 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer">
        <Wifi className="w-3.5 h-3.5" />
        <BatteryMedium className="w-3.5 h-3.5" />
      </div>

      <div className="hover:bg-slate-200 px-2 py-1 rounded text-right cursor-pointer leading-tight">
        <div className="font-bold text-[11px]">{currentTime || '12:00 PM'}</div>
        <div className="text-[9px] text-slate-500">{currentDate || '8/15/2026'}</div>
      </div>
    </div>
  );
}
