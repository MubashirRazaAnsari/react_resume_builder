import { useUserContext } from "../Context/Index";
import { v4 as uuidv4 } from 'uuid'

const Education = () => {
  const { userProfile, setUserProfile } = useUserContext(); 
  const handleEducationChange = (index: number, field: string, value: string) => {
    setUserProfile((prev) => ({
      ...prev,
      education: prev.education.map((education, i) =>
        i === index ? { ...education, [field]: value } : education
      ),
    }));
  };

  const addEducation = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUserProfile((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          passingYear: "",
          instituteName: "",
          grade: "",
          degree: "",
          id: uuidv4(),
        },
      ],
    }));
  };


  return (
  <div className="max-w-lg mx-auto p-6 bg-white rounded-xl my-10 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2><p className="text-gray-600 mb-6">Fill out your Educational details below.</p>
      
     
             {userProfile.education.map((_education, index) => (
              
<form key={index}className="space-y-4">
<div key={index} className="border-b-slate-500 shadow-md p-3 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <input
              type="month"
              id="passingYear"
              name="passingYear"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Passing Year"
              onChange={(e) => handleEducationChange(index, "passingYear", e.target.value)} />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
              Grade/CGPA
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Passing Grade/CGPA"
              onChange={(e) => handleEducationChange(index, "grade", e.target.value)} />
          </div>
        </div>

       
        <div>
          <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700 mb-1">
            College Name
          </label>
          <input
            type="text"
            id="instituteName"
            name="instituteName"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Complete College Name"
            onChange={(e) => handleEducationChange(index, "instituteName", e.target.value)} />
        </div>

        
        <div>
          <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
            Field of Study
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Field Of Study"
            onChange={(e) => handleEducationChange(index, "degree", e.target.value)} />
        </div>
      </div>
      </form> )
      )}

    
        <button onClick={addEducation} disabled ={userProfile.education.length=== 3} className="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50" >Add Education</button>
     
   
</div>
)}
export default Education;
