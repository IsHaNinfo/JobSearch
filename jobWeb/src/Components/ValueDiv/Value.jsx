import React from 'react'
import simple from "../../assets/Images/simple.jpg";
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] p-10'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'> The valye that hildes us true and to account</h1>
    <div className='grid gap-[10rem] grid-cols-3 items-center'>
      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className='flex items-center gap-3'>
          <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[100px] w-[100px] flex  items-center justify-center'>
            <img src={simple} alt="" className='w-[70%]'/>
          </div>
          <span className=' font-semibold text-textColor text-[18px]'> Simplycity</span>
        </div>
        <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'> things being beutiful simple are at the hheart of everything we do.</p>
      </div>
      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className='flex items-center gap-3'>
          <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[100px] w-[100px] flex  items-center justify-center'>
            <img src={simple} alt="" className='w-[70%]'/>
          </div>
          <span className=' font-semibold text-textColor text-[18px]'> Simplycity</span>
        </div>
        <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'> things being beutiful simple are at the hheart of everything we do.</p>
      </div>
      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
        <div className='flex items-center gap-3'>
          <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[100px] w-[100px] flex  items-center justify-center'>
            <img src={simple} alt="" className='w-[70%]'/>
          </div>
          <span className=' font-semibold text-textColor text-[18px]'> Simplycity</span>
        </div>
        <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'> things being beutiful simple are at the hheart of everything we do.</p>
      </div>
    </div>
    <div className="card"></div>
    </div>
  )
}

export default Value