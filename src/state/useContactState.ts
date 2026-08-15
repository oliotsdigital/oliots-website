import { useState, useCallback } from 'react';
import { ContactFormData, ContactResponse } from '@/models/contact.model';

export function useContactState(
  playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void,
  onMessageSent?: (msg: string) => void
) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  const updateField = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    playBeep(850, 'sine', 0.15);
    setIsSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data: ContactResponse = await res.json();
      setResponse(data);

      if (data.success) {
        setFormData({ name: '', email: '', requirements: '' });
        if (onMessageSent) {
          onMessageSent(data.message);
        }
      }
    } catch {
      setResponse({
        success: false,
        message: 'Network error submitting contact request.',
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, playBeep, onMessageSent]);

  return {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    response
  };
}
