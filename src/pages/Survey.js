import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SurveyType from '../components/surveysTypes/surveyType'
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const Survey = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
            <SurveyType style={{background:"black"}}/>
            <Link to="/">
               <Button  style={{marginTop:"3rem",marginLeft:"1.5rem",backgroundColor:"#007bff", height:"4rem", borderRadius:"5px",fontSize:"20px"}}>Back To The Home Page</Button>
            </Link>
        </motion.div>
    )
}

export default Survey
