import { useUserContext } from "../Context/Context";

const Personal = () => {
  const { userProfile, setUserProfile } = useUserContext(); // Getting userProfile and setter from Context
  // const { personalInfo } = userProfile;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      personalInfo: {
        ...prevProfile.personalInfo,
        [name]: value,
      },
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          // Store the image as a base64 string in the Context API
          setUserProfile((prev) => ({
            ...prev,
            personalInfo: {
              ...prev.personalInfo,
              profileImg: reader.result as string,
            },
          }));
        }
      };
      reader.readAsDataURL(file); // Convert image to base64 format
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Called");

  // };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-5">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
    <p className="text-gray-600 mb-6">Fill out your personal details below.</p>
  
    <form className="space-y-4">
    <div className="col-span-full">
          
          <div className="mt-2 flex justify-center rounded-full border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className=" flex text-sm leading-6 text-gray-600 mt-[20px] h-[50px]">
                <label
                  htmlFor="profileImg"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="profileImg"
                    name="profileImg"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First Name"
            value={userProfile.personalInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Name"
            value={userProfile.personalInfo.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
  
      {/* Email Field */}
      <div>
        <label htmlFor="currentTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Current Title
        </label>
        <input
          type="text"
          id="currentTitle"
          name="currentTitle"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Current Job Title"
          value={userProfile.personalInfo.currentTitle}
          onChange={handleChange}
        />
      </div>
  
    
      <div>
        <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700 mb-1">
          About Me
        </label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          className=" w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[auto]"
          placeholder="About Me"
          value={userProfile.personalInfo.aboutMe}
          onChange={handleChange}
        />
      </div>
         
    </form>
  </div>
  
  );
};

export default Personal;
