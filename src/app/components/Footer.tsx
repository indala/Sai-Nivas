'use client';

import { Container, Row, Col, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import React from 'react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: '#1a1a1a',
        color: '#f8f9fa',
        paddingTop: '3rem',
        paddingBottom: '2rem',
        marginTop: '4rem',
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* About Section */}
          <Col md={4}>
            <h5 style={{ color: '#20c997', fontWeight: 600 }}>
              Sai Nivas Guest House
            </h5>
            <p style={{ fontSize: '0.95rem', marginTop: '0.8rem', color: '#ddd' }}>
              A peaceful seaside retreat located on the 5th floor overlooking the
              shore. Experience comfort, calm, and a homely atmosphere — all just
              steps away from the sea.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 style={{ color: '#20c997', fontWeight: 600 }}>Quick Links</h5>
            <Nav className="flex-column mt-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link, idx) => (
                <Nav.Item key={idx} style={{ marginBottom: '0.4rem' }}>
                  <Link
                    href={link.href}
                    className="text-decoration-none"
                    style={{
                      color: '#ccc',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 style={{ color: '#20c997', fontWeight: 600 }}>Contact Us</h5>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '0.8rem',
                fontSize: '0.95rem',
                color: '#ddd',
              }}
            >
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <HiLocationMarker size={18} style={{ marginRight: '8px', color: '#20c997' }} />
                Near Seashore, 5th Floor Apartment
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt size={16} style={{ marginRight: '8px', color: '#20c997' }} />
                +91 98765 43210
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaEnvelope size={16} style={{ marginRight: '8px', color: '#20c997' }} />
                sainivasguesthouse@gmail.com
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-3" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" aria-label="Facebook">
                <FaFacebook color="#20c997" size={22} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram color="#20c997" size={22} />
              </Link>
            </div>
          </Col>
        </Row>

        <hr style={{ margin: '2rem 0', borderColor: '#333' }} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
          style={{ fontSize: '0.9rem', color: '#aaa' }}
        >
          © {new Date().getFullYear()} Sai Nivas Guest House. All rights reserved. <br />
          Designed with ❤️ by <span style={{ color: '#20c997' }}>Mohan Kumar Indala</span>
        </motion.div>
      </Container>
    </motion.footer>
  );
}
    