import { Link } from "react-router-dom";
import ResumeLogo from "../assets/ResumeLogo.svg"
const Nav = () => {
  

  return (
    <header className="flex bg-slate-400 h-[70px]">
    <nav className= "flex justify-between items-center w-[90%] h-10 m-auto">
        <div className=" flex items-center justify-between gap-[3vw]">
          <img className= "w-auto h-auto pb-4 mt-7"src={ResumeLogo} alt="resumeLogo" />
         
        </div>
        <div className="md:block md:text-lg text-sm align-middle">
          <ul className="flex items-center gap-x-[3vw] mt-3">
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
              <button className=" mb-4 my-2 rounded-full bg-slate-700 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50">
              <Link className="hover:text-gray-500" to="/form">Create Resume</Link>
              </button>
            </li>
          </ul>
        </div>
    </nav>
    </header>
  );
};

export default Nav;
