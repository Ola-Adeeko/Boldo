import React from "react";

const Hero = () => {
  return (
    <div className="h-[615px] w-full bg-bgDark flex justify-between items-center px-10 sm:px-4 ">
      <div className="max-w-[1000px] mx-auto  flex flex-col gap-5 justify-between items-center w-full ">
        <p className=" mb-0 leading-[32px] text-lightText2 text-[20px] md:text-[16px] sm:!text-[14px] font-sans font-normal ">
          About
        </p>
        <h3 className="mb-0 text-lightText text-[64px] md:text-[60px] sm:!text-[50px] font-manrope font-normal leading-[84px] md:leading-[74px] sm:!leading-[60px] text-center max-w-[780px]">
          We love to make great things, things that matter.
        </h3>
        <p className="mb-0 leading-[28px] text-lightText text-[16px] sm:text-[14px] font-sans font-normal text-center  max-w-[650px]">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
      </div>
    </div>
  );
};

export default Hero;
