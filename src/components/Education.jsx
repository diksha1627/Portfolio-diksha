import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const FeedbackCard = ({
//   index,
//   certificate,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     {/* <p className='text-white  text-[48px]'>"</p> */}

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[15px]'>{certificate}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col w-[10rem]'>
//         <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />
//           {/* <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p> */}
//         </div>
// {/* 
//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         /> */}
//       </div>
//     </div>
//   </motion.div>
// );

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      <motion.div
     variants={fadeIn("", "spring",  0.5, 0.75)}
     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
   > 
    <p className='text-white  text-[20px]  border-b'>Bachelor Of Technology</p> <br />
    <p className='text-white  text-[15px]'>University Of Engineering and Management Kolkata</p> 
    <p className='text-white  text-[15px]'>2020-2024</p> 

   </motion.div>
   <motion.div
     variants={fadeIn("", "spring",  0.5, 0.75)}
     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
   > 
    <p className='text-white  text-[20px] border-b'>High School</p>  <br />
    <p className='text-white  text-[15px]'>Modern High School for Girls</p> 
    <p className='text-white  text-[15px]'>2018-2020</p>
    <p className='text-white  text-[15px]'>89.6%</p> 
 

   </motion.div>
   <motion.div
     variants={fadeIn("", "spring",  0.5, 0.75)}
     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
   > 
    <p className='text-white  text-[20px] border-b'>Primary School</p>  <br />
    <p className='text-white  text-[15px]'>Loreto Day School Dharamtala</p> 
    <p className='text-white  text-[15px]'>2018 passout</p> 
    <p className='text-white  text-[15px]'>90%</p> 


   </motion.div>
   
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");