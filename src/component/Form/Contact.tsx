import React from 'react'
import { useUserContext } from '../Context/Index';

const Contact = () => {
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
  return (
    <div>
     <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h2>
  <p className="text-gray-600 mb-6">Fill out your Contact details below.</p>

  <form className="space-y-4">
    {/* Name Fields */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedIn"
          name="linkedIn"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="LinkedIn"
          value={userProfile.personalInfo.linkedin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="phone"
          value={userProfile.personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={userProfile.personalInfo.email}
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="gitHub" className="block text-sm font-medium text-gray-700 mb-1">
        GitHub
      </label>
      <input
        type="text"
        id="gitHub"
        name="gitHub"
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="GitHub Link"
        value={userProfile.personalInfo.gitHub}
        onChange={handleChange}
      />
    </div>
  </form>
</div>

    </div>
  )
}

export default Contact
