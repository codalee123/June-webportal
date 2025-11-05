
import JuneLogo from '../assets/Images/June-Logo.svg'
import ArrowIcon from '../assets/Icons/Arrow-black.svg'
import { useState } from 'react'

const Navbar = () => {

  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Solution", href: "#solution" },
    { name: "Company", href: "#company" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav className='flex gap-2.5 lg:gap-0 justify-between items-center bg-[rgba(0,0,0,1)] w-full h-[96px] px-[1.5rem] lg:px-[4rem] fixed z-50 2xl:px-[7rem] '>
          <div>
          <img src={JuneLogo} alt="" className="w-[120px] h-[76px]  2xl:w-[180px] relative"/>
          </div>

          <ul className="hidden lg:flex lg:justify-center lg:gap-[38px] lg:text-white lg:text-[15.25px] lg:leading-[28px] 2xl:text-[21px]">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`cursor-pointer pb-[1px] transition-all duration-10 ${
                  active === item.name
                    ? "border-b-2 border-blue-100"
                    : "border-b-2 border-transparent"
                }`}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="text-[rgba(32,17,60,1)] bg-[rgba(255,255,255,1)]  cursor-pointer rounded-[12px] outline-0 h-[55px] lg:w-[179.6px] text-[13px] p-4 lg:py-0 lg:text-[16px] font-medium flex justify-center items-center gap-0.5 lg:gap-5 2xl:text-[16px] " >
            <span><a href="#contact">Get in Touch</a></span>
            <span><img src={ArrowIcon} alt="" className='' /></span>
          </div>

      </nav>
    </div>
  )
}

export default Navbar