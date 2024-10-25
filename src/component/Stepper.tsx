import  { useEffect, useState, useRef } from "react";

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

  const updateStep = (stepNumber: number, steps: Step[]) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    // if (stepNumber === newSteps.length -1) {
    //   newSteps[stepNumber] = {
    //     ...newSteps[stepNumber],
    //     completed: true,
    //       // Mark the last step as completed
    //   };
    // }
  
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step: string, index: number) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-slate-900">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? " bg-slate-400 text-white font-bold border-slate-500"
                : ""
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
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
