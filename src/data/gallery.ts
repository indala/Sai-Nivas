// data/gallery.ts
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string; // e.g., "Room", "Lobby", "Pool"
}

export const gallery: GalleryItem[] = [
  { id: '1', src: '/images/room1.webp', alt: 'Deluxe Room', category: 'Room' },
  { id: '2', src: '/images/room2.webp', alt: 'Lobby', category: 'Lobby' },
  { id: '3', src: '/images/room3.webp', alt: 'Swimming Pool', category: 'Pool' },
    { id: '4', src: '/images/room4.webp', alt: 'Family Room', category: 'Room' },
    { id: '5', src: '/images/room5.webp', alt: 'Presidential Suite', category: 'Room' },
  // add more images
];
