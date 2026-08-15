'use client';

import React from 'react';
import { FolderOpen } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { useBlogState } from '@/state/useBlogState';
import { ExplorerAddressBar } from './ExplorerAddressBar';
import { BlogArticleGrid } from './BlogArticleGrid';

interface BlogAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

export function BlogApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus
}: BlogAppProps) {
  const { articles, loading, searchQuery, setSearchQuery } = useBlogState();

  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<FolderOpen className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <ExplorerAddressBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white/50">
        <BlogArticleGrid articles={articles} loading={loading} />
      </div>
    </WindowShell>
  );
}
