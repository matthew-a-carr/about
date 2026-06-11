import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

// https://vercel.com/docs/projects/environment-variables/system-environment-variables#vercel
const isVercelRuntime = process.env.VERCEL === '1';

export const metadata: Metadata = {
  title: 'Matthew Carr — Staff Backend Engineer',
  description:
    'Matthew Carr is a Staff Backend Engineer at Benifex, putting good engineering principles and design into agentic systems to build well-thought-out applications.',
  keywords: [
    'Matthew Carr',
    'Staff Backend Engineer',
    'Backend Engineer',
    'Agentic systems',
    'Engineering principles',
    'Java',
    'Spring Boot',
    'Kubernetes',
    'AWS',
    'GCP',
    'Benifex',
  ],
  openGraph: {
    title: 'Matthew Carr — Staff Backend Engineer',
    description:
      'Engineering principles and design, put into agentic systems to build well-thought-out applications.',
    type: 'profile',
    images: ['https://avatars.githubusercontent.com/u/76042279?v=4'],
  },
  twitter: {
    card: 'summary',
    title: 'Matthew Carr — Staff Backend Engineer',
    description:
      'Engineering principles and design, put into agentic systems to build well-thought-out applications.',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matthew Carr',
  jobTitle: 'Staff Backend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Benifex',
    url: 'https://benifex.com',
  },
  image: 'https://avatars.githubusercontent.com/u/76042279?v=4',
  sameAs: [
    'https://github.com/matthew-a-carr',
    'https://www.linkedin.com/in/matthew-carr-17012284',
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'Kotlin',
    'Kubernetes',
    'AWS',
    'GCP',
    'PostgreSQL',
    'Terraform',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from constants above
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {isVercelRuntime ? <Analytics /> : null}
        {isVercelRuntime ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
