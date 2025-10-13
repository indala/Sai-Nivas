// src/data/rooms.ts

export interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  bedType: 'Single Bed' | 'Double Bed'; // each room has a bed type
  services: string[];    // Amenities like AC, TV, WiFi
  nearby?: string[];     // Optional nearby attractions
}

export const rooms: Room[] = [
  {
    id: 'double1',
    title: 'Double Bed Room 1',
    description: 'Spacious double bed room with AC, TV, and beach view.',
    image: '/images/room1.webp',
    price: 3000,
    bedType: 'Double Bed',
    services: ['AC', 'TV', 'WiFi', 'Water Supply', 'Water Heater', 'Drinking Water'],
    nearby: ['Beach', 'Bar'],
  },
  {
    id: 'double2',
    title: 'Double Bed Room 2',
    description: 'Comfortable double bed room with modern amenities and beach view.',
    image: '/images/room2.webp',
    price: 3000,
    bedType: 'Double Bed',
    services: ['AC', 'TV', 'WiFi', 'Water Supply', 'Water Heater', 'Drinking Water'],
    nearby: ['Beach', 'Bar'],
  },
  {
    id: 'single1',
    title: 'Single Bed Room 1',
    description: 'Cozy single bed room with AC, TV, and essential services.',
    image: '/images/room3.webp',
    price: 1800,
    bedType: 'Single Bed',
    services: ['AC', 'TV', 'WiFi', 'Water Supply', 'Water Heater', 'Drinking Water'],
    nearby: ['Beach', 'Bar'],
  },
  {
    id: 'single2',
    title: 'Single Bed Room 2',
    description: 'Comfortable single bed room with all basic amenities.',
    image: '/images/room4.webp',
    price: 1800,
    bedType: 'Single Bed',
    services: ['AC', 'TV', 'WiFi', 'Water Supply', 'Water Heater', 'Drinking Water'],
    nearby: ['Beach', 'Bar'],
  },
  {
    id: 'single3',
    title: 'Single Bed Room 3',
    description: 'Single bed room with AC, TV, and beach view.',
    image: '/images/room5.webp',
    price: 1800,
    bedType: 'Single Bed',
    services: ['AC', 'TV', 'WiFi', 'Water Supply', 'Water Heater', 'Drinking Water'],
    nearby: ['Beach', 'Bar'],
  },
];
