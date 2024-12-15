import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import Navbar from '../components/molecules/Navbar';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marcelochaman.ca'),
  title: 'Seth Grief-Albert - About',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar flex h-dvh flex-col xl:overflow-hidden">
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
