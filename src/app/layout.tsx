// src/app/layout.tsx
'use client'; 
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. Import the new component
import SwipeWrapper from './components/SwipeWrapper'; 
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

// You can still keep metadata outside of the default export

// 2. Add 'use client' to make this file interactive


// 3. Import usePathname from next/navigation for Framer Motion key
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname(); // Needed for AnimatePresence key

  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column min-vh-100">
          {/* Navbar appears on every page */}
          <AppNavbar />

          {/* Main page content - WRAPPED with AnimatePresence */}
          <main className="flex-grow-1 mt-5">
            <AnimatePresence mode='wait'> {/* Add AnimatePresence */}
                {/* 4. Use the SwipeWrapper around the children */}
                <SwipeWrapper key={pathname}>
                    {children}
                </SwipeWrapper>
            </AnimatePresence>
          </main>

          {/* Footer appears on every page */}
          <Footer />
        </div>
      </body>
    </html>
  );
}