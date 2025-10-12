
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import SwipeWrapper from './components/SwipeWrapper';
import { AnimatePresence } from 'framer-motion';
import { Metadata } from 'next';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#f5c542',
};


export const metadata: Metadata = {
  title: 'Sai Nivas Beach View Rest House – Stay Near RK Beach, Visakhapatnam',
  description:
    'Relax and stay in comfort at Sai Nivas Beach View Rest House, near RK Beach, Visakhapatnam. Cozy rooms, sea views, and free Wi-Fi — book your stay today!',
  keywords: [
    'Sai Nivas Beach View Rest House',
    'Beach View Guest House',
    'RK Beach Visakhapatnam',
    'Budget Guest House Vizag',
    'Sea View Rooms Vizag',
    'Rest House near RK Beach',
  ],
  authors: [{ name: 'Sai Nivas Beach View Rest House' }],
  metadataBase: new URL('https://sainivas.co.in'),
  openGraph: {
    title: 'Sai Nivas Beach View Rest House – Stay Near RK Beach, Visakhapatnam',
    description:
      'Stay near the sea at Sai Nivas Beach View Rest House. Enjoy cozy rooms, beach views, and peaceful surroundings in Visakhapatnam.',
    url: 'https://sainivas.co.in',
    siteName: 'Sai Nivas Beach View Rest House',
    images: [
      {
        url: 'https://sainivas.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sai Nivas Beach View Rest House – Beach View Stay',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title:
      'Sai Nivas Beach View Rest House – Stay Near RK Beach, Visakhapatnam',
    description:
      'Relax and stay in comfort at Sai Nivas Beach View Rest House near RK Beach, Visakhapatnam.',
    images: ['https://sainivas.co.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://sainivas.co.in',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Use flex layout to push footer to bottom naturally */}
        <div className="d-flex flex-column min-vh-100">
          <AppNavbar />

          {/* MAIN CONTENT (auto height, handles swipe transitions) */}
          <main className="mt-5 flex-grow-1 position-relative" style={{ overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <SwipeWrapper>{children}</SwipeWrapper>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
