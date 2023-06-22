import React from 'react'
import {VerticalTimeline, VertivcalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import { experience } from '../constants';
import {SecitonWrapper} from '../hoc'
import { textVariant } from '../utils/motion';


const ExperienceCard = ({ experience}) => {
  <VertivcalTimelineElement
   contentStyle = {{background: '#1d1836', color: '#fff'}}>

  {experience.date}

  </VertivcalTimelineElement>

  return (
<>
<motion.div variants={textVariant()}>
  <p className = {styles.sectionSubText}>Experience</p>

  <h2 className={styles.sectionHeadText}>Work Experience</h2>
</motion.div>


<div className='mt-20 flex flex-col'>
  <VerticalTimeline>
    {experience.map((exp, index) => (
      <VerticalTimelineElement}
</>
    )
}

export default SectionWrapper(Experience, "experience")