'use client'

import { faGit, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <div className=" relative">
      <header className=' py-5 flex flex-col-reverse sm:flex-row items-center justify-around h-full gap-5'>
        <motion.div
          className=" sm:w-[45%] py-10 px-3"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.5 }}


        >
          <h1 className=' selection:bg-[#FFFFFF] selection:text-[#ADABF4]   mb-10  text-5xl sm:text-6xl font-semibold text-[#fff]' >Hey I'm <motion.span className='selection:bg-[#ADABF4] selection:text-[#FFFFFF]  font-bold text-[#ADABF4]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >Ashish Jangir</motion.span></h1>

          <div className="mb-10 flex flex-wrap  gap-5  *:flex *:items-center *:justify-center *:rounded-full">
            <a className="h-10   bg-[#ADABF4] " href="https://github.com/w47k3r76622">
              <span className=" bg-[#fff] rounded-full flex justify-center items-center  h-10 w-10"><FontAwesomeIcon className=" text-[#000] w-5 h-5" icon={faGithub} /></span>
              <span className=" text-[white] text-lg px-3">Github</span>
            </a>
            <a className=" h-10  bg-[#ADABF4] " href="https://www.linkedin.com/in/ashish-jangir-6a72532a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span className=" bg-[#fff] rounded-full flex justify-center items-center  h-10 w-10"><FontAwesomeIcon className=" text-[#000] w-5 h-5" icon={faLinkedinIn} /></span>
              <span className=" text-[white] text-lg px-3">LinkedIn</span>
            </a>

          </div>

          <motion.p className="selection:bg-[#ADABF4] selection:text-[#FFFFFF] sm:text-left text-center text-[#858484]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          > A passionate web developer with over 5 years of experience in building dynamic and responsive websites. My journey in web development started with a curiosity for how websites work, which quickly turned into a full-blown career path. I specialize in both front-end and back-end development, creating seamless user experiences and efficient server-side applications.</motion.p>
        </motion.div>

        <motion.div className=' my-10 w-56  sm:w-96  rounded-full bg-[#000] overflow-hidden'
          initial={{ opacity: 0.1, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className='h-56 sm:h-96 ' src="header.png" alt="" />
        </motion.div>


      </header>
      <button onClick={() => router.push("/skills")} className="absolute bottom-2 right-1/2 bg-[#ADABF4] w-10 h-10 rounded-full text-center flex items-center justify-center "><FontAwesomeIcon className=" w-5 h-5" icon={faArrowDown} ></FontAwesomeIcon></button>
    </div>
  );
}
