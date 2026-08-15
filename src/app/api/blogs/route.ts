import { NextResponse } from 'next/server';
import { BlogArticle } from '@/models/blog.model';

export async function GET() {
  const articles: BlogArticle[] = [
    {
      id: 'blog-1',
      title: 'Multi-Agent AI Systems in Enterprise',
      category: 'AI SYSTEMS',
      date: 'AUG 2026',
      summary: 'Autonomous LLM agents integrating with internal toolsets to orchestrate enterprise operations seamlessly.',
      readTime: '5 min read',
      iconName: 'Cpu',
      colorClass: 'bg-indigo-50 border-indigo-100 text-indigo-600'
    },
    {
      id: 'blog-2',
      title: 'Building Sub-100ms Edge Applications',
      category: 'WEB DEV',
      date: 'JUL 2026',
      summary: 'Achieving instant load speeds, edge caching, and zero layout shift globally across desktop & mobile.',
      readTime: '4 min read',
      iconName: 'Gauge',
      colorClass: 'bg-blue-50 border-blue-100 text-winblue-600'
    },
    {
      id: 'blog-3',
      title: 'RAG vs Fine-Tuning for Enterprise Knowledge',
      category: 'ARCHITECTURE',
      date: 'JUN 2026',
      summary: 'A comprehensive technical breakdown comparing retrieval-augmented generation and domain model tuning.',
      readTime: '6 min read',
      iconName: 'Layers',
      colorClass: 'bg-teal-50 border-teal-100 text-teal-600'
    }
  ];

  return NextResponse.json(articles);
}
