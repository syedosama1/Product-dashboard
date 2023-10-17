import React from "react";
import abstract3DImage from "./../assets/abstract3D.jpg"; // Replace with the actual image path
import sarphens from "./../assets/head.png";

export const ProductSell = () => {
  return (
    <div className="w-full lg:w-[70%] bg-white rounded-lg shadow-gray-300 shadow-sm  h-[20rem] ">
      <p className="font-bold text-2xl text-[#1f2937]">Product Sell</p>
      <p className="text-base mt-5">Product Name</p>
      <div className="flex h-full">
        {/* Left Side: Display the abstract 3D image */}

        <div className="w-[10%] h-16 flex flex-col items-center space-y-2">
          <img
            src={abstract3DImage}
            alt="Abstract 3D"
            className="w-full h-full object-cover rounded-l-lg mt-5"
          />
          <img
            src={sarphens}
            alt="Sarphens-illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side: Text content */}
        <div className="w-[70%] p-4">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-bold text-[#1f2937]">Abstract 3D</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
          </div>
          {/* Additional text content can be added here */}
          <div className="flex justify-between mb-4 mt-9">
            <div>
              <p className="font-bold text-[#1f2937]">Sarphens illustration</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductSell;
