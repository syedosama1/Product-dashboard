import React from "react";
import {RiDashboard2Line} from "react-icons/ri"
import {TbHelpSquareRounded} from "react-icons/tb"
import {  MdIncompleteCircle } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";

export const NavListData = [
  { id: 1, title: "Dashboard", icon: <RiDashboard2Line />, path: "/dashboard" },
  { id: 2, title: "Product", icon: <FaProductHunt />, path: "/" },
  { id: 3, title: "Customers", icon: <AiFillCustomerService />, path: "/customer" },
  { id: 4, title: "Income", icon: <MdIncompleteCircle />, path: "/department" },
  { id: 5, title: "Promote", icon: <GiDoctorFace />, path: "/promote" },
  { id: 6, title: "Helps", icon: <TbHelpSquareRounded />, path: "/help" },
];
