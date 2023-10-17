import React from "react";
import { TbDashboard } from "react-icons/tb";
import { NavListData } from "../../data";
import { NavItem } from "../NavItem";

const SideBard = () => {
  return (
    <div className="lg:flex lg:flex-col lg:w-60 bg-sky-950 hidden">
      <div className="flex items-center mx-4 my-4">
        <TbDashboard size={30} color="#33D69E" />
        <span className="font-bold text-white text-xl ml-1">Dashboard</span>
      </div>

      <div>
        <ul className="mb-8 mt-4 ml-8">
          {NavListData.map((item) => {
            return (
              <NavItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                path={item.path}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBard;
