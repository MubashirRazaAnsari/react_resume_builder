import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of your user profile state
interface UserProfile {
  personalInfo: {
    profileImg: string;
    firstName: string;
    lastName: string;
    currentTitle: string;
    phoneNumber: string;
    email: string;
    linkedin: string;
    aboutMe:string;
    gitHub:string;
  };
  skills: string[];
  jobs: {
    companyName: string;
    jobTitle: string;
    from:string;
    to:string;
    detail: string;
    id:string;
  }[];
  education: {
    passingYear: string;
    instituteName: string;
    grade: string;
    degree: string;
    id:string;
  }[];
  project: {
    projectName: string;
    projectDetail: string;
    id:string;
  }[];
  selectedResumeStyle:ResumeStyle;
}

// Define a context type
interface UserContextType {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export type ResumeStyle = 'Style1' | 'Style2' | 'Style3';

  export const resumeStepsConfig: Record<ResumeStyle, string[]> = {
    Style1: ['Personal Info','Contact', 'Education', 'Work Experience', 'Skills' ],
    Style2: ['Personal Info','Contact', 'Work Experience', 'Skills' ],
    Style3: ['Personal Info','Contact', 'Education', 'Work Experience', 'Project'],
  };

// Create context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    personalInfo: {
      profileImg:"",
      firstName: "",
      lastName: "",
      phoneNumber: "" ,
      currentTitle: "",
      email: "",
      linkedin: "",
      aboutMe:"",
      gitHub:"",
    },
    skills: [],
    jobs: [{
      companyName:"",
      jobTitle:"" ,
      from:"",
      to: "",
      detail: "",
      id:"",
    }],
    education: [{
      passingYear: "",
      instituteName: "",
      grade: "",
      degree: "",
      id:"",
    }],
    project: [{
      projectName: "",
      projectDetail: "",
      id:"",
    }],
    selectedResumeStyle: 'Style1',
  });

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context easily

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
