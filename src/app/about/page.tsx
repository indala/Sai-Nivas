// src/app/about/page.tsx
import AboutPage from "./about";

export const metadata = {
  title: 'About Sai Nivas Beach View Rest House – Your Beachside Retreat',
  description:
    'Discover Sai Nivas Beach View Rest House: our story, hospitality values, and what makes us special near RK Beach, Visakhapatnam. A peaceful seaside retreat awaits.',
  keywords: [
    'Sai Nivas Beach View Rest House',
    'About Guest House Visakhapatnam',
    'Beach Stay Vizag',
    'RK Beach Guest House',
  ],
  authors: [{ name: 'Sai Nivas Beach View Rest House' }],
  alternates: {
    canonical: 'https://sainivas.co.in/about',
  },
  openGraph: {
    title: 'About Sai Nivas Beach View Rest House – Your Beachside Retreat',
    description:
      'Discover Sai Nivas Beach View Rest House: our story, hospitality values, and what makes us special near RK Beach, Visakhapatnam.',
    url: 'https://sainivas.co.in/about',
    siteName: 'Sai Nivas Beach View Rest House',
    images: [
      {
        url: 'https://sainivas.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sai Nivas Beach View Rest House – About',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sai Nivas Beach View Rest House – Your Beachside Retreat',
    description:
      'Discover Sai Nivas Beach View Rest House near RK Beach, Visakhapatnam. Learn our story and values for a peaceful stay.',
    images: ['https://sainivas.co.in/og-image.png'],
  },
};

export default function About() {
  return <AboutPage />;
}
