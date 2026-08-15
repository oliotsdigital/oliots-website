'use client';

import React from 'react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { Briefcase, ExternalLink, TrendingUp, ShieldCheck, Zap, Globe } from 'lucide-react';

interface PortfolioAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

const PORTFOLIO_ITEMS = [
  {
    id: 'port-1',
    title: 'FinTech Banking & Wealth Dashboard',
    client: 'Apex Financial Technologies',
    metric: '+240% Lead Conversion',
    description: 'Ultra-fast Next.js banking portal with real-time stock analytics, instant KYC processing, and sub-100ms page transitions.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind', 'Cloudflare Workers'],
    icon: TrendingUp
  },
  {
    id: 'port-2',
    title: 'Autonomous HealthTech AI Diagnostic Hub',
    client: 'MedPulse Innovations',
    metric: '99.9% Clinical Uptime',
    description: 'HIPAA-compliant medical workflow platform featuring multi-agent AI assistant for patient triaging and automated document search.',
    tech: ['Generative AI', 'Vector RAG', 'React 19', 'Node.js'],
    icon: ShieldCheck
  },
  {
    id: 'port-3',
    title: 'Enterprise Global E-Commerce Engine',
    client: 'Velox Commerce',
    metric: '99.99% Global Uptime',
    description: 'High-conversion e-commerce platform processing over 50,000 daily active orders with instant checkout and multi-currency support.',
    tech: ['Next.js App Router', 'Stripe API', 'PostgreSQL', 'Edge Cache'],
    icon: Globe
  },
  {
    id: 'port-4',
    title: 'Logistics & Smart Fleet Portal',
    client: 'TransRoute Logistics',
    metric: '48ms Avg API Response',
    description: 'Real-time fleet tracking, automated route optimization, and driver dispatch management dashboard built for scaling logistics operators.',
    tech: ['WebSockets', 'Tailwind CSS', 'TypeScript', 'Cloud Native'],
    icon: Zap
  }
];

export function PortfolioApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus
}: PortfolioAppProps) {
  return (
    <WindowShell
      id="portfolio-app"
      title="Portfolio — Selected Case Studies & Client Projects"
      icon={<Briefcase className="w-4 h-4 text-blue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 flex flex-col p-6 sm:p-8 bg-slate-50/50 overflow-y-auto space-y-6">
        {/* Header */}
        <div>
          <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase block mb-1">
            CLIENT CASE STUDIES & PROOF OF WORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-slate-600 font-medium max-w-2xl mt-1">
            Explore selected web platforms, SaaS architectures, and custom AI systems built by Oliots Digital for fast-growing companies.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PORTFOLIO_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {item.metric}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    {item.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </WindowShell>
  );
}
