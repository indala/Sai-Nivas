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
                <Nav.Link
                  key={idx}
                  as={Link}
                  href={link.href}
                  style={{
                    color: '#ccc',
                    marginBottom: '0.4rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Nav.Link>
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
              {/* Address */}
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <HiLocationMarker size={18} style={{ marginRight: '8px', color: '#20c997' }} />
                <a
                  href="https://www.google.com/maps?q=Near+Seashore,+5th+Floor+Apartment"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  Near Seashore, 5th Floor Apartment
                </a>
              </li>

              {/* Phone */}
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt size={16} style={{ marginRight: '8px', color: '#20c997' }} />
                <a
                  href="tel:+919876543210"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  +91 98765 43210
                </a>
              </li>

              {/* Email */}
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaEnvelope size={16} style={{ marginRight: '8px', color: '#20c997' }} />
                <a
                  href="mailto:sainivasguesthouse@gmail.com"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  sainivasguesthouse@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-3" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
                <FaFacebook color="#20c997" size={22} className="hover-green" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
                <FaInstagram color="#20c997" size={22} className="hover-green" />
              </a>
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

      {/* Optional: Hover effect for social icons */}
      <style jsx>{`
        .hover-green:hover {
          color: #10b981 !important;
        }
      `}</style>
    </motion.footer>
  );
}
