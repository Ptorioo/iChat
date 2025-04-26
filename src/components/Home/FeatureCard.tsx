import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, delay = 0 }) => {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:bg-neutral-800/80 transition-colors group"
    >
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-400">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;