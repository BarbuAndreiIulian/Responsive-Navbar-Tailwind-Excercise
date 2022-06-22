import React from 'react'
import "./Hero.css"
import heroimg from "../images/heropng.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container  flex flex-col  items-center mt-[91.5px] lg:flex-row lg:mx-[42px] lg:justify-between ">
        <div className='content flex flex-col  items-center lg:items-start lg:max-w-[325px] '>
          <div className="description font-semibold text-base text-[#3366ff] mb-[8px] text-center lg:text-start">
            <h4>Optimize your app management</h4>
          </div>

          <div className="title font-extrabold text-[#002E4D]  text-center max-w-[664px] mx-[28px] mb-[44.5px] lg:text-start 
          lg:ml-0 lg:mr-0
           ">
            <h1>Drive efficiency with a unified digital workplace</h1>
          </div>

          <div className="take-action font-bold bg-[#FF3377] text-white px-[11.5px] pt-[19px] pb-[18.5px] rounded-[4px]  mb-[40px]  lg:w-[280px] lg:text-center ">
            <a>Get started – It's free!</a>
          </div>
        </div>

        <div className="hero-img px-[68px] max-w-[544.8px] md:max-w-[584px]  md:p-0 lg:max-w-[498.550px] lg:mr-[68px] ">
          <img src={heroimg} />
        </div>

      </div>
    </div>
  )
}

export default Hero