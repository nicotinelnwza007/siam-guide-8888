
import React from 'react';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="w-40 h-40 rounded-full animate-spin">
      <Image
          src="/items/tobelogo.png"
          width={500}
          height={500}
          alt="Profile icon"
        />
      </div>
      {/* <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
      <p className="mt-4 text-lg text-white">Loading...</p>
    </div>
  );
};

export default LoadingScreen;

