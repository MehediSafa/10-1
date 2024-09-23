import React from 'react'
import form from '../assets/form.png' 
import { IoIosArrowRoundForward } from "react-icons/io";

const Form = () => {
  return (
    <section id='form'>
        <div className='max-w-container mx-auto'>
           <div className='bg-cover bg-no-repeat bg-center h-[691px] flex lg:mb-[128px] mb-[64px]'
           style={{ backgroundImage: `url(${form})` }}
           >

           <div className='w-[50%]'>
                <h2 className='font-pops font-semibold lg:text-[54px] text-[18px] text-white pt-[56px] lg:ps-[96px] lg:text-start text-center'>Building stellar websites for early startups</h2>
                <p className='font-pops font-medium lg:text-[16px] text-[12px] text-white pt-[24px] lg:ps-[96px] lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>

            <div className='w-[50%] bg-[#1c1E53] flex flex-col'>
                <h2 className='font-pops font-medium lg:text-[32px] text-[16px] text-white pt-[96px] lg:ps-[96px] ps-[36px] pb-[16px]'>Send inquiry</h2>
                <h3 className='font-pops font-medium lg:text-[16px] text-[10px] text-white pt-[0px] lg:ps-[96px] ps-[36px] lg:pe-[96px] pe-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h3>
                <div className='lg:ps-[96px] ps-[36px] flex flex-col'>

                <input className=' bg-[#1c1E53] border-[1px] rounded-[8px] lg:indent-[32px] indent-[6px] mt-[40px] lg:w-[362px] w-[120px] lg:h-[64px] h-[32px]  font-pops font-medium lg:text-[16px] text-[10px] text-[rgba(255,255,255,0.5)] ' type="text" placeholder='Your Name' />
                
                <input className=' bg-[#1c1E53] border-[1px] rounded-[8px] lg:indent-[32px] indent-[6px] mt-[16px] lg:w-[362px] w-[120px] lg:h-[64px] h-[32px]  font-pops font-medium lg:text-[16px] text-[10px] text-[rgba(255,255,255,0.5)] ' type="text" placeholder='Email' />
                
                <input className=' bg-[#1c1E53] border-[1px] rounded-[8px] lg:indent-[32px] indent-[6px] mt-[16px] lg:w-[362px] w-[120px] lg:h-[64px] h-[32px]  font-pops font-medium lg:text-[16px] text-[10px]  text-[rgba(255,255,255,0.5)] ' type="text" placeholder='Paste your Figma design URL' />                
                </div>

                <div className='mt-[39px] lg:ps-[96px] ps-[36px]'>
                <button className='font-man font-semibold lg:text-[18px] text-[10px] text-[#1C1B2B] lg:px-[120px] px-[30px] lg:py-[16px] py-[8px] border-[1px] bg-[#FCD980] rounded-[41px]'>Send an Inquiry</button>
                <div className='flex items-center'>

                <h5 className='font-pops font-medium lg:text-[18px] text-[10px] text-white pt-[28px] lg:pb-[48px] pb-[10px]'>Get in touch with us</h5>
                <span className='text-white lg:mt-[-16px] mt-[19px] ms-[10px] text-[32px]'><IoIosArrowRoundForward/> </span>
                </div>
                </div>
            </div>
            
           </div>
        </div>
    </section>
  )
}

export default Form