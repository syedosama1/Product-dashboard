import React from "react";
import {AiOutlineSearch, AiOutlineDown } from "react-icons/ai";

export const TotalNewCustomer = () => {
  return (
    <div className="w-full lg:w-[28%] bg-white rounded-lg p-4 lg:p-4  shadow-gray-300 shadow-sm h-[15rem]">
    <div className="lg:flex lg:items-center font-bold hidden justify-between">
  <div className="flex items-center">
    <AiOutlineSearch size={20} />
    <p className="ml-2 font-bold">Search</p>
  </div>
  <p className="flex items-center">
    Last 30 days <AiOutlineDown className="text-[#b2b7c5]" />
  </p>
</div>

      <div className="text-[#b2b7c5] ">
        <div className="flex justify-between mb-4 mt-2 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-6 items-center">Stock</li>
          <p className="font-medium">Price</p>
          <p className="font-medium">Total Sales</p>
        </div>

        <div className="flex justify-between mb-5 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-2 items-center">32 in Stock</li>
          <p className="text-black font-semibold mr-16">$44.99</p>
          <p className="text-black font-semibold">20</p>
        </div>

        <div className="flex justify-between mb-5 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-2 items-center">32 in Stock</li>
          <p className="text-black font-semibold mr-16">$44.99</p>
          <p className="text-black font-semibold">20</p>{" "}
        </div>
      </div>
    </div>
  );
};
