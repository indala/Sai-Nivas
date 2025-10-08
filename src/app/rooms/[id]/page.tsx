// app/rooms/[id]/page.tsx
import { rooms, Room } from '@/data/rooms';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import RoomDetailsClient from './RoomDetailsClient';

interface RoomPageProps {
  params: { id: string };
}

// Optional: remove generateStaticParams if dynamic rendering is enough
// export const generateStaticParams = async () => {
//   return rooms.map((room) => ({ id: room.id.toLowerCase() }));
// };

export default function RoomPage({ params }: RoomPageProps) {
  const room: Room | undefined = rooms.find(
    (r) => r.id.toLowerCase() === params.id.toLowerCase()
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
