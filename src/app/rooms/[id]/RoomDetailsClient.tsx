'use client';

import { Room } from '@/data/rooms';
import { Container, Button, Row, Col, Badge, Card } from 'react-bootstrap';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import EnquiryDrawer from '@/app/components/EnquiryDrawer';
import BookingDrawer from '../../components/BookingDrawer';

import { FaTv, FaWifi, FaSnowflake, FaShower, FaBed, FaDollarSign, FaTint, FaFire } from 'react-icons/fa';
import { MdBeachAccess, MdLocalBar, MdOutlineKingBed } from 'react-icons/md';

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

  const serviceIcons: Record<string, React.ReactNode> = {
    AC: <FaSnowflake />,
    TV: <FaTv />,
    WiFi: <FaWifi />,
    'Water Heater': <FaFire />,
    'Water Supply': <FaShower />,
    'Double Bed': <FaBed />,
    'Single Bed': <FaBed />,
    'King Bed': <MdOutlineKingBed />,
    'Drinking Water': <FaTint />,
  };

  const nearbyIcons: Record<string, React.ReactNode> = {
    Beach: <MdBeachAccess />,
    Bar: <MdLocalBar />,
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const fadeCard: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ position: 'relative', width: '100%', height: '400px' }}
        >
          <Image src={room.image} alt={room.title} fill style={{ objectFit: 'cover' }} priority />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
            }}
          />
          <Button
            variant="success"
            onClick={handleBack}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              zIndex: 10,
              opacity: 0.9,
              boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
            }}
          >
            ← Back to Rooms
          </Button>
        </motion.div>

        <Container className="mt-5" style={{ maxWidth: '1100px', paddingBottom: '3rem' }}>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.h1
                className="mb-3 fw-bold"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.2}
                viewport={{ once: true }}
              >
                {room.title}
              </motion.h1>

              <motion.p
                className="lead text-muted"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.3}
                viewport={{ once: true }}
              >
                {room.description}
              </motion.p>

              <Row className="my-4 g-4 align-items-stretch">
                <Col md={4} sm={12}>
                  <motion.div variants={fadeCard} initial="hidden" whileInView="visible" custom={0.4} viewport={{ once: true }}>
                    <Card className="text-center shadow-sm h-100 border-success">
                      <Card.Body>
                        <FaDollarSign size={28} className="text-success mb-3" />
                        <Card.Title className="text-success fw-bold fs-5">Price</Card.Title>
                        <Card.Text className="display-6 fw-bold">
                          ₹{room.price}<span className="fs-6 text-muted"> / night</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>

                <Col md={8} sm={12}>
                  <motion.div variants={fadeCard} initial="hidden" whileInView="visible" custom={0.5} viewport={{ once: true }}>
                    <Card className="shadow-sm h-100 border-0">
                      <Card.Body>
                        <h5 className="text-secondary mb-3">Bed Type</h5>
                        <Badge bg="info" className="me-2 p-2" style={{ fontSize: '1rem' }}>
                          {serviceIcons[room.bedType]} {room.bedType}
                        </Badge>

                        <Row className="mt-4">
                          <Col sm={6}>
                            <h6 className="text-dark">Amenities:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {room.services.map((service) => (
                                <Badge bg="success" key={service} className="p-2" style={{ fontSize: '0.9rem' }}>
                                  {serviceIcons[service]} {service}
                                </Badge>
                              ))}
                            </div>
                          </Col>
                          {room.nearby && (
                            <Col sm={6}>
                              <h6 className="text-dark">Nearby:</h6>
                              <div className="d-flex flex-wrap gap-2">
                                {room.nearby.map((place) => (
                                  <Badge bg="warning" key={place} className="p-2" style={{ fontSize: '0.9rem', color: '#000' }}>
                                    {nearbyIcons[place]} {place}
                                  </Badge>
                                ))}
                              </div>
                            </Col>
                          )}
                        </Row>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              </Row>

              <motion.div className="d-flex gap-3 mt-4" variants={fadeUp} initial="hidden" whileInView="visible" custom={0.6} viewport={{ once: true }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="success" onClick={() => setShowBooking(true)}>Book Now</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="primary" onClick={() => setShowEnquiry(true)}>Send Enquiry</Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* 📅 Booking Drawer */}
      <BookingDrawer show={showBooking} onClose={() => setShowBooking(false)} room={room.title} />

      {/* 📧 Enquiry Drawer */}
      <EnquiryDrawer show={showEnquiry} onClose={() => setShowEnquiry(false)} room={room.title} />
    </>
  );
}
