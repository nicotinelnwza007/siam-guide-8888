"use client";

import React, { useState, useEffect } from "react";
import { FaHeart, FaMapMarkerAlt, FaBus, FaTrain } from "react-icons/fa";

interface Vehicle {
  icon?: React.ReactNode;
  label: string;
  image?: string;
  stops?: string[];
}

interface RouteCardProps {
  id: string;
  from: string;
  to: string;
  time: string;
  duration: string;
  price: string;
  vehicles: Vehicle[];
}

const iconMapping: Record<string, React.ReactNode> = {
  Bus: <FaBus />,
  Train: <FaTrain />,
};

const RouteCard: React.FC<RouteCardProps> = ({ id, from, to, time, duration, price, vehicles }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: any) => fav.id === id));
  }, [id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav: any) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const newFavorite = {
        id,
        from,
        to,
        time,
        duration,
        price,
        vehicles: vehicles.map((vehicle) => ({
          label: vehicle.label,
          image: vehicle.image || null,
          icon: vehicle.icon ? vehicle.label : null,
          stops: vehicle.stops || [],
        })),
      };

      localStorage.setItem("favorites", JSON.stringify([...favorites, newFavorite]));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 rounded-md border cursor-pointer bg-amber-100 border-brown-700 text-black shadow-lg w-[380px] sm:w-80 md:w-96 lg:w-[28rem] z-50"
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
          className={`cursor-pointer ${isFavorite ? "text-red-300" : "text-gray-400"}`}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="text-sm lg:text-base">{duration}</div>
        <div className="text-sm lg:text-base font-semibold">{price}</div>
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-700">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="flex flex-col items-start gap-1 max-w-[6rem]">
            <div className="flex items-center gap-2">
              {vehicle.image ? (
                <img src={vehicle.image} alt={vehicle.label} className="w-6 h-6" />
              ) : (
                iconMapping[vehicle.label] || vehicle.icon
              )}
              <span
                className="text-xs lg:text-sm truncate max-w-[5rem] overflow-hidden whitespace-nowrap"
                title={vehicle.label}
              >
                {vehicle.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {expanded && (
        <div className="flex flex-col mt-4 text-sm lg:text-base">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="border-l-2 pl-2 border-gray-500 flex flex-col gap-1 mt-2"
            >
              <div className="flex items-center gap-2 truncate">
                {vehicle.image ? (
                  <img src={vehicle.image} alt={vehicle.label} className="w-6 h-6" />
                ) : (
                  iconMapping[vehicle.label] || vehicle.icon
                )}
                <span
                  className="text-xs lg:text-sm truncate max-w-[6rem] overflow-hidden whitespace-nowrap"
                  title={vehicle.label}
                >
                  {vehicle.label}
                </span>
              </div>
              {vehicle.stops && (
                <div className="text-xs text-gray-500 mt-1 pl-6">
                  {vehicle.stops.map((stop, idx) => (
                    <div key={idx}>• {stop}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="border-l-2 pl-2 border-green-500 flex items-center gap-2 mt-2">
            <FaMapMarkerAlt />
            <span>{to}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteCard;
