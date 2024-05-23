'use client'
import React, { useEffect, useRef, useState } from 'react'

import SkillBar from '../components/SkillBar'

const SkillInfo=[
  {
    skill:"ASP.NET",
    per:"50%"
  },
  {
    skill:"SQL",
    per:"75%"
  },
  {
    skill:"HTML/CSS/JAVA SCRIPT",
    per:"75%"
  },
  {
    skill:"JQUERY",
    per:"70%"
  },
  {
    skill:"BOOTSTRAP",
    per:"70%"
  },
  {
    skill:"Version Control (Git)",
    per:"80%"
  },
  {
    skill:"RESTFUL APIs",
    per:"75%"
  },

]



function page() {
  return (
    <div  className=' my-20 text-white w-full'>
      <div>
       <div className=' *:my-5'>
       <h1 className='selection:text-[#ADABF4] selection:bg-[#FFFFFF] text-[#ADABF4] text-4xl '>skill</h1>
        <p className='selection:bg-[#ADABF4] selection:text-[#FFFFFF] text-[#858484]' >With a strong foundation in HTML, CSS, and JavaScript, I build websites that are not only visually appealing but also highly functional. I have extensive experience with popular frameworks and libraries such as React, Angular, and Vue.js on the front-end, and Node.js, Express, and Django on the back-end. My expertise also includes working with databases like MongoDB, MySQL, and PostgreSQL.</p>
    <p className='selection:bg-[#ADABF4] selection:text-[#FFFFFF] text-[#858484]'>Beyond technical skills, I am adept at problem-solving, project management, and collaborating with cross-functional teams to deliver projects on time and within budget. I am always eager to learn new technologies and improve my craft.</p>
       </div>
        {SkillInfo.map((info,index)=>{
          return(
            <SkillBar width={info.per} skill={info.skill} key={index} />
          )
        })}
        
      </div>
    </div>
  )
}

export default page