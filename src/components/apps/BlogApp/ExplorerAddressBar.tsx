'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Monitor, Search } from 'lucide-react';

interface ExplorerAddressBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function ExplorerAddressBar({ searchQuery, onSearchChange }: ExplorerAddressBarProps) {
  return (
    <div className="h-10 bg-slate-50 border-b border-slate-200 px-4 flex items-center space-x-3 text-xs text-slate-600">
      <div className="flex items-center space-x-2">
        <ArrowLeft className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
        <ArrowRight className="w-3.5 h-3.5 text-slate-300 cursor-not-allowed" />
        <ArrowUp className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
      </div>

      <div className="flex-1 px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 font-mono text-[11px] flex items-center space-x-2">
        <Monitor className="w-3.5 h-3.5 text-winblue-600" />
        <span>This PC &gt; Oliots OS &gt; Knowledge Hub</span>
      </div>

      <div className="relative w-44 sm:w-64">
        <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search knowledge..."
          className="w-full pl-7 pr-3 py-1 text-[11px] rounded bg-white border border-slate-200 focus:outline-none focus:border-winblue-600"
        />
      </div>
    </div>
  );
}
