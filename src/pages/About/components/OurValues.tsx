import React from "react";

import Card1 from "../../../assets/images/img2.webp";
import Card2 from "../../../assets/images/img4.webp";
import Card3 from "../../../assets/images/img9.webp";
import ValuesCard from "./ValuesCard";

const OurValues = () => {
  return (
    <div className="w-full bg-bgDark flex justify-between items-center py-24 sm:py-16 px-10 sm:px-4">
      <div className="max-w-[800px] mx-auto  flex flex-col gap-5 justify-between items-center w-full ">
        <div className="w-full">
          <p className=" mb-0 leading-[32px] text-lightText text-[20px] md:text-[16px]  sm:!text-[14px] font-sans font-normal ">
            Our Values
          </p>
          <h3 className="mb-0 mt-1 text-lightText text-[46px] md:text-[40px] sm:!text-[32px]  font-manrope font-normal leading-[72px] md:leading-[62px] sm:!leading-[45px]">
            Things we believe in.
          </h3>
          <p className="mb-0 mt-6 leading-[28px] text-lightText2 text-[20px] md:text-[18px] sm:!text-[16px] font-sans font-normal   max-w-[750px]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>

        <div className="mt-14 sm:mt-10 w-full flex flex-col gap-16 items-center justify-between">
          <ValuesCard
            title="We are committed."
            body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            displayImage={Card1}
          />
          <ValuesCard
            title="We are responsible."
            body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            displayImage={Card2}
          />
          <ValuesCard
            title="We aim for progress."
            body="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            displayImage={Card3}
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
