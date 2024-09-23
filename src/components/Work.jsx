import React from 'react'
import WorkReusable from './reusables/WorkReusable'
import { FaArrowRightLong } from "react-icons/fa6";
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'

const Work = () => {
  return (
    <section id='work ' className='bg-[#F4F6FC]'>
        <div className='max-w-container mx-auto'>
            <div className='flex  flex-wrap '>

            <div className='lg:w-[35%] w-full'>
                <div className='lg:text-start text-center lg:pt-[128px] pt-[64px] '>
                    <h2 className='font-pops text-[#282938] font-semibold lg:text-[48px] text-[24px]'>How we work</h2>
                    <p className='font-pops text-[#282938] font-normal lg:text-[16px] text-[12px] py-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className='flex items-center lg:justify-start justify-center '>
                    <h3 className='font-pops text-[#2405F2] font-medium lg:text-[18px] text-[12px]'>Get in touch with us </h3>
                   
                    <span className='text-[#2405F2] ps-[16px]'><FaArrowRightLong/></span>
                    
                
                    
                    </div>
                   
                    
                </div>
            
            </div>


            <div className='lg:w-[64%] w-full lg:pt-[146px] pt-[64px] lg:ps-[100px] lg:text-start text-center '>

                <div className='flex flex-wrap lg:justify-between justify-center'>
                    <div  className='w-[48%]'>

                    <WorkReusable
                    title='Strategy'
                    img={work1}
                    para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
                    />
                    </div>
                    <div className='w-[48%]'>

                    <WorkReusable 
                    img={work2}
                    title='Wireframing'
                    para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    
                    </div>
                    <div  className='w-[48%]'>

                    <WorkReusable 
                    img={work3}
                    title='Design'
                    para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    </div>

                    <div  className='w-[48%]'>

                    <WorkReusable 
                    img={work4}
                    title='Development'
                    para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    </div>
                 
                    
                </div>
                   
            </div>

        </div>
        </div>
    </section>
        
    
  )
}

export default Work