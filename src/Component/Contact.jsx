import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        
        
        <form method="POST" action="https://getform.io/f/24ac08e6-4b06-4ee5-b98e-352785f31372" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
            <p className="text-center font-bold py-16 text-2xl sm:text-3xl lg:text-5xl text-[#6c2d7e]">Let's create something remarkable</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact