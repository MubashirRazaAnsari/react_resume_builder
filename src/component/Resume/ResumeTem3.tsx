import { useUserContext } from "../Context/Context";

const ResumeTem3 = () => {
  const { userProfile } = useUserContext();
  return (
    <div>
      <section className="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
        <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
          <section className="block">
            <h1 className="mb-0 text-5xl font-bold text-gray-700">
              {userProfile.personalInfo.firstName}
              {userProfile.personalInfo.lastName}
            </h1>
            {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
            <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
              {userProfile.personalInfo.currentTitle}
            </h2>
          </section>

          <section className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black">
            <section className="text-center initial">T</section>
            <section className="text-center initial">L</section>
            <section className="text-center initial">H</section>
          </section>
        </header>

        {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
        <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
          <section className="flex-col">
            {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
            <section className="pb-2 mt-4 mb-0 first:mt-0">
              {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
              <section className="break-inside-avoid">
                <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                  <ul className="pr-7 list-inside">
                    <li className="mt-1 leading-normal text-black transition duration-100 ease-in hover:text-gray-700 text-md print:">
                      <a
                        href={userProfile.personalInfo.linkedin}
                        className="group"
                      >
                        <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                          Linkedin:
                        </span>
                        {userProfile.personalInfo.linkedin}
                        <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                      <a
                        href={userProfile.personalInfo.gitHub}
                        className="group"
                      >
                        <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                          Github:
                        </span>
                        {userProfile.personalInfo.gitHub}
                        <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                          ↗
                        </span>
                      </a>
                    </li>

                    <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                      <a
                        href={userProfile.personalInfo.email}
                        className="group"
                      >
                        <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                          Email:
                        </span>
                        {userProfile.personalInfo.email}
                        <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                      <a href="tel:`${userProfile.personalInfo.email}`">
                        <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                          Phone:
                        </span>
                        {userProfile.personalInfo.phoneNumber}
                      </a>
                    </li>
                  </ul>
                </section>
              </section>
            </section>
            {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
            <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
              {/* <!-- To keep in the same column --> */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
                  SUMMARY
                </h2>

                <section className="mb-2 break-inside-avoid">
                  <p className="mt-2 leading-normal text-gray-700 text-md">
                    {userProfile.personalInfo.aboutMe}
                  </p>
                </section>
              </section>
            </section>
            {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
            <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              {/* <!-- To keep in the same column --> */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                  EDUCATION
                </h2>

                {userProfile.education.map((edu, index) => (
                  <section
                    key={edu.id}
                    className="mt-2 border-b-2 break-inside-avoid"
                  >
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {userProfile.education[index].instituteName}
                      </h3>
                      <p className="leading-normal text-gray-500 text-md">
                        {userProfile.education[index].passingYear} |{" "}
                        {userProfile.education[index].degree}
                      </p>
                    </header>
                    <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                      <li>
                        <span className="font-semibold text-md">GPA:</span>
                        {userProfile.education[index].grade}
                      </li>
                    </ul>
                  </section>
                ))}
              </section>
            </section>

            {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
            <section className="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              {/* <!-- To keep in the same column --> */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                  SKILLS
                </h2>
                <section className="mb-0 break-inside-avoid">
                  <section className="mt-1 last:pb-1">
                    <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                      {userProfile.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </section>
                </section>
              </section>
            </section>

            {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
            <section className="pb-2  mt-4 border-b-4 border-gray-300 first:mt-0">
              {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
                  EXPERIENCE
                </h2>

                {userProfile.jobs.map((job) => (
                  <section
                    key={job.id}
                    className="mb-2 border-b-2 border-gray-300 break-inside-avoid"
                  >
                    <header>
                      <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                        {job.jobTitle}
                      </h3>
                      <p className="text-sm leading-normal text-gray-500">
                        {job.from} &ndash; {job.to} | {job.companyName}
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                      <li>
                        <span className="text-gray-500 transform -translate-y-px select-none">
                          &rsaquo;
                        </span>
                        {job.detail}
                      </li>
                    </ul>
                  </section>
                ))}
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ResumeTem3;
