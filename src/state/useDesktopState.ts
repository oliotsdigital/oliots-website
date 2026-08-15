import { useState, useEffect, useCallback } from 'react';
import { WindowId, WindowState, ShortcutItem } from '@/models/window.model';

const INITIAL_WINDOWS: Record<WindowId, WindowState> = {
  'services-app': { id: 'services-app', title: 'Services — Oliots Digital Capabilities', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'about-app': { id: 'about-app', title: 'About Us — System Overview', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'blog-app': { id: 'blog-app', title: 'File Explorer — Knowledge Base', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'contact-app': { id: 'contact-app', title: 'Contact Terminal — Message Dispatch', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'appointment-app': { id: 'appointment-app', title: 'Schedule Strategy Consultation', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'ai-terminal': { id: 'ai-terminal', title: 'Windows Copilot — Oliots AI', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 },
  'recycle-app': { id: 'recycle-app', title: 'Recycle Bin', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 40 }
};

export const DESKTOP_SHORTCUTS: ShortcutItem[] = [
  { id: 'services-app', label: 'Services', type: 'folder', iconType: 'FolderPlus' },
  { id: 'about-app', label: 'About Us', type: 'folder', iconType: 'FolderInfo' },
  { id: 'blog-app', label: 'Blogs', type: 'folder', iconType: 'FolderBook' },
  { id: 'contact-app', label: 'Contact Us', type: 'folder', iconType: 'FolderMail' },
  { id: 'appointment-app', label: 'Appointment', type: 'folder', iconType: 'FolderCalendar' },
  { id: 'ai-terminal', label: 'Copilot AI', type: 'copilot', iconType: 'Sparkles' },
  { id: 'recycle-app', label: 'Recycle Bin', type: 'recycle', iconType: 'Trash2' }
];

export function useDesktopState(playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void) {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(INITIAL_WINDOWS);
  const [highestZIndex, setHighestZIndex] = useState<number>(100);
  const [selectedIconId, setSelectedIconId] = useState<WindowId | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<{ isOpen: boolean; x: number; y: number }>({ isOpen: false, x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  // Clock initialization and update
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      const month = now.getMonth() + 1;
      const day = now.getDate();
      const year = now.getFullYear();

      setCurrentTime(`${hours}:${minutes} ${ampm}`);
      setCurrentDate(`${month}/${day}/${year}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const toggleWindow = useCallback((id: WindowId) => {
    setWindows(wins => {
      const win = wins[id];
      if (!win.isOpen || win.isMinimized) {
        openWindow(id);
      } else {
        closeWindow(id);
      }
      return wins;
    });
  }, [openWindow, closeWindow]);

  const toggleStartMenu = useCallback(() => {
    playBeep(500, 'sine');
    setIsStartMenuOpen(prev => !prev);
  }, [playBeep]);

  const openContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    playBeep(450, 'sine');
    const x = Math.min(e.clientX, typeof window !== 'undefined' ? window.innerWidth - 220 : e.clientX);
    const y = Math.min(e.clientY, typeof window !== 'undefined' ? window.innerHeight - 200 : e.clientY);
    setContextMenu({ isOpen: true, x, y });
  }, [playBeep]);

  const closeContextMenu = useCallback(() => {
    setContextMenu(prev => ({ ...prev, isOpen: false }));
  }, []);

  const deselectAll = useCallback(() => {
    closeContextMenu();
    setSelectedIconId(null);
  }, [closeContextMenu]);

  return {
    windows,
    selectedIconId,
    setSelectedIconId,
    isStartMenuOpen,
    setIsStartMenuOpen,
    contextMenu,
    currentTime,
    currentDate,
    openWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    toggleWindow,
    bringToFront,
    toggleStartMenu,
    openContextMenu,
    closeContextMenu,
    deselectAll
  };
}
