import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import Navbar from '../components/molecules/Navbar';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sethgriefalbert.com'),
  title: 'Seth Grief-Albert - About',
  description: '...',
  openGraph: {
    title: 'Seth Grief-Albert - About',
    description: '...',
    url: 'https://www.sethgriefalbert.com',
    siteName: 'Seth Grief-Albert',
    images: [
      {
        url: 'https://github.com/SethGA/seth/blob/main/public/bell.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar min-h-screen flex flex-col overflow-y-auto">
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
