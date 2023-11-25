import { SVGProps } from "react";
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Category = ({ size = 24, color, className }: Props) => {
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
        d="M16.2858 2H19.5524C20.9039 2 22.0003 3.1059 22.0003 4.47018V7.7641C22.0003 9.12735 20.9039 10.2343 19.5524 10.2343H16.2858C14.9333 10.2343 13.8369 9.12735 13.8369 7.7641V4.47018C13.8369 3.1059 14.9333 2 16.2858 2Z"
        stroke={color ? color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z"
        stroke={color ? color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.44892 13.7656H7.71449C9.06703 13.7656 10.1634 14.8715 10.1634 16.2368V19.5297C10.1634 20.894 9.06703 21.9999 7.71449 21.9999H4.44892C3.09638 21.9999 2 20.894 2 19.5297V16.2368C2 14.8715 3.09638 13.7656 4.44892 13.7656Z"
        stroke={color ? color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.2858 13.7656H19.5524C20.9039 13.7656 22.0003 14.8715 22.0003 16.2368V19.5297C22.0003 20.894 20.9039 21.9999 19.5524 21.9999H16.2858C14.9333 21.9999 13.8369 20.894 13.8369 19.5297V16.2368C13.8369 14.8715 14.9333 13.7656 16.2858 13.7656Z"
        stroke={color ?  color : "#200E32"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
