import utility from "../../../utils/utility";

import { Heart } from "../../../assets/svgs/heart";

import SearchBar from "../../../components/search";
import { CiBellOn, CiLocationOn, CiUser } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { MdChecklist } from "react-icons/md";
import { Button } from "../../../components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data, best } from "../../../utils/data";
import "swiper/css";
import SideBar from "../../../components/sidebar";
const Dashboard: React.FC = () => {
  return (
    <div className="grid 2xl:grid-cols-7 h-screen grid-cols-1">
      <SideBar />
      <div className=" bg-[#f3f4f6] p-4 overflow-y-auto col-span-6">
        <div className="flex justify-between p-4 bg-[#fff] rounded-3xl items-center">
          <SearchBar placeholder="Search any things..." className="w-[30rem]" />
          <div className="flex gap-2 items-end gap-6">
            <span className="inline-block font-roboto font-medium text-gray-500">
              Saturday, may 3, 2033
            </span>
            <div className="w-[30px] h-[30px] border border-gray-300 rounded-xl flex justify-center items-center relative">
              <CiBellOn size={24} color="#6b7280" />
              <span className="h-[1rem] w-[1rem] text-[11px] bg-[red] text-white rounded-full absolute -top-2 -left-2 flex justify-center items-center">
                3
              </span>
            </div>
          </div>
        </div>
        <div className="hero h-[12rem] rounded-3xl mt-10"></div>
        <div className="w-4/5 bg-white rounded-3xl h-[6rem] mx-auto -mt-6 flex items-center justify-between gap-6 p-6 ">
          <SearchBar
            hasArrow
            className="h-[4rem] border-none"
            placeholder="Where are you going?"
            icon={<CiLocationOn color="#6b7280" size={22} />}
          />
          <div className="h-full w-[1px] bg-gray-400"></div>
          <SearchBar
            hasArrow
            className="h-[4rem] border-none"
            placeholder="Check-in-Date"
            icon={<MdChecklist color="#6b7280" size={22} />}
          />
          <div className="h-full w-[1px] bg-gray-400"></div>
          <SearchBar
            hasArrow
            className="h-[4rem] border-none"
            placeholder="Check-in-Date"
            icon={<CiUser color="#6b7280" size={22} />}
          />
          <Button variant="full" size="lg" rounded="rounded-[18px]">
            Search
          </Button>
        </div>
        <div className="mt-10">
          <h2 className="text-gray-600 font-roboto text-xl -mb-12">
            Trending destinations
          </h2>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {data.map((list: any) => (
              <SwiperSlide className="grid grid-cols-3 gap-2" key={list.id}>
                <div className="h-[7rem] w-[7rem] rounded-3xl">
                  <img
                    src={list.img}
                    alt=""
                    className="h-full w-full rounded-3xl"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <div className="flex gap-6 items-center">
                    <h3 className="font-roboto text-lg font-bold text-secondarySlateBlack">
                      {list.name}
                    </h3>
                    <span className="flex items-center gap-2">
                      <AiFillStar color="#fcd34d" /> {list.rating}
                    </span>
                  </div>
                  <p className="text-gray-400">{list.about}</p>
                  <p className="font-roboto font-bold text-gray-500">
                    {list.price},00
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h2 className="text-gray-600 font-roboto text-xl">Best Offers</h2>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {best.map((item: any) => (
              <div
                className="bg-white rounded-3xl p-6 flex flex-col gap-4"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[10rem] rounded-3xl"
                />
                <h2 className="font-roboto text-lg text-gray-500">
                  {item.name}
                </h2>
                <span className="inline-block text-[#6b7280] font-roboto flex items-center">
                  <CiLocationOn color="#6b7280" size={22} /> {item.location}
                </span>
                <div className="flex justify-between items-center">
                  <h2 className="font-roboto font-bold text-gray-500">
                    {item.price}{" "}
                    <span className="font-roboto text-gray-400 font-light"> / night</span>
                  </h2>
                  <div className="h-[30px] w-[30px] flex justify-center items-center border  border-gray-300 rounded-xl">
                    <Heart color="#6b7280" size={18}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default utility.routeData("/", <Dashboard />, "dashboard");
