import { NavLink } from 'react-router-dom';
import logo from '../../assets/Image/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import '../../App.css'
const Header = () => {
  const [isopen, setIsOpen] = useState(false)

  return (
    <div className=' w-full md:px-10 py-4 px-7 md:flex items-center justify-between z-50 fixed top-0 left-0 right-0'>
          <div className='flex items-center gap-3'>
              <img src= {logo} alt="" className='md:w-24 md:h-[90px] h-[70px]' />
              <div>
                  <p className='md:text-4xl text-3xl font-bold text-[#FF204E]'>Donation</p>
                  <p className='font-semibold tracking-[8px] md:text-xl'>Campaign</p>
              </div>
          </div>
          <div>
              <ul className= {`md:flex items-center md:pb-0 md:pl-0 pl-9 md:bg-transparent
              absolute md:static left-0 w-full gap-6 px-6 transition-all duration-500 ease-in  ${isopen ? 'top-28': 'top-[-490px]'}`}>
                  <li className= 'font-semibold my-3 md:my-0'><NavLink to = "/">Home</NavLink></li>
                  <li className='font-semibold my-3 md:my-0'><NavLink to = '/donation'>Donation</NavLink></li>
                  <li className='font-semibold my-3 md:my-0'><NavLink to = '/statistics'>Statistics</NavLink></li>
              </ul>
          </div>
          <div onClick={()=>setIsOpen(!isopen)} className='w-7 h-7 text-2xl md:hidden absolute top-10 right-6 cursor-pointer'>
              {
                isopen ? <FaTimes /> :<FaBars />
              }
          </div>

    </div>
  );
};

export default Header;