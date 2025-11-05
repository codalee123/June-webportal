import HeroImage from '../assets/Images/hero-image.svg'
import SolarIMage from '../assets/Images/Solar-image.svg'
import VisionImage from '../assets/Images/Our-vision-Image.svg'
import JetImage from '../assets/Images/Jet-Image.svg'
import HomeImage from '../assets/Images/House-Illustration.svg'
import EnterpriseImage from '../assets/Images/Enterprises-image.svg'
import SolutionImage from '../assets/Images/Our-Solution-Image.svg'
import LearnMore from '../assets/Icons/learnmore-logo.svg'
import ArrowIcon from '../assets/Icons/Arrow-white.svg'
import VectorLogo from '../assets/Images/vector-logo.svg'


const Home = () => {
    const Content = [
      {
        title: 'OUR VISION',
        description:
          "To power Africa’s future by providing the scalable technology infrastructure every founder, small business, and enterprise needs to thrive.",
      },
      {
        title: 'OUR MISSION',
        description:
          "Provide founders and businesses with secure, high-performance digital infrastructure to build, launch, and scale their businesses without starting from scratch.",
      }
    ];

    
    const data = [
    {
      title: "Startups",
      description:
        "From MVP to growth stage, June is your tech co-founder without the equity dilution.",
      image:JetImage, // replace with your image path
    },
    {
      title: "Mid-sized Businesses",
      description:
        "Bridge the gap between startup agility and enterprise stability with infrastructure built for growth.",
      image: HomeImage, // replace with your image path
    },
    {
      title: "Enterprises",
      description:
        "June delivers the flexibility of SaaS with the resilience of enterprise infrastructure—built for Africa’s largest businesses.",
      image: EnterpriseImage, // replace with your image path
    },
  ];

  return (
    <div> 
          <div className='w-full lg:justify-between h-max lg:w-full pb-[2.5rem]  gap-[2em] lg:pt-[3em] bg-[rgba(0,0,0,1)] flex items-center lg:gap-0   px-[2em] lg:px-[6rem] flex-wrap xl:px-[5rem] :flex-nowrap xl:pb-[2rem] 2xl:px-[9rem] 2xl:pb-[2rem] 2xl:pt-[2rem] 2xl:gap-[1rem]'>
              <div className='w-max lg:w-[600px] mt-[7rem] lg:mt-[5rem] xl:mt-[4rem] 2xl:w-[765px]'> 
                  <h1 className='text-[30px] md:text-[45px] lg:text-[65px] lg:leading-[110%] font-bold text-[rgba(255,255,255,1)] leading-[50px] xl:text-[65px] 2xl:text-[85px]'> 
                    The digital backbone for Africa’s businesses. 
                  </h1> 
                  <p className='text-[rgba(255,255,255,1)] font-[400px] text-[14px] lg:text-[13px] leading-6 pt-3 2xl:text-[17px]'>
                    Powering innovation, resilience, and growth across the continent’s most vital sectors
                  </p> 
              </div> 
              <div className='max-w-[270px] pb-[3em] mx-auto md:max-w-[320px] md:mx-auto md:pb-4  lg:max-w-[520px] lg:pb-[4em] 2xl:max-w-[750px] 2xl:pb-[8em] ' >
                  <img src={HeroImage} alt=""  />
              </div> 
          </div> 
            
          {/* WHY- SECTION */}

          <div className='h-max lg:pt-[5rem] lg:pb-[7rem] bg-[rgba(255,255,255,1)] flex items-center justify-center flex-col py-[3rem] '> 
                <div className='h-[150px] w-max md:h-[100px] lg:h-[150px]  lg:w-[800px] bg-[rgba(0,0,0,1)] rounded-[36px] overflow-hidden flex flex-col md:flex-row md:gap-0 lg:flex-row items-center gap-4 lg:gap-0 2xl:w-[65rem] 2xl:h-[200px] '>
                  <img src={SolarIMage} alt="" className='w-[350px] h-[80px] md:h-full  lg:h-full object-cover 2xl:h-full' />
                    <div className='text-center w-full pt-0 lg:p-6  2xl:h-full 2xl:pt-[3rem]' >
                      <h1 className='text-[25px] lg:text-[40px] font-semibold  text-[rgba(255,255,255,1)] 2xl:text-[55px] '>
                          Why June Infrastructure?  
                      </h1>
                    </div>
                </div>

                <div className='w-full  lg:w-[920px] pt-[2em] 2xl:w-[88rem] '>
                  <h1 className='text-[18px] px-3.5 lg:px-0 lg:text-[30px] lg:leading-[50px] py-[1em] font-medium text-center 2xl:text-[45px] 2xl:leading-[80px]'>
                    At June, we don’t just build digital solutions — we build the backbone that Africa’s industries rely on. Our secure, scalable, and connected systems are designed to handle the complexity of critical sectors, ensuring resilience today and readiness for tomorrow. 
                  </h1>
                  <p className='text-center font-normal px-2.5 lg:px-0 text-[16.5px] lg:text-[29px] 2xl:text-[44px]'>
                    With June, you gain more than technology — you gain a partner committed to powering transformation across the continent. 
                  </p>
                </div> 
          </div> 
                  
          {/* OUR-VISION */}
          <div id="company" className='
            h-full lg:h-[500px] bg-[rgba(0,0,0,1)] flex items-center justify-center py-[3em] lg:pb-0 lg:pt-[4em] lg:pl-[5em] gap-[4rem] flex-wrap 2xl:h-max 2xl:pl-0  2xl:gap-[6rem] 2xl:pt-[7rem]'>
            <div className='w-[320px] lg:w-[460px] md:w-[400px] h-full    2xl:w-[600px]'>
              <img src={VisionImage} alt="" className=' h-[100%] object-contain  lg:h-full lg:object-cover' />
            </div>
             
            <div className='flex flex-col gap-8 mb-[2rem]'>
              {Content.map((item, index) => ( 
              <div key={index} className="space-y-2 text-[rgba(255,255,255,1)] font-semibold w-full md:w-full md:text-[20px] lg:w-[610px] px-6 lg:p-0 pb-4 2xl:w-[900px]   ">
                <h3 className="text-[15px] tracking-widest font-medium 2xl:text-[21px] ">
                  {item.title}
                </h3> 
                <p className="text-[21px] leading-relaxed 2xl:text-[31px] ">
                  {item.description}
                </p> 
              </div>
               ) ) }
            </div> 
          </div>


           {/* BUSINESS-SECTION */}
            <section className='h-[660px] md:h-max md:pb-12 bg-[rgba(255,255,255,1)] flex flex-col py-[4rem] pl-[1rem] lg:pl-[7rem] mb-[35rem] lg:mb-0 2xl:pl-[9.5rem] 2xl:py-[6rem]'>
               <div className='w-full lg:w-[645px] 2xl:w-[850px] '>
                 <h3 className='text-[30px] lg:text-[57px] lg:leading-[75px] font-medium 2xl:text-[80px] 2xl:leading-[6.5rem]'>
                   Building For Businesses At Every Stage
                 </h3>
                 <p className='text-[17.5px] lg:text-[17px] pt-[1em] w-full lg:w-[535px] 2xl:w-[700px] 2xl:text-[23px] '>
                   From idea to scale, June gives you the infrastructure to launch fast, grow securely, and expand confidently.
                 </p>
               </div>

                <div className="w-full lg:max-w-6xl mt-12 flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-[3em] items-center 2xl:max-w-[90%] 2xl:gap-[4.5rem]">
                  {data.map((item, index) => (
                    <div key={index} className="
                      rounded-[26px] shadow-sm hover:shadow-lg transition-all duration-300 w-[338px] h-[270px] flex flex-col overflow-hidden py-[1.5em] pl-[1em] bg-[rgba(249,244,255,1)] 2xl:w-[480px] 2xl:h-[370px] 2xl:pl-[3rem]" >  
                      <h3 className="text-[23px] 2xl:text-[32px] font-semibold text-[rgba(13,13,13,1)] text-start" >
                        {item.title} 
                      </h3>
                      <img src={item.image} alt={item.title} className="w-35 h-38  ml-[5em] 2xl:w-58 2xl:h-46  2xl:mt-[1em] 2xl:mb-[1.5em]" />
                      <p className="text-[rgba(13,13,13,1)] text-[11px] leading-relaxed w-[300px] 2xl:text-[14.3px]
                      2xl:w-[400px]">
                        {item.description}
                      </p>
                    </div> ))}
                </div>
            </section>

           
           {/* OUR-SECTION */}
           
            <article id="solution" className='h-max md:h-[750px]  md:mt-[-35rem] flex flex-col py-[3rem] justify-center items-center  lg:my-0 lg:pb-[8em] 2xl:h-full 2xl:pb-[10rem] 2xl:my-0'>
              <div className='text-center font-poppins'>
                <h3 className='text-[30px] 2xl:text-[40px] font-semibold '>
                  Our Solution
                </h3> 
                <p className='text-[18px] 2xl:text-[25px] font-light text-[rgba(18,18,18,1)]'>
                Cutting-edge technology solutions designed for Africa's most critical industries 
                </p>
              </div>

              <div className='w-full lg:w-max h-max mt-8 md:mt-2 flex lg:gap-2 flex-col lg:flex-row lg:mt-[2em] '>
                <div className='w-full lg:w-[400px] 2xl:w-[565px] h-max py-[1.5rem] px-8 lg:pl-0 md:px-[3.5em] '>
                   <h2 className='text-[30px] lg:text-[27px] font-semibold 2xl:text-[40px]'>
                     SKYGRIT 
                   </h2>
                   
                   <h3 className='text-[30px] lg:text-[27px] font-semibold lg:leading-[40px] 2xl:text-[40px] 2xl:leading-[60px] '>
                     Revolutionizing Post-Booking Airline Customer Experience in Nigeria and Africa 
                   </h3> 
                   
                   <p className='text-[14px] lg:text-[10px] pt-[1em] 2xl:text-[15px] font-poppins'>
                     Skygrit enables airlines to manage cancellations, rerouting, refunds and passenger alerts with full automation, delivering a seamless post-booking experience. 
                   </p> 
                </div>
                 
                 <div className='w-[350px] mt-5 md:w-[550px] md:mt-6 lg:w-[510px] relative flex justify-center mx-auto lg:mt-0 items-center 2xl:mt-0  2xl:w-[690px]' > 
                    <div className='
                      absolute h-[70px] w-[235px] bg-[rgba(32,17,60,0.56)] cursor-pointer rounded-[100px] flex items-center pl-6 gap-5 2xl:w-[275px] 2xl:h-[90px]'>
                      <span>
                        <img src={LearnMore} alt="" />
                      </span> 
                      <span className='text-[22px] font-semibold text-[rgba(249,244,255,1)] font-poppins'>
                        Learn More 
                      </span>
                    </div>
                    <img src={SolutionImage} alt="" className='ml-2.5 w-full h-full object-cover rounded-[30px]' />
                 </div>
              </div>
                 
            </article>
            
          {/* REVOLUTION-SECTION */}
           <figure className='w-full lg:h-max bg-[rgba(10,11,13,1)] flex justify-center relative overflow-hidden '>
             <div className='py-[3em] lg:mr-[12em] 2xl:py-[4em]' >
               <h2 className=
                'text-[25px] font-semibold text-[rgba(255,255,255,1)] w-[350px] lg:w-[720px] md:w-[600px] lg:text-[52px] lg:leading-[60px] pb-[20px] leading-[40px] md:leading-[60px]  2xl:text-[70px] 2xl:w-[62rem] 2xl:leading-[85px]'>
                 Let’s revolutionize your digital infrastructure. 
               </h2> 
               <div className="
                relative bg-[rgba(108,42,239,1)] text-white cursor-pointer rounded-[12px] outline-0 h-[55px] w-[179.6px] text-[16px] font-medium flex justify-center items-center gap-5 overflow-hidden transition-all duration-300 ease-out before:content-[''] before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.2)] before:translate-x-[-100%] before:transition-transform before:duration-500 before:rounded-[12px] hover:before:translate-x-0 2xl:w-[200px] 2xl:h-[70px] 2xl:text-[20px]"
               >
                 <span className="relative z-10">Get in Touch</span>
                 <span className="relative z-10">
                   <img src={ArrowIcon} alt="" className="w-4 h-4" /> 
                 </span>
               </div>
             </div>

             <div className=' lg:h-[350px] lg:w-[670px] absolute z-10 right-0 2xl:h-[400px] 2xl:w-[930px] '>
               <img src={VectorLogo} alt="" className='w-full h-full object-contain ' />
             </div>
          </figure>          
    </div>
  )
}

export default Home