'use client';

import React, { useState } from 'react';
import { Search, User, Power } from 'lucide-react';
import { WindowId } from '@/models/window.model';
import { StartMenuAppItem } from './StartMenuAppItem';

interface StartMenuModalProps {
  isOpen: boolean;
  onToggleStartMenu: () => void;
  onOpenWindow: (id: WindowId) => void;
}

export function StartMenuModal({
  isOpen,
  onToggleStartMenu,
  onOpenWindow
}: StartMenuModalProps) {
  const [query, setQuery] = useState('');

  const apps: { id: WindowId; label: string; type: 'app' | 'folder' | 'copilot' | 'contact' | 'booking' }[] = [
    { id: 'services-app', label: 'Services', type: 'folder' },
    { id: 'about-app', label: 'About Us', type: 'folder' },
    { id: 'blog-app', label: 'Blogs', type: 'folder' },
    { id: 'contact-app', label: 'Contact', type: 'contact' },
    { id: 'appointment-app', label: 'Booking', type: 'booking' },
    { id: 'ai-terminal', label: 'Copilot AI', type: 'copilot' },
  ];

  const filteredApps = apps.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  const handleAppClick = (id: WindowId) => {
    onToggleStartMenu();
    onOpenWindow(id);
  };

  return (
    <div
      id="startMenu"
      className={`fixed bottom-14 left-1/2 -translate-x-1/2 w-[92%] max-w-lg h-[520px] z-50 win11-mica rounded-2xl p-6 shadow-win-menu flex flex-col justify-between ${
        !isOpen ? 'hidden-start' : ''
      }`}
    >
      <div className="relative mb-4">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search apps, services, blogs..."
          className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-winblue-600 shadow-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Pinned Apps</span>
          <button className="text-[11px] text-winblue-600 hover:underline cursor-pointer">All apps &gt;</button>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          {filteredApps.map(app => (
            <StartMenuAppItem
              key={app.id}
              id={app.id}
              label={app.label}
              type={app.type}
              onOpenApp={handleAppClick}
            />
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 text-xs font-bold">
            <User className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-800">Enterprise User</span>
        </div>

        <button
          onClick={onToggleStartMenu}
          className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-600 text-xs cursor-pointer"
        >
          <Power className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
