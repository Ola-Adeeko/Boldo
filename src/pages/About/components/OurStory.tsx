import React from "react";
import PictureGrid from "./PictureGrid";

const OurStory = () => {
  return (
    <div className="w-full bg-bgLight flex justify-between items-center py-24 sm:py-16 px-10 sm:px-4">
      <div className="max-w-[1100px] mx-auto  flex flex-col gap-5 justify-between items-center w-full ">
        <PictureGrid />
        <div className="max-w-[800px] mx-auto">
          <p className=" mb-0 leading-[32px] text-greyText text-[20px] md:text-[16px] sm:!text-[14px] font-sans font-normal ">
            Our Story
          </p>
          <h3 className="mb-0 mt-1 text-blackText text-[46px] md:text-[40px] sm:!text-[32px] font-manrope font-normal leading-[72px] md:leading-[62px] sm:!leading-[45px]">
            Handshake infographic mass market crowdfunding iteration.
          </h3>
          <p className="mb-0 mt-6 leading-[28px]  text-greyText text-[20px] md:text-[18px] sm:!text-[16px] font-sans font-normal w-full">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
