import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { AiOutlineMenu } from "react-icons/ai";




const Navbar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src={logo} width={50} height={50} alt="logo" />
        <ul className="md:flex hidden gap-8 items-center">
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <li className="text-sky-900 text-[14px]  font-bold   cursor-pointer ">
            Home
          </li>
          <button className="bg-yellow-900 cursor-pointer text-white font-bold text-[12px] text-center px-2 py-2 rounded-3xl w-[100px]">
            SignUp
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
