import {Job ,Contact, Personal  , Stepper ,StepperControl ,Education ,useUserContext,Project } from '../Context/Index'
import { useEffect, useState } from "react";

import {v4 as uuidv4} from 'uuid'
import {  resumeStepsConfig } from '../Context/Context';

const Form = () => {
  const {userProfile} = useUserContext();
  const [currentStep, setCurrentStep] = useState(0);
  const {selectedResumeStyle} = userProfile;
  const [step ,setStep] = useState<string[]>([]);
 
  useEffect(() => {
    // Set steps based on the selected resume style
    if (selectedResumeStyle) {
      setStep(resumeStepsConfig[selectedResumeStyle]);
    }
  }, [selectedResumeStyle]);
 
 
  
  
  const saveData = () => {
    switch (currentStep) {
      case 1:
        
        console.log('Personal info saved:', userProfile.personalInfo);
        console.log(uuidv4())
        break;
      case 2:
        
        console.log('Education info saved:', userProfile.education);
        break;
      case 3:
        
        console.log('Job history saved:', userProfile.jobs);
        break;
      case 4:
        
        console.log('Skills saved:', userProfile.skills);
        break;
      default:
        break;
    }
  };



  const displayStep = (stepIndex: number) => {
   
    switch (stepIndex) {
      case 0: // Personal Information
        return <Personal />;
      case 1: // Contact
        return <Contact />;
      case 2: // Education
        return <Education />;
      case 3: // Job History
        return <Job />;
      case 4: // Skills & Projects
        return <Project />;
      default:
        return null;
    }
  };

  return (
    
    <div className="md:w-1/2 mx-auto rounded-2xl pb-2">


    
      <Stepper steps={step} currentStep={currentStep} />
      
      {/* Displaying the current step's content */}
      <div className="p-4">{displayStep(currentStep)}</div>

      {/* Passing the state handler to StepperControl */}
      <StepperControl
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={step.length}
        saveData={saveData} // Pass the saveData function here
      />

    </div>
  );
};

export default Form;
