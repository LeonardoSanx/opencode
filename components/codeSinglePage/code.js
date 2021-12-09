import { motion } from "framer-motion";

export default function Code({ background, count, code }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="relative w-full col-start-1 col-end-4 row-start-3 row-end-4 self-center mb-8 overflow-hidden
             lg:w-auto md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:mb-0"
    >
      <div
        className="relative w-full self-center md:rounded-xl overflow-hidden 
          bg-black text-code-text shadow-2xl flex flex-col h-auto"
      >
        <div className={`${background} bg-opacity-40`}>
          <div className="flex-none h-11 flex items-center px-4">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
              <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
              <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-10">
            <div className="flex-none">
              <div className="w-full flex-auto flex min-h-0">
                <div className="w-full relative flex-auto">
                  <pre className="flex min-h-full text-xs md:text-sm">
                    <div className="block w-12 bg-black bg-opacity-25 text-white text-opacity-50 flex-none pt-4 pr-4 text-right select-none">
                      {count}
                    </div>
                    {code}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
