import React from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  children?: string;
  className?: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

const BdButton = ({
  type,
  children,
  className,
  size,
  onClick,
}: ButtonProps) => {
  const baseStyles = `group text-nowrap ${
    size === "small"
      ? "text-[13px] h-[30px] font-bold rounded-[16px] px-4 "
      : size === "medium"
      ? "text-[16px] font-bold h-[40px] rounded-[40px] px-8 border-[2px]"
      : size === "large"
      ? "text-[20px] font-bold h-[60px] rounded-[40px] px-10 border-[2px]"
      : ""
  } font-sans flex items-center justify-center  transition-all duration-200 ease-in-out ${className}`;

  const typeStyles = (type: ButtonProps["type"]) => {
    switch (type) {
      case "primary":
        return "bg-bgLight border-bgLight text-darkText hover:opacity-90";
      case "secondary":
        return "bg-bgGreen border-bgGreen text-darkText hover:opacity-90";
      default:
        return "";
    }
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${typeStyles(type)}`}>
      {children}
    </button>
  );
};

export default BdButton;
