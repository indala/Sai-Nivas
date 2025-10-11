// src/app/components/SwipeWrapper.tsx

'use client';

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// 1. Define the Page Order to determine next/prev
const pageOrder = ['/', '/about', '/rooms', '/gallery', '/contact'];

// Optional: Define a simple transition for the page content
const pageVariants = {
    initial: { opacity: 0, x: 0 },
    in: { opacity: 1, x: 0 },
    outLeft: { opacity: 0, x: -100 },
    outRight: { opacity: 0, x: 100 },
};

export default function SwipeWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const currentIndex = pageOrder.indexOf(pathname);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            // Swipe Left = Go to NEXT Page (e.g., Home -> About)
            if (currentIndex !== -1 && currentIndex < pageOrder.length - 1) {
                const nextPage = pageOrder[currentIndex + 1];
                router.push(nextPage);
            }
        },
        onSwipedRight: () => {
            // Swipe Right = Go to PREVIOUS Page (e.g., About -> Home)
            if (currentIndex > 0) {
                const prevPage = pageOrder[currentIndex - 1];
                router.push(prevPage);
            }
        },
        // Configuration to prevent vertical scrolling from being blocked
        delta: 1, // Minimum swipe distance
        trackMouse: true, // Enables on desktop for testing
    });

    return (
        // Apply handlers to a div that wraps the page content
        <motion.div
            {...handlers}
            // A key is CRITICAL for Framer Motion to detect route change
            key={pathname}
            initial="initial"
            animate="in"
            // Exit animation depends on whether the user is swiping left or right
            // This is complex to implement perfectly here, so we'll use a neutral out as a fallback
            exit="outLeft" // Fallback: just use a single exit direction
            variants={pageVariants}
            transition={{ type: "tween", duration: 0.3 }}
            style={{ touchAction: 'pan-y' }} // Allows vertical scrolling
            className="flex-grow-1" // Take up available space like the main element did
        >
            {children}
        </motion.div>
    );
}