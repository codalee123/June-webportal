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
      image:JetImage,
    },
    {
      title: "Mid-sized Businesses",
      description:
        "Bridge the gap between startup agility and enterprise stability with infrastructure built for growth.",
      image: HomeImage,
    },
    {
      title: "Enterprises",
      description:
        "June delivers the flexibility of SaaS with the resilience of enterprise infrastructure—built for Africa’s largest businesses.",
      image: EnterpriseImage
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="w-full h-auto bg-black flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 2xl:px-36 py-8 sm:py-12 md:py-16 lg:py-12 xl:py-8 2xl:py-8">
        <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[565px] 2xl:max-w-[850px] mt-20 sm:mt-24 md:mt-28 lg:mt-20 xl:mt-16 2xl:mt-16 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[59px] 2xl:text-[89px] font-bold text-white leading-tight lg:leading-[110%]">
            The digital backbone for Africa's businesses.
          </h1>
          <p className="text-white font-normal text-sm sm:text-base md:text-base lg:text-[8px] xl:text-[12px] 2xl:text-[17px] leading-6 pt-3 sm:pt-4">
            Powering innovation, resilience, and growth across the continent's most vital sectors
          </p>
        </div>
        <div className="w-full max-w-[270px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[540px] 2xl:max-w-[750px] pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-16 2xl:pb-32">
          <img src={HeroImage} alt="Hero" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="h-auto bg-white flex items-center justify-center flex-col py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-28">
        <div className="h-auto min-h-[150px] sm:min-h-[140px] md:h-[100px] lg:h-[150px] 2xl:h-[200px] w-[90%] max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[65rem] bg-black rounded-[36px] overflow-hidden flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <img src={SolarIMage} alt="Solar" className="w-full md:w-auto h-[80px] md:h-full object-cover" />
          <div className="text-center w-full py-4 md:py-0 md:px-6 lg:p-6 2xl:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[55px] font-semibold text-white">
              Why June Infrastructure?
            </h1>
          </div>
        </div>

        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[750px] lg:max-w-[920px] xl:max-w-[1000px] 2xl:max-w-[88rem] pt-8 sm:pt-10 md:pt-12 lg:pt-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-3xl 2xl:text-[45px] lg:leading-[50px] 2xl:leading-[80px] py-4 sm:py-6 md:py-8 lg:py-8 font-medium text-center px-3.5 lg:px-0">
            At June, we don't just build digital solutions — we build the backbone that Africa's industries rely on. Our secure, scalable, and connected systems are designed to handle the complexity of critical sectors, ensuring resilience today and readiness for tomorrow.
          </h1>
          <p className="text-center font-normal text-base sm:text-lg md:text-xl lg:text-[29px] xl:text-3xl 2xl:text-[44px] px-2.5 lg:px-0">
            With June, you gain more than technology — you gain a partner committed to powering transformation across the continent.
          </p>
        </div>
      </div>

      {/* OUR VISION */}
      <div id="company" className="h-auto bg-black flex flex-col lg:flex-row items-center justify-center py-12 sm:py-16 md:py-20 lg:py-16 xl:py-0 xl:pt-20 xl:pb-0 2xl:pt-28 2xl:py-0 2xl:pb-0 px-4 sm:px-6 md:px-8 lg:px-0 lg:pl-20 xl:pl-15 2xl:pl-0 gap-12 sm:gap-16 md:gap-20 lg:gap-16 xl:gap-15 2xl:gap-24">
        <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[460px] xl:max-w-[470px] 2xl:max-w-[600px]">
          <img src={VisionImage} alt="Vision" className="w-full h-auto object-contain lg:object-cover" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 mb-8 lg:mb-0">
          {Content.map((item, index) => (
            <div key={index} className="space-y-2 text-white font-semibold w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[610px] xl:max-w-[620px] 2xl:max-w-[900px] mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0 pb-4 ">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-base 2xl:text-[21px] tracking-widest font-medium">
                {item.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[21px] xl:text-[21px] 2xl:text-[31px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BUSINESS SECTION */}
      <section className="h-auto bg-white flex flex-col py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 md:px-8 lg:pl-16 xl:pl-20 2xl:pl-36">
        <div className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[645px] xl:max-w-[650px] 2xl:max-w-[850px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[57px] xl:text-6xl 2xl:text-[80px] lg:leading-[75px] 2xl:leading-[6.5rem] font-medium">
            Building For Businesses At Every Stage
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-[17px] xl:text-lg 2xl:text-[23px] pt-4 sm:pt-6 md:pt-8 lg:pt-4 w-full max-w-[90%] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[535px] xl:max-w-[550px] 2xl:max-w-[700px]">
            From idea to scale, June gives you the infrastructure to launch fast, grow securely, and expand confidently.
          </p>
        </div>

        <div className="w-full max-w-6xl 2xl:max-w-[90%] mt-8 sm:mt-10 md:mt-12 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center sm:items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12 2xl:gap-[4rem]">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-[26px] shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[338px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[338px] xl:max-w-[348px] 2xl:max-w-[480px] h-auto min-h-[270px] sm:min-h-[300px] lg:min-h-[270px] 2xl:min-h-[370px] flex flex-col overflow-hidden py-5 sm:py-4 lg:py-6 2xl:py-8 px-4 sm:px-5 lg:px-4 2xl:px-12 bg-[#f9f4ff]"
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-[23px] xl:text-2xl 2xl:text-[32px] font-semibold text-[#0d0d0d]">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-38 lg:h-30 2xl:w-58 2xl:h-46 mx-auto my-4 sm:my-6 lg:my-4 xl:my-4 2xl:my-6 object-contain"
              />
              <p className="text-[#0d0d0d] text-xs sm:text-sm md:text-sm lg:text-[11px] xl:text-[11.5px] 2xl:text-[14.3px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR SOLUTION */}
      <article id="solution" className="h-auto flex flex-col py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-24 xl:pb-[7rem] 2xl:pb-30 justify-center items-center">
        <div className="text-center font-poppins px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold">
            Our Solution
          </h3>
          <p className="text-base sm:text-lg md:text-[19px] lg:text-lg xl:text-xl 2xl:text-[25px] font-light text-[#121212] mt-2">
            Cutting-edge technology solutions designed for Africa's most critical industries
          </p>
        </div>

        <div className="w-full max-w-[90%] lg:max-w-none h-auto mt-8 sm:mt-10 md:mt-12 lg:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-2 items-center justify-center lg:items-start px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="w-full lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[565px] h-auto py-6 sm:py-8 lg:py-6 px-4 sm:px-6 md:px-8 lg:pl-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[27px] xl:text-3xl 2xl:text-[40px] font-semibold">
              SKYGRIT
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[27px] xl:text-[32px] 2xl:text-[40px] font-semibold lg:leading-[40px] 2xl:leading-[60px] mt-2">
              Revolutionizing Post-Booking Airline Customer Experience in Nigeria and Africa
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-[15px] font-poppins pt-4 lg:pt-4">
              Skygrit enables airlines to manage cancellations, rerouting, refunds and passenger alerts with full automation, delivering a seamless post-booking experience.
            </p>
          </div>

          <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[510px] xl:max-w-[500px] 2xl:max-w-[690px] relative flex justify-center items-center mt-5 lg:mt-0">
            <div className="absolute h-[70px] sm:h-[80px] lg:h-[70px] 2xl:h-[90px] w-[235px] sm:w-[260px] lg:w-[235px] 2xl:w-[275px] bg-[rgba(32,17,60,0.56)] cursor-pointer rounded-[100px] flex items-center pl-6 gap-5 hover:bg-[rgba(32,17,60,0.7)] transition-all z-10">
              <span>
                <img src={LearnMore} alt="" width="40" height="40" />
              </span>
              <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#f9f4ff] font-poppins">
                Learn More
              </span>
            </div>
            <img src={SolutionImage} alt="Solution" className="w-full h-auto object-cover rounded-[30px]" />
          </div>
        </div>
      </article>

      {/* REVOLUTION SECTION */}
      <figure className="w-full h-auto bg-[#0a0b0d] flex justify-center items-center relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[720px] xl:max-w-[800px] 2xl:max-w-[62rem] z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] xl:text-[50px] 2xl:text-[70px] font-semibold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] 2xl:leading-[85px] pb-5 sm:pb-6 md:pb-8 lg:pb-5 ">
            Let's revolutionize your digital infrastructure.
          </h2>
          <button className="relative bg-[#6c2aef] text-white cursor-pointer rounded-[12px] h-[55px] sm:h-[60px] lg:h-[55px] 2xl:h-[70px] w-[179.6px] sm:w-[190px] lg:w-[179.6px] 2xl:w-[200px] text-base sm:text-lg lg:text-base 2xl:text-xl font-medium flex justify-center items-center gap-5 overflow-hidden transition-all duration-300 ease-out hover:bg-[#5a22c7] before:content-[''] before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.2)] before:translate-x-[-100%] before:transition-transform before:duration-500 before:rounded-[12px] hover:before:translate-x-0">
            <span className="relative z-10">Get in Touch</span>
            <span className="relative z-10">
              <img src={ArrowIcon} alt="" />
            </span>
          </button>
        </div>

        <div className="hidden lg:block lg:h-[350px] lg:w-[670px] 2xl:h-[400px] 2xl:w-[930px] absolute right-0 z-10">
          <img src={VectorLogo} alt="Vector Logo" className="w-full h-full object-contain" />
        </div>
      </figure>
    </div>
  )
}

export default Home