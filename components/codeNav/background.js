export default function Background({ from, to }) {
  return (
    <div
      className="col-start-2 col-end-3 row-start-1 row-end-5 flex -ml-8 pr-4 
            lg:col-start-1 lg:col-end-5 
            sm:ml-0 sm:pr-0"
    >
      <div
        className={`w-full flex-none -ml-full rounded-2xl transform shadow-md 
              bg-gradient-to-tr ${from} ${to} -rotate-1 sm:-rotate-2`}
      ></div>
    </div>
  );
}