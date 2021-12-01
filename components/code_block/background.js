export default function Background({ from, to }) {
  return (
    <div
      className="col-start-2 col-end-3 row-start-2 row-end-4 flex -ml-8 pr-4 
            lg:col-start-1 lg:col-end-5 lg:row-end-5 lg:py-10 
            xl:py-16 sm:ml-0 sm:pr-0"
    >
      {/* <div className="bg-gray-100 w-full absolute flex-none rounded-2xl"></div> */}
      <div
        className={`w-full flex-none -ml-full rounded-2xl transform shadow-md 
              bg-gradient-to-tr ${from} ${to} -rotate-1 sm:-rotate-2`}
      ></div>
    </div>
  );
}
