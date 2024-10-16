import React from "react";
import card1 from "../../../assets/images/img1.webp";
import card2 from "../../../assets/images/img2.webp";
import card3 from "../../../assets/images/img3.webp";
import card4 from "../../../assets/images/img4.webp";
import card5 from "../../../assets/images/img5.webp";

const PictureGrid = () => {
  return (
    <div className="w-full h-[630px] md:h-[450px] sm:!h-[300px] flex justify-between  -mt-[200px] md:-mt-[150px] sm:!-mt-[100px] mb-24 sm:mb-14">
      <div className="flex flex-col justify-between w-[calc(30%-25px)] md:w-[calc(30%-15px)] sm:!w-[calc(30%-5px)]">
        <figure className="h-[calc(50%-25px)] md:h-[calc(50%-15px)] sm:!h-[calc(50%-5px)] w-full rounded-[24px] overflow-hidden">
          <img src={card1} alt="card" className="h-full w-full object-cover" />
        </figure>
        <figure className="h-[calc(50%-25px)] md:h-[calc(50%-15px)] sm:!h-[calc(50%-5px)] w-full rounded-[24px] overflow-hidden">
          <img src={card2} alt="card" className="h-full w-full object-cover" />
        </figure>
      </div>

      <div className="w-[calc(40%-50px)] md:w-[calc(40%-30px)] sm:!w-[calc(40%-10px)]">
        <figure className="h-full w-full rounded-[24px] overflow-hidden">
          <img src={card3} alt="card" className="h-full w-full object-cover" />
        </figure>
      </div>

      <div className="flex flex-col justify-between w-[calc(30%-25px)] md:w-[calc(30%-15px)] sm:!w-[calc(30%-5px)]">
        <figure className="h-[calc(50%-25px)] md:h-[calc(50%-15px)] sm:!h-[calc(50%-5px)] w-full rounded-[24px] overflow-hidden">
          <img src={card4} alt="card" className="h-full w-full object-cover" />
        </figure>
        <figure className="h-[calc(50%-25px)] md:h-[calc(50%-15px)] sm:!h-[calc(50%-5px)] w-full rounded-[24px] overflow-hidden">
          <img src={card5} alt="card" className="h-full w-full object-cover" />
        </figure>
      </div>
    </div>
  );
};

export default PictureGrid;
