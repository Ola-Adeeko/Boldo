import React from "react";
import BdButton from "../../BdButton";

const ContactForm = () => {
  return (
    <form className="footer-form w-full relative isolate overflow-hidden bg-bgDark rounded-[12px] py-14 sm:py-8 px-6 sm:px-2 flex flex-col gap-10 items-center justify-center">
      <p className=" mb-0 leading-[72px] md:leading-[62px] sm:!leading-[45px] text-lightText text-[46px] md:text-[40px] sm:!text-[32px] font-manrope font-normal max-w-[716px] mx-auto text-center ">
        An enterprise template to ramp up your company website
      </p>
      <div className="flex sm:flex-col gap-8  items-center">
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          className="footer-input bg-bgLight border-[2px] border-bgLight my-1 outline-none  py-3 w-full px-10 rounded-[40px] text-[20px] font-sans font-medium"
        />
        <BdButton type="secondary" size="large">
          start now
        </BdButton>
      </div>
    </form>
  );
};

export default ContactForm;
