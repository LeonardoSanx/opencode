export default function Mobile({ navPosition }) {
  return (
    <div
      className={`absolute ${navPosition} w-full z-30 bg-white pb-2 mt-24 md:hidden transition-all duration-500`}
    >
      <nav className="w-full">
        <ul className="flex justify-center flex-wrap items-center">
          <li
            className="font-medium w-full py-4 text-gray-700 hover:text-green-600 cursor-pointer  
            items-center text-center transition duration-150 ease-in-out"
          >
            Link um
          </li>
          <li
            className="font-medium w-full py-4 text-gray-700 hover:text-green-600 cursor-pointer  
            items-center text-center transition duration-150 ease-in-out"
          >
            Link dois
          </li>
          <li
            className="font-medium w-full py-4 text-gray-700 hover:text-green-600 cursor-pointer  
            items-center text-center transition duration-150 ease-in-out"
          >
            Link tres
          </li>
          <li
            className="font-medium w-full py-4 text-gray-700 hover:text-green-600 cursor-pointer  
            items-center text-center transition duration-150 ease-in-out"
          >
            Link quatro
          </li>
        </ul>
      </nav>
    </div>
  );
}
