'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { useContactState } from '@/state/useContactState';
import { ContactInfoSidebar } from './ContactInfoSidebar';
import { ContactForm } from './ContactForm';

interface ContactAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onMessageSent?: (msg: string) => void;
}

export function ContactApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  playBeep,
  onMessageSent
}: ContactAppProps) {
  const { formData, updateField, handleSubmit, isSubmitting, response } = useContactState(
    playBeep,
    onMessageSent
  );

  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<Send className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-8 bg-white/50">
        <ContactInfoSidebar />

        <ContactForm
          formData={formData}
          onFieldChange={updateField}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          response={response}
        />
      </div>
    </WindowShell>
  );
}
