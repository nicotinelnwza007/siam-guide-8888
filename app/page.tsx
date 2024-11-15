"use client";

import React, { useState } from 'react';
import LoadingScreen from './components/Loading';
import Image from 'next/image';
import Hero from './components/Hero';
import RouteCard from './components/sub/routecard';
import { FaHeart, FaBus, FaTrain, FaTaxi, FaMapMarkerAlt } from 'react-icons/fa';

const App: React.FC = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    setIsInitialLoading(true);
    setTimeout(() => {
      setIsInitialLoading(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSearched(true);
      },); // Add a delay here for loading animation
    }, 200);
  };

  return (
    <div>
      {!isSearched ? (
        isInitialLoading ? (
          <LoadingScreen />
        ) : (
          <div className="w-full flex flex-col justify-center items-center min-h-screen mx-auto z-30">
            <Hero from={from} to={to} setFrom={setFrom} setTo={setTo} />
            <button
              onClick={handleSearch}
              className="flex justify-center items-center mt-8 p-2 w-[105px] bg-[#D0B473] rounded-lg font-bold text-md gap-2"
            >
              <Image src="/items/Search.svg" width={20} height={20} alt="" />
              ค้นหา
            </button>
          </div>
        )
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="w-full flex flex-col justify-center items-center min-h-screen mx-auto z-30">
          <div className="flex flex-col mt-32">
            <div className="flex flex-col justify-center mx-auto">
              <div className="flex flex-col w-full justify-center items-center">
                <Hero from={from} to={to} setFrom={setFrom} setTo={setTo} />
                <button
                  onClick={handleSearch}
                  className="flex justify-center items-center mt-8 p-2 w-[105px] bg-[#D0B473] rounded-lg font-bold text-md gap-2"
                >
                  <Image src="/items/Search.svg" width={20} height={20} alt="" />
                  ค้นหา
                </button>
              </div>
              <div className="my-4 text-start text-[20px] font-bold text-white">จะไปยังไงดี ?</div>
              <div className="flex flex-col gap-4 p-2">
                {from === "สถานี BTS สยาม" && to === "ลาดกระบัง" && (
                  <>
                    <RouteCard
                      from={from} to={to}
                      time="1 ชั่วโมง 5 นาที"
                      duration="25.9 km"
                      price="65 บาท"
                      vehicles={[
                        { icon: <FaTrain />, label: 'BTS สยาม' },
                        { icon: <FaBus />, label: 'พญาไทย' },
                        { image: '/items/apl.png', label: 'Apl ลาดกระบัง' },
                      ]}
                    />
                    <RouteCard
                      from={from} to={to}
                      time="12:00 PM"
                      duration="2h"
                      price="$20"
                      vehicles={[
                        { icon: <FaBus />, label: 'Bus 100' },
                        { icon: <FaTrain />, label: 'Train 190' },
                        { icon: <FaTaxi />, label: 'Taxi' },
                      ]}
                    />
                    <RouteCard
                      from={from} to={to}
                      time="12:00 PM"
                      duration="2h"
                      price="$20"
                      vehicles={[
                        { icon: <FaBus />, label: 'Bus 100' },
                        { icon: <FaTrain />, label: 'Train 190' },
                        { icon: <FaTaxi />, label: 'Taxi' },
                      ]}
                    />

                  </>
                )}
                {from === "ลาดกระบัง" && to === "สถานี BTS สยาม" && (
                  <>
                    <RouteCard
                      from={from} to={to}
                      time="12:00 PM"
                      duration="2h"
                      price="$20"
                      vehicles={[
                        { icon: <FaBus />, label: 'Bus 100' },
                        { icon: <FaTrain />, label: 'Train 190' },
                        { icon: <FaTaxi />, label: 'Taxi' },
                      ]}
                    />
                    <RouteCard
                      from={from} to={to}
                      time="12:00 PM"
                      duration="2h"
                      price="$20"
                      vehicles={[
                        { icon: <FaBus />, label: 'Bus 100' },
                        { icon: <FaTrain />, label: 'Train 190' },
                        { icon: <FaTaxi />, label: 'Taxi' },
                      ]}
                    />
                    <RouteCard
                      from={from} to={to}
                      time="12:00 PM"
                      duration="2h"
                      price="$20"
                      vehicles={[
                        { icon: <FaBus />, label: 'Bus 100' },
                        { icon: <FaTrain />, label: 'Train 190' },
                        { icon: <FaTaxi />, label: 'Taxi' },
                      ]}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
