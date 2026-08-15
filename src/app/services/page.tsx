import { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Digital Transformation Services & Capabilities | Oliots Digital',
  description: 'Explore enterprise-grade digital services by Oliots: Custom Web Applications, Generative AI & Autonomous Agents, Custom Software Systems, and Digital Growth Engines.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
