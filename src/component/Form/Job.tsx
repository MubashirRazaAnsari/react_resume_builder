import { useUserContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid";
const Job = () => {
  const { userProfile, setUserProfile } = useUserContext(); // Getting userProfile and setter from Context
  const handleJobChange = (index: number, field: string, value: string) => {
    setUserProfile((prev) => ({
      ...prev,
      jobs: prev.jobs.map((job, i) =>
        i === index ? { ...job, [field]: value } : job
      ),
    }));
  };

  const addJob = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUserProfile((prev) => ({
      ...prev,
      jobs: [
        ...prev.jobs,
        {
          companyName: "",
          jobTitle: "",
          from: "",
          to: "",
          detail: "",
          id:uuidv4()
        },
      ],
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl my-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Professional Experience
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out your Professional Experience below.
      </p>
      <form className="space-y-4">
        {userProfile.jobs.map((_job, index) => (
          <>
            <div className="border-b-slate-500 shadow-md p-3 rounded-md">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <label
                    htmlFor="passingYear"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="passingYear"
                    name="passingYear"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company Name"
                    onChange={(e) => handleJobChange(index, "companyName", e.target.value)}
                  />
                </div>
                <div className="mb-3 col-span-1">
                  <label
                    htmlFor={`fromDate-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    From
                  </label>
                  <input
                    type="month" // Allows only month and year selection
                    id={`fromDate-${index}`}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="From Month and Year"
                    onChange={(e) =>
                      handleJobChange(index, "from", e.target.value)
                    }
                  />
                </div>

              
                <div className="mb-3 col-span-1">
                  <label
                    htmlFor={`toDate-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    To
                  </label>
                  <input
                    type="month" 
                    id={`toDate-${index}`}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="To Month and Year"
                    onChange={(e) =>
                      handleJobChange(index, "to", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="instituteName"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your title"
                onChange={(e) =>
                  handleJobChange(index, "title", e.target.value)
                }
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="detail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Key Resposibilities:
              </label>
              <textarea
               
                id="detail"
                name="detail"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write down your role and resposibilities at this job."
                onChange={(e) => handleJobChange(index, "detail", e.target.value)}
              />
            </div>
          </>
        ))}

        <button
          onClick={addJob}
          disabled={userProfile.jobs.length === 2}
          className="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:opacity-50"
        >
          Add More
        </button>
      </form>
    </div>
  );
};

export default Job;
