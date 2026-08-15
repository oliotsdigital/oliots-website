'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle, Sparkles, ChevronLeft } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { useServicesState } from '@/state/useServicesState';
import { ServiceFolderSidebar } from './ServiceFolderSidebar';
import { ServiceGrid } from './ServiceGrid';

interface ServicesAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onSelectServiceForBooking: (svcName: string) => void;
}

export function ServicesApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  playBeep,
  onSelectServiceForBooking
}: ServicesAppProps) {
  const { activeCategory, services, allServices, loading, filterServices } = useServicesState(playBeep);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = allServices.find(s => s.id === selectedServiceId);

  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<Layers className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-white/80 backdrop-blur-md">
        {/* Mobile View Toggle: If service selected on mobile, show detail view; else show sidebar icons */}
        <div className={`w-full md:w-72 ${selectedServiceId ? 'hidden md:block' : 'block'}`}>
          <ServiceFolderSidebar
            services={allServices}
            selectedServiceId={selectedServiceId}
            onSelectService={setSelectedServiceId}
            activeCategory={activeCategory}
            onSelectCategory={filterServices}
          />
        </div>

        {/* Content Pane (Shown on desktop, or on mobile when service is selected) */}
        <main className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 ${!selectedServiceId ? 'hidden md:block' : 'block'}`}>
          {selectedService ? (
            /* Single Selected Service Detailed View */
            <article className="space-y-6 animate-fadeIn select-text">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="px-3 py-1.5 rounded-lg bg-winblue-600/10 text-winblue-700 hover:bg-winblue-600/20 font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Service Folders</span>
                </button>
                <span className="text-slate-300">/</span>
                <span className="text-xs text-slate-500 font-mono">{selectedService.categoryTag}</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-winblue-700 border border-blue-200">
                      {selectedService.categoryTag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">{selectedService.title}</h2>
                  </div>
                  <button
                    onClick={() => onSelectServiceForBooking(selectedService.title)}
                    className="px-5 py-3 rounded-xl bg-winblue-600 hover:bg-winblue-700 active:scale-95 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>{selectedService.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {selectedService.description}
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-winblue-600" />
                    <span>Key Capabilities & Deliverables</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ) : (
            /* Multi Services Grid Overview (Desktop Default View) */
            <div className="space-y-6">
              <div className="border-b border-slate-200/80 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Capabilities & Digital Solutions</h2>
                <p className="text-xs text-slate-500 mt-1">Select any folder on the left sidebar to view details, or explore below.</p>
              </div>

              <ServiceGrid
                services={services}
                loading={loading}
                onRequestProposal={onSelectServiceForBooking}
              />
            </div>
          )}
        </main>
      </div>
    </WindowShell>
  );
}
