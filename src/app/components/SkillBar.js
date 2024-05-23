'use client'
import { motion } from 'framer-motion'
import React from 'react'

function SkillBar(props) {
  
    return(
        <div>
          <h3>{props.skill}</h3>
          <div className='relative h-4 bg-[white] '>
            <motion.span 
            whileInView={{width:props.width}}
            transition={{duration:2,delay:0,type:'spring'}}
            viewport={{ once: true }}
            className={`absolute top-0 left-0 h-4   bg-[#ADABF4]`}></motion.span>
          </div>
        </div>
      )
  
}

export default SkillBar