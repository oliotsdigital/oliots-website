'use client';

import React from 'react';
import {
  Search,
  FolderOpen,
  Building,
  Newspaper,
  Send,
  CalendarCheck,
  Sparkles
} from 'lucide-react';
import { WindowId } from '@/models/window.model';

interface TaskbarNavProps {
  onToggleStartMenu: () => void;
  onToggleWindow: (id: WindowId) => void;
}

export function TaskbarNav({ onToggleStartMenu, onToggleWindow }: TaskbarNavProps) {
  const handleStartMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleStartMenu();
  };

  const handleWindowToggle = (e: React.MouseEvent, id: WindowId) => {
    e.stopPropagation();
    onToggleWindow(id);
  };

  return (
    <nav className="flex items-center space-x-1 sm:space-x-1.5 mx-auto overflow-x-auto no-scrollbar max-w-[65vw] sm:max-w-none px-1 pointer-events-auto">
      {/* Windows 11 Start Logo Button */}
      <button
        onClick={handleStartMenuClick}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-winblue-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Start"
        aria-label="Start Menu"
      >
        <svg viewBox="0 0 88 88" className="w-5 h-5 fill-current text-winblue-600">
          <path d="M0 0h41.6v41.6H0zM46.4 0H88v41.6H46.4zM0 46.4h41.6V88H0zM46.4 46.4H88V88H46.4z" />
        </svg>
      </button>

      {/* Search Icon */}
      <button
        onClick={handleStartMenuClick}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-slate-700 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Search"
        aria-label="Search Applications"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Services App Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'services-app')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-amber-500 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Services Folder"
        aria-label="Services Window"
      >
        <FolderOpen className="w-4.5 h-4.5" />
      </button>

      {/* About App Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'about-app')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-cyan-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="About Us"
        aria-label="About Us Window"
      >
        <Building className="w-4.5 h-4.5" />
      </button>

      {/* Blogs Explorer Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'blog-app')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-indigo-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Blogs Explorer"
        aria-label="Blogs Window"
      >
        <Newspaper className="w-4.5 h-4.5" />
      </button>

      {/* Contact Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'contact-app')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-teal-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Contact Us"
        aria-label="Contact Terminal Window"
      >
        <Send className="w-4.5 h-4.5" />
      </button>

      {/* Appointment Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'appointment-app')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-orange-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Book Appointment"
        aria-label="Appointment Window"
      >
        <CalendarCheck className="w-4.5 h-4.5" />
      </button>

      {/* Windows Copilot Icon */}
      <button
        onClick={e => handleWindowToggle(e, 'ai-terminal')}
        className="p-2 rounded-lg hover:bg-slate-200/60 active:scale-95 transition-all text-purple-600 cursor-pointer flex-shrink-0 touch-manipulation"
        title="Windows Copilot AI"
        aria-label="Copilot AI Window"
      >
        <Sparkles className="w-4.5 h-4.5" />
      </button>
    </nav>
  );
}
