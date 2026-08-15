'use client';

import React from 'react';

interface Step1SelectServiceProps {
  selectedService: string;
  onSelectService: (serviceName: string) => void;
  onNext: () => void;
}

export function Step1SelectService({
  selectedService,
  onSelectService,
  onNext
}: Step1SelectServiceProps) {
  const serviceOptions = [
    { title: 'Web Application Development', desc: 'High speed web apps & UI/UX' },
    { title: 'AI & Workflow Automation', desc: 'LLMs, RAG & enterprise workflows' },
    { title: 'Custom Software Systems', desc: 'SaaS, ERP & Cloud APIs' },
    { title: 'Digital Marketing & Growth', desc: 'SEO, lead acquisition & funnels' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Select Domain for Consultation</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {serviceOptions.map((opt, idx) => {
          const isChecked = selectedService === opt.title;
          return (
            <label
              key={idx}
              className={`p-3 rounded-xl win11-card flex items-center space-x-3 cursor-pointer ${
                isChecked ? 'border-winblue-600 bg-blue-50/50' : ''
              }`}
            >
              <input
                type="radio"
                name="selectedSvc"
                value={opt.title}
                checked={isChecked}
                onChange={() => onSelectService(opt.title)}
                className="accent-winblue-600"
              />
              <div className="text-xs">
                <div className="font-bold text-slate-900">{opt.title}</div>
                <div className="text-slate-500 text-[10px]">{opt.desc}</div>
              </div>
            </label>
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="w-full py-2.5 rounded-lg win11-btn-primary font-semibold text-xs mt-4 cursor-pointer"
      >
        Next: Select Date & Time →
      </button>
    </div>
  );
}
