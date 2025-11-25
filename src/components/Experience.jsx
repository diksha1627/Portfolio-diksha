import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className=" h-full p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 hover:-translate-y-2 overflow-hidden">
        
        {/* Animated Background Gradient */}
        <div className=" inset-0 bg-gradient-to-br from-green-400/0 via-blue-500/0 to-purple-500/0 group-hover:from-green-400/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700" />
        
        {/* Animated Corner Lines */}
        <div className=" top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-transparent group-hover:w-20 transition-all duration-500" />
        <div className=" top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-green-400 to-transparent group-hover:h-20 transition-all duration-500 delay-100" />
        
        <div className=" bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-blue-500 to-transparent group-hover:w-20 transition-all duration-500 delay-200" />
        <div className=" bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-blue-500 to-transparent group-hover:h-20 transition-all duration-500 delay-300" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Company Icon */}
          <div className="mb-4">
            <div className="w-16 h-16 rounded-xl bg-gray-700/50 group-hover:bg-gradient-to-br group-hover:from-green-400/20 group-hover:to-blue-500/20 border border-gray-600/50 group-hover:border-green-400/50 flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Title and Company Info */}
          <div className="mb-4 flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
              {experience.title}
            </h3>
            <p className="text-green-400 text-base font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">
              {experience.company_name}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{experience.date}</span>
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="mt-auto pt-4 border-t border-gray-700/50 group-hover:border-green-400/30 transition-colors duration-300">
            <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 group-hover:text-green-400 transition-colors duration-300">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {experience.points.slice(0, 3).map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                  className="flex items-start gap-2 group/item"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-green-400/40 group-hover:bg-green-400 group-hover:scale-150 transition-all duration-300" />
                  <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
            {experience.points.length > 3 && (
              <p className="text-green-400/60 text-xs mt-3 group-hover:text-green-400 transition-colors duration-300">
                +{experience.points.length - 3} more responsibilities
              </p>
            )}
          </div>

          {/* Hover View Details Indicator */}
          <div className="mt-4 flex items-center gap-2 text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span>View Details</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Animated Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10" />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
          What I have done so far
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Work Experience<span className="text-green-400">.</span>
        </h2>
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full" />
      </motion.div>

      {/* Four Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* Summary Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-green-400/20 backdrop-blur-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">
                {experiences.length} Professional Experiences
              </p>
              <p className="text-gray-400 text-sm">
                Continuously growing and learning
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {experiences.reduce((acc, exp) => acc + exp.points.length, 0)}+
              </div>
              <div className="text-gray-400 text-xs mt-1">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                100%
              </div>
              <div className="text-gray-400 text-xs mt-1">Dedication</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");