import React from 'react'


const WorkReusable = ({title,img,para}) => {
  return (
     <div className='pb-[48px]'>
        <div className='flex justify-center lg:flex-none lg:justify-start'>
            <img className='pb-[16px] ' src={img} alt="" />
        </div>
        <div>
        <h2 className='font-pops font-medium lg:text-[32px] text-[14px] text-[#282938] pb-[8px]'>{title}</h2>
        <p className='font-pops font-medium lg:text-[16px] text-[12px] text-[#282938] '>{para}</p>
        </div>
     </div>
  )
}

export default WorkReusable