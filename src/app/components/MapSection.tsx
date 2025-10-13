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
            title="SaiNivas Guest House Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.7739414768134!2d83.31255100000001!3d17.708136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQyJzI5LjMiTiA4M8KwMTgnNDUuMiJF!5e0!3m2!1sen!2sin!4v1760332220368!5m2!1sen!2sin"
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
          >a
            <FaMapMarkerAlt className="text-success me-2" />
            <a  href="https://maps.app.goo.gl/gAA9hG2WkFRWpDX47" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>SaiNivas Rest House,vintage Bar Backside</a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
