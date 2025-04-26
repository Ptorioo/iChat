import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position, 
  image,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 relative group"
    >
      <Quote className="text-primary-500/20 absolute top-4 right-4" size={40} />
      
      <p className="text-neutral-300 mb-6 relative z-10">
        "{quote}"
      </p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-500/30"
        />
        <div>
          <h4 className="text-white font-medium">{author}</h4>
          <p className="text-neutral-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;