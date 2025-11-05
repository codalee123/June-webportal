import JuneLogo from '../assets/Images/june-logo-2.svg'
import Email from '../assets/Icons/email-logo.svg'
import Arrow from '../assets/Icons/Arrow-icon.svg'
import FacebookLogo from '../assets/Icons/facebook-logo.svg'
import TwitterLogo from '../assets/Icons/twitter-logo.svg'
import InstagramLogo from '../assets/Icons/instagram-logo.svg'
import LinkedinLogo from '../assets/Icons/linkedin-logo.svg'
const Footer = () => {

  return (
    <section id="contact" className=':h-max bg-[rgba(255,255,255,1)] flex justify-center py-[3em]  lg:py-[3em] md:pt-8'>
      <footer className='flex justify-between w-[1050px] flex-col gap-6 px-6 md:flex-row lg:flex-row lg:gap-0 lg:px-0 2xl:w-[75%] '>
        <div className=''>
          <img src={JuneLogo} alt="" className='w-[85px] lg:w-[85px] cursor-pointer md:w-[75px] 2xl:w-[8rem]' />
        </div>

        <div className='text-[14px] leading-[28px] flex gap-3  h-max 2xl:text-[22px] 2xl:leading-[50px] font-poppins '>
          <span className='text-[15.8px] 2xl:text-[21.8px] text-[rgba(32,17,60,1)] cursor-pointer hover:text-[rgba(108,42,239,1)]  '>
            Privacy Policy
          </span>
          <span className='cursor-pointer hover:text-[rgba(108,42,239,1)]'>
            Terms & Conditions
          </span>
        </div>

        <div>
          <div>
            <h2 className='text-[18px] font-poppins text-[rgba(120,60,244,1)] 2xl:text-[25px] leading-[28px] 2xl:leading-[50px]'>
              Subscribe to our Newsletter</h2>
          </div>
          <div className='flex justify-between gap-1 lg:gap-3 my-5 border-b-1 border-[rgba(156,163,175,1)] pb-3 px-1 2xl:gap-2 ' >
            <span>
              <img src={Email} alt="" className='cursor-pointer' />
            </span>
            <span>
              <input type="text" placeholder='Type your e-mail' className='w-[250px] md:w-[200px] text-[12.91px] placeholder-[rgba(156,163,175,1)] placeholder:text-[12.91px] leading-[100%]  pb-1 pt-[0.5px] outline-0 border-0 lg:w-[160px]  2xl:w-[290px] 2xl:text-[14px] 2xl:placeholder:text-[14px]'   />
            </span>

            <span>
              <img src={Arrow} alt="" className='cursor-pointer' />
            </span>
          </div>

          <div className='flex gap-3 2xl:gap-8 '>
            <a  className=' w-[50px] h-[24px]  2xl:h-[30px]  flex justify-center cursor-pointer'>
              <img src={FacebookLogo} alt=""  />
            </a>
            <a  className=' w-[50px] h-[24px] 2xl:h-[30px]  flex justify-center cursor-pointer'>
              <img src={TwitterLogo} alt="" />
            </a>
            <a  className=' w-[50px] h-[24px] 2xl:h-[30px]  flex justify-center cursor-pointer'>
              <img src={InstagramLogo} alt="" />
            </a>
            <a href='https://www.linkedin.com/company/juneinfra/' className=' w-[50px] h-[24px] flex justify-center cursor-pointer 2xl:h-[30px] '>
              <img src={LinkedinLogo} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </section>
    
  )
}

export default Footer