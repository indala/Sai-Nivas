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

  // Framer Motion variants
  const navbarVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const linkMotion = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.9 },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={navbarVariants}>
        <Navbar expanded={expanded} expand="lg" bg="light" fixed="top" className="shadow-sm">
          <Container>
            {/* Logo */}
            <Navbar.Brand as={Link} href="/" className="fw-bold fs-4">
              GuestHouse
            </Navbar.Brand>

            {/* Hamburger for mobile */}
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={() => setExpanded(!expanded)}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
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

                {/* Book Now Button */}
                <motion.div
                  className="mt-3 mt-lg-0"
                  {...linkMotion}
                >
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
    </>
  );
}
