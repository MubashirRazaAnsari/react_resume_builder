import { Link } from 'react-router-dom';
import ResumeLogo from '../assets/ResumeLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto py-8 flex flex-col items-center md:flex-row md:justify-between ">
        
        {/* Logo */}
        <Link to="/" className="flex items-center mb-4 md:mb-0 space-x-3">
          <img src={ResumeLogo} className="h-[50px]" alt="Resume Logo" />
        </Link>

        {/* Links */}
        <ul className="flex flex-col md:flex-row md:space-x-6 items-center text-sm font-medium text-slate-200 dark:text-gray-400 md:text-md">
          <li className="mb-3 md:mb-0">
            <Link to="/home" className="hover:underline">Home</Link>
          </li>
          <li className="mb-3 md:mb-0">
            <Link to="/" className="hover:underline">About</Link>
          </li>
          <li className="mb-3 md:mb-0">
            <Link to="/form" className="hover:underline">Create Resume</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">Contact</Link>
          </li>
        </ul>
        
      </div>

      {/* Divider and Copyright */}
      <hr className="w-full border-gray-200 dark:border-gray-700" />
      <span className="block text-sm text-slate-200 text-center py-4 dark:text-gray-400">
        © 2024 <Link to="https://flowbite.com/" className="hover:underline">ResumeBuilder™</Link>. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
