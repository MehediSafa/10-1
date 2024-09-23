import React from 'react'
import FeaturesReusable from './reusables/FeaturesReusable'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import feature4 from '../assets/feature4.png'
import feature5 from '../assets/feature5.png'
import feature6 from '../assets/feature6.png'

const Features = () => {
  return (
   <section id='features' className='bg-[#F4F6FC]'>
    <div className='max-w-container mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-pops font-medium text-[16px] text-[#282938] pb-[12px]'>Features</h2>
        <h3 className=' text-center lg:w-[630px] w-[240px] font-pops font-semibold  lg:text-[48px] text-[24px] text-[#282938] pb-[47px]'>Design that solves problems, one product at a time</h3>

      </div>

    <div className='flex flex-wrap pb-[128px lg:gap-[32px]'>
    <div className='w-[29%]  ms-[10px]'>
        <FeaturesReusable img={feature1} title='Uses Client First' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>

    <div className='w-[29%]  ms-[10px]'>
        <FeaturesReusable img={feature2} title='Two Free Revision Round' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>
    
    <div className='w-[29%]  ms-[10px]'>
        <FeaturesReusable img={feature3} title='Template Customization' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>
    
    
    <div className='w-[29%]  ms-[10px]'>
        <FeaturesReusable img={feature4} title='24/7 Support' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>
    
    <div className='w-[29%] ] ms-[10px]'>
        <FeaturesReusable img={feature5} title='Quick Delivery' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>

    <div className='w-[29%] lg:mb-[128px] mb-[64px] ms-[10px]'>
        <FeaturesReusable img={feature6} title='Hands-on approach' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  '/>
    </div>
      
    </div>

    </div>

   </section>
  )
}

export default Features