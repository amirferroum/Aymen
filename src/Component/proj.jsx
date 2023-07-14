import React from 'react'

const proj = (props) => {
  return (
    <div className='w-[400px] h-[650px] flex flex-col items-center rounded-md m-2 bg-gray-100 hover:-translate-y-2 duration-500'>
        <img className='rounded-t-md' src={props.url} alt="/" />
        <h3 className='p-4' >{props.head}</h3>
    </div>
  )
}

export default proj