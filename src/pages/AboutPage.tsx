import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Our journey began with a vision to revolutionize technology and make it more accessible.'
    },
    {
      year: '2025',
      title: 'First Product Prototype',
      description: 'After months of R&D, we developed our first working prototype that exceeded performance expectations.'
    },
    {
      year: '2025',
      title: 'Seed Funding Secured',
      description: 'Secured $5M in seed funding to accelerate product development and expand our team.'
    },
    {
      year: '2025',
      title: 'Beta Testing Launch',
      description: 'Successfully launched our beta program with over 500 early adopters providing valuable feedback.'
    },
    {
      year: '2025',
      title: 'Series A Funding',
      description: 'Raised $25M in Series A funding to scale operations and prepare for market launch.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded our team globally and established partnerships with major technology providers.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-neutral-950 overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About <span className="text-primary-400">iChat</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 text-lg mb-8"
            >
              We're a team of innovators, engineers, and visionaries dedicated to creating revolutionary technology that transforms lives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story & <br />
                <span className="text-primary-400">Journey</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                Founded in 2025, iChat began with a simple mission: to create technology that enhances human potential. What started as a small team working out of a garage has grown into a global company at the forefront of technological innovation.
              </p>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Our journey has been defined by persistence, innovation, and a relentless pursuit of excellence. Through challenges and triumphs, we've remained committed to our vision of creating revolutionary products that make a difference.
              </p>
              
              <Link
                to="/team"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Meet Our Team
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <img 
                  src="https://i.imgur.com/eJdfogn.jpeg" 
                  alt="Our Story" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-neutral-400 text-lg">
              Key milestones that have shaped our path to innovation.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-700 transform md:translate-x-0 translate-x-4"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center md:items-start gap-8`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary-500 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 translate-x-0 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6">
                      <span className="text-primary-400 font-semibold block mb-2">{milestone.year}</span>
                      <h3 className="text-white text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-neutral-400">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <img 
                  src="https://i.imgur.com/Gdqw8Xw.jpeg" 
                  alt="Our Mission" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission & <br />
                <span className="text-primary-400">Vision</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                At iChat, our mission is to create innovative technology that enhances human potential and transforms how people interact with the world. We envision a future where our products empower individuals and organizations to achieve more than they ever thought possible.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Revolutionize technology with user-centric design',
                  'Make advanced technology accessible to everyone',
                  'Build sustainable solutions for a better future',
                  'Foster a culture of innovation and excellence'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-neutral-400 text-lg">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Our Location</h3>
              <p className="text-neutral-400">
                臺大管二206
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-secondary-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-neutral-400">
                +886 0912345678<br />
                Monday-Friday, 9am-5pm UTC+8
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-accent-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-neutral-400">
                dontcontactus@mail.com<br />
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto mt-12 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Contact Us
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;