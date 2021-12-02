import { useState } from "react";
import Mobile from "./mobile";
import { BiMenu, BiX } from "react-icons/bi";

export default function Navbar() {
  const [navPosition, setnavPosition] = useState("-top-full");
  return (
    <div className="">
      <Mobile navPosition={navPosition} />
      <div className="sticky top-0 left-0 w-full z-30 bg-white shadow-lg justify-center ">
        <div className="max-w-6xl z-50 mx-auto px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/">
              <div className="flex-shrink-0 text-lg sm:text-2xl flex ">
                <img
                  src="../../images/Computer_perspective_matte.png"
                  alt="3D laptop icon"
                  className="h-8 mr-2"
                />
                <span className="text-gray-700 font-bold mx-1">Opencode</span>
              </div>
            </a>
            <nav className="hidden md:flex md:flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li
                  className="font-medium text-gray-700 hover:text-green-600 cursor-pointer px-5 py-3 
        flex items-center transition duration-150 ease-in-out"
                >
                  Link um
                </li>
                <li
                  className="font-medium text-gray-700 hover:text-green-600 cursor-pointer px-5 py-3 
        flex items-center transition duration-150 ease-in-out"
                >
                  Link dois
                </li>
                <li
                  className="font-medium text-gray-700 hover:text-green-600 cursor-pointer px-5 py-3 
        flex items-center transition duration-150 ease-in-out"
                >
                  Link tres
                </li>
                <li
                  className="font-medium text-gray-700 hover:text-green-600 cursor-pointer px-5 py-3 
        flex items-center transition duration-150 ease-in-out"
                >
                  Link quatro
                </li>
              </ul>
            </nav>
            <div
              className="flex-col w-5 md:hidden cursor-pointer text-2xl sm:text-3xl transition-all duration-500"
              onClick={() => {
                navPosition == "top-0"
                  ? setnavPosition("-top-full")
                  : setnavPosition("top-0");
              }}
            >
              {navPosition == "top-0" ? <BiX /> : <BiMenu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
