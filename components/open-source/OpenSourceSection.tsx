import { useState } from 'react';
import { FaRobot, FaCodeBranch, FaToolbox, FaDatabase, FaServer, FaCog } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const openSourceSections = [
  {
    name: 'Open-Source LLM Models',
    description: 'Discover open-source language models like GPT, BERT, and more.',
    icon: <FaRobot />,
    link: '/open-source/llm-models',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Libraries & Frameworks',
    description: 'Explore libraries and frameworks that power LLM development.',
    icon: <FaToolbox />,
    link: '/open-source/libraries',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Datasets for Training',
    description: 'Access public datasets used for training LLMs.',
    icon: <FaDatabase />,
    link: '/open-source/datasets',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Model Deployment Tools',
    description: 'Explore tools to deploy and serve language models at scale.',
    icon: <FaServer />,
    link: '/open-source/deployment-tools',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Model Optimization',
    description: 'Discover tools for optimizing models for faster inference.',
    icon: <FaCog />,
    link: '/open-source/model-optimization',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Architecture Research',
    description: 'Access resources related to the architecture of LLMs.',
    icon: <GiArtificialHive />,
    link: '/open-source/architecture',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Open-Source LLM Tools',
    description: 'Tools and utilities to help with LLM training and evaluation.',
    icon: <FaCodeBranch />,
    link: '/open-source/tools',
    bgColor: 'bg-teal-500',
  },
];

export default function OpenSourceScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = openSourceSections.filter(section =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <motion.h1
        className="text-center text-5xl font-bold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Open Source for LLMs 💻
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore open-source projects, models, datasets, tools, and libraries for Large Language Models.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search for a section..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
        }}
      >
        {filteredSections.map((section, index) => (
          <Link href={section.link} key={index}>
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${section.bgColor} cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white flex items-center space-x-4">
                <div className="text-4xl">{section.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{section.name}</h3>
                  <p className="text-lg">{section.description}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
