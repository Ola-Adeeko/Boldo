import React from "react";
import TeamCard from "./TeamCard";
import Card1 from "../../../assets/images/img6.webp";
import Card2 from "../../../assets/images/img7.webp";
import Card3 from "../../../assets/images/img8.webp";

const OurTeam = () => {
  return (
    <div className="w-full bg-bgLight flex justify-between items-center py-24 sm:py-16 px-10 sm:px-4">
      <div className="max-w-[1000px] mx-auto  flex flex-col gap-5 justify-between items-center w-full ">
        <div className="max-w-[800px] mx-auto">
          <p className=" mb-0 leading-[32px] text-greyText text-[20px] md:text-[16px] sm:!text-[14px] font-sans font-normal ">
            Our Team
          </p>
          <h3 className="mb-0 mt-1 text-blackText text-[46px] md:text-[40px] sm:!text-[32px] font-manrope font-normal leading-[72px] md:leading-[62px] sm:!leading-[45px] ">
            The leadership team
          </h3>
          <p className="mb-0 mt-6 leading-[28px] text-greyText text-[20px]  md:text-[18px] sm:!text-[16px] font-sans font-normal   max-w-[750px]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>

        <div className="mt-10 w-full flex sm:flex-col sm:gap-10 flex-wrap items-center justify-between">
          <TeamCard
            name="Michael Scott"
            title="General Manager"
            displayImage={Card1}
          />

          <TeamCard
            name="Dwight Schrute"
            title="General Manager"
            displayImage={Card2}
          />

          <TeamCard
            name="Pam Beetsley"
            title="General Manager"
            displayImage={Card3}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
