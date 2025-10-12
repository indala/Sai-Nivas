// src/app/rooms/[id]/page.tsx
import { rooms, Room } from '@/data/rooms';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import RoomDetailsClient from './RoomDetailsClient';
import { Metadata } from 'next';

interface RoomPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

// Generate metadata dynamically per room
export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  // Await params if it's a promise (Next.js 15 requirement)
  const { id } = await params;

  const room: Room | undefined = rooms.find((r) => r.id.toLowerCase() === id.toLowerCase());

  if (!room) {
    return {
      title: 'Room Not Found – Sai Nivas Beach View Rest House',
      description:
        'The room you are looking for does not exist. Please browse our available rooms.',
      alternates: {
        canonical: 'https://sainivas.co.in/rooms',
      },
    };
  }

  return {
    title: `${room.title} – Sai Nivas Beach View Rest House, RK Beach Vizag`,
    description: room.description,
    keywords: [
      'Sai Nivas Beach View Rest House',
      room.title,
      `${room.bedType} Room Vizag`,
      'Rooms near RK Beach',
      'Beach Stay Vizag',
    ],
    authors: [{ name: 'Sai Nivas Beach View Rest House' }],
    alternates: {
      canonical: `https://sainivas.co.in/rooms/${room.id}`,
    },
    openGraph: {
      title: `${room.title} – Sai Nivas Beach View Rest House`,
      description: room.description,
      url: `https://sainivas.co.in/rooms/${room.id}`,
      siteName: 'Sai Nivas Beach View Rest House',
      images: [
        {
          url: room.image,
          width: 1200,
          height: 630,
          alt: room.title,
        },
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Sai Nivas Beach View Rest House – Rooms Overview',
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${room.title} – Sai Nivas Beach View Rest House`,
      description: room.description,
      images: [room.image, '/og-image.png'],
    },
  };
}

// Async page component
export default async function RoomPage({ params }: RoomPageProps) {
  // Await params before using
  const { id } = await params;

  const room: Room | undefined = rooms.find((r) => r.id.toLowerCase() === id.toLowerCase());

  if (!room) {
    return (
      <Container className="py-5 text-center">
        <h2>Room not found</h2>
        <Link href="/rooms" passHref>
          <Button variant="success" className="mt-3">
            Back to Rooms
          </Button>
        </Link>
      </Container>
    );
  }

  return <RoomDetailsClient room={room} />;
}
