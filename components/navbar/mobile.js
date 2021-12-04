export default function Mobile({ navHeight }) {
  return (
    <div
      className={`absolute top-0 ${navHeight} overflow-hidden w-full z-30 bg-white py-2 mt-16 md:hidden transition-all duration-500`}
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
