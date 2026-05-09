import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { profile } from './content';
import { getSiteUrl } from './lib/site-url';
import './globals.css';

// https://vercel.com/docs/projects/environment-variables/system-environment-variables#vercel
const isVercelRuntime = process.env.VERCEL === '1';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.name,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  category: 'technology',
  keywords: [
    profile.name,
    'Senior Backend Engineer',
    'Java',
    'Spring Boot',
    'Kotlin',
    'AWS',
    'GCP',
    'Kubernetes',
    'PostgreSQL',
    'Reliability',
    'Developer Experience',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_GB',
    siteName: profile.name,
    url: '/',
    title: profile.name,
    description: profile.description,
    firstName: 'Matthew',
    lastName: 'Carr',
    username: 'matthew-a-carr',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.name,
    description: profile.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f1e8' },
    { media: '(prefers-color-scheme: dark)', color: '#16110d' },
  ],
  colorScheme: 'light dark',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.jobTitle,
  worksFor: {
    '@type': 'Organization',
    name: profile.employer,
    url: profile.links.employer,
  },
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is static and built from typed config
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {isVercelRuntime ? <Analytics /> : null}
        {isVercelRuntime ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
