import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Play, ChevronRight } from 'lucide-react';

const ProductPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const specifications = [
    { label: 'Dimensions', value: '12.3 x 8.7 x 1.2 inches' },
    { label: 'Weight', value: '2.5 pounds (1.13 kg)' },
    { label: 'Processor', value: 'Quantum Core i9, 8-core' },
    { label: 'Memory', value: '32GB LPDDR5' },
    { label: 'Storage', value: '1TB SSD' },
    { label: 'Battery Life', value: 'Up to 20 hours' },
    { label: 'Display', value: '15.6" Retina XDR, 4K' },
    { label: 'Connectivity', value: 'Wi-Fi 6E, Bluetooth 5.2' }
  ];

  const features = [
    {
      title: 'Revolutionary Processing Power',
      description: 'Our proprietary Quantum Core processor delivers up to 2x the performance of leading competitors while consuming 30% less power.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Stunning Visual Experience',
      description: 'The 4K Retina XDR display offers unparalleled color accuracy and brightness, making it perfect for creative professionals and multimedia enthusiasts.',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Intelligent Adaptive Technology',
      description: 'Our AI-powered system learns your habits and optimizes performance in real-time, ensuring peak efficiency exactly when you need it most.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200'
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
              Revolutionary <span className="text-primary-400">Tech Product</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 text-lg mb-8"
            >
              Experience the future of technology with our cutting-edge product that combines powerful performance with elegant design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#features"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Explore Features
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a
                href="#video"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Watch Demo
                <Play size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-lg"></div>
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                  <img 
                    src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Product Overview" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Superior Design & <br />
                <span className="text-primary-400">Unmatched Performance</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Our flagship product combines sleek aesthetics with powerful performance. Crafted from premium materials and engineered for reliability, it delivers an exceptional experience that exceeds expectations.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Revolutionary Quantum Core processor',
                  'Stunning 4K Retina XDR display',
                  'All-day 20-hour battery life',
                  'Advanced AI-powered features',
                  'Premium build quality and materials'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Pre-order Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-neutral-950">
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
              Discover the cutting-edge capabilities that set our product apart.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center"
                  >
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50 blur-lg"></div>
                    <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-neutral-400 text-lg">
              Powerful components engineered for exceptional performance.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-neutral-700 pb-4"
                >
                  <p className="text-neutral-400 text-sm mb-1">{spec.label}</p>
                  <p className="text-white font-medium">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section id="video" className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
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
              See It In Action
            </h2>
            <p className="text-neutral-400 text-lg">
              Watch our product demonstration to experience the full potential.
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
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

      {/* Call-to-Action */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
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
              Ready to Experience the Future?
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Pre-order now to be among the first to experience our revolutionary technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Pre-order Now
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link
                to="/contact"
                className="bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Contact Sales
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductPage;