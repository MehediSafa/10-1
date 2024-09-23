import React from 'react'
import BolgReusable from './reusables/BolgReusable'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blog = () => {
  return (
    <section id='blog'>
        <div className='max-w-container mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>

            <div className='lg:w-[32%]'>
                <BolgReusable
                img={blog1}    
                title1 = '19 Jan 2022'  
                title2 = 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                title3= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                para = 'Read More'         />

                
            </div>

            <div className='lg:w-[32%]'>
                <BolgReusable
                img={blog2}    
                title1 = '19 Jan 2022'  
                title2 = 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                title3= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                para = 'Read More'         />

                
            </div>

            <div className='lg:w-[32%]'>
                <BolgReusable
                img={blog3}    
                title1 = '19 Jan 2022'  
                title2 = 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                title3= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                para = 'Read More'         />

                
            </div>
            </div>

        </div>
    </section>
  )
}

export default Blog