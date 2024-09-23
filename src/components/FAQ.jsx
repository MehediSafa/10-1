import React from 'react'
import Accordion from './reusables/Accordion'

const FAQ = () => {
  return (
    <section id='faq'>
        <section className='max-w-container mx-auto'>
            <div className='flex flex-wrap '>
                <div className='lg:w-[38%] w-full text-center lg:text-start'>
                    <h2 className='font-pops font-semibold lg:text-[38px] text-[18px] pt-[130px] text-[#282938] pb-[16px]'>Frequently asked questions</h2>
                    <p className='font-pops font-medium lg:text-[18px] text-[12px]  text-[#2405F2] pt-[16px]'>Contact us for more info</p>
                </div>
                <div className='lg:w-[58%] w-full lg:pt-[135px] pt-[50px] flex  flex-col justify-center lg:justify-start items-center'>
                     <Accordion 
                     number = '01'
                     title ='How much time does it take?' 
                     answer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                     <Accordion 
                     number = '02'
                     title='How much time does it take?' answer= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                     <Accordion 
                     number = '03'
                     title='How much time does it take?' 
                     answer= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Accordion 
                     number = '04'
                     title='How much time does it take?' 
                     answer= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>

                    <Accordion 
                     number = '05'
                     title='How much time does it take?' 
                     answer= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </div>

            </div>
        </section>
    </section>
  )
}

export default FAQ