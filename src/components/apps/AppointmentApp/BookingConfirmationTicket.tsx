'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AppointmentBookingResponse } from '@/models/appointment.model';

interface BookingConfirmationTicketProps {
  confirmation: AppointmentBookingResponse | null;
  onCloseWindow: () => void;
  onReset: () => void;
}

export function BookingConfirmationTicket({
  confirmation,
  onCloseWindow,
  onReset
}: BookingConfirmationTicketProps) {
  return (
    <div className="win11-card p-6 rounded-xl text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-xl">
        <CheckCircle2 className="w-6 h-6" />
      </div>

      <h3 className="text-base font-bold text-slate-900">Consultation Confirmed!</h3>

      {confirmation && (
        <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div><span className="font-semibold text-slate-700">Ticket ID:</span> {confirmation.ticketId}</div>
          <div><span className="font-semibold text-slate-700">Domain:</span> {confirmation.confirmationDetails.service}</div>
          <div><span className="font-semibold text-slate-700">Schedule:</span> {confirmation.confirmationDetails.date || 'Upcoming'} at {confirmation.confirmationDetails.time}</div>
          <div><span className="font-semibold text-slate-700">Contact:</span> {confirmation.confirmationDetails.email}</div>
        </div>
      )}

      <p className="text-xs text-slate-500">A calendar invitation & video link has been dispatched to your email.</p>

      <div className="flex gap-2 justify-center pt-2">
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-lg win11-btn-secondary text-xs cursor-pointer"
        >
          Book Another
        </button>
        <button
          onClick={onCloseWindow}
          className="px-4 py-2 rounded-lg win11-btn-primary text-xs cursor-pointer"
        >
          Close Window
        </button>
      </div>
    </div>
  );
}
