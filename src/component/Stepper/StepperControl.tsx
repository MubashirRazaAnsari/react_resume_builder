import React from 'react';
import { useNavigate } from 'react-router-dom';

interface StepperControlProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
  saveData: () => void;
}

const StepperControl = ({ currentStep, setCurrentStep, totalSteps, saveData }: StepperControlProps) => {
  const navigate = useNavigate();
  
  // Handle next button click
  const handleNext = () => {
    saveData(); // Save data before moving to the next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/resume'); // Navigate to the resume page after the last step
    }
  };

  // Handle previous button click
  const handlePrev = () => {
    if (currentStep >= 1) {
      console.log (currentStep)
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='container flex justify-around mt-4 mb-8'>
      <button
        className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-400 hover:text-white transition duration-200 ease-in-out disabled:opacity-50'
        disabled = {currentStep === 0}// Disable if on the first step
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className='bg-slate-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-400 hover:text-white transition duration-200 ease-in-out disabled:opacity-50'
        onClick={handleNext}
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
