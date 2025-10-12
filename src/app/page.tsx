import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import GalleryPreview from './components/GalleryPreview';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';


export const metadata = {
  title: "Sai Nivas Guest House – Beach View",
  description: "Stay at Sai Nivas Guest House near the sea shore with comfortable rooms and scenic views.",
  keywords: "Sai Nivas, Guest House, Beach Stay, Rooms, Near Sea, Beach View",
  authors: [{ name: "Sai Nivas Guest House" }],
  openGraph: {
    title: "Sai Nivas Guest House – Beach View",
    description: "Stay at Sai Nivas Guest House near the sea shore with comfortable rooms and scenic views.",
    url: "https://sainivas.co.in",
    siteName: "Sai Nivas Guest House",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Nivas Guest House – Beach View",
    description: "Stay at Sai Nivas Guest House near the sea shore with comfortable rooms and scenic views.",
    images: ["/og-image.jpg"],
  },
};
  



export default function Home() {
  return (
    
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className='mt-3c'>
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <GalleryPreview />
      <Testimonials />
      <MapSection />
    </div>
  );
}
