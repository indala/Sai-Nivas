'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBed, FaWifi, FaUmbrellaBeach } from 'react-icons/fa';

const amenities = [
  { icon: <FaUmbrellaBeach size={40} />, title: 'Near Beach', desc: 'Short walk to the serene sea shore — enjoy the sunrise and sea breeze.' },
  { icon: <FaBed size={40} />, title: 'Cozy Rooms', desc: 'Well-furnished, comfortable rooms with AC and essentials.' },
  { icon: <FaWifi size={40} />, title: 'Free Wi-Fi', desc: 'Stay connected with high-speed internet throughout your stay.' },
];

export default function AmenitiesSection() {
  return (
    <Container className="py-5">
      <Row className="text-center">
        {amenities.map((item, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded-4 shadow-sm h-100"
            >
              <div className="text-success mb-3">{item.icon}</div>
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.desc}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
