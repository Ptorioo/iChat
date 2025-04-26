import React from 'react';
import { motion } from 'framer-motion';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: '熊崇安',
      role: '網站魔法師、報告者、提案功能發想、行銷策略',
      bio: '您好，我是熊崇安，我是這個網站的建立者，你可以叫我阿熊魔法師。',
      image: 'https://i.imgur.com/ZKqttsI.jpeg',
    },
    {
      name: '嚴邦華',
      role: '網站內容、報告統整',
      bio: '哈囉 ~ 我協助網站的部分，宅宅一枚',
      image:
        'https://files.catbox.moe/mgunnp.gif',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product Design',
      bio: 'Michael brings 10+ years of experience in product design and user experience. His designs have won multiple industry awards for innovation and usability.',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Emily Williams',
      role: 'VP of Marketing',
      bio: 'Emily has a proven track record in building tech brands and developing successful go-to-market strategies for innovative products.',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'David Kim',
      role: 'Lead Software Engineer',
      bio: 'David is a brilliant software architect with expertise in developing complex systems. He leads our engineering team in creating robust and scalable solutions.',
      image:
        'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
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
            ease: 'easeInOut',
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
            ease: 'easeInOut',
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
              Meet Our <span className="text-primary-400">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 text-lg mb-8"
            >
              Our team of visionaries, innovators, and experts work together to
              create revolutionary technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-primary-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-300 mb-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission & <br />
                <span className="text-primary-400">Company Values</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                At iChat, we're committed to creating innovative solutions
                that transform how people interact with technology. Our team of
                passionate experts works tirelessly to push the boundaries of
                what's possible.
              </p>

              <div className="space-y-6">
                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Innovation</h3>
                  <p className="text-neutral-400">
                    We constantly push boundaries and challenge conventional
                    thinking to create revolutionary products.
                  </p>
                </div>

                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Excellence</h3>
                  <p className="text-neutral-400">
                    We strive for excellence in everything we do, from product
                    design to customer service.
                  </p>
                </div>

                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Collaboration
                  </h3>
                  <p className="text-neutral-400">
                    We believe in the power of teamwork and foster a
                    collaborative environment where ideas flourish.
                  </p>
                </div>
              </div>
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
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our Team Working Together"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TeamPage;
