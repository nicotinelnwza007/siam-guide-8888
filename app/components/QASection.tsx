

import React, { useState } from 'react';
import QAItem from './QAItem';

interface QAItem {
  question: string;
  answer: string;
}

interface QASectionProps {
  items: QAItem[];
}

const QASection: React.FC<QASectionProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <QAItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default QASection;
