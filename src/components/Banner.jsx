import React from 'react'
import banner from '../assets/banner.png' 

const Banner = () => {
  return (
    <section id='banner' className='bg-[#1C1E53] lg:py-[128px] py:[70px]'>
        <div className='max-w-container mx-auto'>
            <div className='lg:flex flex-wrap justify-between'>
                <div className='lg:w-[48%] w-full'>
                    <div className=''>
                        <h2 className='font-pops font-bold lg:text-[54px] text-[24px] text-white lg:text-start text-center'>Building stellar websites for early startups</h2>
                        <p className='pt-[24px] font-pops font-semibold lg:text-[16px] text-[12px] text-white lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className='flex gap-x-8 lg:mt-[64px] mt-[40px] lg:pb-[128px] pb-[40px] lg:gap-[40px] gap-[20px] lg:justify-start justify-center'>
                    <a className='text-[#FFFFFF] border-[1px] rounded-[41px] lg:px-[56px] lg:py-[16px] px-[24px] py-[8px] 
                    hover:text-[#000000] hover:bg-[#FCD980] transition duration-300' 
                      href="">                     
                    View our work
                    </a>
                    <a className='text-[#FFFFFF] border-[1px] rounded-[41px] lg:px-[56px] lg:py-[16px] px-[24px] py-[8px] 
                    hover:text-[#000000] hover:bg-[#FCD980] transition duration-300' 
                      href="">                     
                    View Pricing
                    </a>
                  </div>
                    
                </div>

                <div className='lg:w-[48%] w-full lg:py-[0] py-[40px] lg:text-start text-center'>
                    <img src={banner} alt="" />
                </div>
                
                
            </div>
            
        </div>
    </section>
  )
}

export default Banner