import { useState, useCallback } from 'react';
import { WindowId, WindowState } from '@/models/window.model';

const INITIAL_WINDOWS: Record<WindowId, WindowState> = {
  'services-app': { id: 'services-app', title: 'Services — Oliots Digital Capabilities', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'about-app': { id: 'about-app', title: 'About Us — System Overview', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'blog-app': { id: 'blog-app', title: 'File Explorer — Knowledge Base', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'contact-app': { id: 'contact-app', title: 'Contact Terminal — Message Dispatch', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'appointment-app': { id: 'appointment-app', title: 'Schedule Strategy Consultation', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'ai-terminal': { id: 'ai-terminal', title: 'Copilot AI — Interactive Assistant', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 }
};

export function useDesktopState(playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void) {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(INITIAL_WINDOWS);
  const [, setHighestZIndex] = useState<number>(100);

  const bringToFront = useCallback((id: WindowId) => {
    setHighestZIndex(prev => {
      const nextZ = prev + 2;
      setWindows(wins => ({
        ...wins,
        [id]: { ...wins[id], zIndex: nextZ, isMinimized: false }
      }));
      return nextZ;
    });
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    playBeep(550, 'sine');
    bringToFront(id);
    setWindows(wins => ({
      ...wins,
      [id]: { ...wins[id], isOpen: true, isMinimized: false }
    }));
  }, [playBeep, bringToFront]);

  const closeWindow = useCallback((id: WindowId) => {
    playBeep(350, 'triangle');
    setWindows(wins => ({
      ...wins,
      [id]: { ...wins[id], isOpen: false }
    }));
  }, [playBeep]);

  const minimizeWindow = useCallback((id: WindowId) => {
    playBeep(350, 'triangle');
    setWindows(wins => ({
      ...wins,
      [id]: { ...wins[id], isMinimized: true }
    }));
  }, [playBeep]);

  const toggleMaximize = useCallback((id: WindowId) => {
    playBeep(650, 'sine');
    setWindows(wins => ({
      ...wins,
      [id]: { ...wins[id], isMaximized: !wins[id].isMaximized }
    }));
  }, [playBeep]);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    bringToFront
  };
}
