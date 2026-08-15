'use client';

import React from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData, ContactResponse } from '@/models/contact.model';

interface ContactFormProps {
  formData: ContactFormData;
  onFieldChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  response: ContactResponse | null;
}

export function ContactForm({
  formData,
  onFieldChange,
  onSubmit,
  isSubmitting,
  response
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex-1 space-y-3">
      {response && (
        <div
          className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
            response.success
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border border-rose-200 text-rose-800'
          }`}
        >
          {response.success ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          )}
          <span>{response.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">YOUR NAME *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => onFieldChange('name', e.target.value)}
            placeholder="Alex Rivera"
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">BUSINESS EMAIL *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => onFieldChange('email', e.target.value)}
            placeholder="alex@company.com"
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">PROJECT SCOPE & REQUIREMENTS *</label>
        <textarea
          rows={4}
          required
          value={formData.requirements}
          onChange={e => onFieldChange('requirements', e.target.value)}
          placeholder="Describe your web, AI, or software goals..."
          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2.5 rounded-lg win11-btn-primary font-semibold text-xs shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-3.5 h-3.5" />
        <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
      </button>
    </form>
  );
}
