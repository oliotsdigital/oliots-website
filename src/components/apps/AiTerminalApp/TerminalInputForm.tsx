'use client';

import React from 'react';
import { Send } from 'lucide-react';

interface TerminalInputFormProps {
  inputText: string;
  onInputChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function TerminalInputForm({
  inputText,
  onInputChange,
  onSubmit,
  isLoading
}: TerminalInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-3 flex items-center space-x-2 border-t border-slate-200 pt-3">
      <input
        type="text"
        value={inputText}
        onChange={e => onInputChange(e.target.value)}
        placeholder="Ask Copilot e.g. 'Estimate cost for web app'..."
        className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600 shadow-sm"
      />
      <button
        type="submit"
        disabled={isLoading || !inputText.trim()}
        className="px-4 py-2 rounded-lg win11-btn-primary text-xs font-semibold flex items-center space-x-1 cursor-pointer disabled:opacity-50"
      >
        <span>Send</span>
        <Send className="w-3 h-3" />
      </button>
    </form>
  );
}
