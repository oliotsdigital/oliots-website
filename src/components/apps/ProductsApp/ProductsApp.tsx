'use client';

import React from 'react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { Box, Cpu, Zap, Database, ArrowRight } from 'lucide-react';

interface ProductsAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Oliots Agentic Engine',
    category: 'AI PLATFORM',
    description: 'Autonomous multi-agent orchestration framework designed for internal tool integrations, LLM workflows, and automated enterprise operations.',
    features: ['Multi-Agent Systems', 'Tool Calling APIs', 'Sub-100ms Inference'],
    badge: 'Production Ready',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Cpu
  },
  {
    id: 'prod-2',
    name: 'Oliots Edge Stack',
    category: 'WEB FRAMEWORK',
    description: 'High-velocity Next.js and Cloudflare Workers boilerplate pre-configured for sub-100ms load speeds, zero layout shift, and serverless scalability.',
    features: ['Edge SSR & ISR', '100% Type-Safe', 'Global Caching'],
    badge: 'v3.5 Release',
    icon: Zap,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'prod-3',
    name: 'Oliots Enterprise RAG Search',
    category: 'KNOWLEDGE BASE',
    description: 'Vector embeddings and hybrid retrieval pipeline for instant semantic search across millions of internal company documents.',
    features: ['Hybrid Vector Search', 'DocX / PDF Parsing', 'Role Access Control'],
    badge: 'Enterprise SDK',
    icon: Database,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  }
];

export function ProductsApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus
}: ProductsAppProps) {
  return (
    <WindowShell
      id="products-app"
      title="Products — Software & AI Products"
      icon={<Box className="w-4 h-4 text-blue-600" />}
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
            FLAGSHIP SOFTWARE & TOOLS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Our Proprietary Products & Platforms
          </h2>
          <p className="text-sm text-slate-600 font-medium max-w-2xl mt-1">
            Engineered internally by Oliots Digital to accelerate web development, enterprise AI deployment, and high-scale software infrastructure.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((prod) => {
            const IconComp = prod.icon;
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${prod.badgeColor}`}>
                      {prod.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {/* Feature list */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {prod.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                  <span>Explore Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </WindowShell>
  );
}
