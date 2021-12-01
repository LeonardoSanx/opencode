export default function Card({ children }) {
  return (
    <div
      className="z-10 col-start-2 col-end-3 row-start-2 row-end-3 self-center pr-8 pt-6 
              sm:px-6
              md:px-8 md:pt-8 
              lg:col-end-3 lg:row-start-3 lg:row-end-4 lg:px-0 lg:pt-0 lg:-mr-2"
    >
      <div
        className="text-sm font-caveat self-center p-8 text-left rounded-tr-xl
                backdrop-blur-sm bg-opacity-80 bg-white shadow-xl max-w-screen-sm w-auto
                sm:text-base sm:rounded-t-xl sm:px-12
                md:text-lg 
                lg:text-xl lg:rounded-xl"
      >
        {children}
      </div>
    </div>
  );
}
