export interface AppointmentBookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
}

export interface AppointmentBookingResponse {
  success: boolean;
  ticketId: string;
  confirmationDetails: AppointmentBookingData;
}
