'use client';

import React, { useRef, useEffect } from 'react';
import { ChatMessage } from '@/models/copilot.model';
import { TerminalMessageItem } from './TerminalMessageItem';

interface TerminalMessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export function TerminalMessageList({ messages, isLoading }: TerminalMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 pr-2 leading-relaxed text-slate-700">
      {messages.map(msg => (
        <TerminalMessageItem key={msg.id} message={msg} />
      ))}

      {isLoading && (
        <div className="text-slate-400 text-xs italic animate-pulse flex items-center space-x-2 p-2">
          <span>Copilot is synthesizing response...</span>
        </div>
      )}
    </div>
  );
}
