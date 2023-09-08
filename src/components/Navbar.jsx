import { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ headlineOpen }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar  ${
        headlineOpen ? "mt-10" : "mt-0"
      } `}
    >
      <img
        src="https://static.wixstatic.com/media/d00286_2bdfa4e5400a4bbca44b7d5d50e22d9c~mv2.png/v1/fill/w_189,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Soulside_Logo_2_T.png"
        alt="soulside"
        className="w-auto h-[32px]"
      />

      <div className="flex-1 flex sm:flex hidden">
        <div className="flex-1 flex justify-center">
          <ul className="sm:flex list-none  justify-center items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-[#808080]"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Button added here */}
        <button className="bg-white font-poppins hover:text-blue-500 text-black font-bold py-2 px-4 rounded">
          Sign in
        </button>
        <button className="bg-black font-poppins hover:bg-white  hover:text-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          Sign up
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <AiOutlineClose size={30} color="black" />
          ) : (
            <AiOutlineMenu size={30} color="black" />
          )}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
