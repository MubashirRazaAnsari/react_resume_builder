import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {

  return (
    <section className="relative bg-cover bg-center md:bg-fixed bg-black bg-[url('D:\TestPractice\ResumeBuilder\src\assets\heroDisplay.webp')] flex r flex-col items-center px-2 pt-4 w-full min-h-[677px] max-md:px-5 max-md:max-w-full md:pt-10">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col col-span-4">
          <h1 className="text-white text-4xl font-bold sm:text-4xl md:text-8xl mt-[70px] mx-7 text-center">
            Create a Winning Resume in Minutes!
          </h1>
          <h3 className="text-white sm:text-2xl md:text-2xl mt-5 mx-7 text-center">
            Stand out from the crowd with our easy-to-use resume builder. Tailor
            your resume to showcase your skills, experience, and personality.
          </h3>
        </div>
          <div className="mx-6 mb-4 my-8 w-1/4 h-auto align-center">
          <Link to="/form">
        <button className="rounded-full bg-slate-700 text-white shadow-lg hover:bg-slate-800 focus:bg-slate-900 active:bg-slate-500 focus:outline-none py-3 px-8 text-sm sm:text-base md:text-lg font-semibold uppercase transition duration-150 ease-in-out">
          Create Resume
        </button>
         </Link>
          </div>
      </div>
    </section>
  );
};

export default Hero;
