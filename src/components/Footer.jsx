import React from 'react'
import logo from '../assets/logo.png';
import { FaFacebook,FaTwitter,FaInstagramSquare ,FaLinkedin  } from "react-icons/fa";
const Footer = () => {
  return (
    <section id='footer' className='bg-[#1C1E53]'>
        <div className='max-w-container mx-auto'>
            <div >
                <div className='flex'>
                <div className='w-[50%]'>
                    <div className='pt-[100px]'><img src={logo} alt="" /></div>
                    <h2 className='pt-[22px] pb-[86px] font-pops font-medium text-white lg:text-[16px] text-[8px]'>We are always open to discuss your project and improve your online presence.</h2>

                    <div className='bg-[#FCD980] flex justify-between'>
                        <div className=''>
                            <h2 className='pt-[10px] font-pops font-medium text-[16px] text-[#282938]'>Email me at</h2>
                            <h3 className='pt-[1px] pb-[16px] font-pops font-medium text-[16px] text-[#282938]'>contact@website.com</h3>
                        </div>
                    </div>
                </div>

                <div className='w-[40%] ps-[60px]'>
                    <h2 className='pt-[96px] font-pops font-medium lg:text-[16px] text-[10px] md:text-[12px] pb-[14px] text-white'>Lets Talk!</h2>
                    <h3 className='pt-[6px] lg:pb-[16px] pb-[8px] font-pops font-normal lg:text-[16px] text-[10px] md:text-[12px] text-white'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</h3>
                <div className='pt-[28px] flex items-center lg:gap-[28px] gap-[8px] lg:pb-[0] '>
                    <span className='text-white'><FaFacebook/></span>
                    <span className='text-white'><FaTwitter /></span>
                    <span className='text-white'><FaInstagramSquare /></span>
                    <span className='text-white'><FaLinkedin /></span>
                </div>
                </div>

                </div>
                
                
            </div>
            
        </div>

        <div className='bg-white'>
                    <div className='max-w-container mx-auto flex items-center justify-between'>
                        <div className='w-[30%]'>
                        <h2 className='font-pops font-medium text-[10px] lg:text-[16px] pt-[32px] pb-[32px]'>Copyright 2022, Finsweet.com</h2>
                        </div>
                    
                    <div className='w-50%'>
                    <ul className='flex lg:gap-[32px] gap-[16px]'>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>Home</li>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>About us</li>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>Features</li>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>Pricing</li>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>FAQ</li>
                        <li className='font-pops font-medium text-[10px] lg:text-[16px] text-[#282938]'>Blog</li>
                    </ul>
                    </div>
                    </div>
                </div>
    </section>
  )
}

export default Footer