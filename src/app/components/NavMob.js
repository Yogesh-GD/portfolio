'use client'
import { faBarsStaggered, faCode, faFilePowerpoint, faHome, faTimeline, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function NavMob() {
    const path=usePathname();
    const [show, setShow] = useState(false);
    return (
        <nav
            className=' overflow-hidden   top-0 left-0 z-50 sm:hidden fixed  w-full p-4'
        >
            <div className=' text-white flex justify-between items-center '>
                <span className=' relative z-20'>Portfolio</span>
                <button onClick={() => setShow(!show)} className=' relative  w-10 h-10 rounded-full  flex items-center justify-center'>
                    <motion.span className=' absolute w-[1200px] h-[1200px] bg-[#ADABF4] rounded-full z-0'
                    initial={false}
                    animate={show ? {width:"1200px",height:"1200px"} : { width: "40px", height: "40px" } }
                    ></motion.span>
                    <FontAwesomeIcon className=' relative   w-6 h-6 ' icon={faBarsStaggered} ></FontAwesomeIcon>
                </button>
            </div>
            <div className=' relative  '>
                {
                    show &&
                    <ul className=' my-5  text-white *:my-4' >
                        <li className={path==="/"&&"underline"} onClick={()=>setShow(false)}> <Link className=' flex gap-4 text-lg' href="/" > <FontAwesomeIcon icon={faHome} className=' w-6 h-6' /> <span>Home</span> </Link>  </li>
                        <li className={path==="/timeline"&&"underline"} onClick={()=>setShow(false)}> <Link className=' flex gap-4 text-lg' href="/timeline" ><FontAwesomeIcon icon={faTimeline} className=' w-6 h-6' /> <span>Timeline</span>  </Link> </li>
                        <li className={path==="/skills"&&"underline"} onClick={()=>setShow(false)}> <Link className=' flex gap-4 text-lg' href="/skills" ><FontAwesomeIcon icon={faCode} /><span>Skills</span>  </Link></li>
                        <li className={path==="/portfolio"&&"underline"} onClick={()=>setShow(false)}> <Link className=' flex gap-4 text-lg' href="/portfolio" ><FontAwesomeIcon icon={faFilePowerpoint} /> <span>Portfolio</span> </Link></li>
                        <li className={path==="/contact"&&"underline"} onClick={()=>setShow(false)}> <Link className=' flex gap-4 text-lg' href="/contact" ><FontAwesomeIcon icon={faUser} /> <span>Contact</span> </Link></li>

                    </ul>
                }
            </div>
        </nav>
    )
}

export default NavMob