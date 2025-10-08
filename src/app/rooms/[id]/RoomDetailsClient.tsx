'use client';

import { Room } from '@/data/rooms';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import EnquiryForm from '../../components/EnquiryForm';
import BookingDrawer from '../../components/BookingDrawer';

interface Props {
  room: Room;
}

export default function RoomDetailsClient({ room }: Props) {
  const router = useRouter();

  const [showBooking, setShowBooking] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push('/rooms');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '2rem', backgroundColor: '#f8f9fa' }}
      >
        <Container style={{ maxWidth: '800px' }}>
          <Button variant="success" className="mb-4" onClick={handleBack}>
            ← Back to Rooms
          </Button>

          <motion.h1 className="mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {room.title}
          </motion.h1>

          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              src={room.image}
              alt={room.title}
              width={800}
              height={400}
              className="img-fluid rounded"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {room.description}
          </motion.p>

          <motion.h4 className="mt-3 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Price: ₹{room.price} / night
          </motion.h4>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <Button variant="success" onClick={() => setShowBooking(true)}>
              Book Now
            </Button>
            <Button variant="primary" onClick={() => setShowEnquiry(true)}>
              Send Enquiry
            </Button>
          </div>
        </Container>
      </motion.div>

      {/* Booking Drawer */}
      <BookingDrawer
        show={showBooking}
        onClose={() => setShowBooking(false)}
        room={room.title}
      />

      {/* Enquiry Drawer */}
      {showEnquiry && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          style={{
            position: 'fixed',
            top: 100,
            right: 0,
            height: '84vh',
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#fff',
            boxShadow: '-4px 0 12px rgba(0,0,0,0.2)',
            zIndex: 1000,
            overflowY: 'auto',
            padding: '2rem',
          }}
        >
          <Button variant="secondary" onClick={() => setShowEnquiry(false)} className="mb-3">
            Close
          </Button>
          <EnquiryForm room={room.title} onSuccess={() => setShowEnquiry(false)} />
        </motion.div>
      )}

      {/* Overlay */}
      {(showBooking || showEnquiry) && (
        <div
          onClick={() => {
            setShowBooking(false);
            setShowEnquiry(false);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 900,
          }}
        />
      )}
    </>
  );
}
