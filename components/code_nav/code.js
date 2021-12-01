import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Code({ background, codeContent, navContent }) {
  const [navId, setnavId] = useState(0);

  return (
    <div
      className="relative w-full col-start-1 col-end-4 row-start-3 row-end-4 self-center mb-8 overflow-hidden
             lg:w-auto md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:mb-0"
    >
      <div
        className="relative w-full self-center md:rounded-xl overflow-hidden
          bg-black text-code-text shadow-2xl flex flex-col h-auto"
      >
        <div className={`${background} bg-opacity-40 h-auto`}>
          <div className="flex-none h-11 flex  items-center px-4">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
              <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
              <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-10">
            <nav className="relative flex text-sm overflow-x-auto scroll whitespace-nowrap bg-white bg-opacity-5 text-white text-opacity-90">
              <ul className="flex">
                {navContent.map((nav) => (
                  <li
                    key={nav.id}
                    className={
                      nav.id == navId
                        ? "relative flex text-sm cursor-pointer text-white py-2 px-4 font-medium"
                        : "relative flex text-sm cursor-pointer text-white text-opacity-70 hover:text-opacity-100 py-2 px-4 font-medium"
                    }
                    onClick={() => setnavId(nav.id)}
                  >
                    {nav.id == navId ? (
                      <motion.div
                        transition={{ duration: 0.5 }}
                        className="absolute left-0 right-0 h-full bottom-0 rounded-sm bg-white bg-opacity-5"
                        layoutId="underline"
                      />
                    ) : null}
                    {nav.name}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="absolute h-full w-12 bg-black bg-opacity-25"></div>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={codeContent[navId].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`max-h-80 h-auto overflow-auto mt-2 mr-1 scroll`}
                >
                  <pre className="flex text-xs md:text-sm">
                    <div className="block w-12 text-white text-opacity-50 flex-none pt-2 pr-4 text-right select-none">
                      {codeContent[navId].count}
                    </div>
                    {codeContent[navId].code}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
