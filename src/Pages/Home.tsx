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
          <div className='w-full lg:w-full h-[620px] gap-[1em] lg:pt-[3em] bg-[rgba(0,0,0,1)] flex items-center lg:gap-[2em]  px-[2em] lg:px-[5rem] flex-wrap '> 
              <div className='w-max lg:w-[655px] mt-[7rem] lg:mt-0'> 
                  <h1 className='text-[30px] md:text-[45px] lg:text-[73px] lg:leading-[110%] font-bold text-[rgba(255,255,255,1)] leading-[50px]'> 
                    The digital backbone for Africa’s businesses. 
                  </h1> 
                  <p className='text-[rgba(255,255,255,1)] font-[400px] text-[14px] leading-6 pt-3'>
                    Powering innovation, resilience, and growth across the continent’s most vital sectors
                  </p> 
              </div> 
              <div className='max-w-[270px] mx-auto md:max-w-[320px] md:mx-auto md:pb-4  lg:max-w-[450px] pb-[4em]' >
                  <img src={HeroImage} alt=""  />
              </div> 
          </div> 
            
          {/* WHY- SECTION */}

          <div className='h-max lg:h-[640px] bg-[rgba(255,255,255,1)] flex items-center justify-center flex-col pt-[3rem]'> 
                <div className='h-[150px] w-max md:h-[100px] lg:h-[150px]  lg:w-[800px] bg-[rgba(0,0,0,1)] rounded-[36px] overflow-hidden flex flex-col md:flex-row md:gap-0 lg:flex-row items-center gap-4 lg:gap-0'>
                  <img src={SolarIMage} alt="" className='w-[350px] h-[80px] md:h-full lg:w-[350px] lg:h-full object-cover' />
                    <div className='text-center w-full pt-0 lg:p-6' >
                      <h1 className='text-[25px] lg:text-[40px] font-semibold text-[rgba(255,255,255,1)] '>
                          Why June Infrastructure?  
                      </h1>
                    </div>
                </div>

                <div className='w-full  lg:w-[920px] py-[2em]'>
                  <h1 className='text-[18px] px-3.5 lg:px-0 lg:text-[30px] lg:leading-[50px] py-[1em] font-medium text-center'>
                    At June, we don’t just build digital solutions , we build the backbone that Africa’s industries rely on. Our secure, scalable, and connected systems are designed to handle the complexity of critical sectors, ensuring resilience today and readiness for tomorrow. 
                  </h1>
                  <p className='text-center font-normal px-2.5 lg:px-0 text-[16.5px] lg:text-[29px]'>
                    With June, you gain more than technology , you gain a partner committed to powering transformation across the continent. 
                  </p>
                </div> 
          </div> 
                  
          {/* OUR-VISION */}
          <div id="company" className='
            h-full lg:h-[500px] bg-[rgba(0,0,0,1)] flex items-center justify-center py-[3em] lg:pb-0 lg:pt-[4em] lg:pl-[5em] gap-[4rem] flex-wrap'>
            <div className='w-[320px] lg:w-[460px] md:w-[400px] h-full '>
              <img src={VisionImage} alt="" className=' h-[100%px] object-contain lg:h-full lg:object-cover' />
            </div>
             
            <div>
              {Content.map((item, index) => ( 
              <div key={index} className="space-y-2 text-[rgba(255,255,255,1)] font-semibold w-full md:w-full md:text-[20px] lg:w-[610px] px-6 lg:p-0 pb-4">
                <h3 className="text-[15px] tracking-widest font-medium ">
                  {item.title}
                </h3> 
                <p className="text-[21px] leading-relaxed ">
                  {item.description}
                </p> 
              </div>
               ) ) }
            </div> 
          </div>


           {/* BUSINESS-SECTION */}
            <section className='h-[660px] md:h-max md:pb-12 bg-[rgba(255,255,255,1)] flex flex-col py-[4rem] pl-[1rem] lg:pl-[6rem] mb-[35rem] lg:mb-0'>
               <div className='w-full lg:w-[645px]'>
                 <h3 className='text-[30px] lg:text-[57px] lg:leading-[75px] font-medium'>
                   Building For Businesses At Every Stage
                 </h3>
                 <p className='text-[17px] w-full lg:w-[535px] '>
                   From idea to scale, June gives you the infrastructure to launch fast, grow securely, and expand confidently.
                 </p>
               </div>

                <div className="w-full lg:max-w-6xl mt-12 flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-[3em] items-center justify-center">
                  {data.map((item, index) => (
                    <div key={index} className="
                      rounded-[26px] shadow-sm hover:shadow-lg transition-all duration-300 w-[338px] h-[270px] flex flex-col overflow-hidden py-[1.5em] pl-[1em] bg-[rgba(249,244,255,1)]" >  
                      <h3 className="text-[23px] font-semibold text-[rgba(13,13,13,1)] text-start" >
                        {item.title} 
                      </h3>
                      <img src={item.image} alt={item.title} className="w-35 h-38  ml-[5em]" />
                      <p className="text-[rgba(13,13,13,1)] text-[11px] leading-relaxed w-[300px]">
                        {item.description}
                      </p>
                    </div> ))}
                </div>
            </section>

           
           {/* OUR-SECTION */}
           
            <article id="solution" className='h-max md:h-[750px] lg:h-[700px] md:mt-[-35rem] flex flex-col py-[3rem] justify-center items-center mb-[15rem] lg:my-0 lg:pb-[8em]'>
              <div className='text-center'>
                <h3 className='text-[40px] font-semibold '>
                  Our Solution
                </h3> 
                <p className='text-[22.69px] font-light text-[rgba(18,18,18,1)]'>
                Cutting-edge technology solutions designed for Africa's most critical industries 
                </p>
              </div>

              <div className='w-full lg:w-[1000px] h-[350px] mt-8 md:mt-2 flex lg:gap-6 flex-col lg:flex-row '>
                <div className='w-full lg:w-[520px] h-full py-5 px-8 md:px-[3.5em] '>
                   <h2 className='text-[30px] lg:text-[36px] font-semibold'>
                     SKYGRIT 
                   </h2>
                   
                   <h3 className='text-[30px] lg:text-[36px] font-semibold lg:leading-[45px] '>
                     Revolutionizing Post-Booking Airline Customer Experience in Nigeria and Africa 
                   </h3> 
                   
                   <p className='text-[15px]'>
                     Skygrit enables airlines to manage cancellations, rerouting, refunds and passenger alerts with full automation, delivering a seamless post-booking experience. 
                   </p> 
                </div>
                 
                 <div className='w-[350px] mt-5 md:w-[550px] md:mt-6 lg:w-[500px] relative flex justify-center mx-auto lg:mx-0 items-center' > 
                    <div className='
                      absolute h-[70px] w-[235px] bg-[rgba(32,17,60,0.56)] cursor-pointer rounded-[100px] flex items-center pl-6 gap-5'>
                      <span>
                        <img src={LearnMore} alt="" />
                      </span> 
                      <span className='text-[22px] font-semibold text-[rgba(249,244,255,1)]'>
                        Learn More 
                      </span>
                    </div>
                    <img src={SolutionImage} alt="" className='ml-2.5 w-full h-full object-cover rounded-2xl' />
                 </div>
              </div>
                 
            </article>
            
          {/* REVOLUTION-SECTION */}
           <figure className='w-full lg:h-[310px] bg-[rgba(10,11,13,1)] flex justify-center relative overflow-hidden '>
             <div className='py-[3em] lg:mr-[12em]' >
               <h2 className=
                'text-[25px] font-semibold text-[rgba(255,255,255,1)] w-[350px] lg:w-[700px] md:w-[600px] md:text-[40px] lg:leading-[60px] pb-[20px] leading-[40px] md:leading-[60px]  '>
                 Let’s revolutionize your digital infrastructure. 
               </h2> 
               <div className="
                relative bg-[rgba(108,42,239,1)] text-white cursor-pointer rounded-[12px] outline-0 h-[55px] w-[179.6px] text-[16px] font-medium flex justify-center items-center gap-5 overflow-hidden transition-all duration-300 ease-out before:content-[''] before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.2)] before:translate-x-[-100%] before:transition-transform before:duration-500 before:rounded-[12px] hover:before:translate-x-0"
               >
                 <span className="relative z-10">Get in Touch</span>
                 <span className="relative z-10">
                   <img src={ArrowIcon} alt="" className="w-4 h-4" /> 
                 </span>
               </div>
             </div>

             <div className=' h-[360px] w-[660px] absolute z-10 right-0 '>
               <img src={VectorLogo} alt="" className='w-full h-full object-contain ' />
             </div>
          </figure>          
    </div>
  )
}

export default Home