import { useUserContext } from "../../Context/Index";
import { useState } from "react";
const Project = () => {
  const { userProfile, setUserProfile } = useUserContext();
  const [projectName, setProjectName] = useState(String);
  const [projectDetail, setProjectDetail] = useState(String);
  const [skillInput, setSkillInput] = useState(String);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  

  const addSkill = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (skillInput.trim()) {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        skills: [...prevProfile.skills, skillInput.trim()],
      }));
      setSkillInput(""); 
    }
  };
  const removeSkill = (skillToRemove: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      skills: prevProfile.skills.filter((skill) => skill !== skillToRemove),
    }));
  };
  const removeProject = (projectToRemove: { projectName?: string; projectDetail?: string; id: any; }) => {
    setUserProfile((prev) => ({
      ...prev,
      project: prev.project.filter((project) => project.id !== projectToRemove.id),
    }));
  };

  const addProject = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (projectName && projectDetail) {
      console.log("A project has been added")
      setUserProfile((prev) => ({
        ...prev,
        project: [
          ...prev.project,
          {
            projectName,
            projectDetail,
            id: Date.now().toString(),
          },
        ],
      }));
      
      setProjectName('A project has been added');
      setProjectDetail('');
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
      <form onSubmit={addSkill} className="space-y-4">
        <div>
          <label
            htmlFor="skill"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Add a Skill
          </label>
          <input
            type="text"
            id="skill"
            value={skillInput}
            onChange={handleSkillChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a skill"
          />
        </div>
        <button
          type="submit"
          disabled = {userProfile.skills.length === 5}
          className="block w-full rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
        >
          Add Skill
        </button>
      </form>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">
        Previous Skills:
      </h3>
      <ul className="flex flex-wrap space-x-2">
        {userProfile.skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center m-1 p-2 border rounded-md bg-gray-100 h-auto"
          >
            <span>{skill}</span>
            <button
              onClick={() => removeSkill(skill)}
              className="text-red-500 hover:text-red-700 font-semibold ml-2"
            >
              X
            </button>
          </li>
        ))}
        </ul>
    </div>

{userProfile.selectedResumeStyle !== 'Style3'? 
  <div className="max-w-lg mx-auto p-6 bg-white rounded-xl my-10 shadow-md $`{customStyle}`">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
    <form className="space-y-4" onSubmit={addProject}>
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="projectDetail" className="block text-sm font-medium text-gray-700 mb-1">
          Project Detail
        </label>
        <textarea
          id="projectDetail"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Detail"
          value={projectDetail}
          onChange={(e) => setProjectDetail(e.target.value)}
        />
      </div>

      <button
        type="submit"disabled = {userProfile.project.length === 3}
        className="block w-full rounded-full bg-blue-500 text-white py-2 hover:bg-blue-600 focus:bg-blue-700"
      >
        Add Project
      </button>
    </form>

    <h3 className="text-lg font-semibold text-gray-800 mt-6">Previous Projects:</h3>
    <ul className="space-y-2">
      {userProfile.project.map((project) => (
        <li key={project.id} className="flex justify-between items-center m-1 p-2 border rounded-md bg-gray-100 h-auto">
          <div className="w-10/12 break-words">
            <strong>{project.projectName}</strong>
            <p className="break-words">{project.projectDetail}</p>
          
          </div>
          <button
            onClick={() => removeProject(project)}
            className=" text-black-500 m-2 p-2  border-2 hover:border-red-500 hover:bg-red-400 rounded-full font-bold hover:text-red-900 "
          >
            X
          </button>
        </li>
      ))}
    </ul>
  </div>
:<div></div>}
  </>
  );
};

export default Project;
