import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [show, setShow] = useState(false); // Initialize state as false

    return (
        <nav className='bg-[#1C1E53] py-[32px]'>
            <div className='max-w-container mx-auto'>
                <div className='lg:flex lg:text-start text-center justify-between items-center '>  
                    <div className='lg:w-[10%] w-full flex justify-center lg:px-0 py-[10px]'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='w-60% '>
                        <ul className={`lg:flex lg:static justify-end lg:gap-[30px]  absolute left-0 top-[138px] 
                            ${show ? "bg-[#1C1E53] w-full" : "hidden lg:flex"} 
                            transition-all duration-300 ease-in-out`}>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">Home</a></li>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">Features</a></li>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">About us</a></li>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">Pricing</a></li>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">FAQ</a></li>
                            <li className='lg:py-[0] py-[10px]'><a className='font-pops font-semibold text-[#BBBBCB] text-[16px]  hover:text-white duration-300 ease-out' href="">Blog</a></li>
                            <li className='lg:py-[0] py-[20px]'><a className='font-pops font-semibold text-[#FFFFFF] text-[16px]  hover:text-white duration-300 ease-out px-[48px] py-[16px] border-[1px] rounded-[41px]' href="">Contact us</a></li>
                        </ul>
                    </div>

                    <div 
                        onClick={() => setShow(!show)}
                        className='lg:hidden cursor-pointer text-white pb-[5px] flex justify-end pe-[10px]'>
                        {show ? <RxCross1 /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
