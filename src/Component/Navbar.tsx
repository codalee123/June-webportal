// import { useState } from 'react'
import JuneLogo from '../assets/Images/June-Logo.svg'
import ArrowIcon from '../assets/Icons/Arrow-black.svg'

const Navbar = () => {
  // const [active, setActive] = useState("Solution")
  return (
    <div>
      <nav className='flex justify-between items-center bg-[rgba(0,0,0,1)] w-full h-[96px] px-[4rem] fixed z-50'>
          <div>
          <img src={JuneLogo} alt="" className="w-[120px] h-[76]  relative"/>
          </div>

          <ul className="flex justify-center gap-[48px] text-white text-[15.25px] leading-[28px]">
            <li>Solution</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>

          <div className="text-[rgba(32,17,60,1)] bg-[rgba(255,255,255,1)]  cursor-pointer rounded-[12px] outline-0 h-[55px] w-[179.6px] text-[16px] font-medium flex justify-center items-center gap-5">
            <span>Get in Touch</span>
            <span><img src={ArrowIcon} alt="" className='' /></span>
          </div>

      </nav>
    </div>
  )
}

export default Navbar