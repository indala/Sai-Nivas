'use client';

import React from 'react';
import SideDrawer from './SideDrawer';
import EnquiryForm from './EnquiryForm';

interface Props {
  show: boolean;
  onClose: () => void;
  room?: string;
}

export default function EnquiryDrawer({ show, onClose, room }: Props) {
  return (
    <SideDrawer
      show={show}
      onClose={onClose}
      title={room ? `Send Enquiry for ${room}` : 'Send Enquiry'}
    >
      {/* Pass onSuccess to automatically close drawer */}
      <EnquiryForm room={room} onSuccess={onClose} />
    </SideDrawer>
  );
}
