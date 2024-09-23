import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import project from '../assets/project.png'
import card from '../assets/Card.png'
const Projects = () => {
    return (
        <section id='projects' className=''>
            <div className='max-w-container mx-auto'>
                <div className='flex justify-between lg:pt-[128px] pt-[64px]  items-center'>

                    <h2 className='font-pops font-bold lg:text-[54px] text-[24px] text-[#282938]' >View our projects</h2>
                    <div className='flex items-center'>
                        <span className='font-pops font-medium lg:text-[16px] text-[12px] text-[#282938] pt-[18px]'>View More</span>
                        <p className='text-[#282938] ps-[16px] pt-[16px]'><FaArrowRightLong /></p>
                    </div>



                </div>
                <div className='flex justify-between pt-[64px] lg:pb-[128px] pb-[64px]'>
                    <div className='w-[66%]'>
                        <div className='relative'>
                            <img src={project} alt="" />
                            <div className='absolute top-0 left-0 bg-[rgba(28,30,83,0.42)] h-full w-[50%] hover:w-full flex flex-col items-center justify-center duration-300 ease-in-out'>
                                <h2 className='font-pops font-semibold lg:text-[24px] text-[12px] text-white lg:pt-[90px] text-center'>
                                    Workhub office Webflow Webflow Design
                                </h2>
                                <h3 className='font-pops font-normal lg:text-[16px] text-[10px] text-white text-center pt-[16px]'>
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                                </h3>
                                <div className='flex items-center justify-center lg:pt-[18px] pt-[12px]'>
                                    <span className='font-pops font-medium lg:text-[16px] text-[12px] text-white'>View More</span>
                                    <span className='text-white ps-[8px]'><FaArrowRightLong /></span>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className='w-[30%] '>
                        <div className='relative'>
                            <img className='lg:mb-[52px] mb-[15px]' src={card} alt="" />
                            <div className='absolute top-0 left-0 bg-[rgba(28,30,83,0.42)] h-full w-[100%] opacity-0 hover:opacity-100 hover:w-full flex flex-col items-center justify-center duration-300 ease-in-out cursor-pointer '>
                                <h2 className='font-pops font-semibold lg:text-[24px] text-[12px] text-white'>Unisaas Website 
                                Design</h2>
                                <div className='flex items-center justify-center lg:pt-[18px] pt-[12px]'>
                                    <span className='font-pops font-medium lg:text-[16px] text-[10px] text-white'>View More</span>
                                    <span className='text-white text-[10px] ps-[8px]'><FaArrowRightLong /></span>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='' src={card} alt="" />
                            <div className='absolute top-0 left-0 bg-[rgba(28,30,83,0.42)] h-full w-[100%] opacity-0 hover:opacity-100 hover:w-full flex flex-col items-center justify-center duration-300 ease-in-out cursor-pointer'>
                                <h2 className='font-pops font-semibold lg:text-[24px] text-[12px] text-white'>Unisaas Website 
                                Design</h2>
                                <div className='flex items-center justify-center lg:pt-[18px] pt-[12px]'>
                                    <span className='font-pops font-medium lg:text-[16px] text-[10px] text-white'>View More</span>
                                    <span className='text-white text-[10px] ps-[8px]'><FaArrowRightLong /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Projects
