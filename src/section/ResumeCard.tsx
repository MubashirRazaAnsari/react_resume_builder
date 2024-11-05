
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
  <section className='flex flex-col bg-black md:grid-cols-3 relative justify-between items-center px-2 pt-4 w-full min-h-[250px] max-md:px-5 max-md:max-w-full border-b-2 border-white'>
    <h1 className='text-white text-shadow font-semibold text-3xl sm:text-4xl md:text-6xl'> Select Template</h1>
    <div className='flex flex-col col-span-3 md:flex-row justify-between items-center md:gap-[100px] gap-[50px] mt-5 mx-4 card sm:m-4 sm:px-10' >
      <div className='rounded col-span-1 min-w-[1/2vw] h-auto'>
        <h2 className='text-black items-center'>Resume Style</h2>
        <img src={ResumeTem1} className='w-full h-auto rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style1')}} alt="Resume Style1" />
      </div>
      <div className=' rounded col-span-1  min-w-[1/2vw] h-auto card' >
        <h2 className='text-white items-center'>Resume Style</h2>
        <img src={ResumeTem2} className='w-full md:h-[50vh] sm:h-[30vh] h-[20vh] rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style2')}} alt=""  />
      </div>
      <div className='rounded col-span-1 md:min-w-[1/2vw] h-auto card' >
        <h2 className='text-white text-center'>Resume Style</h2>
        <img src={ResumeTem3} className='w-full h-auto rounded-md mb-5' onClick={()=> {handleSelectResumeStyle('Style3')}} alt="" />
      </div>
        
    </div>
    
  </section>
  )
}

export default ResumeCard
