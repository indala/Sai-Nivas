'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import SwipeWrapper from './components/SwipeWrapper';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Use flex layout to push footer to bottom naturally */}
        <div className="d-flex flex-column min-vh-100">
          <AppNavbar />

          {/* MAIN CONTENT (auto height, handles swipe transitions) */}
          <main className="mt-5 flex-grow-1 position-relative" style={{ overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <SwipeWrapper>{children}</SwipeWrapper>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
