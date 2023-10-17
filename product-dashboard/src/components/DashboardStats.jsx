import React from "react";
import { FaCommentDollar } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import {FiArrowUp} from "react-icons/fi"

const DashboardStats = () => {
  return (
    <div className="flex gap-6 w-[100%]  flex-col lg:flex-row flex-wrap">
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <FaCommentDollar
            size={70}
            className="text-blue-500 bg-green-300 rounded-full p-2 "
          />
        </div>
        <div>
          <p>Earning</p>
          <strong>$198k</strong>
        
          <p className="text-green-600"> <FiArrowUp/>  37.8% this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <AiOutlineProfile
            size={70}
            className="text-red-500 bg-red-100 rounded-full p-2 "
          />
        </div>
        <div>
          <p>Orders</p>
          <strong> $2.4k</strong>
          <p className="text-red-700"> <BiSolidDownArrowAlt /> 2% this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold ">
          ...
        </span>
        <div>
          <MdAccountBalanceWallet
            size={70}
            className="text-green-500 bg-green-100 rounded-full p-2"
          />
        </div>
        <div>
        <p>Balance</p>
          <strong>$2.4k</strong>
          <p className="text-red-500"> <BiSolidDownArrowAlt /> 2% this month</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <FcSalesPerformance
            size={70}
            className="text-purple-500 bg-purple-100 rounded-full p-2 "
          />
        </div>
        <div>
        <p>Total sales</p>
          <strong>$89k</strong>
          <p className="text-green-500"> <FiArrowUp />11% this month</p>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStats;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 border-gray-200 flex items-center gap-4 relative shadow-gray-300 shadow-sm">
      {children}
    </div>
  );
};
