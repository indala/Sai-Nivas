'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import { motion, Variants, easeInOut } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  // Text animations
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Button hover effect
  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: easeInOut },
  };

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url(/images/room1.jpg)', // Add a sea-view or balcony image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
          zIndex: 1,
        }}
      />

      <Container
        className="text-center text-light px-3"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '1.2rem', letterSpacing: '1px' }}
        >
          🌊 Sea Breeze. Peaceful Stay. Cozy Comfort.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.3 }}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
        >
          Welcome to Sai Nivas Guest House
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="lead mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}
        >
          A peaceful seaside retreat on the 5th floor — combining modern comfort with a homely atmosphere.
        </motion.p>

        {/* Button */}
        <motion.div whileHover={buttonHover} transition={{ delay: 0.8 }}>
          <Link
            href="/rooms"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.8rem',
              fontSize: '1.1rem',
              color: '#fff',
              backgroundColor: '#198754',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 500,
              boxShadow: '0 4px 15px rgba(25,135,84,0.3)',
            }}
          >
            Explore Rooms
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
