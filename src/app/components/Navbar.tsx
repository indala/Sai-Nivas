'use client';

import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import BookingDrawer from './BookingDrawer';

export default function AppNavbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const linkMotion = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.9 },
  };

  // Show floating button only on pages other than individual room pages
  const showFloatingBooking = !(pathname.startsWith('/rooms/') && pathname !== '/rooms');

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={navbarVariants}>
        <Navbar expanded={expanded} expand="lg" bg="light" fixed="top" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} href="/" className="fw-bold fs-4">
              SaiNivas Rest House
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={() => setExpanded(!expanded)}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="custom-offcanvas"
            >
              <Offcanvas.Header closeButton onHide={() => setExpanded(false)}>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="ms-auto">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} {...linkMotion}>
                      <Nav.Link
                        as={Link}
                        href={link.path}
                        onClick={() => setExpanded(false)}
                        style={{
                          fontWeight: pathname === link.path ? 600 : 500,
                          color: pathname === link.path ? '#198754' : '#333',
                          margin: '0 0.8rem',
                        }}
                      >
                        {link.name}
                      </Nav.Link>
                    </motion.div>
                  ))}
                </Nav>

                <motion.div className="mt-3 mt-lg-0" {...linkMotion}>
                  <Button
                    variant="success"
                    onClick={() => {
                      setShowBooking(true);
                      setExpanded(false);
                    }}
                    style={{ width: '100%' }}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </motion.div>

      {/* Booking Drawer */}
      <BookingDrawer show={showBooking} onClose={() => setShowBooking(false)} />

      {/* Floating Book Now Button for Mobile / Tablet */}
      {showFloatingBooking && (
        <motion.div
          className="d-lg-none floating-booking"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ zIndex: 1050 }}
        >
          <Button
            variant="success"
            onClick={() => setShowBooking(true)}
            style={{ borderRadius: '50px', padding: '0.6rem 1rem', fontWeight: 600 }}
          >
            Book Now
          </Button>
        </motion.div>
      )}

      {/* Inline styling for smooth animation + blur */}
      <style jsx global>{`
        .custom-offcanvas.offcanvas {
          transition: transform 0.6s ease-in-out !important;
          backdrop-filter: blur(10px);
          width: 70% !important;
          background: rgba(255, 255, 255, 0.75);
        }

        .offcanvas-backdrop.show {
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.3) !important;
          transition: backdrop-filter 0.4s ease, background-color 0.4s ease;
        }

        .floating-booking {
          position: fixed;
          bottom: 1rem;
          z-index: 1040;
          right: 1rem;
        }

        .floating-booking button {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
