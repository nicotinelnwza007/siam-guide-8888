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
      },); 
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
                {from === "สถานี BTS สยาม" && to === "สถานีลาดกระบัง" && (
                  <>
                    <RouteCard
                      id="bts-siam-ladkrabang-1"
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
                      id="bts-siam-ladkrabang-2"
                      from={from} to={to}
                      time="1 ชั่วโมง 34 นาที"
                      duration="26.4 km"
                      price="15 บาท"
                      vehicles={[
                        { icon: <FaBus />, label: 'รถเมล์ 2-34' },
                        { icon: <FaBus />, label: 'ปอ. 517' },
                      ]}
                    />
                  <RouteCard
                    id="bts-siam-ladkrabang-3"
                    from="BTS สยาม"
                    to="ลาดกระบัง"
                    time="1 ชั่วโมง 9 นาที"
                    duration="28.1 km"
                    price="33 บาท"
                    vehicles={[
                      { 
                        icon: <FaTrain />, 
                        label: 'BTS สยาม', 
                      },
                      { 
                        icon: <FaTrain />, 
                        label: 'พญาไท', 
                      },
                      { 
                        icon: <FaBus />, 
                        label: 'รถเมล์ 1-80E', 
                      },
                      { 
                        icon: <FaBus />, 
                        label: 'ปอ. 517', 
                        stops: ['พระโขนง', 'อ่อนนุช', 'ลาดกระบัง'] 
                      },
                    ]}
                  />

                    <RouteCard
                    id="bts-siam-ladkrabang-4"
                      from={from} to={to}
                      time="1 ชั่วโมง 30 นาที"
                      duration="30.8 km"
                      price="39 บาท (ไม่รวมค่าแท๊กซี่)"
                      vehicles={[
                        { icon: <FaBus />, label: 'ปอ. 2-46' },
                        { icon: <FaBus />, label: 'ต. 156' },
                        { icon: <FaTaxi />, label: 'แท๊กซี่' },
                      ]}
                    />
                  </>
                )}
                  {from === "สถานีลาดกระบัง" && to === "Bts พญาไทย" && (
                  <>
                    <RouteCard
                      id="ladkrabrang-payathai-1"
                      from={from} to={to}
                      time="1 ชั่วโมง 40 นาที"
                      duration="24.3 km"
                      price="65 บาท"
                      vehicles={[
                        { image: '/items/apl.png', label: 'Apl ลาดกระบัง' },
                      ]}
                    />
                    <RouteCard
                      id="ladkrabrang-payathai-2"
                      from={from} to={to}
                      time="1 ชั่วโมง 34 นาที"
                      duration="26.4 km"
                      price="15 บาท"
                      vehicles={[
                        { icon: <FaBus />, label: 'รถเมล์ 54 (549)' },
                        { icon: <FaBus />, label: 'ปอ. 517' },
                        { icon: <FaTrain />, label: 'BTS อนุสาวรีย์' },
                        { icon: <FaBus />, label: 'พญาไทย' },
                      ]}
                    />
                  <RouteCard
                    id="ladkrabrang-payathai-3"
                    from="BTS สยาม"
                    to="ลาดกระบัง"
                    time="1 ชั่วโมง 9 นาที"
                    duration="28.1 km"
                    price="33 บาท"
                    vehicles={[
                      { 
                        icon: <FaTrain />, 
                        label: 'BTS สยาม', 
                      },
                      { 
                        icon: <FaTrain />, 
                        label: 'พญาไท', 
                      },
                      { 
                        icon: <FaBus />, 
                        label: 'รถเมล์ 1-80E', 
                      },
                      { 
                        icon: <FaBus />, 
                        label: 'ปอ. 517', 
                        stops: ['พระโขนง', 'อ่อนนุช', 'ลาดกระบัง'] 
                      },
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
