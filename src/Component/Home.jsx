import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'
const Home = () => {
  return (
    <div className="w-full h-screen relative bg-fixed bg-[url('https://images.pexels.com/photos/4050292/pexels-photo-4050292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover ">
        
             <div className='absolute top-0 w-full h-full flex flex-col justify-center items-start text-[#6c2d7e] pl-[100px]'>
            <p className='text-white text-2xl'>Hello, I'm Aymen</p>
            <h1 className=' text-5xl py-3'>Ux/Ui Designer</h1>
            <h2 className='text-white text-3xl py-5'>i transform ideas into reality</h2>
            <button >Check out my work</button>
            <div className='flex justify-between w-[30%] py-5 pl-3 text-white'>
            <FaFacebook className='icons'/>
<FaYoutube className='icons'/>
<FaInstagram className='icons'/>
            </div>
        </div>
    </div>
  )
}

export default Home