export interface ContactFormData {
  name: string;
  email: string;
  requirements: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp: string;
}
