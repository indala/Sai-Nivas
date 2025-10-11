// src/app/gallery/head.tsx
export const metadata = {
  title: "Accommodation Booking App",
  description: "Find and book your perfect room or stay.",
};
export default function Head() {
  return (
    <>
      <title>Gallery | Accommodation Booking App</title>
      <meta name="description" content="Explore our beautiful rooms and gallery." />
      <meta property="og:title" content="Gallery | Accommodation Booking App" />
      <meta property="og:description" content="Explore our beautiful rooms and gallery." />
    </>
  );
}
