import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion, scale } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4'>
        {/* Profile Image with eager loading for LCP */}
       <motion.div 
       initial = {{scale: 0 }} whileInView={{scale:1}} transition={{duration:0.8  , type:'spring' ,stiffness:100}}
       >
        <Image 
          src={assets.profile_img} 
          alt='Profile' 
          width={128}
          height={128}
          className='rounded-full w-32 h-32 object-cover'
          loading="eager" // Add this for above-the-fold images
          priority // This is even better than loading="eager" for LCP
        />
        </motion.div>
         <motion.h3 
         initial = {{y: -20 ,opacity:0}} whileInView={{y: 0  ,opacity: 1}} transition={{duration:0.6 ,delay:0.3}}
         className='flex items-center justify-center gap-2 text-2xl md:text-4xl lg:text-5xl mb-3 font-Ovo'>
          Hi, Welcome to My Portfolio
          <Image 
            src={assets.hand_icon} 
            alt='👋' 
            width={32}
            height={32}
            className='w-8 h-8'
          />
        </motion.h3>
        
        <motion.h1
        initial = {{y: -30 ,opacity:0}} whileInView={{y: 0  ,opacity: 1}} transition={{duration:0.6 ,delay:0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Data Analyst based in Sri Lanka.</motion.h1>
        
        <motion.p
        initial = {{opacity:0}} 
        // whileInView={{opacity: 1}} 
        animate={{ y: 0, opacity: 1 }}
        transition={{duration:0.6 ,delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'> 
I’m Ranthilini Prarthana, Data Analyst from Sri Lanka, currently pursuing a BSc (Hons) in IT specializing in Data Science.    </motion.p>
        
        {/* <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
          <motion.a 
          initial = {{y: 300 ,opacity:0}}
          //  whileInView={{y: 0  ,opacity: 1}} 
            animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.3, delay: 0.2 }}
          href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
            Contact Us 
            <Image 
              src={assets.right_arrow_white} 
              alt='→' 
              width={16}
              height={16}
              className='w-4'
            />
          </motion.a>
          <motion.a
                    initial = {{y: 300 ,opacity:0}} whileInView={{y: 0  ,opacity: 1}} transition={{duration: 0.3, delay: 0.25}}

          href="/Ranthilini Prarthana.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
            my resume 
            <Image 
              src={assets.download_icon} 
              alt='📥' 
              width={16}
              height={16}
              className='w-4'
            />
          </motion.a>
        </div> */}

        <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15   // time gap between button animations
      }
    }
  }}
  className='flex flex-col sm:flex-row items-center gap-4 mt-4'
>
  
  <motion.a
    variants={{
      hidden: { y: 60, opacity: 0 },
      show: { y: 0, opacity: 1 }
    }}
    transition={{ duration: 0.4 }}
    href="#contact"
    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
  >
    Contact me
    <Image 
      src={assets.right_arrow_white} 
      alt='→'
      width={16}
      height={16}
      className='w-4'
    />
  </motion.a>

  <motion.a
    variants={{
      hidden: { y: 60, opacity: 0 },
      show: { y: 0, opacity: 1 }
    }}
    transition={{ duration: 0.4 }}
    href="/Ranthilini Prarthana.pdf"
    download
    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
  >
    My Resume
    <Image 
      src={assets.download_icon}
      alt='📥'
      width={16}
      height={16}
      className='w-4'
    />
  </motion.a>

</motion.div>

      </div>
    </div>
  )
}

export default Header