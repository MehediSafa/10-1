import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const Accordion = ({title,answer,number}) => {
    const [accordionOpen,setAccordionOpen] = useState(false);
  return (
    <div className='py-2 '>
        <button onClick={() => setAccordionOpen(!accordionOpen)} 
        className='flex  w-full '>
            <span className=' font-pops font-medium lg:text-[24px] text-[12px] text-[#2405F2]'>{number}</span>
            <span className='lg:ps-[60px] ps-[20px] lg:pe-[200px] pe-[50px] pb-[10px] font-pops font-medium lg:text-[24px] text-[12px] text-[#282938]'>{title}</span>
            {accordionOpen ? <span className='mt-[10px]'><RxCross1/></span> : <span className=''>+</span>}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen 
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[1fr] opacity-0'
            }`}>

        <div className='overflow-hidden lg:w-[550px] w-[250px]  lg:ps-[89px] ps:[43px]'><span className=' font-pops font-medium lg:text-[18px] text-[12px] text-[#282938]'>{answer}</span></div>
        </div>
    </div>
  )
}

export default Accordion