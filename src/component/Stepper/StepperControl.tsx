import React from 'react'
import { useNavigate } from 'react-router-dom';


interface StepperControlProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
  saveData: () => void;
}

const StepperControl = ({ currentStep, setCurrentStep, totalSteps, saveData }: StepperControlProps) => {
  const navigation = useNavigate();
  
  const handleNext = () => {
    saveData ()
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      console.log("click")
    }
    else{
      navigation('/resume')
    }
  };
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  return (


    <div className='container flex justify-around mt-4 mb-8'>
      <button className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-400 hover:text-white transition duration-200 ease-in-out disabled:opacity-50'
      disabled={currentStep === 1}
      onClick={handlePrev}>Previous</button>
      <button type="submit"className='bg-slate-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-400 hover:text-white transition duration-200 ease-in-out
      disabled:opacity-50' 
      onClick={handleNext}
      >{currentStep === totalSteps ? "Submit" : "Next" }</button>
      {/* <button type="submit" className='bg-slate-400 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate=400 hover:text-white transition duration-200 ease-in-out
      disabled:opacity-50'
      onClick={handleNext}
      >Next</button> */}

    </div>
  )
}

export default StepperControl







