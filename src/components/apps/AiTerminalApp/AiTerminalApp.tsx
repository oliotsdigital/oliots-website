'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { useCopilotState } from '@/state/useCopilotState';
import { TerminalMessageList } from './TerminalMessageList';
import { TerminalInputForm } from './TerminalInputForm';

interface AiTerminalAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
  copilotState: ReturnType<typeof useCopilotState>;
}

export function AiTerminalApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  copilotState
}: AiTerminalAppProps) {
  const { messages, inputText, setInputText, isLoading, sendMessage } = copilotState;

  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<Sparkles className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 bg-slate-50/80 p-4 text-xs flex flex-col justify-between overflow-hidden">
        <TerminalMessageList messages={messages} isLoading={isLoading} />

        <TerminalInputForm
          inputText={inputText}
          onInputChange={setInputText}
          onSubmit={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </WindowShell>
  );
}
