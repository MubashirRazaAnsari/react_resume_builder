import React, { useRef } from 'react';
import { useUserContext } from '../Context/Context';
import ResumeTem from '../Resume/ResumeTem';
import ResumeTem2 from '../Resume/ResumeTem2';
import html2pdf from 'html2pdf.js';
import { useNavigate } from 'react-router-dom';
import ResumeTem3 from '../Resume/ResumeTem3';



const Resume: React.FC = () => {
  const { userProfile } = useUserContext();
  const { selectedResumeStyle } = userProfile;
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement | null>(null);

  const downloadPDF = () => {
    const element = componentRef.current;
    if (element) {
      html2pdf()
        .from(element)
        .set({
        //   margin: 1,
          filename: `${userProfile.personalInfo.firstName}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { orientation: "portrait" },
        })
        .save();
    }
  };

  const renderResume = () => {
    switch (selectedResumeStyle) {
      case 'Style1':
        return <ResumeTem />;
      case 'Style2':
        return <ResumeTem2 />;
      case 'Style3':
        return <ResumeTem3 />;
      default:
        return <div>Please select a resume style on the home page.</div>;
    }
  };

  return (
  <div>
     <div className="flex m-2">
        <button
          className=" mb-4 my-2 rounded-full bg-slate-400 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50"
          onClick={() => {
            navigate("/form");
          }}
        >
          Edit
        </button>
        <button
          className="block mb-4 my-2 rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
      <div ref={componentRef}>
    {renderResume()}
    </div>
    </div>
  );
};

export default Resume;