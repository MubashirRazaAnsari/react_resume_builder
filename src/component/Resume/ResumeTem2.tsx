import { useUserContext } from "../Context/Context";

const ResumeTem2 = () => {
  const { userProfile } = useUserContext();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={userProfile.personalInfo.profileImg}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 className="text-xl font-bold">
                  {userProfile.personalInfo.firstName}
                  {userProfile.personalInfo.lastName}
                </h1>
                <p className="text-gray-700">
                  {userProfile.personalInfo.currentTitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href={userProfile.personalInfo.email}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  {userProfile.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center my-1">
                        <div className="ml-2">
                          <li>{skill}</li>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 text-wrap">
                {userProfile.personalInfo.aboutMe}
              </p>

              <h3 className="font-semibold text-center mt-3 mb-2">
                Find me on
              </h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="w-6 text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Facebook"
                  href={userProfile.personalInfo.gitHub}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#171515"
                      d="M192 368.004c0-8.844 7.156-16 16-16s16 7.156 16 16-7.156 16-16 16-16-7.156-16-16zM349.328 494.16c-4.266 1.219-8.672 2.094-13.328 2.094-26.516 0-48-21.484-48-48v-58.188c0-20.094 12.898-37.156 30.797-43.438C353.164 335.082 384 306.082 384 272.004V240c0-15.164-6.188-29.285-16-41.367V162.5c0-17.668-14.328-23.719-32-13.496l-24.516 14.176C303.633 161.145 295.703 160 288 160h-64c-7.699 0-15.633 1.145-23.484 3.18L176 149.004c-17.668-10.223-32-4.172-32 13.496v36.133c-9.812 12.082-16 26.203-16 41.367v32.004c0 23.281 14.488 44.188 34.578 58.812l-.02.031c4.172 2.859 6.945 7.688 6.945 13.156 0 8.828-7.176 16-16 16-4.52 0-8.574-1.891-11.48-4.906C115.004 334.629 96 305.035 96 272.004V240c0-18.523 6.012-35.977 16-51.375v-47.633c0-35.336 28.645-47.438 64-26.996l27.461 15.887C210.309 128.719 217.172 128 224 128h64c6.828 0 13.688.719 20.539 1.883L336 113.996c35.359-20.441 64-8.34 64 26.996v47.633c9.984 15.398 16 32.852 16 51.375v32.004c0 47.609-39.25 88.141-85.531 104.359-.055.047-.109.172-.188.188-6.016 2.312-10.281 8.125-10.281 14.953v56.75c0 8.844 7.156 16 16 16 1.336 0 2.562-.375 3.797-.688C421.969 430.41 480 350.066 480 256c0-123.715-100.281-224-224-224C132.285 32 32 132.285 32 256c0 97.41 62.254 180.066 149.121 210.895.445.047.852.234 1.316.234 5.277 0 9.562-4.297 9.562-9.562 0-5.281-4.285-9.562-9.562-9.562-.113 0-.113-.094-.191-.141-53.16-1.422-53.219-63.859-70.246-63.859-8.844 0-16-7.156-16-16s7.156-16 16-16h7.988c32.02 0 27.445 64 72.012 64 17.668 0 32 14.328 32 32v28c0 15.453-12.527 28-28.004 28-1.688 0-3.277-.344-4.887-.656C81.203 474.613 0 374.926 0 256 0 114.617 114.617 0 256 0s256 114.617 256 256c0 108.41-67.492 200.848-162.672 238.16z"
                    />
                  </svg>
                </a>
                <a
                  className="w-6 text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Twitter"
                  href={userProfile.personalInfo.email}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="40 0 250 150"
                    className="h-6"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#282828"
                      d="M138.832 137.698h-77c-5.2 0-9.5-4.3-9.5-9.5v-57c0-5.2 4.3-9.5 9.5-9.5h77c5.2 0 9.5 4.3 9.5 9.5v57c0 5.2-4.3 9.5-9.5 9.5zm-77-72c-3 0-5.5 2.5-5.5 5.5v57c0 3 2.5 5.5 5.5 5.5h77c3 0 5.5-2.5 5.5-5.5v-57c0-3-2.5-5.5-5.5-5.5h-77z"
                    />
                    <path
                      fill="#282828"
                      d="M100.332 112.098c-.5 0-1-.2-1.4-.6l-31.6-31.6c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l30.2 30.1 30.8-30.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-32.2 32.3c-.4.4-.9.6-1.4.6z"
                    />
                    <path
                      fill="#282828"
                      d="M69.032 122.198c-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8l20.7-20.7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-20.6 20.7c-.4.4-1 .6-1.5.6zM132.632 122.198c-.5 0-1-.2-1.4-.6l-20.7-20.7c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l20.7 20.7c.8.8.8 2 0 2.8-.4.4-.9.6-1.4.6z"
                    />
                  </svg>
                </a>
                <a
                  className="w-6 text-gray-700 hover:text-orange-600"
                  href={userProfile.personalInfo.linkedin}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>

              {userProfile.jobs.map((job) => (
                <div key={job.id} className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      {job.jobTitle}
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">
                        at {job.companyName}
                      </span>
                      <span className="text-gray-700">
                        {job.from} - {job.to}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2">{job.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTem2;
