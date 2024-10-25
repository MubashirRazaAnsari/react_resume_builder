
import ResumeLogo from "../assets/ResumeLogo.svg"
const Nav = () => {
  

  return (
    <header className="bg-slate-400 h-[50px]">
    <nav className= "flex justify-between items-center w-[90%] h-10 m-auto">
        <div className=" flex items-center justify-between">
          <img className= "w-auto h-auto pb-4 mt-7"src={ResumeLogo} alt="resumeLogo" />
         
        </div>
        <div className="">
          <ul className="flex items-center gap-x-[3vw] mt-3">
            <li className="text-white ">
              <a className="hover:text-gray-500" href="/form">Home</a>
            </li>
            <li className="text-white ">
              <a className="hover:text-gray-500" href="#">Contact</a>
            </li>
            <li className="text-white ">
              <a className="hover:text-gray-500" href="#">About</a>
            </li>
            <li className="text-white ">
              <a className="hover:text-gray-500" href="#">Sign up</a>
            </li>
          </ul>
        </div>
    </nav>
    </header>
  );
};

export default Nav;
