'use client';

import React from 'react';

interface Step3ContactInfoProps {
  name: string;
  email: string;
  onNameChange: (n: string) => void;
  onEmailChange: (e: string) => void;
  onBack: () => void;
  onConfirm: () => void;
  isSubmitting: boolean;
}

export function Step3ContactInfo({
  name,
  email,
  onNameChange,
  onEmailChange,
  onBack,
  onConfirm,
  isSubmitting
}: Step3ContactInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Enter Contact Information</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">FULL NAME *</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => onNameChange(e.target.value)}
            placeholder="Your Full Name"
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">WORK EMAIL *</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => onEmailChange(e.target.value)}
            placeholder="Your Work Email"
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={onBack}
          className="w-1/3 py-2 rounded-lg win11-btn-secondary text-xs cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          disabled={isSubmitting || !name || !email}
          className="w-2/3 py-2.5 rounded-lg win11-btn-primary text-xs font-semibold shadow-md cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
}
