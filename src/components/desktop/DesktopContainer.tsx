'use client';

import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { useSoundState } from '@/state/useSoundState';
import { useDesktopState } from '@/state/useDesktopState';
import { useAppointmentState } from '@/state/useAppointmentState';
import { useCopilotState } from '@/state/useCopilotState';

import { DesktopBackgroundCanvas } from './DesktopBackgroundCanvas';
import { FoldersContainer } from '@/components/folders/FoldersContainer';

import { ProductsApp } from '@/components/apps/ProductsApp/ProductsApp';
import { PortfolioApp } from '@/components/apps/PortfolioApp/PortfolioApp';
import { AboutApp } from '@/components/apps/AboutApp/AboutApp';
import { BlogApp } from '@/components/apps/BlogApp/BlogApp';
import { ContactApp } from '@/components/apps/ContactApp/ContactApp';
import { AppointmentApp } from '@/components/apps/AppointmentApp/AppointmentApp';
import { AiTerminalApp } from '@/components/apps/AiTerminalApp/AiTerminalApp';

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

  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsSubmittingEmail(true);
    playBeep(600, 'sine');

    setTimeout(() => {
      setIsSubmittingEmail(false);
      setEmailSubmitted(true);
      copilotState.appendSystemLogMessage(`✅ Email registered: ${emailInput}`);
    }, 600);
  };

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

      {/* Main Hero Container View */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Logo, Hero Title, Description & Email Capture Form */}
          <section className="lg:col-span-6 flex flex-col justify-center space-y-6">

            {/* Logo Image Above Hero Title */}
            <div>
              <img 
                src="/logos/Logo-removebg-preview.png" 
                alt="Oliots Digital Logo" 
                className="h-24 sm:h-30 md:h-30 w-auto object-contain"
              />
            </div>

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

            {/* Email Capture Input & Button */}
            {emailSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center space-x-3 shadow-xs max-w-md">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Thank you! We&apos;ve received your email and will be in touch shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md pt-2">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base outline-none transition-all shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmittingEmail}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-98 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-75"
                >
                  <span>{isSubmittingEmail ? 'Submitting...' : 'Get Started'}</span>
                  {!isSubmittingEmail && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}

          </section>

          {/* RIGHT SIDE: Folders Container Card */}
          <section className="lg:col-span-6">
            <FoldersContainer onOpenFolder={openWindow} />
          </section>

        </div>
      </main>

      {/* App Window Modals */}
      <ProductsApp
        windowState={windows['products-app']}
        onMinimize={() => minimizeWindow('products-app')}
        onMaximize={() => toggleMaximize('products-app')}
        onClose={() => closeWindow('products-app')}
        onFocus={() => bringToFront('products-app')}
      />

      <PortfolioApp
        windowState={windows['portfolio-app']}
        onMinimize={() => minimizeWindow('portfolio-app')}
        onMaximize={() => toggleMaximize('portfolio-app')}
        onClose={() => closeWindow('portfolio-app')}
        onFocus={() => bringToFront('portfolio-app')}
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
    </div>
  );
}
