export interface ChatMessage {
  id: string;
  sender: 'copilot' | 'user';
  text: string;
  timestamp: string;
  isError?: boolean;
}

export interface CopilotApiRequest {
  prompt: string;
}

export interface CopilotApiResponse {
  reply: string;
}
