import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const BolgReusable = ({img,title1,title2,title3,para}) => {
  return (
    <div className=''>
        <div className='flex sm:flex-col sm:items-center'>
        <img src={img} alt="" />
        </div>
        <h2 className='font-pops font-medium lg:text-[16px] text-[8px] pt-[40px] pb-[16px] text-[#282938] text-center'>{title1}</h2>
        <h3 className='font-pops font-medium lg:text-[24px] text-[12px] pt-[16px] pb-[16px] text-[#282938]'>{title2}</h3>
        <h4 className='font-pops font-normal lg:text-[16px] text-[8px] pt-[16px] pb-[32px] text-[#282938]'>{title3}</h4>
        <div className='flex lg:items-start items-center pb-[64px] lg:pb-[128px] lg:justify-start justify-center'>
            <p className='font-pops font-medium lg:text-[16px] text-[8px] pt-[16px]   text-[#282938] pe-[8px]'>{para}</p>
            <span className='mt-[17px]'><IoIosArrowRoundForward/></span>
        </div>
    </div>
  )
}

export default BolgReusable