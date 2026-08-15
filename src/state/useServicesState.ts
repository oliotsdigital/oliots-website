import { useState, useEffect, useCallback } from 'react';
import { ServiceCategory, ServiceItem } from '@/models/service.model';

export function useServicesState(playBeep?: (freq?: number, type?: OscillatorType, duration?: number) => void) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error('Error loading services', err);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const filterServices = useCallback((category: ServiceCategory) => {
    playBeep?.(650, 'sine');
    setActiveCategory(category);
  }, [playBeep]);

  const filteredServices = services.filter(s => activeCategory === 'all' || s.category === activeCategory);

  return {
    activeCategory,
    services: filteredServices,
    allServices: services,
    loading,
    filterServices
  };
}
