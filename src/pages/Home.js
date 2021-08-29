import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';


const Home = () => {
    return (
        
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
        <Hero/>
    </motion.div>
            
        
    )
}

export default Home
