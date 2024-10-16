import React from "react";
import ContactForm from "./component/ContactForm";
import logo from "../../assets/icons/logo-black.svg";
import BdButton from "../BdButton";

const Footer = () => {
  return (
    <footer className="bg-bgLight w-full py-24 sm:py-16 px-10  md:px-6 sm:!px-4">
      <div className="max-w-[1200px] mx-auto w-full ">
        <ContactForm />
        <div className="flex sm:flex-col gap-20 md:gap-10 mt-[160px] sm:mt-[80px] mb-10">
          <div className="max-w-[300px] md:max-w-[200px] sm:!max-w-full flex flex-col gap-9">
            <img
              src={logo}
              alt="logo"
              className="h-[41px] mr-auto"
              loading="lazy"
            />
            <p className="mb-0 text-greyText text-[16px] font-sans font-normal leading-[28px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="mb-0 text-greyText text-[16px] font-sans font-normal leading-[28px]">
              All rights reserved
            </p>
          </div>
          <div className="flex-1 flex  justify-evenly  md:justify-center sm:!justify-between  md:gap-10  sm:!gap-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-blackText text-[20px] md:text-[16px] font-sans font-bold leading-[32px]">
                Landings
              </h3>
              <div className="text-greyText text-[20px] md:text-[16px] font-sans font-normal leading-[32px] flex flex-col gap-6">
                <p>Home</p>
                <p>Product</p>
                <p>Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-blackText text-[20px] md:text-[16px] font-sans font-bold leading-[32px]">
                Company
              </h3>
              <div className="text-greyText text-[20px] md:text-[16px] font-sans font-normal leading-[32px] flex flex-col gap-6">
                <p>Home</p>
                <div className="flex relative md:gap-[10px]">
                  <p>Career</p>
                  <BdButton
                    size="small"
                    type="secondary"
                    className="absolute md:relative top-1 right-[-50px] md:right-0"
                  >
                    Hiring!
                  </BdButton>
                </div>

                <p>Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-blackText text-[20px] md:text-[16px] font-sans font-bold leading-[32px]">
                Resources
              </h3>
              <div className="text-greyText text-[20px] md:text-[16px] font-sans font-normal leading-[32px] flex flex-col gap-6 ">
                <p>Blog</p>
                <p>Product</p>
                <p>Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
