import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0067C0',
};

export const metadata: Metadata = {
  title: 'Oliots Digital OS — Custom Software, Web Apps & AI Automation',
  description: 'Oliots Digital is an elite engineering studio building ultra-fast web applications, custom enterprise SaaS systems, AI agents, RAG search pipelines, and digital growth engines.',
  keywords: [
    'Oliots Digital',
    'Next.js Web Development',
    'Custom Software Systems',
    'Generative AI Agents',
    'Enterprise RAG Search',
    'Technical SEO & Growth',
    'Digital Transformation'
  ],
  authors: [{ name: 'Oliots Digital', url: 'https://oliots.digital' }],
  creator: 'Oliots Digital',
  publisher: 'Oliots Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Oliots Digital OS — High-Velocity Web, Software & AI Solutions',
    description: 'Engineering resilient web platforms, custom software architecture, and AI-driven automation workflows for scaling businesses.',
    url: 'https://oliots.digital',
    siteName: 'Oliots Digital OS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliots Digital OS — High-Velocity Engineering',
    description: 'Custom Next.js web applications, scalable enterprise software & AI agents built to order.',
    creator: '@oliotsdigital',
  },
  alternates: {
    canonical: 'https://oliots.digital',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oliots Digital',
    url: 'https://oliots.digital',
    logo: 'https://oliots.digital/logo.png',
    description: 'High-velocity engineering studio building modern web apps, enterprise SaaS, and AI automation.',
    sameAs: [
      'https://twitter.com/oliotsdigital',
      'https://github.com/oliotsdigital'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@oliots.digital',
      contactType: 'customer service',
      availableLanguage: ['English']
    }
  };

  return (
    <html lang="en" className="light h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} font-sans h-full w-full overflow-hidden antialiased touch-manipulation`}>
        {children}
      </body>
    </html>
  );
}
