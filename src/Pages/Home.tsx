import HeroImage from './assets/Images/hero-image.svg'
import SolarIMage from './assets/Images/Solar-image.svg'
import VisionImage from './assets/Images/Our-vision-Image.svg'
import JetImage from './assets/Images/Jet-Image.svg'
import HomeImage from './assets/Images/House-Illustration.svg'
import EnterpriseImage from './assets/Images/Enterprises-image.svg'
import SolutionImage from './assets/Images/Our-Solution-Image.svg'
import LearnMore from './assets/Icons/learnmore-logo.svg'
import ArrowIcon from './assets/Icons/Arrow-white.svg'
import VectorLogo from './assets/Images/vector-logo.svg'


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
          <div className='w-full h-[650px] bg-[rgba(0,0,0,1)] flex items-center relative px-[5rem] '> 
              <div className=' w-[655px] '> 
                  <h1 className='text-[73px] font-bold text-[rgba(255,255,255,1)] leading-[110.00000000000001%]'> 
                    The digital backbone for Africa’s businesses. 
                  </h1> 
                  <p className='text-[rgba(255,255,255,1)] font-[400px] text-[14px] leading-6 pt-3'>
                    Powering innovation, resilience, and growth across the continent’s most vital sectors
                  </p> 
              </div> 
              <div className=' max-w-[450px] absolute left-[755px] top-[80px]' >
                  <img src={HeroImage} alt="" />
              </div> 
          </div> 
            
          {/* WHY- SECTION */}

          <div className='h-[640px] bg-[rgba(255,255,255,1)] flex items-center justify-center flex-col pt-[3rem]'> 
                <div className='h-[150px] w-[800px] bg-[rgba(0,0,0,1)] rounded-[36px] overflow-hidden flex items-center'>
                  <img src={SolarIMage} alt="" className='W-[350] h-full object-cover' />
                    <div className='text-center w-full' >
                      <h1 className='text-[40px] font-semibold text-[rgba(255,255,255,1)] '>
                          Why June Infrastructure?  
                      </h1>
                    </div>
                </div>

                <div className='w-[920px] py-[2em]'>
                  <h1 className='text-[30px] leading-[50px] py-2 font-medium text-center'>
                    At June, we don’t just build digital solutions , we build the backbone that Africa’s industries rely on. Our secure, scalable, and connected systems are designed to handle the complexity of critical sectors, ensuring resilience today and readiness for tomorrow. 
                  </h1>
                  <p className='text-center font-normal text-[29px]'>
                    With June, you gain more than technology , you gain a partner committed to powering transformation across the continent. 
                  </p>
                </div> 
          </div> 
                  
          {/* OUR-VISION */}
          <div className='
            h-[500px] bg-[rgba(0,0,0,1)] flex items-center justify-cente pt-[4em] pl-[8em] gap-[4rem] flex-wrap'>
            <div className='w-[450px] h-full '>
              <img src={VisionImage} alt="" className=' h-full object-cover' />
            </div>
             
            <div>
              {Content.map((item, index) => ( 
              <div key={index} className="space-y-2 text-[rgba(255,255,255,1)] font-semibold w-[610px] pb-4">
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
            <section className='h-[660px] bg-[rgba(255,255,255,1)] flex flex-col pt-[4rem] pl-[6rem] '>
               <div className='w-[650px]'>
                 <h3 className='text-[58px] leading-[75px] font-medium'>
                   Building For Businesses At Every Stage
                 </h3>
                 <p className='text-[18px] w-[550px]'>
                   From idea to scale, June gives you the infrastructure to launch fast, grow securely, and expand confidently.
                 </p>
               </div>

                <div className="max-w-6xl mt-12 grid md:grid-cols-3 gap-2">
                  {data.map((item, index) => (
                    <div key={index} className="
                      rounded-[26px] shadow-sm hover:shadow-lg transition-all duration-300 w-[348px] h-[270px] flex flex-col overflow-hidden pt-[1.5em] pl-[1.5em] bg-[rgba(249,244,255,1)] " >  
                      <h3 className="text-[23px] font-semibold text-[rgba(13,13,13,1)] mb-3 text-start " >
                        {item.title} 
                      </h3>
                      <img src={item.image} alt={item.title} className="w-30 h-30 object-contain mb-5 mx-auto" />
                      <p className="text-[rgba(13,13,13,1)] text-[11px] leading-relaxed w-[300px]">
                        {item.description}
                      </p>
                    </div> ))}
                </div>
            </section>

           
           {/* OUR-SECTION */}
           
            <article className='h-[620px] flex flex-col py-[3rem] justify-center items-center '>
              <div className='text-center'>
                <h3 className='text-[40px] font-semibold '>
                  Our Solution
                </h3> 
                <p className='text-[22.69px] font-light text-[rgba(18,18,18,1)]'>
                Cutting-edge technology solutions designed for Africa's most critical industries 
                </p>
              </div>

              <div className=' w-[1000px] h-[350px] mt-8 flex gap-6 '>
                <div className='w-[485px] h-full py-5 px-8 '>
                   <h2 className='text-[36px] font-semibold'>
                     SKYGRIT 
                   </h2>
                   
                   <h3 className='text-[36px] font-semibold leading-[45px]'>
                     Revolutionizing Post-Booking Airline Customer Experience in Nigeria and Africa 
                   </h3> 
                   
                   <p className='text-[14px]'>
                     Skygrit enables airlines to manage cancellations, rerouting, refunds and passenger alerts with full automation, delivering a seamless post-booking experience. 
                   </p> 
                </div>
                 
                 <div className=' w-[500px] rounded-4xl overflow-hidden relative flex justify-center items-center ' > 
                    <div className='
                      absolute h-[70px] w-[235px] bg-[rgba(32,17,60,0.56)] cursor-pointer rounded-[100px] flex items-center pl-6 gap-5'>
                      <span>
                        <img src={LearnMore} alt="" />
                      </span> 
                      <span className='text-[22px] font-semibold text-[rgba(249,244,255,1)]'>
                        Learn More 
                      </span>
                    </div>
                    <img src={SolutionImage} alt="" className='w-full h-full object-cover ' />
                 </div>
              </div>
                 
            </article>
            
          {/* REVOLUTION-SECTION */}
           <figure className='w-full bg-[rgba(10,11,13,1)] flex justify-center relative overflow-hidden '>
             <div className='py-[4em]' >
               <h2 className=
                'text-[40px] font-semibold text-[rgba(255,255,255,1)] w-[800px] leading-[60px] pb-[20px] '>
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

             <div className='absolute h-[360px] w-[658px] left-[693px] '>
               <img src={VectorLogo} alt="" className='w-full h-full object-contain ' />
             </div>
          </figure>          
    </div>
  )
}

export default Home