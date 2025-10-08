// app/rooms/[id]/page.tsx

import { rooms, Room } from '@/data/rooms';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import RoomDetailsClient from './RoomDetailsClient';

// Update the interface to account for the params object possibly being a Promise in Next.js 15
interface RoomPageProps {
  params: Promise<{ id: string }>;
}

export default async function RoomPage({ params }: RoomPageProps) {
  // Await the params object to get its final value
  const { id } = await params;

  const room: Room | undefined = rooms.find(
    (r) => r.id.toLowerCase() === id.toLowerCase()
  );

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
