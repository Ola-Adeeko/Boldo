import React from "react";

interface Props {
  body: string;
  title: string;
  displayImage: string;
}

const ValuesCard = ({ title, body, displayImage }: Props) => {
  return (
    <div className="w-full flex sm:flex-col gap-12 sm:gap-4">
      <figure className="rounded-[24px] w-[150px] h-[151px] overflow-hidden">
        <img
          src={displayImage}
          alt="values card"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="flex-1">
        <h4 className="mb-0  text-lightText text-[28px] md:text-[22px] font-manrope font-normal leading-[48px] md:leading-[42px]">
          {title}
        </h4>
        <p className="mb-0 mt-2 text-lightText2 text-[20px] md:text-[16px] font-sans font-normal leading-[32px]">
          {body}
        </p>
      </div>
    </div>
  );
};

export default ValuesCard;
