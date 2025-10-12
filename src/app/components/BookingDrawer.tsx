// components/BookingDrawer.tsx
'use client';

import React from 'react';
import SideDrawer from './SideDrawer';
import BookingForm from './BookingForm';

interface Props {
  show: boolean;
  onClose: () => void;
  room?: string;
}

export default function BookingDrawer({ show, onClose, room }: Props) {
  return (
    <SideDrawer
      show={show}
      onClose={onClose}
      title={room ? `Book ${room}` : 'Book a Room'}
    >
      <BookingForm room={room} onSuccess={onClose} />
    </SideDrawer>
  );
}
