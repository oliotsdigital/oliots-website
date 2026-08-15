import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ reply: 'Please provide a valid question or prompt.' }, { status: 400 });
    }

    const lowerPrompt = prompt.toLowerCase();
    let reply = '';

    if (lowerPrompt.includes('cost') || lowerPrompt.includes('estimate') || lowerPrompt.includes('price')) {
      reply = 'Custom web platforms starting from $3,500; AI Agent & RAG workflows starting from $4,800. Reach out via our Contact or Appointment terminal for a formal tailored proposal!';
    } else if (lowerPrompt.includes('service') || lowerPrompt.includes('capability') || lowerPrompt.includes('what do you do')) {
      reply = 'Oliots Digital specializes in Next.js web applications, custom SaaS software architecture, generative AI agents, RAG search pipelines, and data-driven digital growth engines.';
    } else if (lowerPrompt.includes('contact') || lowerPrompt.includes('email') || lowerPrompt.includes('reach')) {
      reply = 'You can email our team directly at hello@oliots.digital or reach us via WhatsApp at +1 (555) 019-2837. You can also open the Contact Terminal shortcut on the desktop!';
    } else if (lowerPrompt.includes('book') || lowerPrompt.includes('appointment') || lowerPrompt.includes('call') || lowerPrompt.includes('schedule')) {
      reply = 'You can click on the Appointment folder shortcut on the desktop to schedule a 1-on-1 strategy consultation with our lead technical architect!';
    } else {
      reply = `Thank you for asking: "${prompt}". Oliots Digital provides end-to-end engineering, custom AI integrations, high-performance web systems, and strategy consultations. How can we help scale your product?`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: 'Windows Copilot service is currently offline. Please try again shortly.' }, { status: 500 });
  }
}
