import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-500/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/5 border border-white/10 rounded-full py-1 px-4 mb-6"
            >
              <span className="text-primary-400 text-sm font-medium">AI-Powered Self-Discovery</span>
              <span className="bg-primary-400/20 w-1.5 h-1.5 rounded-full mx-2"></span>
              <span className="text-white/70 text-sm">Beta Access Available</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Connect With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                All Versions of You
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-300 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experience meaningful conversations with your past and future selves through our revolutionary AI-powered platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/product"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Learn More
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img 
                src="https://i.imgur.com/mbxxick.jpeg" 
                alt="AI Conversation Interface" 
                className="w-full h-auto"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-neutral-900 rounded-xl p-4 border border-neutral-800"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-400 font-semibold">98%</span>
                </div>
                <div>
                  <p className="text-white font-medium">User Satisfaction</p>
                  <p className="text-neutral-400 text-sm">Based on beta feedback</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-neutral-900 rounded-xl p-4 border border-neutral-800"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-400 font-semibold">85%</span>
                </div>
                <div>
                  <p className="text-white font-medium">Growth Insights</p>
                  <p className="text-neutral-400 text-sm">Reported by users</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-24 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {['AI-Powered Conversations', 'Personal Data Control', 'Emotional Intelligence', 'Time Travel Experience'].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-white/80 font-medium">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;