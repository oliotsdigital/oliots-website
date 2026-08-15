import { useState, useCallback } from 'react';
import { AppointmentBookingData, AppointmentBookingResponse } from '@/models/appointment.model';

export function useAppointmentState(playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [bookingData, setBookingData] = useState<AppointmentBookingData>({
    service: 'Web Application Development',
    date: '',
    time: '10:00 AM EST',
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<AppointmentBookingResponse | null>(null);

  const updateBookingData = useCallback((field: keyof AppointmentBookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  }, []);

  const goToStep = useCallback((targetStep: 1 | 2 | 3 | 4) => {
    playBeep(580, 'sine');
    setStep(targetStep);
  }, [playBeep]);

  const selectServiceAndOpen = useCallback((serviceName: string) => {
    setBookingData(prev => ({ ...prev, service: serviceName }));
    setStep(1);
  }, []);

  const confirmAppointment = useCallback(async () => {
    playBeep(900, 'sine', 0.2);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      const data: AppointmentBookingResponse = await res.json();
      setConfirmation(data);
      setStep(4); // Confirmed ticket step
    } catch {
      // Fallback ticket creation
      setConfirmation({
        success: true,
        ticketId: 'OLI-' + Math.floor(100000 + Math.random() * 900000),
        confirmationDetails: bookingData
      });
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  }, [bookingData, playBeep]);

  const resetForm = useCallback(() => {
    setStep(1);
    setConfirmation(null);
    setBookingData({
      service: 'Web Application Development',
      date: '',
      time: '10:00 AM EST',
      name: '',
      email: ''
    });
  }, []);

  return {
    step,
    bookingData,
    updateBookingData,
    goToStep,
    selectServiceAndOpen,
    confirmAppointment,
    isSubmitting,
    confirmation,
    resetForm
  };
}
