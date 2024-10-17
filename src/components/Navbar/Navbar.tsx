import React, { useState } from "react";
import Logo from "../../assets/icons/Logo-white.svg";
import BdButton from "../BdButton";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute w-full top-0 left-0 z-50 bg-transparent mt-7">
      <div className="flex justify-between items-center py-4 px-8 h-[70px] max-w-[1200px] mx-auto">
        <div>
          <img
            className="w-full max-w-[150px] min-w-[100px] sm:max-w-[100px]"
            src={Logo}
            alt="logo"
          />
        </div>

        <div className="flex md:hidden flex-1 justify-end items-center gap-[20px]">
          <Link
            to=""
            className="text-[16px] px-6 py-2 rounded-[28px] text-white font-sans font-medium hover:bg-bgGreen hover:text-darkText transition-all"
          >
            Product
          </Link>
          <Link
            to=""
            className="text-[16px] px-6 py-2 rounded-[28px] text-white font-sans font-medium hover:bg-bgGreen hover:text-darkText transition-all"
          >
            Services
          </Link>
          <Link
            to=""
            className="text-[16px] px-6 py-2 rounded-[28px] text-white font-sans font-medium hover:bg-bgGreen hover:text-darkText transition-all"
          >
            About
          </Link>
          <BdButton size="medium" type="primary">
            Log In
          </BdButton>
        </div>

        <div
          className="hidden md:flex items-center cursor-pointer text-white text-3xl"
          onClick={toggleMenu}
        >
          <RiMenu5Fill />
        </div>
      </div>

      <div
        className={`hidden md:flex fixed top-0 left-0 w-full h-[50%] bg-[#1C3D5B] z-40  flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="hidden md:flex absolute top-10 right-8 items-center cursor-pointer text-white text-3xl"
          onClick={toggleMenu}
        >
          <IoCloseCircleOutline />
        </div>
        <ul className="flex flex-col gap-4 text-center">
          <li
            onClick={onClose}
            className="text-white hover:bg-bgGreen hover:text-darkText transition-all w-[200px] rounded-[34px] py-2"
          >
            <Link to="">Product</Link>
          </li>
          <li
            onClick={onClose}
            className="text-white hover:bg-bgGreen hover:text-darkText transition-all w-[200px] rounded-[34px] py-2"
          >
            <Link to="">Services</Link>
          </li>
          <li
            onClick={onClose}
            className="text-white hover:bg-bgGreen hover:text-darkText transition-all w-[200px] rounded-[34px] py-2"
          >
            <Link to="">About</Link>
          </li>
          <BdButton size="medium" type="primary" className="mt-4 w-[200px]">
            Log In
          </BdButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
