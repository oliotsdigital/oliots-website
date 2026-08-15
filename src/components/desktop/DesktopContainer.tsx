'use client';

import React from 'react';
import { useSoundState } from '@/state/useSoundState';
import { useDesktopState, DESKTOP_SHORTCUTS } from '@/state/useDesktopState';
import { useAppointmentState } from '@/state/useAppointmentState';
import { useCopilotState } from '@/state/useCopilotState';

import { DesktopBackgroundCanvas } from './DesktopBackgroundCanvas';
import { DesktopIconsGrid } from './DesktopIconsGrid';
import { DesktopHeroWallpaperWidget } from './DesktopHeroWallpaperWidget';
import { MobilePagerContainer } from './MobilePagerContainer';
import { ContextMenuModal } from './ContextMenuModal';
import { StartMenuModal } from './StartMenuModal';
import { TaskbarFooter } from './TaskbarFooter';

import { ServicesApp } from '@/components/apps/ServicesApp/ServicesApp';
import { AboutApp } from '@/components/apps/AboutApp/AboutApp';
import { BlogApp } from '@/components/apps/BlogApp/BlogApp';
import { ContactApp } from '@/components/apps/ContactApp/ContactApp';
import { AppointmentApp } from '@/components/apps/AppointmentApp/AppointmentApp';
import { AiTerminalApp } from '@/components/apps/AiTerminalApp/AiTerminalApp';
import { RecycleBinApp } from '@/components/apps/RecycleBinApp/RecycleBinApp';

export function DesktopContainer() {
  const { audioEnabled, toggleAudio, playBeep } = useSoundState();

  const {
    windows,
    selectedIconId,
    setSelectedIconId,
    isStartMenuOpen,
    contextMenu,
    currentTime,
    currentDate,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    toggleWindow,
    bringToFront,
    toggleStartMenu,
    openContextMenu,
    closeContextMenu,
    deselectAll
  } = useDesktopState(playBeep);

  const appointmentState = useAppointmentState(playBeep);
  const copilotState = useCopilotState(playBeep);

  const handleSelectServiceForBooking = (svcName: string) => {
    appointmentState.selectServiceAndOpen(svcName);
    openWindow('appointment-app');
  };

  const handleContactMessageSent = (msgText: string) => {
    copilotState.appendSystemLogMessage(`✅ ${msgText}`);
    closeWindow('contact-app');
  };

  return (
    <div
      className="bg-slate-100 text-slate-800 font-sans overflow-hidden h-screen w-screen relative select-none"
      onContextMenu={openContextMenu}
    >
      {/* Dynamic Animated Gradient Wallpaper Canvas */}
      <DesktopBackgroundCanvas />

      {/* Main Workspace Region */}
      <div className="w-full h-[calc(100vh-48px)] overflow-hidden relative z-10">
        {/* Desktop Main View (DESKTOP MODE: md:flex) */}
        <main
          id="desktopScreen"
          className="hidden md:flex relative z-10 w-full h-full p-6 overflow-hidden items-start justify-between gap-6"
          onClick={deselectAll}
        >
          {/* Left Side: Desktop Grid Shortcuts */}
          <section className="z-10" aria-label="Desktop Shortcuts">
            <DesktopIconsGrid
              shortcuts={DESKTOP_SHORTCUTS}
              selectedIconId={selectedIconId}
              onSelectIcon={setSelectedIconId}
              onOpenWindow={openWindow}
            />
          </section>

          {/* Right Side: Wallpaper Hero Content */}
          <section
            className="flex-1 flex justify-end w-full max-h-full overflow-y-auto pr-1 z-10 select-text"
            onClick={e => e.stopPropagation()}
            aria-label="Overview Information"
          >
            <DesktopHeroWallpaperWidget onNavigate={openWindow} />
          </section>
        </main>

        {/* Mobile 2-Page Horizontal Slider App Drawer View (MOBILE MODE: md:hidden) */}
        <main className="block md:hidden relative z-10 w-full h-full">
          <MobilePagerContainer
            shortcuts={DESKTOP_SHORTCUTS}
            selectedIconId={selectedIconId}
            onSelectIcon={setSelectedIconId}
            onOpenWindow={openWindow}
          />
        </main>
      </div>

      {/* App Windows */}
      <ServicesApp
        windowState={windows['services-app']}
        onMinimize={() => minimizeWindow('services-app')}
        onMaximize={() => toggleMaximize('services-app')}
        onClose={() => closeWindow('services-app')}
        onFocus={() => bringToFront('services-app')}
        playBeep={playBeep}
        onSelectServiceForBooking={handleSelectServiceForBooking}
      />

      <AboutApp
        windowState={windows['about-app']}
        onMinimize={() => minimizeWindow('about-app')}
        onMaximize={() => toggleMaximize('about-app')}
        onClose={() => closeWindow('about-app')}
        onFocus={() => bringToFront('about-app')}
      />

      <BlogApp
        windowState={windows['blog-app']}
        onMinimize={() => minimizeWindow('blog-app')}
        onMaximize={() => toggleMaximize('blog-app')}
        onClose={() => closeWindow('blog-app')}
        onFocus={() => bringToFront('blog-app')}
      />

      <ContactApp
        windowState={windows['contact-app']}
        onMinimize={() => minimizeWindow('contact-app')}
        onMaximize={() => toggleMaximize('contact-app')}
        onClose={() => closeWindow('contact-app')}
        onFocus={() => bringToFront('contact-app')}
        playBeep={playBeep}
        onMessageSent={handleContactMessageSent}
      />

      <AppointmentApp
        windowState={windows['appointment-app']}
        onMinimize={() => minimizeWindow('appointment-app')}
        onMaximize={() => toggleMaximize('appointment-app')}
        onClose={() => closeWindow('appointment-app')}
        onFocus={() => bringToFront('appointment-app')}
        playBeep={playBeep}
        appointmentState={appointmentState}
      />

      <AiTerminalApp
        windowState={windows['ai-terminal']}
        onMinimize={() => minimizeWindow('ai-terminal')}
        onMaximize={() => toggleMaximize('ai-terminal')}
        onClose={() => closeWindow('ai-terminal')}
        onFocus={() => bringToFront('ai-terminal')}
        copilotState={copilotState}
      />

      <RecycleBinApp
        windowState={windows['recycle-app']}
        onMinimize={() => minimizeWindow('recycle-app')}
        onMaximize={() => toggleMaximize('recycle-app')}
        onClose={() => closeWindow('recycle-app')}
        onFocus={() => bringToFront('recycle-app')}
      />

      {/* Context Menu Modal */}
      <ContextMenuModal
        isOpen={contextMenu.isOpen}
        x={contextMenu.x}
        y={contextMenu.y}
        onClose={closeContextMenu}
        onOpenWindow={openWindow}
      />

      {/* Start Menu Modal */}
      <StartMenuModal
        isOpen={isStartMenuOpen}
        onToggleStartMenu={toggleStartMenu}
        onOpenWindow={openWindow}
      />

      {/* Taskbar Footer */}
      <TaskbarFooter
        audioEnabled={audioEnabled}
        onToggleAudio={toggleAudio}
        currentTime={currentTime}
        currentDate={currentDate}
        onToggleStartMenu={toggleStartMenu}
        onToggleWindow={toggleWindow}
      />
    </div>
  );
}
