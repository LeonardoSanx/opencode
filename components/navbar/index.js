import { useState } from "react";
import Mobile from "./mobile";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Navbar() {
  const [navHeight, setnavHeight] = useState("h-0 mt-0");
  const x = useMotionValue(0);
  const width = useTransform(x, [0, -300], ["100vw", `${x} * (-1)`]);

  return (
    <motion.div
      initial={{ y: "200", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="relative bg-green-200 rounded-lg mb-10 flex shadow-lg"
    >
      <motion.div
        style={{ width: width }}
        className="relative flex justify-center"
      >
        <Mobile navHeight={navHeight} />

        <div className="sticky top-0 left-0 w-full z-30 bg-white justify-center">
          <div className="max-w-7xl z-50 mx-auto px-10">
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
                  navHeight == "h-0 mt-0"
                    ? setnavHeight("h-60 mt-16")
                    : setnavHeight("h-0 mt-0");
                }}
              >
                {navHeight == "h-0 mt-0" ? <BiMenu /> : <BiX />}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        drag="x"
        whileHover={{ scale: 1.05, backgroundColor: "rgb(6, 78, 59)" }}
        whileTap={{ scale: 1, backgroundColor: "rgb(6, 95, 70)" }}
        dragDirectionLock={true}
        dragMomentum={false}
        onDrag={(event, info) => (
          console.log(width.current), console.log(x.current)
        )}
        dragConstraints={{
          right: 0,
        }}
        dragElastic={0.05}
        style={{ x }}
        className=" z-50 w-10 h-16 sm:h-20 flex rounded-lg items-center cursor-move
         bg-green-800 border-4 border-green-200"
      >
        <IoIosArrowBack className="inline text-white text-xl" />
        <IoIosArrowForward className="inline text-white text-xl" />
      </motion.div> */}
    </motion.div>
  );
}
