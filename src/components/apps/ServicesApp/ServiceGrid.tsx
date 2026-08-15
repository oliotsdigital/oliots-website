'use client';

import React from 'react';
import { ServiceItem } from '@/models/service.model';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  services: ServiceItem[];
  loading: boolean;
  onRequestProposal: (title: string) => void;
}

export function ServiceGrid({ services, loading, onRequestProposal }: ServiceGridProps) {
  if (loading) {
    return <div className="py-12 text-center text-xs text-slate-500">Loading digital capabilities...</div>;
  }

  if (services.length === 0) {
    return <div className="py-12 text-center text-xs text-slate-500">No capabilities found in this category.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map(svc => (
        <ServiceCard key={svc.id} service={svc} onRequestProposal={onRequestProposal} />
      ))}
    </div>
  );
}
