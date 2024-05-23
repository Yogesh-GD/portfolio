'use client'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

function page() {
  return (
    <div>
      <motion.section className=' my-10'
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className='selection:text-[#ADABF4] selection:bg-[#FFFFFF] text-[#ADABF4]  my-5 text-3xl'>Contact</h2>
        <p  className='selection:bg-[#ADABF4] selection:text-[#FFFFFF] text-[#858484]'>I&rsquo;d love to hear from you! Whether you have a project in mind, need some advice, or just want to say hello, feel free to get in touch. You can reach me via email at <a className=' hover:text-[white] hover:underline' href="mailto:ashishjangir394@gmail.com">ashishjangir394@gmail.com</a> or connect with me on <a className=' hover:text-[white] hover:underline' href="https://www.linkedin.com/in/ashish-jangir-6a72532a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className=' w-5 h-5 text-[#fff]' icon={faLinkedinIn} /> LinkedIn</a> . Let’s build something great together!</p>


          <ul className=' *:text-white *:my-1 my-10 *:selection:bg-[#fff]  *:selection:text-[#ADABF4]' >
            <li ><a className=' hover:text-[#ADABF4] hover:underline' href="tel:+918955052501" target='_blank'><FontAwesomeIcon className=' hover:text-[#fff] selection:bg-[#ADABF4] selection:text-[#fff] w-6 h-6 text-2xl text-[#ADABF4]' icon={faPhone}/> <span>+918955052501</span></a></li>
            <li ><a className=' hover:text-[#ADABF4] hover:underline' href="mailto:ashishjangir394@gmail.com" target='_blank'><FontAwesomeIcon className=' hover:text-[#fff] selection:bg-[#ADABF4] selection:text-[#fff] w-6 h-6 text-2xl text-[#ADABF4]' icon={faEnvelope}/> <span>ashishjangir394@gmail.com</span></a></li>
            <li ><a className=' hover:text-[#ADABF4] hover:underline' href="https://github.com/w47k3r76622" target='_blank'><FontAwesomeIcon className=' hover:text-[#fff] selection:bg-[#ADABF4] selection:text-[#fff] w-6 h-6 text-2xl text-[#ADABF4]' icon={faGithub}/> <span>Github</span></a></li>
            <li ><a className=' hover:text-[#ADABF4] hover:underline' href="https://github.com/w47k3r76622" target='_blank'><FontAwesomeIcon className=' hover:text-[#fff] selection:bg-[#ADABF4] selection:text-[#fff] w-6 h-6 text-2xl text-[#ADABF4]' icon={faLinkedinIn}/> <span>LinkedIn</span></a></li>
            <li ><a className=' hover:text-[#ADABF4] hover:underline' href="https://www.instagram.com/ashishjangir394?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><FontAwesomeIcon className=' hover:text-[#fff] selection:bg-[#ADABF4] selection:text-[#fff] w-6 h-6 text-2xl text-[#ADABF4]' icon={faInstagram}/> <span>Instagram</span></a></li>
          </ul>
      </motion.section>
      <motion.section className=' my-10'
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className='selection:text-[#ADABF4] selection:bg-[#FFFFFF] text-[#ADABF4]  my-5 text-3xl'>Services</h2>
        <p  className='selection:bg-[#ADABF4] selection:text-[#FFFFFF] text-[#858484]'>I offer a range of web development services tailored to meet the needs of businesses and individuals. Whether you’re looking to build a new website from scratch, redesign an existing site, or develop a custom web application, I’ve got you covered. My services include:</p>
        <ul className=' selection:bg-[#ADABF4] selection:text-[#fff] my-5 p-5  bg-[#363636] text-[#ADABF4] rounded-lg list-decimal list-inside *:my-2'>
          <li>Website Development: Custom websites built with modern technologies and best practices.</li>
          <li>Responsive Design: Ensuring your website looks great on all devices, from desktops to mobile phones.</li>
          <li>Web Applications: Developing robust and scalable web applications to solve complex problems.</li>
          <li>Maintenance and Support: Ongoing maintenance to keep your website running smoothly and securely.</li>
        </ul>
      </motion.section>
    </div>

  )
}

export default page