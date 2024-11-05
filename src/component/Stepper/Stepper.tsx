import { useEffect, useState, useRef } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[] | null>(null);

  // Update the steps' status based on the current step number
  const updateStep = (stepNumber: number, steps: Step[]) => {
    const newSteps = steps.map((step, index) => {
      if (index < stepNumber) {
        return { ...step, highlighted: false, selected: true, completed: true };
      } else if (index === stepNumber) {
        return { ...step, highlighted: true, selected: true, completed: false };
      } else {
        return { ...step, highlighted: false, selected: false, completed: false };
      }
    });
    return newSteps;
  };

  useEffect(() => {
    // Initialize step states
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const updatedSteps = updateStep(currentStep, stepRef.current);
    setNewStep(updatedSteps);
  }, [steps, currentStep]);

  // Render each step in the stepper
  const displaySteps = newStep.map((step, index) => (
    <div
      key={index}
      className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}
    >
      <div className="relative flex flex-col items-center text-slate-900">
        <div
          className={`rounded-full transition duration-500 ease-in-out border-2 h-12 w-12 flex items-center justify-center py-3 ${
            step.selected ? "bg-green-400 text-white font-bold border-green-400" : "border-gray-300"
          }`}
        >
          {step.completed ? (
            <span className="text-white font-bold text-xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
            step.highlighted ? "text-slate-900" : "text-slate-300"
          }`}
        >
          {step.description}
        </div>
      </div>
      {index !== newStep.length - 1 && (
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-slate-700" : "border-slate-200"
          }`}
        ></div>
      )}
    </div>
  ));

  return <div className="mx-4 p-4 flex justify-between items-center ">{displaySteps}</div>;
};

export default Stepper;
