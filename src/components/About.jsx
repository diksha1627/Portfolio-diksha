import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full group cursor-pointer'
    >
      <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-[1px] overflow-hidden'>
        {/* Animated gradient border */}
        <div className='absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        
        <div className='relative bg-tertiary rounded-2xl py-8 px-8 min-h-[280px] flex justify-center items-center flex-col gap-4 transition-transform duration-300 group-hover:scale-[0.98]'>
          {/* Icon container with glow effect */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500' />
            <div className='relative w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10'>
              <img
                src={icon}
                alt={title}
                className='w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300'
              />
            </div>
          </div>

          <h3 className='text-white text-[18px] font-bold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300'>
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/diksha1627",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/diksha-buxani-6bb1a1205/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Email",
      url: "mailto:dikshabuxani84745@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <motion.div variants={textVariant()} className="mb-8">
        <p className={`${styles.sectionSubText} text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview<span className="text-green-400">.</span>
        </h2>
      </motion.div>

      {/* Bio Section with Modern Card */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='relative mt-8 p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden'
      >
        {/* Decorative background elements */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-3xl' />
        
        <div className='relative z-10'>
          <p className='text-secondary text-[17px] leading-[30px] mb-8'>
            I'm a skilled software developer with experience in <span className="text-green-400 font-semibold">C++</span>, <span className="text-green-400 font-semibold">C</span>, <span className="text-green-400 font-semibold">Java</span>, and <span className="text-green-400 font-semibold">JavaScript</span>, and expertise in frameworks like <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Node.js</span>, and <span className="text-blue-400 font-semibold">Three.js</span>. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>

          {/* Social Links */}
          <div className='flex flex-wrap gap-4'>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : "_self"}
                rel={link.name !== "Email" ? "noopener noreferrer" : ""}
                variants={fadeIn("up", "spring", index * 0.1, 0.5)}
                className='group relative'
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />
                <div className='relative flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:transform group-hover:scale-105'>
                  <div className={`text-white   ${link.gradient} transition-all duration-300`}>
                    {link.icon}
                  </div>
                  <span className='text-white text-[15px] font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300'>
                    {link.name}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-20'
      >
        <h3 className='text-white text-[24px] font-bold mb-8 text-center'>
          What I Do<span className="text-green-400">.</span>
        </h3>
        <div className='flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");