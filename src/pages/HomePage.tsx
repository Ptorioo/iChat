import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

import HeroSection from '../components/Home/HeroSection';
import FeatureCard from '../components/Home/FeatureCard';
import TestimonialCard from '../components/Home/TestimonialCard';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Digital Self Simulation',
      description: 'Create your digital twin through AI-powered personality analysis, voice cloning, and visual simulation.',
      icon: 'User',
      color: 'bg-primary-400/10 text-primary-400'
    },
    {
      title: 'Time Travel Conversations',
      description: 'Engage in meaningful dialogues with your past and future selves, powered by advanced AI.',
      icon: 'Clock',
      color: 'bg-secondary-400/10 text-secondary-400'
    },
    {
      title: 'Personal Data Ownership',
      description: 'Take control of your digital footprint with secure, user-owned data storage and management.',
      icon: 'Shield',
      color: 'bg-accent-400/10 text-accent-400'
    },
    {
      title: 'AI Life Assistant',
      description: 'Get personalized insights, recommendations, and emotional support from your AI companion.',
      icon: 'Brain',
      color: 'bg-warning-400/10 text-warning-400'
    }
  ];

  const testimonials = [
    {
      quote: "This platform has revolutionized how I reflect on my past and plan for my future. The conversations with my future self have been incredibly motivating.",
      author: "Sarah Chen",
      position: "Product Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    },
    {
      quote: "The AI assistant's ability to understand my patterns and provide meaningful insights has helped me grow both personally and professionally.",
      author: "Michael Zhang",
      position: "Software Engineer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    },
    {
      quote: "Having conversations with my past self has been therapeutic. It's helped me understand my growth and make better decisions for my future.",
      author: "Emma Rodriguez",
      position: "Life Coach",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-neutral-400 text-lg">
              Experience a new way of self-discovery and personal growth through AI-powered conversations with yourself.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect With Your <br />
                <span className="text-primary-400">Past & Future Self</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Our AI-powered platform creates a bridge between your past, present, and future selves. Through advanced personality simulation and emotional intelligence, we help you gain deeper insights into your personal growth journey.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'AI-powered personality simulation',
                  'Secure personal data ownership',
                  'Emotional intelligence support',
                  'Time capsule functionality'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/product"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Explore Features
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 lg:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-lg"></div>
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                  <img 
                    src="https://i.imgur.com/H5usBru.jpeg" 
                    alt="AI Conversation Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-neutral-900 relative">
        <div className="absolute inset-0 bg-primary-600/5 bg-grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Future of Self-Discovery
            </h2>
            <p className="text-neutral-400 text-lg">
              Watch how our AI-powered platform helps you connect with different versions of yourself.
            </p>
          </motion.div>

          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50 blur"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/EIa1gP4FKu8" 
                title="Product Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              User Stories
            </h2>
            <p className="text-neutral-400 text-lg">
              Discover how our platform is helping people understand themselves better and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-neutral-900/70 to-neutral-800/70 backdrop-blur-xl p-12 rounded-2xl border border-neutral-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Journey of Self-Discovery
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing meaningful conversations with their past and future selves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/product"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Try It Free
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link
                to="/contact"
                className="bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Contact Us
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;