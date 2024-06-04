import React from 'react'
import { TbArrowLeft, TbArrowRight, TbArrowUpRight } from 'react-icons/tb'

const page = () => {
  return (
    <div>
      <div>

        {/* top */}
        <div className='flex justify-center items-center gap-4'>
          {/* left */}
        <div className='w-[50%] p-[6rem] flex flex-col gap-3'>
          <h1 className='text-[min(8vh,8vw)] font-bold font-ivy tracking-wide'>Case Studies</h1>
          <p className='w-[95%] text-[min(2.2vh,2.2vw)] font-poppins font-light tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam qui commodi, inventore earum voluptates error reiciendis optio fugit, fugiat ullam debitis id. Libero saepe velit cum aspernatur porro </p>
        </div>
        {/* right */}
        <div className='w-[50%] flex flex-col justify-center items-end text-start p-[6rem]'>
          <p className='font-poppins'>UI/UX</p>
          <hr className='bg-gray-300 w-[15rem] h-[0.15rem]'/>
          <p  className='font-poppins'>UI/UX</p>
          <hr className='bg-gray-300 w-[15rem] h-[0.15rem]'/>
          <p  className='font-poppins'>UI/UX</p>
          <hr className='bg-gray-300 w-[15rem] h-[0.15rem]'/>
          <p  className='font-poppins'>UI/UX</p>
          <hr className='bg-gray-300 w-[15rem] h-[0.15rem]'/>
        </div>
        </div>

        {/* bottom */}

        <div>
        <div className="w-full h-[70ch] grid grid-cols-2 grid-rows-2 gap-10 px-[5rem] pb-8">
            <div className="w-auto h-auto bg-white "></div>
            <div className="w-auto h-auto bg-white"></div>
            <div className="w-auto h-auto bg-white"></div>
            <div className="w-auto h-auto bg-white"></div>
          </div>
            
          <div className="flex justify-center items-center px-[6rem] pb-5 ">
              <button className="p-3 bg-white border-2 font-ivy flex gap-1 justify-center items-center border-[#000121] text-[#000121] hover:bg-[#000121] hover:text-white transition cursor-pointer tracking-wide w-full">
                All Case Studies
                <TbArrowRight className="w-6 h-auto" />
              </button>
            </div>
         
        </div>


      </div>
    </div>
  )
}

export default page