'use client';

import React from 'react';
import { Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { WindowId } from '@/models/window.model';

interface DesktopHeroWallpaperWidgetProps {
  onNavigate: (id: WindowId) => void;
  onExploreCapabilitiesClick?: () => void;
}

export function DesktopHeroWallpaperWidget({
  onNavigate,
  onExploreCapabilitiesClick
}: DesktopHeroWallpaperWidgetProps) {
  const handleExploreCapabilitiesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExploreCapabilitiesClick) {
      onExploreCapabilitiesClick();
      return;
    }
    onNavigate('services-app');
  };

  const handleScheduleConsultationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate('appointment-app');
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate('services-app');
  };

  const cards = [
    {
      code: '01 // EXPERIENCE',
      title: 'Digital Experiences',
      desc: 'High-performance web applications designed for conversion.',
      color: 'text-winblue-600',
      borderColor: 'hover:border-blue-400/80'
    },
    {
      code: '02 // INTELLIGENCE',
      title: 'AI & Automation',
      desc: 'Generative AI agents, RAG search, and automated workflows.',
      color: 'text-cyan-600',
      borderColor: 'hover:border-cyan-400/80'
    },
    {
      code: '03 // ARCHITECTURE',
      title: 'Software Solutions',
      desc: 'Custom scalable software tailored to your operating requirements.',
      color: 'text-indigo-600',
      borderColor: 'hover:border-indigo-400/80'
    },
    {
      code: '04 // SCALE',
      title: 'Digital Growth',
      desc: 'Data-backed SEO, digital marketing engines, and lead acquisition.',
      color: 'text-emerald-600',
      borderColor: 'hover:border-emerald-400/80'
    }
  ];

  return (
    <section className="w-full max-w-3xl py-2 sm:py-6 px-1 sm:px-4 bg-transparent select-text transition-all duration-300">
      {/* Top Tag Ribbon */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/90 text-winblue-700 text-[11px] sm:text-xs font-semibold shadow-xs mb-4 sm:mb-6 select-text">
        <Sparkles className="w-3.5 h-3.5 text-winblue-600 animate-pulse" />
        <span className="tracking-wide">OLIOTS DIGITAL OS • v3.5.0 ENTERPRISE</span>
      </div>

      {/* Main SEO Headline */}
      <header className="mb-4 sm:mb-6 select-text">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18] mb-3">
          We Build Digital Experiences That{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-winblue-600 via-blue-500 to-sky-500">
            Move Businesses Forward.
          </span>
        </h1>
        <p className="text-slate-700 text-xs sm:text-base leading-relaxed max-w-xl font-medium drop-shadow-2xs">
          Oliots Digital is a high-velocity technology partner engineering modern Next.js web platforms, custom enterprise software, AI-driven automation workflows, and transformative digital products built for scale.
        </p>
      </header>

      {/* Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 pointer-events-auto">
        <button
          id="btn-explore-capabilities"
          onClick={handleExploreCapabilitiesClick}
          className="px-6 py-3.5 rounded-xl bg-winblue-600 hover:bg-winblue-700 active:scale-98 text-white font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 group cursor-pointer shadow-md hover:shadow-lg transition-all touch-manipulation pointer-events-auto z-10"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          id="btn-schedule-consultation"
          onClick={handleScheduleConsultationClick}
          className="px-6 py-3.5 rounded-xl bg-white/85 hover:bg-white/95 active:scale-98 backdrop-blur-md border border-slate-300/90 text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-xs hover:shadow-sm transition-all touch-manipulation pointer-events-auto z-10"
        >
          <Calendar className="w-4 h-4 text-winblue-600" />
          <span>Schedule Project Consultation</span>
        </button>
      </div>

      {/* Blended Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pointer-events-auto">
        {cards.map((card, idx) => (
          <article
            key={idx}
            onClick={handleCardClick}
            className={`p-3.5 sm:p-4 rounded-2xl bg-white/50 hover:bg-white/80 backdrop-blur-md border border-white/80 ${card.borderColor} shadow-xs hover:shadow-md cursor-pointer group transition-all duration-200 select-text touch-manipulation pointer-events-auto`}
          >
            <div className={`text-[10px] font-extrabold ${card.color} mb-1 tracking-wider`}>
              {card.code}
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-winblue-600 transition-colors mb-1">
              {card.title}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-normal font-normal">
              {card.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
