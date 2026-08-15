'use client';

import React from 'react';

export function AboutStatsGrid() {
  const stats = [
    { value: '120+', label: 'Projects Deployed', color: 'text-winblue-600' },
    { value: '99.9%', label: 'Uptime SLA', color: 'text-cyan-600' },
    { value: '14ms', label: 'Global Latency', color: 'text-indigo-600' },
    { value: '10x', label: 'Average ROI', color: 'text-emerald-600' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((st, idx) => (
        <div key={idx} className="p-4 rounded-xl win11-card text-center">
          <div className={`text-2xl font-extrabold ${st.color}`}>{st.value}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">{st.label}</div>
        </div>
      ))}
    </div>
  );
}
