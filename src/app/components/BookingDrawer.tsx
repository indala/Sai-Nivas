'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence ,Variants} from 'framer-motion';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { sendEnquiry } from '@/utils/sendEnquiry';

interface Props {
  show: boolean;
  onClose: () => void;
  room?: string; // optional pre-selected room
}

export default function BookingDrawer({ show, onClose, room }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, contact, checkIn, checkOut, guests } = formData;

    if (!name  || !contact || !checkIn || !checkOut || !guests) {
      setError('Please fill all fields.');
      return;
    }

    setError('');
    try {
      sendEnquiry({
        name,
        contact,
        room,
        message: `Booking Request:
        Check-in: ${checkIn}
        Check-out: ${checkOut}
        Guests: ${guests}`,
      });

      setSuccess(true);
      setFormData({
        name: '',
        contact: '',
        message: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch {
      setError('Failed to open WhatsApp. Please try again.');
    }
  };

  // Framer Motion variants for staggered fields
  const fieldVariants :Variants= {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay with blur */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(2px)',
              zIndex: 900,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className='rounded-start'
            style={{
              position: 'fixed',
              top: 100,
              right: 0,
              height: '100vh',
              width: '100%',
              maxWidth: '400px',
              backgroundColor: '#fff',
              borderRadius: '0 0 0 10px',
              boxShadow: '-4px 0 20px rgba(0,0,0,0.2)',
              zIndex: 1000,
              overflowY: 'auto',
              padding: '2rem',
              paddingBottom: '7rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h4 className="m-0">{room ? `Book ${room}` : 'Book a Room'}</h4>
              <Button variant="outline-secondary" size="sm" onClick={onClose}>
                ✕
              </Button>
            </div>

            <Container>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">WhatsApp chat opened!</Alert>}

              <Form onSubmit={handleSubmit}>
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
                  { label: 'Contact', name: 'contact', type: 'tel', placeholder: 'Contact Number' },
                  { label: 'Check-in', name: 'checkIn', type: 'date', placeholder: '' },
                  { label: 'Check-out', name: 'checkOut', type: 'date', placeholder: '' },
                  { label: 'Guests', name: 'guests', type: 'number', placeholder: '', min: 1 },
                ].map((field, i) => (
                  <motion.div key={field.name} custom={i} initial="hidden" animate="visible" variants={fieldVariants}>
                    <Form.Group className="mb-3">
                      <Form.Label>{field.label}</Form.Label>
                      <Form.Control
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        min={field.min}
                      />
                    </Form.Group>
                  </motion.div>
                ))}

                <Button variant="success" type="submit" className="w-100 mt-2">
                  Book via WhatsApp
                </Button>
              </Form>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
