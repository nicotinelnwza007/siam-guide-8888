"use client";

import React, { useEffect, useState } from "react";
import { FaBus, FaTrain, FaTaxi, FaMapMarkerAlt, FaTrash } from "react-icons/fa";

interface Vehicle {
  icon?: string;
  label: string;
  image?: string;
}

interface FavoriteRoute {
  id: string;
  from: string;
  to: string;
  time: string;
  duration: string;
  price: string;
  vehicles: Vehicle[];
}

// Function to map string identifiers to React icons
const getIcon = (iconName: string | undefined): React.ReactNode => {
  switch (iconName) {
    case "bus":
      return <FaBus />;
    case "train":
      return <FaTrain />;
    case "taxi":
      return <FaTaxi />;
    default:
      return null;
  }
};

const RouteCard: React.FC<FavoriteRoute & { onDelete: (id: string) => void }> = ({
  id,
  from,
  to,
  time,
  duration,
  price,
  vehicles,
  onDelete,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 rounded-md border cursor-pointer bg-amber-100 border-brown-700 text-black shadow-lg w-80 sm:w-80 md:w-96 lg:w-[28rem] flex flex-col"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-base md:text-lg lg:text-xl">
            {from} → {to}
          </div>
          <div className="text-sm lg:text-base text-gray-600">{time}</div>
        </div>
        <div className="flex items-center gap-2">
          <FaTrash
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id); // Trigger delete callback
            }}
            className="text-red-500 cursor-pointer"
          />
        </div>
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
              <div className="text-xl">{getIcon(vehicle.icon)}</div>
            )}
            <span className="text-xs lg:text-sm truncate" title={vehicle.label}>
              {vehicle.label}
            </span>
          </div>
        ))}
      </div>

      {expanded && (
        <div className="flex flex-col mt-4 text-sm lg:text-base">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="border-l-2 pl-2 border-gray-500 flex items-center gap-2 mt-2 max-w-[10rem]"
            >
              {vehicle.image ? (
                <img src={vehicle.image} alt={vehicle.label} className="w-6 h-6" />
              ) : (
                <div className="text-xl">{getIcon(vehicle.icon)}</div>
              )}
              <span className="text-xs lg:text-sm truncate" title={vehicle.label}>
                {vehicle.label}
              </span>
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

const Page: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteRoute[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update favorites and sync with localStorage
  const handleDelete = (id: string) => {
    const updatedFavorites = favorites.filter((route) => route.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 mt-24 lg:mt-32">
      <h1 className="text-xl text-white font-bold mb-4">เส้นทาง</h1>

      {favorites.length === 0 ? (
        <p className="text-white">ยังไม่ได้เพิ่มรายการโปรด !!!</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((route) => (
            <RouteCard key={route.id} {...route} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
