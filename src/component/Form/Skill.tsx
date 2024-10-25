import { useUserContext } from "../Context/Context";

const Skill = () => {
  const { userProfile, setUserProfile } = useUserContext(); // Getting userProfile and setter from Context
  const {skills} =userProfile;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      skills:{
      ...prevProfile.skills,
      [name]: value,}

    }));
  };

  const addSkills = () => {
    setUserProfile((prev) => ({
      ...prev,
      skills:[
        ...prev.skills,
      ]
  }))
  }
  
  
  return (
    <div>
      
      
    </div>
  )
}

export default Skill
