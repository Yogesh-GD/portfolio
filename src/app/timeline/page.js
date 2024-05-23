'use client'
import { motion } from 'framer-motion'
import React from 'react'

function page() {
  const leftcont = "  px-3 py-10 relative sm:w-1/2 left-2 sm:left-0  after:absolute after:w-6 after:h-6 after:bg-[#000]  after:border-4 after:border-[#fff] after:rounded-full z-10 after:top-10 sm:after:right-[-17px] after:left-[-16px] sm:after:left-auto"
    const rightcont = "   px-3 py-10 relative sm:w-1/2 left-2 sm:left-[50.52%]    after:absolute after:w-6 after:h-6 after:bg-[#000]  after:border-4 after:border-[#fff] after:rounded-full z-10 after:top-10 after:left-[-16px] "

    return (
        <div className='my-20'>
            <div className=' relative m-auto after:absolute after:w-2 after:bg-[#ADABF4] after:top-0 after:bottom-0 sm:after:left-1/2  '>
                <motion.div className={leftcont}
                initial={{y:100,opacity:0.2}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.8}}
                
                >
                    <div className=' selection:text-[#ADABF4] selection:bg-[#fff] bg-[#ADABF4] text-[#fff] px-5 py-7'>
                        <h1 className=' text-center font-bold text-3xl border-b-2 border-[#fff] ' >Education</h1>
                        <h2 className=' text-2xl'>Bachelor of Computer Application</h2>
                        <h3 className=' text-xl'>Veer Narmad South Gujarat University</h3>
                        <p className=' my-2 '>Completed a rigorous curriculum in professional writing, publishing, and
                            editorial practices.</p>
                    </div>
                </motion.div>
                <motion.div className={rightcont}
                initial={{y:100,opacity:0.2}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.8}}
                >
                    <div className=' selection:text-[#ADABF4] selection:bg-[#fff] bg-[#ADABF4] text-[#fff] px-5 py-7'>
                        <h1 className=' text-center font-bold text-3xl border-b-2 border-[#fff]'>Experience</h1>
                        <h2 className=' text-2xl'>Weblencer technologies, Surat, Gujarat </h2>
                        <h3 className=' text-xl'>web development </h3>
                        <p className=' my-2'>Developed a website for CCOM Customer Center, specializing in the
                            repair of Google Pixel phones. The website provided customers with
                            information about repair services offered, pricing, and a platform to
                            schedule repair appointments online.</p>
                    </div>
                </motion.div>
            </div>
        </div>)
}

export default page 