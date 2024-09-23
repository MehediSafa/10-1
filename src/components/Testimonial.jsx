import React from 'react'
import jenny from '../assets/jenny.png'

const Testimonial = () => {
  return (
    <section id='testimonial'>
        <div className='max-w-container mx-auto'>
            <div className='flex flex-wrap justify-between pb-[130px]'>
                <div className='lg:ps-[0] ps-[8px] w-[30%]'>
                        <h2 className='font-pops font-semibold lg:text-[38px] text-[18px] pt-[130px] text-[#282938]'>What our clients say about us</h2>
                        <p className= 'font-pops font-normal lg:text-[16px] text-[12px] pb-[192px] text-[#282938] pt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className='w-[65%]'>
                <h2 className='font-pops font-semibold lg:text-[38px] text-[18px] pt-[130px] text-[#282938]'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                <div className='flex pt-[51px]'>
                    <img className='pe-[12px]' src={jenny} alt="" />
                    <div>
                        <h2 className='font-pops font-normal text-[18px] text-[#282938]'>Jenny Wilson</h2>
                        <p className='font-pops font-medium text-[12px] text-[#282938] '>Vice President</p>
                    </div>
                </div>
                </div>
               
            </div>
        </div>

    </section>
  )
}

export default Testimonial