import { NextResponse } from 'next/server';
import { ServiceItem } from '@/models/service.model';

export async function GET() {
  const services: ServiceItem[] = [
    {
      id: 'web-app',
      title: 'Modern Web Applications & Portals',
      category: 'web',
      categoryTag: 'WEB & DIGITAL',
      description: 'Ultra-fast Next.js and React frontends paired with resilient microservice backends designed for conversion.',
      features: ['Custom Web Applications', 'UI/UX Product Architecture', 'E-Commerce Platforms'],
      ctaText: 'Request Proposal',
      badgeColor: 'bg-blue-100 text-winblue-700',
      iconName: 'Code'
    },
    {
      id: 'ai-automation',
      title: 'Generative AI & Autonomous Agents',
      category: 'ai',
      categoryTag: 'AI & AUTOMATION',
      description: 'Custom Large Language Model pipelines, Retrieval-Augmented Generation (RAG) knowledge search, and automated workflows.',
      features: ['AI Support Agents', 'Knowledge Base RAG', 'Workflow Automation'],
      ctaText: 'Build AI Agent',
      badgeColor: 'bg-cyan-100 text-cyan-700',
      iconName: 'Brain'
    },
    {
      id: 'software-systems',
      title: 'Custom Software Systems',
      category: 'software',
      categoryTag: 'SOFTWARE',
      description: 'Enterprise Resource Planning (ERP), CRM engines, database orchestration, and cloud software built to order.',
      features: ['Enterprise SaaS Platforms', 'API Integrations', 'Cloud Migration & DevOps'],
      ctaText: 'Start Architecture',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      iconName: 'Network'
    },
    {
      id: 'digital-growth',
      title: 'Digital Marketing & SEO Engines',
      category: 'growth',
      categoryTag: 'GROWTH',
      description: 'Data-driven marketing architecture designed to maximize reach, search rankings, organic lead acquisition, and customer LTV.',
      features: ['Technical SEO Optimization', 'Performance Marketing', 'Analytics & Funnels'],
      ctaText: 'Scale Product',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      iconName: 'TrendingUp'
    }
  ];

  return NextResponse.json(services);
}
