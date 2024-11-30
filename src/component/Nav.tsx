import { Link } from "react-router-dom";
import ResumeLogo from "../assets/ResumeLogo.svg"
import { useState } from "react";
const Nav = () => {
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-black h-[68px] top-0 z-50 sticky">
    <nav className= "flex justify-between items-center w-[90%] h-10 m-auto">
        <div className=" flex items-center justify-between gap-[3vw]">
          <Link to={'/home'}>
          <img className= "w-auto min-w-10 h-auto pb-4 mt-7"src={ResumeLogo} alt="resumeLogo" />
          </Link>
        </div>
        <div className="sm:hidden hidden md:block md:text-lg text-sm align-middle">
          <ul className="flex items-center gap-x-[3vw] mt-3 md:text-md">
            <li className="text-white font-semibold">
              <Link className="hover:text-gray-500" to="/home">Home</Link>
            </li>
            <li className="text-white font-semibold ">
              <Link className="hover:text-gray-500" to="#">Contact</Link>
            </li>
            <li className="text-white font-semibold">
              <Link className="hover:text-gray-500" to="#">About</Link>
            </li>
            <li className="text-white ">
              <Link to={'/form'}>
              <button className="md:text-md mb-4 my-2 rounded-full bg-slate-700 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50"
              >
              Create Resume
              </button>
              </Link>
            </li>
          </ul>
        </div>

       


        <div className="relative md:hidden lg:hidden mx-4 mt-6 ">
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      
      {isOpen && (
        <div className="absolute top-10 right-0 bg-gray-800 text-white rounded-lg shadow-lg w-48">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link to="/home" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
 
    </nav>
    </header>
  );
};

export default Nav;
