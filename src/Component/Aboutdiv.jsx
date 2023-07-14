import React from 'react'



const Aboutdiv = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border rounded-md p-7 shadow-md hover:-translate-y-3  duration-500">
          {props.icon}
          <h2 className='py-10'>About me</h2>
          <p>
            Ambitious and versatile Ui/Ux Designer with a strong creative vision
            and a drive for delivering exceptional design solutions. Proficient
            in using industry-standard design software and staying updated with
            the latest design trends. Strong communication and collaboration
            skills, working effectively with clients and cross-functional teams
            to deliver outstanding design projects. , with a proven ability to
            adapt to dynamic project requirements and manage time effectively.
          </p>
        </div>
  )
}

export default Aboutdiv