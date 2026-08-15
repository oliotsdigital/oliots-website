'use client';

import React from 'react';
import Image from 'next/image';

export function AboutOverviewCard() {
  return (
    <div className="win11-card p-6 rounded-xl relative">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-winblue-600/10 border border-winblue-200 flex items-center justify-center p-1.5 shadow-xs overflow-hidden">
          <Image
            src="/logos/Logo-removebg-preview.png"
            alt="Oliots Digital Logo"
            width={48}
            height={48}
            className="object-contain w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Oliots Digital</h2>
          <p className="text-xs font-semibold text-winblue-600">Pioneering Next-Era Tech Solutions</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Oliots Digital is an elite engineering partner for forward-looking brands, startups, and enterprises. By combining human craftsmanship with state-of-the-art AI capabilities, we build resilient, hyper-performing software ecosystems.
      </p>
    </div>
  );
}
