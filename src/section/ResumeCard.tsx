
import ResumeTem2 from '/ResumeTem2.PNG'
import ResumeTem1 from '/ResumeTem1.PNG'
import ResumeTem3 from '/ResumeTem3.PNG';
import { useUserContext } from '../component/Context/Context';
import { useNavigate } from 'react-router-dom';

const ResumeCard = () => {
  const {setUserProfile} = useUserContext()
  const navigate = useNavigate()
  const handleSelectResumeStyle = (style : string) => {
    setUserProfile((prevProfile: any) => ({
      ...prevProfile,
      selectedResumeStyle: style, 
    }));
    navigate('/form'); 
    console.log("Style Selected");
  };

  
  return (
  <section className='flex flex-col bg-transparent md:grid-cols-3 relative justify-between items-center px-2 pt-4 w-full min-h-[250px] max-md:px-5 max-md:max-w-full border-b-2 border-white'>
    <h1 className='text-white text-shadow font-semibold text-2xl sm:text-3xl md:text-4xl md:mb-10'> Select Template</h1>
    <div className='flex flex-col col-span-3 md:flex-row justify-between items-center md:gap-[100px] gap-[50px] my-5 mx-4 card sm:m-4 sm:px-10' >
      <div className='rounded col-span-1 min-w-[1/2vw] h-auto hover:cursor-pointer hover:opacity-90 border-2 focus:border-black'>
      <a
            
            className="hover:scale-105 transition-transform duration-200"
            onClick={()=> {handleSelectResumeStyle('Style1')}}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-zinc-100">
              <img
                alt={'Resume Template 1'}
                src={ResumeTem1}
                width={450}
                height={300}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-4 text-center text-zinc-800 font-semibold">
                Resume Template 3
              </div>
            </div>
          </a>
        {/* <img src={ResumeTem1} className='w- h-auto rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style1')}} alt="Resume Style1" />
        <h2 className='text-black items-center'>Resume Style 1</h2> */}
      </div>
      <div className=' rounded col-span-1  min-w-[1/2vw] h-auto card hover:cursor-pointer hover:opacity-90' >
      <a
            
            className="hover:scale-105 transition-transform duration-200"
            onClick={()=> {handleSelectResumeStyle('Style2')}}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-zinc-100">
              <img
                alt={'Resume Template 3'}
                src={ResumeTem2}
                width={450}
                height={300}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-4 text-center text-zinc-800 font-semibold">
                Resume Template 3
              </div>
            </div>
          </a>
        {/* <img src={ResumeTem2} className='w-full md:h-[50vh] sm:h-[30vh] h-[20vh] rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style2')}} alt=""  />
        <h2 className='text-white items-center'>Resume Style 2</h2> */}
      </div>
      <div className='rounded col-span-1 md:min-w-[1/2vw] h-auto card hover:cursor-pointer hover:opacity-90 ' >
      <a
            
            className="hover:scale-105 transition-transform duration-200"
            onClick={()=> {handleSelectResumeStyle('Style3')}}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-zinc-100">
              <img
                alt={'Resume Template 3'}
                src={ResumeTem3}
                width={450}
                height={300}
                className="object-cove w-full h-[200px]"
              />
              <div className="p-4 text-center text-zinc-800 font-semibold">
                Resume Template 3
              </div>
            </div>
          </a>
        {/* <img src={ResumeTem3} className='w-full h-auto rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style3')}} alt="" />
        <h2 className='text-white text-center'>Resume Style 3</h2> */}
      </div>
        
    </div>
    
  </section>
  )
}

export default ResumeCard
