'use client';

import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    name: 'Ravi Kumar',
    comment:
      'SaiNivas offered a peaceful stay with a lovely sea view. The room was spotless and staff very polite.',
  },
  {
    name: 'Priya Sharma',
    comment:
      'Perfect getaway! The Rest house feels like home and is super close to the beach.',
  },
  {
    name: 'John Dsouza',
    comment:
      'Amazing hospitality and comfortable rooms. Highly recommended for family stays!',
  },
];

export default function Testimonials() {
  return (
    <div className="py-5 text-center position-relative">
      <h2 className="fw-bold mb-4">What Our Rests Say</h2>
      <Carousel
        fade
        indicators={false}
        pause={false}
        interval={3000} // auto slide every 3 seconds
        prevIcon={
          <span
            className="custom-carousel-icon"
            style={{ fontSize: '2rem', color: '#198754' }}
          >
            <FaChevronLeft />
          </span>
        }
        nextIcon={
          <span
            className="custom-carousel-icon"
            style={{ fontSize: '2rem', color: '#198754' }}
          >
            <FaChevronRight />
          </span>
        }
      >
        {reviews.map((review, i) => (
          <Carousel.Item key={i}>
            <Card
              className="border-0 shadow-sm p-4 mx-auto"
              style={{ maxWidth: '700px', position: 'relative' }}
            >
              <Card.Body>
                <FaUsers size={50} className="text-success mb-3" />
                <p className="lead fst-italic">&quot;{review.comment}&quot;</p>
                <h6 className="fw-bold mt-3">— {review.name}</h6>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
