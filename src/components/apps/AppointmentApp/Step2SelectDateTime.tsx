'use client';

import React from 'react';

interface Step2SelectDateTimeProps {
  date: string;
  time: string;
  onDateChange: (d: string) => void;
  onTimeChange: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function Step2SelectDateTime({
  date,
  time,
  onDateChange,
  onTimeChange,
  onBack,
  onNext
}: Step2SelectDateTimeProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-900 mb-2">Select Preferred Date & Available Slot</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">DATE *</label>
          <input
            type="date"
            value={date}
            onChange={e => onDateChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">TIME SLOT *</label>
          <select
            value={time}
            onChange={e => onTimeChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-winblue-600"
          >
            <option>10:00 AM EST</option>
            <option>01:30 PM EST</option>
            <option>04:00 PM EST</option>
          </select>
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
          onClick={onNext}
          className="w-2/3 py-2 rounded-lg win11-btn-primary text-xs font-semibold cursor-pointer"
        >
          Next: Contact Info →
        </button>
      </div>
    </div>
  );
}
