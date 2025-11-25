import { styles } from "../style";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between h-full`}>
        
        {/* Left Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex-1 flex flex-col justify-center'
        >
          {/* Decorative line with dot */}
          <div className='flex items-center gap-4 mb-8'>
            <div className='flex flex-col items-center'>
              <motion.div 
                className='w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500'
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className='w-1 h-24 bg-gradient-to-b from-teal-400 to-transparent' />
            </div>
            <div className='h-px flex-1 bg-gradient-to-r from-teal-400/50 to-transparent'></div>
          </div>

          {/* Main Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className={`${styles.heroHeadText} text-white mb-2`}>
                Hi, I'm{' '}
                <span className='inline-block'>
                  <span className='bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold'>
                    Diksha
                  </span>
                  <motion.span
                    className='inline-block ml-2'
                    animate={{ rotate: [0, 14, -8, 14, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    👋
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`${styles.heroSubText} mt-4 text-gray-300 max-w-xl`}
            >
              I develop{' '}
              <span className='text-teal-400 font-semibold'>3D visuals</span>,{' '}
              <span className='text-cyan-400 font-semibold'>user interfaces</span>{' '}
              and{' '}
              <span className='text-blue-400 font-semibold'>web applications</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='flex flex-wrap gap-4 mt-8'
            >
              <a href='#work'>
                <button className='px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105'>
                  View My Work
                </button>
              </a>
              <a href='#contact'>
                <button className='px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-full font-semibold hover:bg-teal-400/10 transition-all duration-300 hover:scale-105'>
                  Get In Touch
                </button>
              </a>
            </motion.div>

            {/* Stats or Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='flex flex-wrap gap-3 mt-8'
            >
              {['React', 'Node.js', 'Three.js', 'Web3'].map((tech, index) => (
                <span 
                  key={tech}
                  className='px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-full text-sm text-teal-300'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Lottie Animation Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative">
            <Lottie 
              animationData={animationData} 
              loop={true}  
              className="w-full max-w-[500px] h-auto lg:max-w-[600px]" 
            />
            {/* Glow effect behind animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>

     
    </section>
  )
}

export default Hero