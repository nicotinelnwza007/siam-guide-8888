"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Background = () => {
  const starCount = 10;
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Generate stars only on the client side
      const generatedStars = Array.from({ length: starCount }, (_, index) => {
        const top = `${Math.random() * 100}vh`;
        const left = `${Math.random() * 100}vw`;
        const size = Math.random() * 30 + 10;
        const animationDelay = `${Math.random() * 5}s`;

        return (
          <Image
            src="/items/location.svg"
            key={index}
            width={size}
            height={size}
            alt="Star icon"
            className="opacity-80 rounded-full absolute animate-star"
            style={{
              top,
              left,
              animationDelay,
            }}
          />
        );
      });

      setStars(generatedStars);
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="fixed inset-0 min-h-screen w-full bg-gradient-to-b from-[#872941] to-[#2e1b51] overflow-hidden -z-10">
      {stars}
    </div>
  );
};

export default Background;
