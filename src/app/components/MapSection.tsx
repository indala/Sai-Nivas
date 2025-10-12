'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container fluid className="p-0">
        <div style={{ height: '400px', position: 'relative' }}>
          <iframe
            title="Sai Nivas Guest House Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.123456789!2d79.8500!3d12.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53679f8f3!2sSai%20Nivas%20Guest%20House!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaMapMarkerAlt className="text-success me-2" />
            <a  href="https://www.google.com/maps?q=Near+Seashore,+5th+Floor+Apartment" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Sai Nivas Guest House, Near Sea Shore</a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
