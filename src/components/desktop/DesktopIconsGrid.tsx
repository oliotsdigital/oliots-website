'use client';

import React from 'react';
import { ShortcutItem, WindowId } from '@/models/window.model';
import { DesktopShortcutIcon } from './DesktopShortcutIcon';

interface DesktopIconsGridProps {
  shortcuts: ShortcutItem[];
  selectedIconId: WindowId | null;
  onSelectIcon: (id: WindowId) => void;
  onOpenWindow: (id: WindowId) => void;
}

export function DesktopIconsGrid({
  shortcuts,
  selectedIconId,
  onSelectIcon,
  onOpenWindow
}: DesktopIconsGridProps) {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center md:flex-col md:flex-wrap md:h-full gap-2 w-full md:w-fit">
      {shortcuts.map(sc => (
        <DesktopShortcutIcon
          key={sc.id}
          shortcut={sc}
          isSelected={selectedIconId === sc.id}
          onSelect={onSelectIcon}
          onOpen={onOpenWindow}
        />
      ))}
    </div>
  );
}
