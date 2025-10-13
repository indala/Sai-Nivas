'use client';


import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsHouseDoorFill, BsFillPeopleFill, BsStarFill } from 'react-icons/bs';

export default function AboutPage() {
  const features = [
    { icon: <BsHouseDoorFill size={30} />, title: 'Sea View Rooms', description: 'Enjoy stunning views of the seashore from our 5th floor rooms.' },
    { icon: <BsFillPeopleFill size={30} />, title: 'Warm Hospitality', description: 'Our team ensures a comfortable and memorable stay for all Rests.' },
    { icon: <BsStarFill size={30} />, title: 'Modern Amenities', description: 'Equipped with everything you need for a relaxing stay near the beach.' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5 } }),
  };

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h1>SaiNivas Rest House</h1>
        <p className="text-muted fs-5">
          A serene stay on the 5th floor, just steps away from the seashore. Relax, unwind, and enjoy the coastal breeze.
        </p>
      </motion.div>

      {/* Story Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Story</h3>
            <p>
              SaiNivas Rest House is located on the 5th floor of a beautiful apartment near the seashore, offering Rests
              breathtaking views of the ocean. Our aim is to provide a comfortable and tranquil escape for travelers who
              want to enjoy the seaside while staying close to the city’s conveniences.
            </p>
            <p>
              With a focus on warm hospitality and modern amenities, we ensure every Rest has a relaxing and memorable
              stay. Whether it’s a weekend getaway or an extended holiday, SaiNivas Rest House is your perfect seaside retreat.
            </p>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.img
            src="/images/seashore-Resthouse.png" // Replace with your actual image
            alt="SaiNivas Rest House"
            className="img-fluid rounded shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="g-4 mb-5">
        {features.map((feature, i) => (
          <Col md={4} key={feature.title}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
            >
              <Card className="p-4 shadow-sm text-center h-100">
                <div className="mb-3" style={{ color: '#198754' }}>{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Call-to-Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/rooms">
          <Button variant="success" size="lg">Book Your Stay</Button>
        </Link>
      </motion.div>
    </Container>
  );
}
