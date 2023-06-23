import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index,testimonial, name, designation, company, image}) => (
  <motion.div variants={fadeIn("", "spring", 0.5 * index, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
  <p className="text-white font-black text-[48px]"></p>

    <div className-"mt-1">
    <p>{testimonial}</p>

    <div className="mt-7 flex justify-between items-center gap-1">

      <div className="flex-1 flex flex-col">
      <p className = text-white font-medium text-[16px]">

      <span className = "blue-text-gradient">@</span>{name}
      </p>

      <p className = "mt-1 text-secondary text-[12px]">
      {designation} of {company}
      </p>
      </div>

      <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 object-cover rounded-full"/>
    </div>
    </div>

  </motion.div>
)


const Feedbacks = () => {
  return (
<div className = "mt-12 bg-black rounded-[20px]" >
  <div className = {`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
<motion.div variants={textVariant()}>
  <p  className={styles.sectionSubText}>Feedbacks</p>
  <h2 className={styles.sectionHeadText}>What people say</h2>
</motion.div>
</div>

<div className = {`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>

    )
}

export default SectionWrapper(Feedbacks, "");