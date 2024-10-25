import { useUserContext } from "../Context/Context";
import { useRef } from "react";
import html2pdf from 'html2pdf.js';


const Resume =() => {
  const { userProfile } = useUserContext();
  const componentRef = useRef<HTMLDivElement | null>(null);

  const downloadPDF = () => {
    const element = componentRef.current;
    if (element) {
      html2pdf()
        .from(element)
        .set({
          margin: 1,
          filename: `${userProfile.personalInfo.firstName}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { orientation: 'portrait' }
        })
        .save();
    }
  };
  return (
    <div  className="bg-gray-100 p-4">
      <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
       
        <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden rounded-full sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src={userProfile.personalInfo.profileImg} />
          </div>

          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              {`${userProfile.personalInfo.firstName} ${userProfile.personalInfo.lastName}`}
            </p>
            <p className="text-heading">
              {userProfile.personalInfo.currentTitle}
            </p>
          </div>
        </div>

       
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
             
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  My Contact
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div className="flex items-center my-1">
                    <div className="flex items-center truncate">
                      {userProfile.personalInfo.email}
                    </div>
                  </div>
                  <div className="flex items-center my-1">
                    <div className="flex items-center truncate">
                      {userProfile.personalInfo.phoneNumber}
                    </div>
                  </div>
                  <div className="flex items-center my-1">
                    {userProfile.personalInfo.linkedin ? (
                      <div className="flex items-center truncate">
                        {userProfile.personalInfo.linkedin}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
             
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Skills
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div>
                  {userProfile.skills.map((skill , index)=>
                  <div key={index}>
                    <div className="flex items-center my-1">
                    <div className="ml-2">{skill}</div>
                  </div>
                  </div>)}
                 
                  </div>
                </div>
              
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Education Background
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col space-y-1">
                    {userProfile.education.map((edu) => (
                      <div key={edu.id} className="flex flex-col">
                        <p className="font-semibold text-xs text-gray-700">
                          {edu.passingYear}
                        </p>
                        <p className="text-sm font-medium">
                          <span className="text-green-700">{edu.grade}</span>,{" "}
                          {edu.instituteName}
                        </p>
                        <p className="font-bold text-xs text-gray-700 mb-2">
                          {edu.degree}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
           
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  About Me
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <p>{`${userProfile.personalInfo.aboutMe}.`}</p>
              </div>

             
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                {userProfile.jobs.map((job) => (
                 <div key={job.id}>
                  <div  className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold text-gray-700">
                        {job.companyName} | {job.jobTitle}
                      </p>
                      <p className="font-semibold text-sm text-gray-700">
                        {job.from} - {job.to}
                      </p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <p className="text-sm list-disc pl-4 space-y-1">
                        {job.detail}
                      </p>
                    </div>
                  </div>
                 </div> 
                ))}
              </div>
            
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div className="flex flex-col">
                  {userProfile.project.map((project)=> 
                  <div key={project.id}>
                    <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-700">
                      {project.projectName}
                    </p>
                    <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                      {project.projectDetail}
                    </p>
                  </div>
                    </div> )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50"
       onClick={downloadPDF}>Download PDF</button>
      <div ref={componentRef}></div>
    </div>
  );
};

export default Resume;
