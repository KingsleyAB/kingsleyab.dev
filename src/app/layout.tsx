import type { Metadata } from 'next';
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { seo, personal } from '@/lib/data';

// Display serif — used for headings. Fraunces has subtle character without
// shouting, which suits a "serious engineer" portfolio.
const fontDisplay = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
});

// Body sans — clean and modern. DM Sans is distinctive without being trendy.
const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

// Mono — used for the bordered "pill" buttons, eyebrows, and timestamps.
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s — ${personal.name}`,
  },
  description: seo.description,
  keywords: [
    'Firmware Engineer',
    'Memory Subsystem',
    'AMD',
    'Embedded Systems',
    'Low-level systems',
    'Debugging',
    'Validation',
    'Performance Optimization',
    'Austin',
    'Texas',
    personal.name,
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: personal.name,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: personal.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
