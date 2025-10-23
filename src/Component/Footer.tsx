import JuneLogo from '../assets/Images/june-logo-2.svg'
import Email from '../assets/Icons/email-logo.svg'
import Arrow from '../assets/Icons/Arrow-icon.svg'
import FacebookLogo from '../assets/Icons/facebook-logo.svg'
import TwitterLogo from '../assets/Icons/twitter-logo.svg'
import InstagramLogo from '../assets/Icons/instagram-logo.svg'
import LinkedinLogo from '../assets/Icons/linkedin-logo.svg'
const Footer = () => {

  const Logos = [
                {icon: FacebookLogo},
                {icon: TwitterLogo},
                {icon: InstagramLogo},
                {icon: LinkedinLogo}
              ]
  return (
    <section id="contact" className=':h-[230px] bg-[rgba(255,255,255,1)] flex justify-center py-[3em] pb-[5rem] lg:py-[5em] md:pt-8'>
      <footer className='flex justify-between w-[1050px] flex-col gap-6 px-6 md:flex-row lg:flex-row lg:gap-0 lg:px-0'>
        <div className=''>
          <img src={JuneLogo} alt="" className='w-[95px] cursor-pointer' />
        </div>

        <div className='text-[16px] leading-[28px] flex gap-3 '>
          <span className='text-[15.8px] text-[rgba(32,17,60,1)] cursor-pointer '>
            Privacy Policy
          </span>
          <span className='cursor-pointer'>
            Terms & Conditions
          </span>
        </div>

        <div>
          <div>
            <h2 className='text-[22.5px] text-[rgba(120,60,244,1)] leading-[28px]'>Subscribe to our Newsletter</h2>
          </div>
          <div className='flex justify-between lg:gap-3 my-5 border-b-1 border-[rgba(156,163,175,1)] pb-3 px-1' >
            <span>
              <img src={Email} alt="" className='cursor-pointer' />
            </span>
            <span>
              <input type="text" placeholder='Type your e-mail' className='w-[300px] text-[12.91px] placeholder-[rgba(156,163,175,1)] placeholder:text-[12.91px] leading-[100%]  pb-1 pt-[0.5px] outline-0 border-0 lg:w-[200px]'   />
            </span>

            <span>
              <img src={Arrow} alt="" className='cursor-pointer' />
            </span>
          </div>

          <div className='flex gap-3'>
            {Logos.map((logo, index)=>(
              <span key={index} className=' w-[50px] h-[24px] flex justify-center cursor-pointer'>
                <img src={logo.icon} alt="" />
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
    
  )
}

export default Footer