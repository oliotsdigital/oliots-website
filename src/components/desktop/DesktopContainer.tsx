'use client';

import React from 'react';
import { Sparkles, ArrowRight, Calendar, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { useSoundState } from '@/state/useSoundState';
import { useDesktopState } from '@/state/useDesktopState';
import { useAppointmentState } from '@/state/useAppointmentState';
import { useCopilotState } from '@/state/useCopilotState';

import { DesktopBackgroundCanvas } from './DesktopBackgroundCanvas';
import { FoldersContainer } from '@/components/folders/FoldersContainer';

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
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    bringToFront
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
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Dynamic Animated Gradient Wallpaper Canvas */}
      <DesktopBackgroundCanvas />

      {/* Top Navbar Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between relative z-20">
        {/* Logo Mark */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logos/Logo-removebg-preview.png" 
            alt="Oliots Digital Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Top Navbar Actions */}
        <div className="flex items-center space-x-3">

          {/* Sound FX Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200 text-slate-600 hover:text-blue-600 transition-all shadow-xs cursor-pointer"
            title={audioEnabled ? 'Audio Effects On' : 'Audio Effects Muted'}
            aria-label="Toggle Sound Effects"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Contact Button */}
          <button
            onClick={() => openWindow('contact-app')}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
          >
            Contact Studio
          </button>
        </div>
      </header>

      {/* Main Hero Container View */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Hero Title, Description & 2 Action Buttons */}
          <section className="lg:col-span-6 flex flex-col justify-center space-y-6">


            {/* Hero Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
             Transform Digitally{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Grow Exponentially.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl">
            Your one stop destination for all Digital Transformation
            </p>

            {/* 2 Buttons Below Hero Content */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Button 1: Primary Action */}
              <button
                id="btn-explore-capabilities"
                onClick={() => openWindow('services-app')}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-98 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2.5 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer group"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Secondary Action */}
              <button
                id="btn-schedule-consultation"
                onClick={() => openWindow('appointment-app')}
                className="px-7 py-4 rounded-2xl bg-white/90 hover:bg-white active:scale-98 backdrop-blur-md border border-slate-200 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center space-x-2.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Schedule Consultation</span>
              </button>
            </div>


          </section>

          {/* RIGHT SIDE: Folders Container Card */}
          <section className="lg:col-span-6">
            <FoldersContainer onOpenFolder={openWindow} />
          </section>

        </div>
      </main>

      {/* App Window Modals */}
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
    </div>
  );
}
