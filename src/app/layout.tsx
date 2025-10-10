// src/app/layout.tsx
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Accommodation Booking App",
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
          {/* Navbar appears on every page */}
          <AppNavbar />

          {/* Main page content */}
          <main className="flex-grow-1 mt-5">
            {children}
          </main>

          {/* Footer appears on every page */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
