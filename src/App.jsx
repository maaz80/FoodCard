import React, { useState } from "react";
import mocha from './images/mocha.jpg'
import mocha2 from './images/mocha2.jpg'
import stars from './images/stars.png'
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";

export default function MochaCard() {
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen poppins-regular">
      <div className="flex border-t border-b border-dashed border-gray-400 overflow-hidden  max-w-lg">
      {/* Left Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <span className="text-green-600 bg-gradient-to-r from-white to-green-200 rounded-md px-1 text-sm font-medium flex items-center justify-center gap-2"><FaAnglesRight />18 mins</span>
        </div>

        <h2 className="text-lg font-semibold">Mocha</h2>
        <div className="flex items-center justify-center w-20 ml-2">
        <img src={stars} alt="stars" className="w-full  object-cover mb-2" />
        <span className="text-xs -mt-1">(9)</span>
        </div>
        <p className="text-base font-semibold mb-1">₹255
        </p>
        <p className="text-gray-600 text-sm leading-tight mb-2">
         Rich flavour of bold espresso smoothly blended with streamed milk.
         {!showFullText1 && <span onClick={() => setShowFullText1(true)} className="text-gray-400 font-medium cursor-pointer">more</span>}
         {showFullText1 && <span> with a perfect balance of coffee and milk.</span>}
        </p>

        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-black border rounded-full p-2">
          <IoBookmarkOutline size={16} />
          </button>
          <button className="text-gray-500 hover:text-black border rounded-full p-2">
          <TiArrowForwardOutline size={16} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-60 flex-shrink-0 p-3">
        <img
          src={mocha2}
          alt="Mocha"
          className="rounded-xl object-cover w-full h-44"
        />
        <button className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-white border border-red-400 text-red-500 hover:bg-red-500 hover:text-white font-bold w-[55%] h-[16%] rounded-md text-sm">
          ADD +
        </button>
        <p className="text-center text-gray-400 text-xs mt-6">customisable</p>
      </div>
    </div>


      <div className="flex border-t border-b border-dashed border-gray-400 overflow-hidden  max-w-lg">
      {/* Left Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
          </div>
          <span className="text-green-600 bg-gradient-to-r from-white to-green-200 rounded-md px-1 text-sm font-medium flex items-center justify-center gap-2"><FaAnglesRight />15 mins</span>
        </div>

        <h2 className="text-lg font-semibold">Mocha</h2>
        <p className="text-base font-semibold mb-1">₹285
        </p>
        <p className="text-gray-600 text-sm leading-tight mb-2">
          An expert blend of chocolate milk and our Espresso for a caffeinated choc...
          {!showFullText2 && <span onClick={() => setShowFullText2(true)} className="text-gray-400 font-medium cursor-pointer">more</span>}
          {showFullText2 && <span>olate experience of both your coffee and chocolate cravings.</span>}
        </p>

        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-black border rounded-full p-2">
          <IoBookmarkOutline size={16} />
          </button>
          <button className="text-gray-500 hover:text-black border rounded-full p-2">
          <TiArrowForwardOutline size={16} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-60 flex-shrink-0 p-3">
        <img
          src={mocha}
          alt="Mocha"
          className="rounded-xl object-cover w-full h-44"
        />
       <button className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-white border border-red-400 text-red-500 hover:bg-red-500 hover:text-white font-bold w-[55%] h-[16%] rounded-md text-sm">
          ADD +
        </button>
        <p className="text-center text-gray-400 text-xs mt-6">customisable</p>
      </div>
    </div>
    </div>
  );
}