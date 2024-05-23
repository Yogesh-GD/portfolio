'use client'

import {  faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBarsStaggered, faCode, faFilePowerpoint, faMultiply, faTimeline, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHome} from '@fortawesome/free-solid-svg-icons/faHome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


function Navbar() {
    const [show,setShow] = useState(true)
    const toogle=()=>{
        setShow(show=>!show)
        console.log(show)
    }
    const path=usePathname()
    console.log(path)
  return (
    <AnimatePresence>
    <motion.nav className={`  hidden sm:visible overflow-hidden shadow-[inset_0px_0px_50px_0px_#17020242] sm:flex     items-center flex-col bg-[#000] text-white   h-full rounded-3xl p-3`}
    initial={false}
    animate={{ width:!show?"160px":"80px"}}
    transition={{}}
    >
        <div className=' my-4 mb-8' >
            <button onClick={toogle} className='relative w-10 h-10 grid place-items-center z-10' >
            <motion.span className='absolute bg-[#ADABF4]   rounded-full z-0'
            initial={{width:"40px"}}
            animate={{width:!show?"160px":"40px",
            height:!show?"1400px":"40px"
            }}
            ></motion.span>  
            <FontAwesomeIcon className='relative z-10 w-5 h-5 '   icon={!show?faMultiply:faBarsStaggered} /></button>
        </div>

        <ul className=' relative z-10 my-5 flex flex-col  items-center  *:w-full  gap-5'>
            <li className={"" + path==="/"&& ` text-[#ADABF4] font-extrabold ${!show &&" underline text-[white]"} `}> <Link href="/" > <FontAwesomeIcon icon={faHome} className=' w-6 h-6' />  {!show&& <span>Home </span>}</Link> </li>
            <li className={"" + path==="/timeline"&& ` text-[#ADABF4] font-extrabold ${!show &&" underline text-[white]"} `}> <Link href="/timeline" ><FontAwesomeIcon icon={faTimeline} className=' w-6 h-6' />  {!show&& <span>Timeline </span>}</Link> </li>
            <li className={"" + path==="/skills"&& ` text-[#ADABF4] font-extrabold ${!show &&" underline text-[white]"} `}> <Link href="/skills" ><FontAwesomeIcon icon={faCode} className=' w-6 h-6' /> {!show&& <span>Skills </span>} </Link></li>
            <li className={"" + path==="/portfolio"&& ` text-[#ADABF4] font-extrabold ${!show &&" underline text-[white]"} `}> <Link href="/portfolio" ><FontAwesomeIcon icon={faFilePowerpoint} className=' w-6 h-6' />{!show&& <span>Portfolio </span>} </Link></li>
            <li className={"" + path==="/contact"&& ` text-[#ADABF4] font-extrabold ${!show &&" underline text-[white]"} `}> <Link href="/contact" ><FontAwesomeIcon icon={faUser} className=' w-6 h-6' />  {!show&& <span>Contact </span>} </Link></li>
        </ul>

        <ul className=' relative z-10 my-8 flex flex-col  items-center  *:w-full  gap-5'>
            <li ><a href="https://www.instagram.com/ashishjangir394?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className=' w-6 h-6' icon={faInstagram} /> {!show&& <span>Instagram </span>}</a> </li>
            <li ><a href="https://github.com/w47k3r76622" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className=' w-6 h-6' icon={faGithub} /> {!show&& <span>Git </span>}</a> </li>
            <li ><a href="https://www.linkedin.com/in/ashish-jangir-6a72532a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className=' w-6 h-6' icon={faLinkedin} /> {!show&& <span> LinkedIn </span>}</a>  </li>
        </ul>
    </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar