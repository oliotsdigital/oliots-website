'use client';

import React from 'react';
import { Code, Brain, Network, TrendingUp, Check } from 'lucide-react';
import { ServiceItem } from '@/models/service.model';

interface ServiceCardProps {
  service: ServiceItem;
  onRequestProposal: (title: string) => void;
}

export function ServiceCard({ service, onRequestProposal }: ServiceCardProps) {
  const renderIcon = () => {
    switch (service.iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-winblue-600" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-600" />;
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      default:
        return <Code className="w-5 h-5 text-winblue-600" />;
    }
  };

  const getCheckColor = () => {
    switch (service.category) {
      case 'web':
        return 'text-winblue-600';
      case 'ai':
        return 'text-cyan-600';
      case 'software':
        return 'text-indigo-600';
      case 'growth':
        return 'text-emerald-600';
      default:
        return 'text-winblue-600';
    }
  };

  return (
    <div className="svc-card p-5 rounded-xl win11-card flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
            {renderIcon()}
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${service.badgeColor}`}>
            {service.categoryTag}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">{service.description}</p>

        <ul className="text-xs text-slate-700 space-y-1.5 mb-4 font-medium">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center">
              <Check className={`w-3.5 h-3.5 mr-2 ${getCheckColor()}`} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onRequestProposal(service.title)}
        className="w-full py-2 rounded-lg win11-btn-primary text-xs font-semibold cursor-pointer"
      >
        {service.ctaText}
      </button>
    </div>
  );
}
