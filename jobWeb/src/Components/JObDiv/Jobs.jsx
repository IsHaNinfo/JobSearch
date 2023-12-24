import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import Logo1 from "../../assets/Images/Logo1.jpg";

const Data = [
  {
    id:1,
    iamage:Logo1,
    title:'Web developer',
    time :"Now",
    location : 'Canada',
    desc : "Lorem ipsumpsam iure nisi tempore dolorum corrupti rerum pariatur error, ad quia ab non! Qui delectus reiciendis eveniet harum eos? Nemo, sequi nam!",
    company :  "microsoft.com",
  }
]
const Jobs = () => {
  return (
    <div>
        <div className="JobContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor 
              group-hover:text-white
              '>Web Developer</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/> Now
              </span>
              
            </span>
            <h6 className='text-[#ccc]'>Canada</h6>
            <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ab expedita quod, libero vero, tempore autem reiciendis illum ducimus animi neque porro distinctio omnis, dignissimos doloribus nesciunt! Iste, omnis cumque?</p>
            
            <div className='company flex items-center gap-2'>
              <img src={Logo1} alt="Company Logo" className='w-[30px]'/>
              <span className='text-[14px] py-[1rem] blocl group-hover:text-white'>Novac linus Co.</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor  group-hover:text-white'>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Jobs