'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <Container className="py-5 text-center">
      <motion.h2
        className="fw-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Sai Nivas
      </motion.h2>
      <motion.p
        className="lead"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Situated near the sea shore, Sai Nivas Guest House offers cozy and affordable stays 
        with stunning ocean views. Our peaceful location and friendly service make it perfect 
        for families, travelers, and professionals alike.
      </motion.p>
    </Container>
  );
}
