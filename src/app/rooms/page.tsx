'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from '../components/RoomCard';
import { rooms } from '../../data/rooms';
import { motion, Variants } from 'framer-motion';

export default function RoomsPage() {
  // Container animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // slightly slower stagger
      },
    },
  };

  // Individual room card animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] } // smooth ease
    },
  };

  return (
    <Container className="py-5">
      <motion.h1
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Rooms
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row>
          {rooms.map((room) => (
            <Col key={room.id} xs={12} sm={6} lg={4} className="mb-4">
              <motion.div variants={cardVariants}>
                <RoomCard {...room} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
}
