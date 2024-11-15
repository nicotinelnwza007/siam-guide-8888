import React, { useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  from: string;
  to: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
}

const Hero: React.FC<HeroProps> = ({ from, to, setFrom, setTo }) => {
  const [isFromDropdownVisible, setFromDropdownVisible] = useState(false);
  const [isToDropdownVisible, setToDropdownVisible] = useState(false);

  const searchHistory = ["สถานี BTS สยาม", "ลาดกระบัง", "ไปรษณีย์ลาดกระบัง"];

  const handleSelectHistoryItem = (item: string, isFromField: boolean) => {
    if (isFromField) {
      setFrom(item);
      setFromDropdownVisible(false);
    } else {
      setTo(item);
      setToDropdownVisible(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto z-50">
      <h1 className='p-4 text-center text-[20px] font-bold text-white'>ไปไหนดี ?</h1>
      <div className="flex gap-4 items-start justify-center mx-auto">
        <div className="flex relative flex-col gap-4 items-start">
          {/* From Input Field */}
          <div className="relative w-full">
            <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2">
              <Image src="/items/circle.svg" width={20} height={20} alt="" />
            </div>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setFromDropdownVisible(true)}
              onBlur={() => setFromDropdownVisible(false)}
              className="w-full h-[41px] border-2 border-[#D0B473] focus:shadow-[#ad9761] focus:outline-none text-white bg-transparent placeholder:text-[#D9D9D9] rounded-md pl-2 hover:shadow-lg hover:shadow-[#ad9761]"
              placeholder="จาก"
            />
            {isFromDropdownVisible && (
              <div className="absolute z-50 top-[42px] left-0 w-full bg-[#D0B473] text-white rounded-md p-2 shadow-lg">
                <p className="text-xs text-gray-200 mb-1">ค้นหาล่าสุด</p>
                {searchHistory.map((item, index) => (
                  <div
                    key={index}
                    onMouseDown={() => handleSelectHistoryItem(item, true)}
                    className="cursor-pointer flex items-center gap-2 p-1 hover:bg-[#ad9761] rounded-md"
                  >
                    <Image src="/items/location.svg" width={14} height={14} alt="" />
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col absolute top-10 left-[-22px] items-center space-y-1">
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>

          <div className="relative w-full ">
            <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2">
              <Image src="/items/location.svg" width={20} height={20} alt="" />
            </div>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={() => setToDropdownVisible(true)}
              onBlur={() => setToDropdownVisible(false)}
              className="w-full h-[41px] border-2 border-[#D0B473] focus:shadow-[#ad9761] focus:outline-none text-white bg-transparent placeholder:text-[#D9D9D9] rounded-md pl-2 hover:shadow-lg hover:shadow-[#ad9761]"
              placeholder="ถึง"
            />
            {isToDropdownVisible && (
              <div className="absolute top-[42px] left-0 w-full bg-[#D0B473] text-white rounded-md p-2 shadow-lg">
                <p className="text-xs text-gray-200 mb-1">ค้นหาล่าสุด</p>
                {searchHistory.map((item, index) => (
                  <div
                    key={index}
                    onMouseDown={() => handleSelectHistoryItem(item, false)}
                    className="cursor-pointer flex items-center gap-2 p-1 hover:bg-[#ad9761] rounded-md"
                  >
                    <Image src="/items/location.svg" width={14} height={14} alt="" />
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
