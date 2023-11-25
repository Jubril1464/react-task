import { ReactNode } from "react";

type ButtonProps = {
  className?: String;
  children: ReactNode | string;
  size?: String;
  bgColor?: String;
  variant: "full" | "outline";
  rounded?: string
};
export const Button = ({
  className,
  children,
  size,
  bgColor,
  variant,
  rounded ="rounded-[8px]"
}: ButtonProps) => {
  return (
    <button
      className={`${className ? className : ""}  ${
        variant === "full"
          ? "bg-gradient-to-r from-primarySlateBlack to-secondarySlateBlack text-white border-0"
          : "border-[0.3px] border-[#1D2939] text-[#1D2939]"
      } outline-0 py-[4px] ${rounded}  font-roboto flex justify-center gap-2 items-center    ${
        size === "sm"
          ? "px-4 h-[35px]"
          : size === "lg"
          ? "px-8 h-[54px]"
          : "px-6 h-[38px]"
      }   `}
    >
      {children}
    </button>
  );
};
