
import Profile from "../../assets/img/profile.webp";
import { EditOutline } from "../../assets/svgs/edit-outine";
import { Home } from "../../assets/svgs/home";
import { Category } from "../../assets/svgs/category";
import { Message } from "../../assets/svgs/message";
import { Heart } from "../../assets/svgs/heart";
import { Settings } from "../../assets/svgs/setting";
import { ArrowRightCircle } from "../../assets/svgs/arrow-right-circle";
import { NavLink } from "react-router-dom";
import { HomeBold } from "../../assets/svgs/home-bold";

const SideBar = ({className}:any) => {
    return (
        <div className={`h-screen shadow 2xl:flex justify-between flex-col items-center py-6  ${className} hidden` }>
        <div className="text-center pt-10">
          <h1 className="text-primaryBlack font-roboto font-bold text-[25px]">
            Mima<span className="text-gray-500">Booking</span>
          </h1>
          <div className="relative mt-6 flex justify-center">
            <div className="h-[6rem] w-[6rem] rounded-full border border-gray-500 flex justify-center items-center p-[4px] bg-[#f3f4f6] ">
              <img
                src={Profile}
                alt=""
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 p-2 bg-primaryBlack rounded-full">
              <EditOutline color="#fff" size={20} />
            </div>
          </div>
          <h2 className="text-gray-500 font-roboto font-medium mt-10 text-xl">
            ilia jan
          </h2>
        </div>
        <div className="flex flex-col gap-6 font-roboto ">
          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={`flex gap-4 items-center text-xl ${
                  isActive ? "text-gray-950" : "text-gray-500 text-lg "
                } `}
              >
                <span>
                  {isActive ? (
                    <HomeBold color="#475467" />
                  ) : (
                    <Home color="#475467" />
                  )}
                </span>
                Dashboard
              </div>
            )}
          </NavLink>

          <NavLink to="/category">
            {({ isActive }) => (
              <div
                className={`flex gap-4 items-center text-xl ${
                  isActive ? "text-gray-950" : "text-gray-500 text-lg"
                } `}
              >
                <span>
                  {isActive ? (
                    <Category color="#475467" />
                  ) : (
                    <Category color="#475467" />
                  )}
                </span>
                Catergory
              </div>
            )}
          </NavLink>
          <NavLink to="/message">
            {({ isActive }) => (
              <div
                className={`flex gap-4 items-center text-xl ${
                  isActive ? "text-gray-950" : "text-gray-500 text-lg"
                } `}
              >
                <span>
                  {isActive ? (
                    <Message color="#475467" />
                  ) : (
                    <Message color="#475467" />
                  )}
                </span>
                Ticket
              </div>
            )}
          </NavLink>
          <NavLink to="/favorite">
            {({ isActive }) => (
              <div
                className={`flex gap-4 items-center text-xl ${
                  isActive ? "text-gray-950" : "text-gray-500 text-lg"
                } `}
              >
                <span>
                  {isActive ? (
                    <Heart color="#475467" />
                  ) : (
                    <Heart color="#475467" />
                  )}
                </span>
                Favorite
              </div>
            )}
          </NavLink>
          <NavLink to="/settings">
            {({ isActive }) => (
              <div
                className={`flex gap-4 items-center text-xl ${
                  isActive ? "text-gray-950" : "text-gray-500 text-lg"
                } `}
              >
                <span>
                  {isActive ? (
                    <Settings color="#475467" />
                  ) : (
                    <Settings color="#475467" />
                  )}
                </span>
                Settings
              </div>
            )}
          </NavLink>
        </div>

        <ul className="mr-8">
          <li className="flex gap-4 items-center text-xl text-secondarySlateBlack">
            <ArrowRightCircle color="#475467" /> Logout
          </li>
        </ul>
      </div>
    )
}
export default SideBar