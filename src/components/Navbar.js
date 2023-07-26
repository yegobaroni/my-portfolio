import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link} from 'react-scroll';
import CV from '../assets/CV.pdf'
function Navbar() {

  const [nav, setNav] =useState(false)

  // set the value of nav to the opposite of the current
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
            <Link to="home" smooth={true} >
              <img src={Logo} alt='Logo' style={{width: '50px', cursor: 'pointer'}} />
            </Link>
          </div>

        {/* menu */}
          
            <ul className='hidden md:flex'>
              <li>
                <Link to="home"  smooth={true} duration={500}>
                   Home 
                </Link>
              </li>
              <li>
                <Link to="about"  smooth={true} duration={500}>
                   About 
                </Link>
              </li>
              <li>
                <Link to="skills"  smooth={true} duration={500}>
                   Skills 
                </Link>
              </li>
              <li>
                <Link to="work"  smooth={true} duration={500}>
                   Work 
                </Link>
              </li>
              <li>
                <Link to="contact"  smooth={true} duration={500}>
                   Contact 
                </Link>
              </li>
            </ul>
          
        {/* Hams */}
          <div onClick={handleClick} className='md:hidden z-10' >
            {/* if nav is true  set it FaBars else FaTimes */}
            {!nav ? <FaBars/> : <FaTimes />}
          </div>

        {/* Mobile Menu */}
        {/* check the value of nav. if nav is true set it to hidden else do the other */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                   Home 
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                   About 
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills"  smooth={true} duration={500}>
                   Skills 
                </Link></li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work"  smooth={true} duration={500}>
                   Work 
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
                   Contact 
                </Link>
              </li>
          </ul>

        {/* Social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                  <a href='https://www.linkedin.com/in/yego-kipkemoi/' className='flex justify-between items-center w-full text-gray-300'
                  >LinkedIn <FaLinkedin size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                  <a href='https://github.com/yegobaroni' className='flex justify-between items-center w-full text-gray-300'
                  >Github <FaGithub size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                  <a href='yegokipkemoi254@gmail.com' className='flex justify-between items-center w-full text-gray-300'
                  >Email <HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a href={CV} download='CV.pdf' className='flex justify-between items-center w-full text-gray-300'
                  >Resume <BsFillPersonLinesFill size={30}/> </a>
                </li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar;