'use client';

import React from 'react';
import { Sparkles, User, AlertTriangle } from 'lucide-react';
import { ChatMessage } from '@/models/copilot.model';

interface TerminalMessageItemProps {
  message: ChatMessage;
}

export function TerminalMessageItem({ message }: TerminalMessageItemProps) {
  const isUser = message.sender === 'user';

  if (isUser) {
    return (
      <div className="p-3 rounded-xl bg-winblue-600 text-white ml-auto max-w-[85%] text-xs font-medium shadow-sm flex items-start space-x-2">
        <div className="flex-1">{message.text}</div>
        <User className="w-3.5 h-3.5 opacity-80 mt-0.5 flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className={`p-3 rounded-xl bg-white border text-slate-800 shadow-sm flex items-start space-x-2.5 ${
      message.isError ? 'border-rose-300 bg-rose-50/50' : 'border-slate-200'
    }`}>
      <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 ${
        message.isError ? 'bg-rose-500' : 'bg-gradient-to-tr from-purple-500 to-winblue-600'
      }`}>
        {message.isError ? <AlertTriangle className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span className="font-bold text-slate-900 block text-xs">Windows Copilot</span>
          <span className="text-[10px] text-slate-400 font-mono">{message.timestamp}</span>
        </div>
        <p className="text-xs leading-relaxed text-slate-700 whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
}
