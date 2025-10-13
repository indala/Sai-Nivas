import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import GalleryPreview from './components/GalleryPreview';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';


export const metadata = {
  title: "SaiNivas Rest House – Beach View",
  description: "Stay at SaiNivas Rest House near the sea shore with comfortable rooms and scenic views.",
  keywords: "SaiNivas, Rest House, Beach Stay, Rooms, Near Sea, Beach View",
  authors: [{ name: "SaiNivas Rest House" }],
  openGraph: {
    title: "SaiNivas Rest House – Beach View",
    description: "Stay at SaiNivas Rest House near the sea shore with comfortable rooms and scenic views.",
    url: "https://sainivas.co.in",
    siteName: "SaiNivas Rest House",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaiNivas Rest House – Beach View",
    description: "Stay at SaiNivas Rest House near the sea shore with comfortable rooms and scenic views.",
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
