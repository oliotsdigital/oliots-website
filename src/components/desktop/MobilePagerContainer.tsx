'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { ShortcutItem, WindowId } from '@/models/window.model';
import { DesktopHeroWallpaperWidget } from './DesktopHeroWallpaperWidget';
import { DesktopShortcutIcon } from './DesktopShortcutIcon';

interface MobilePagerContainerProps {
  shortcuts: ShortcutItem[];
  selectedIconId: WindowId | null;
  onSelectIcon: (id: WindowId) => void;
  onOpenWindow: (id: WindowId) => void;
}

export function MobilePagerContainer({
  shortcuts,
  selectedIconId,
  onSelectIcon,
  onOpenWindow
}: MobilePagerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      if (scrollLeft >= width / 2) {
        setCurrentPage(2);
      } else {
        setCurrentPage(1);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage2 = () => {
    if (page2Ref.current) {
      page2Ref.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    } else if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPage1 = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      {/* Horizontal 2-Page App Drawer Container */}
      <div
        ref={containerRef}
        className="w-full flex-1 flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar min-h-0"
      >
        {/* PAGE 1: Written Hero Content Page */}
        <div className="w-full min-w-full h-full snap-start overflow-y-auto p-3 pb-24 flex flex-col justify-between">
          <div className="w-full flex-1">
            <DesktopHeroWallpaperWidget
              onNavigate={onOpenWindow}
              onExploreCapabilitiesClick={scrollToPage2}
            />
          </div>

          {/* Swipe Indicator Banner */}
          <div
            onClick={scrollToPage2}
            className="w-full mt-6 mb-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 flex items-center justify-between cursor-pointer active:scale-98 transition-all shadow-xs touch-manipulation pointer-events-auto"
          >
            <div className="flex items-center space-x-2">
              <LayoutGrid className="w-4 h-4 text-winblue-600" />
              <span className="text-xs font-bold text-slate-900">Swipe or tap for App Drawer</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-winblue-600 font-bold">
              <span>Page 2</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* PAGE 2: App Drawer / All Folders Page */}
        <div
          ref={page2Ref}
          className="w-full min-w-full h-full snap-start overflow-y-auto p-4 pb-24 flex flex-col justify-between select-text"
        >
          <div className="w-full max-w-sm mx-auto">
            {/* Header Banner */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-300/60">
              <div className="flex items-center space-x-2">
                <button
                  onClick={scrollToPage1}
                  className="p-1 rounded-lg bg-white/80 border border-slate-200 text-slate-700 active:scale-95 touch-manipulation pointer-events-auto"
                  aria-label="Back to Overview"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div>
                  <h2 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                    App Drawer & Folders
                  </h2>
                  <p className="text-[10px] text-slate-500 font-medium">Tap any folder to launch app</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-winblue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                PAGE 2 / 2
              </span>
            </div>

            {/* 3-Column Mobile Home Screen Grid */}
            <div className="grid grid-cols-3 gap-y-6 gap-x-3 justify-items-center py-4 bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 p-4 shadow-xs pointer-events-auto">
              {shortcuts.map(sc => (
                <DesktopShortcutIcon
                  key={sc.id}
                  shortcut={sc}
                  isSelected={selectedIconId === sc.id}
                  onSelect={onSelectIcon}
                  onOpen={onOpenWindow}
                />
              ))}
            </div>
          </div>

          <div className="text-center py-4">
            <button
              onClick={scrollToPage1}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-xs text-slate-800 font-semibold active:scale-95 transition-all shadow-xs touch-manipulation pointer-events-auto"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating 2-Page Dots Indicator (Floats above fixed bottom taskbar) */}
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-[90] flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium shadow-md pointer-events-auto">
        <button
          onClick={scrollToPage1}
          className={`w-2 h-2 rounded-full transition-all cursor-pointer touch-manipulation ${
            currentPage === 1 ? 'bg-winblue-400 w-5' : 'bg-white/40'
          }`}
          aria-label="Go to Page 1 Overview"
        />
        <button
          onClick={scrollToPage2}
          className={`w-2 h-2 rounded-full transition-all cursor-pointer touch-manipulation ${
            currentPage === 2 ? 'bg-winblue-400 w-5' : 'bg-white/40'
          }`}
          aria-label="Go to Page 2 App Drawer"
        />
      </div>
    </div>
  );
}
