"use client"
import React, { useState } from 'react';

interface QAItemProps {
  question: string;
  answer: string;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        onClick={toggleAnswer}
        className="cursor-pointer font-bold text-lg text-blue-600"
      >
        {question}
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default QAItem;
