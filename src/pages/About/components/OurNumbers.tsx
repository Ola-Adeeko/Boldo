import React from "react";
import CountUp from "react-countup";

const OurNumbers = () => {
  return (
    <div className="w-full bg-bgDark flex justify-between items-center py-24 sm:py-16 px-10 sm:px-4">
      <div className="max-w-[1000px] mx-auto  flex flex-col gap-5 justify-between items-center w-full ">
        <p className=" mb-0 leading-[32px] text-lightText2 text-[20px] md:text-[16px] sm:!text-[14px]  font-sans font-normal ">
          Our Numbers
        </p>
        <h3 className="mb-0 text-lightText text-[46px] md:text-[40px] sm:!text-[32px]  font-manrope font-normal leading-[72px] md:leading-[62px] sm:!leading-[45px] text-center max-w-[820px]">
          Handshake infographic mass market crowdfunding iteration.{" "}
        </h3>
        <div className="mt-10 sm:mt-4 w-full flex sm:flex-col sm:gap-8 items-center justify-between">
          <div>
            <p className="text-[92px] md:text-[60px] text-greenText font-manrope font-normal leading-[56px] sm:text-center">
              <CountUp start={0} end={120} duration={3} suffix="m" />
            </p>
            <p className="mt-5 sm:mt-2 text-[22px] md:text-[18px] text-lightText2 font-sans font-normal leading-[36px] sm:text-center">
              Cool feature title
            </p>
          </div>
          <div>
            <p className="text-[92px] md:text-[60px] text-greenText font-manrope font-normal leading-[56px] sm:text-center">
              <CountUp
                start={0}
                end={10}
                duration={3}
                decimal="000"
                suffix=""
              />
            </p>
            <p className="mt-5 sm:mt-2 text-[22px] md:text-[18px] text-lightText2 font-sans font-normal leading-[36px] sm:text-center">
              Cool feature title
            </p>
          </div>
          <div>
            <p className="text-[92px] md:text-[60px] text-greenText font-manrope font-normal leading-[56px] sm:text-center">
              <CountUp start={0} end={240} duration={3} suffix="" />
            </p>
            <p className="mt-5 sm:mt-2 text-[22px] md:text-[18px] text-lightText2 font-sans font-normal leading-[36px] sm:text-center">
              Cool feature title
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
