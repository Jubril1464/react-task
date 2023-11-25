import { ReactNode } from "react";
import { Search } from "../../assets/svgs/search";
import { TfiAngleDown } from "react-icons/tfi";
type SearchBar = {
  placeholder?: string;
  className?: string;
  hasArrow?: boolean;
  icon?: ReactNode;
  inputType?: string;
};
const SearchBar = ({
  placeholder,
  className,
  hasArrow,
  icon,
  inputType = "text",
}: SearchBar) => {
  return (
    <div
      className={`${className} border-[1px] rounded-xl p-3.5 flex justify-between gap-4 items-center`}
    >
      {icon ? icon : <Search />}

      <input
        type={inputType}
        className="border-none focus:outline-0 bg-transparent placeholder:font-groteska-regular w-full placeholder:font-base"
        placeholder={placeholder}
      />
      {hasArrow && <TfiAngleDown />}
    </div>
  );
};
export default SearchBar;
