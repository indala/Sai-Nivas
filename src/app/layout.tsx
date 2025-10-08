// src/app/layout.tsx
import type { Metadata } from "next";
// Import your global CSS
import './globals.css';
// Import Bootstrap CSS for react-bootstrap to work correctly
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";


// Define the site-wide metadata
export const metadata: Metadata = {
  title: "Acommodation Booking App",
  description: "Find and book your perfect room or stay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column min-vh-100">
          {/* Navbar should appear at the top of every page */}
          <AppNavbar/>
          
          {/* The main content of each page will be rendered here */}
          <main className="flex-grow-1 mt-5">
            {children}
          </main>
          
          {/* Footer should appear at the bottom of every page */}
          <Footer/>
          
        </div>
      </body>
    </html>
  );
}