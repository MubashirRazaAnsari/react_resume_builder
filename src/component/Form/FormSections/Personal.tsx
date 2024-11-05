import { useUserContext } from "../../Context/Context";

const Personal = () => {
  const { userProfile, setUserProfile } = useUserContext(); 

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
          
          setUserProfile((prev) => ({
            ...prev,
            personalInfo: {
              ...prev.personalInfo,
              profileImg: reader.result as string,
            },
          }));
        }
      };
      reader.readAsDataURL(file); 
    }
  };

 
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg mt-5">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
    <p className="text-gray-600 mb-6">Fill out your personal details below.</p>
  
    <form className="space-y-4">
    <div className="col-span-full">
          
          <div className="mt-2 flex justify-center rounded-full border border-dashed border-gray-900/25 px-6 py-10">
          <div className="flex items-center space-x-6">
    <div className="shrink-0">
      <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={userProfile.personalInfo.profileImg} alt="Current profile photo" />
    </div>
    <label className="block">
      <span className="sr-only">Choose profile photo</span>
      <input type="file" onChange={handleImageChange} className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
    </label>
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
            required
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
            required
          />
        </div>
      </div>
  
     
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
          required
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
          required
        />
      </div>
         
    </form>
  </div>
  
  );
};

export default Personal;
