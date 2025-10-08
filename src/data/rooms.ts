// src/data/rooms.ts
export interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const rooms: Room[] = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    description: 'Spacious room with modern amenities, queen-sized bed, and a balcony view.',
    image: '/images/room1.jpg',
    price: 2500,
  },
  {
    id: 'executive',
    title: 'Executive Suite',
    description: 'Luxury suite with separate living area, king-sized bed, and premium facilities.',
    image: '/images/room2.jpg',
    price: 4500,
  },
  {
    id: 'Standard',
    title: 'Standard Room',
    description: 'Comfortable room with all basic amenities, ideal for short stays.',
    image: '/images/room3.jpg',
    price: 1800,
  },
  {
    id: 'Family',
    title: 'Family Room',
    description: 'Spacious room perfect for families, includes two beds and a small seating area.',
    image: '/images/room4.jpg',
    price: 3200,
  },
  {
    id: 'Presidential',
    title: 'Presidential Suite',
    description: 'Top-tier suite with premium furnishings, private balcony, and luxury amenities.',
    image: '/images/room5.jpg',
    price: 7500,
  },
];
