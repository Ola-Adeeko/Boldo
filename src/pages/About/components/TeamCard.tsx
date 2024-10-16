import React from "react";

interface Props {
  name: string;
  title: string;
  displayImage: string;
}

const TeamCard = ({ name, title, displayImage }: Props) => {
  return (
    <div className="w-[30%] sm:w-full bg-bgLight">
      <figure className="rounded-[24px] w-full h-[354px] md:h-[250px] overflow-hidden">
        <img
          src={displayImage}
          alt="team card"
          className="h-full w-full object-cover sm:object-top"
          loading="lazy"
        />
      </figure>

      <h4 className="mb-0 mt-4  text-blackText text-[28px] md:text-[22px] font-manrope font-normal leading-[48px] sm:leading-[32px]">
        {name}
      </h4>
      <p className="mb-0 text-greyText text-[20px] md:text-[16px] font-sans font-normal leading-[32px]">
        {title}
      </p>
    </div>
  );
};

export default TeamCard;
