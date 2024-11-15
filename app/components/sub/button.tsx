import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  textSize?: string; // Optional prop for text size customization
}

const Button: React.FC<ButtonProps> = ({ label, onClick, textSize }) => {
  return (
    <button
      className="w-full bg-[#982a41] hover:bg-[#883748] p-2 px-6 rounded-lg transition-colors"
      onClick={onClick}
    >
      <span className={`text-white font-bold ${textSize ? textSize : "text-base"}`}>
        {label}
      </span>
    </button>
  );
};

export default Button;
