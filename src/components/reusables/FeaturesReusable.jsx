import React from 'react'

const FeaturesReusable = ({img,title,para}) => {
  return (
    <div className='bg-white lg:h-[300px] h-[250px]  '>
      <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center'>
      <img className='lg:pt-[58px] pt-[20px] lg:ps-[48px] lg:pb-[22px] pb-[20px]' src={img} alt="" />
      </div>
      <h2 className='lg:text-start text-center lg:ps-[48px] font-pops font-medium lg:text-[24px] text-[14px] lg:pb-[12px] pb-[8px] text-[#282938]'>{title}</h2>
      <p className='lg:text-start text-center lg:ps-[48px] font-pops font-normal lg:text-[16px] text-[10px]  lg:pb-[48px] pb-[8px] text-[#282938] '>{para}</p>
    </div>
  )
}

export default FeaturesReusable