import utility from "../../../utils/utility";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { data } from "../../../utils/data";

const Shop: React.FC = () => {
  return (
    <div className="px-24">
      <header className="py-10">
        <h3 className="text-2xl font-semibold">Nale.ng</h3>
      </header>
      <div className="flex flex-col gap-5 mt-10 w-[55rem]">
        <h1 className="text-6xl font-semibold">Online Gift Shop</h1>
        <p className="text-[22px] font-normal text-slate-800">
          We collaborated with ERPNext since last year, this is the world's best
          free and open-source platform. it comes with 1000+ objects to help you
          run your business.
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        <button className="flex justify-center text-2xl items-center bg-[#f3f4f6] inline-block w-[11rem] h-[4rem] rounded-lg gap-2">
          <AiOutlinePlus size={25} /> Follow
        </button>
        <button className="flex justify-center text-2xl items-center bg-[#f3f4f6] inline-block px-8 h-[4rem] rounded-lg gap-2 bg-[#6366f1] text-white">
          <BsChatDots size={25} />
          Contact
        </button>
      </div>

      <div className="border-t border-slate-200 mt-10 py-10 grid grid-cols-5">
        <div>
          <ul className="text-2xl font-normal">
            <li className="text-slate-400 mb-5 cursor-pointer">Collections</li>
            <div className="w-[50px] h-[3px] bg-slate-300 mb-5"></div>
            <li className="text-slate-500 mb-10 cursor-pointer">
              Purification&nbsp;
              <span className="font-normal text-xl text-slate-400">95</span>
            </li>
            <div className="w-[50px] h-[2px] bg-slate-500 mb-3 hidden"></div>
            <li className="text-slate-500 cursor-pointer">
              Home&nbsp;
              <span className="font-normal text-xl text-slate-400">47</span>
            </li>
            <div className="w-[50px] h-[2px] bg-slate-500 mb-3 hidden"></div>
          </ul>
        </div>

        <div className="col-span-4 grid grid-cols-3 gap-5">
          {data.map((items: any, index: number) => (
            <div key={index}>
              <div className="bg-[#f9fafb] roundex-lg w-full relative overflow-hidden group">
                <img
                  src={items?.imageUrl}
                  alt="item-img"
                  className=" w-full h-auto transition-transform duration-300 transform-gpu group-hover:-translate-y-12 group-hover:scale-110"
                />
                <div className="flex justify-between py-4 bg-white absolute -bottom-10 left-0 w-full transition-bottom duration-300 transform-gpu hover:translate-y-0 group-hover:bottom-[1px] group-hover:shadow-md">
                  <button className="w-full text-xl border-r font-semibold">
                    Add to Cart
                  </button>
                  <button className="w-full text-xl font-semibold">View</button>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <h3 className="text-slate-500 text-2xl font-normal">
                  {items?.name}
                </h3>
                <h3 className="text-slate-500 text-2xl font-normal">
                  &#x20A6;{items?.priceInKobo / 100}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default utility.routeData("/", <Shop />, "shop");
