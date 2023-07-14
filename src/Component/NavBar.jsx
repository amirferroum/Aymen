import React,{useState}from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {RiMenu3Line} from 'react-icons/ri'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'

const NavBar = () => {
    const [nav,setNav] = useState(false);
    const [logo,setLogo] = useState(false);
    const handleNav=  () => {
        setNav(!nav)
        setLogo(!logo)
        }
  return (
    <div className='fixed text-[#6c2d7e]  flex justify-between items-center px-4 md:px-24  py-2 w-full h-20 bg-[#17181d] z-10 '>
       <div>
       <h1 className={logo ? 'hidden' : 'block'}>Aymen</h1>
       </div>
        
        <ul className='hidden md:flex'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div onClick={handleNav} className='md:hidden z-10'>
     {nav ? <AiOutlineClose size={20} className='text-[#6c2d7e] flex items-start cursor-pointer'/> : <RiMenu3Line className='cursor-pointer' size={20}/>}
    
     </div>
        
        <div className={nav ? 'absolute top-0 left-0 py-5 px-5 bg-[#17181d] w-full ease-in-out duration-500 ' : 'absolute top-0 left-[-100%] py-5 px-5 bg-[#17181d] w-full ease-in-out duration-500'}>
        <div>
       <h1 >Aymen</h1>
       </div>
        <div>
        <ul className='flex flex-col py-4 '>
            <li className='border-b py-4'>About Me</li>
            <li className='border-b py-4'>Projects</li>
            <li className='border-b py-4'>Contact</li>
        </ul>
        </div>
        <div className='flex justify-between py-5 px-10'>
        <FaFacebook className='icons'/>
<FaYoutube className='icons'/>
<FaInstagram className='icons'/>
        </div>
       
        </div>
    </div>
  )
}

export default NavBar