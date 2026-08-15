'use client';

import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { WindowShell } from '@/components/windows/WindowShell';
import { WindowState } from '@/models/window.model';
import { useAppointmentState } from '@/state/useAppointmentState';
import { Step1SelectService } from './Step1SelectService';
import { Step2SelectDateTime } from './Step2SelectDateTime';
import { Step3ContactInfo } from './Step3ContactInfo';
import { BookingConfirmationTicket } from './BookingConfirmationTicket';

interface AppointmentAppProps {
  windowState: WindowState;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onFocus: () => void;
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void;
  appointmentState: ReturnType<typeof useAppointmentState>;
}

export function AppointmentApp({
  windowState,
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  appointmentState
}: AppointmentAppProps) {
  const {
    step,
    bookingData,
    updateBookingData,
    goToStep,
    confirmAppointment,
    isSubmitting,
    confirmation,
    resetForm
  } = appointmentState;

  return (
    <WindowShell
      id={windowState.id}
      title={windowState.title}
      icon={<CalendarCheck className="w-4 h-4 text-winblue-600" />}
      isOpen={windowState.isOpen}
      isMinimized={windowState.isMinimized}
      isMaximized={windowState.isMaximized}
      zIndex={windowState.zIndex}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
    >
      <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between bg-white/50">
        {step === 1 && (
          <Step1SelectService
            selectedService={bookingData.service}
            onSelectService={svc => updateBookingData('service', svc)}
            onNext={() => goToStep(2)}
          />
        )}

        {step === 2 && (
          <Step2SelectDateTime
            date={bookingData.date}
            time={bookingData.time}
            onDateChange={d => updateBookingData('date', d)}
            onTimeChange={t => updateBookingData('time', t)}
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
          />
        )}

        {step === 3 && (
          <Step3ContactInfo
            name={bookingData.name}
            email={bookingData.email}
            onNameChange={n => updateBookingData('name', n)}
            onEmailChange={e => updateBookingData('email', e)}
            onBack={() => goToStep(2)}
            onConfirm={confirmAppointment}
            isSubmitting={isSubmitting}
          />
        )}

        {step === 4 && (
          <BookingConfirmationTicket
            confirmation={confirmation}
            onCloseWindow={onClose}
            onReset={resetForm}
          />
        )}
      </div>
    </WindowShell>
  );
}
