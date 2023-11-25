import { SVGProps } from "react";
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const ArrowRightCircle = ({ size = 24, color, className }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.25C17.108 21.25 21.25 17.109 21.25 12C21.25 6.892 17.108 2.75 12 2.75C6.892 2.75 2.75 6.892 2.75 12C2.75 17.109 6.892 21.25 12 21.25Z"
        stroke={color ? color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5576 15.4712L14.0436 12.0002L10.5576 8.52919"
        stroke={color ? color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
