import React, { useState } from 'react';
import { FaHeart, FaBus, FaTrain, FaTaxi, FaMapMarkerAlt } from 'react-icons/fa';

interface Vehicle {
  icon?: React.ReactNode;
  label: string;
  image?: string;
}

interface RouteCardProps {
  from: string;
  to: string;
  time: string;
  duration: string;
  price: string;
  vehicles: Vehicle[];
}

const RouteCard: React.FC<RouteCardProps> = ({ from, to, time, duration, price, vehicles }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 rounded-md border cursor-pointer bg-amber-100 border-brown-700 text-black shadow-lg 
                 w-80 sm:w-80 md:w-96 lg:w-[28rem] z-50"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-base md:text-lg lg:text-xl">
            {from} → {to}
          </div>
          <div className="text-sm lg:text-base text-gray-600">{time}</div>
        </div>
        <FaHeart
          onClick={handleFavoriteClick}
          className={`cursor-pointer ${isFavorite ? 'text-red-300' : 'text-gray-400'}`}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="text-sm lg:text-base">{duration}</div>
        <div className="text-sm lg:text-base font-semibold">{price}</div>
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-700">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="flex items-center gap-2 max-w-[5rem]">
            {vehicle.image ? (
              <img src={vehicle.image} alt={vehicle.label} className="w-6 h-6" />
            ) : (
              vehicle.icon
            )}
            <span
              className="text-xs lg:text-sm truncate"
              style={{ maxWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              title={vehicle.label} // Tooltip to show full text on hover
            >
              {vehicle.label}
            </span>
          </div>
        ))}
      </div>

      {expanded && (
        <div className="mt-4 text-sm lg:text-base">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`ml-${index * 5} border-l-2 pl-2 border-gray-500 flex items-center gap-2 mt-2 max-w-[10rem]`}
            >
              {vehicle.image ? (
                <img src={vehicle.image} alt={vehicle.label} className="w-6 h-6" />
              ) : (
                vehicle.icon
              )}
              <span
                className="text-xs lg:text-sm truncate"
                style={{ maxWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                title={vehicle.label}
              >
                {vehicle.label}
              </span>
            </div>
          ))}
          <div className="ml-10 border-l-2 pl-2 border-green-500 flex items-center gap-2 mt-2">
            <FaMapMarkerAlt />
            <span>{to}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteCard;
