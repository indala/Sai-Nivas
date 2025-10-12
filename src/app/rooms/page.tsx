// src/app/rooms/page.tsx
import RoomsPage from "./rooms";

export const metadata = {
  title: 'Rooms at Sai Nivas Beach View Rest House – Comfort & Ocean Views',
  description:
    'Explore our well-appointed rooms at Sai Nivas Beach View Rest House. Cozy interiors, AC rooms, sea views, and ideal for couples or families near RK Beach, Visakhapatnam.',
  keywords: [
    'Sai Nivas Beach View Rest House',
    'Rooms near RK Beach Vizag',
    'Sea View Rooms Visakhapatnam',
    'Guest House Rooms Vizag',
    'Beach Stay Vizag',
  ],
  authors: [{ name: 'Sai Nivas Beach View Rest House' }],
  alternates: {
    canonical: 'https://sainivas.co.in/rooms',
  },
  openGraph: {
    title: 'Rooms at Sai Nivas Beach View Rest House – Comfort & Ocean Views',
    description:
      'Explore our well-appointed rooms at Sai Nivas Beach View Rest House. Cozy interiors, AC rooms, and sea views near RK Beach, Visakhapatnam.',
    url: 'https://sainivas.co.in/rooms',
    siteName: 'Sai Nivas Beach View Rest House',
    images: [
      {
        url: '/og-image.png', // main OG image
        width: 1200,
        height: 630,
        alt: 'Sai Nivas Beach View Rest House – Rooms Overview',
      },
      {
        url: '/images/room1.webp',
        width: 1200,
        height: 630,
        alt: 'Deluxe Room',
      },
      {
        url: '/images/room2.webp',
        width: 1200,
        height: 630,
        alt: 'Sea View Room',
      },
      {
        url: '/images/room3.webp',
        width: 1200,
        height: 630,
        alt: 'Family Room',
      },
      {
        url: '/images/room4.webp',
        width: 1200,
        height: 630,
        alt: 'AC Room',
      },
      {
        url: '/images/room5.webp',
        width: 1200,
        height: 630,
        alt: 'Couple Room',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooms at Sai Nivas Beach View Rest House – Comfort & Ocean Views',
    description:
      'Book cozy rooms with sea views at Sai Nivas Beach View Rest House near RK Beach, Visakhapatnam. Ideal for couples and families.',
    images: [
      '/og-image.png',
      '/images/room1.webp',
      '/images/room2.webp',
      '/images/room3.webp',
      '/images/room4.webp',
      '/images/room5.webp',
    ],
  },
};

export default function Rooms() {
  return <RoomsPage />;
}
