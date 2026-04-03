import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const item ={
    hidden: {opacity: 0,y: 100},
    show: {opacity: 1, y: 0}
    
 } 
 
 const NavLinks = motion(Link)

const ProjectsLayout = ({ name, description, date, demoLink }) => {
    return ( 
        <NavLinks
        variants={item} 
        href={demoLink}
        target={'_blank'}
        className=' text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 w-full items-center">
                {/* Project Name - 3 columns */}
                <div className="col-span-1 sm:col-span-3">
                    <h2 className='text-accent font-semibold text-base md:text-lg capitalize'>{name}</h2>
                </div>
                
                {/* Description - 7 columns */}
                <div className="col-span-1 sm:col-span-7">
                    <p className='text-white/70 hidden sm:block text-sm leading-relaxed'>{description}</p>
                </div>
                
                {/* Date - 2 columns */}
                <div className="col-span-1 sm:col-span-2 text-left sm:text-right">
                    <p className='text-white/50 sm:text-accent font-medium text-sm whitespace-nowrap'>
                        {new Date(date).toDateString()}
                    </p>
                </div>
            </div>
        </NavLinks>
    )
}


export default ProjectsLayout
