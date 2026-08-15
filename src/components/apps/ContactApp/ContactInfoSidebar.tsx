'use client';

import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function ContactInfoSidebar() {
  return (
    <div className="w-full md:w-1/3 space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>
        <p className="text-xs text-slate-500 mt-1">Send our technical team a message or connect directly.</p>
      </div>

      <div className="space-y-2 text-xs">
        <a
          href="mailto:hello@oliots.digital"
          className="p-3 rounded-xl win11-card flex items-center space-x-3 text-slate-700 hover:text-winblue-600 transition-colors"
        >
          <Mail className="w-4 h-4 text-winblue-600 flex-shrink-0" />
          <span className="truncate font-medium">hello@oliots.digital</span>
        </a>
        <a
          href="https://wa.me/15550192837"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl win11-card flex items-center space-x-3 text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">+1 (555) 019-2837</span>
        </a>
      </div>
    </div>
  );
}
