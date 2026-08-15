import { useState, useCallback } from 'react';
import { ChatMessage, CopilotApiResponse } from '@/models/copilot.model';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-init',
    sender: 'copilot',
    text: 'Welcome! I am your Oliots Digital assistant. Ask me about tech solutions, custom software estimates, or scheduling a strategy call.',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

export function useCopilotState(playBeep: (freq?: number, type?: OscillatorType, duration?: number) => void) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const appendSystemLogMessage = useCallback((logMsg: string) => {
    const newMsg: ChatMessage = {
      id: 'sys-' + Date.now(),
      sender: 'copilot',
      text: logMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
  }, []);

  const sendMessage = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const prompt = inputText.trim();
    if (!prompt || isLoading) return;

    playBeep(750, 'sine');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: prompt,
      timestamp: timeStr
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data: CopilotApiResponse = await res.json();

      const copilotMsg: ChatMessage = {
        id: 'copilot-' + Date.now(),
        sender: 'copilot',
        text: data.reply || 'No response returned.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, copilotMsg]);
      playBeep(880, 'sine');
    } catch {
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        sender: 'copilot',
        text: 'Error connecting to Copilot AI API service.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, isLoading, playBeep]);

  return {
    messages,
    inputText,
    setInputText,
    isLoading,
    sendMessage,
    appendSystemLogMessage
  };
}
