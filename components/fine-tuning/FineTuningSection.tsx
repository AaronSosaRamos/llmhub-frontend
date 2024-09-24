import { useState } from 'react';
import { FaCogs, FaSyncAlt, FaTools, FaLayerGroup, FaBrain, FaChartLine, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fineTuningSections = [
  {
    name: 'Task-Specific Fine-Tuning',
    description: 'Adapt LLMs for specific tasks like text classification or summarization.',
    icon: <FaCogs />,
    link: '/fine-tuning/task-specific',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Transfer Learning',
    description: 'Leverage pre-trained models and transfer them to new domains or tasks.',
    icon: <FaSyncAlt />,
    link: '/fine-tuning/transfer-learning',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Domain-Specific Fine-Tuning',
    description: 'Fine-tune LLMs on specialized datasets for fields like law or medicine.',
    icon: <FaTools />,
    link: '/fine-tuning/domain-specific',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Multitask Fine-Tuning',
    description: 'Train models on multiple tasks simultaneously to improve performance.',
    icon: <FaLayerGroup />,
    link: '/fine-tuning/multitask',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Parameter Efficient Fine-Tuning',
    description: 'Explore methods like LoRA, Adapters, and prefix tuning to save computation.',
    icon: <FaChartLine />,
    link: '/fine-tuning/parameter-efficient',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Continual Fine-Tuning',
    description: 'Update models continuously as new data becomes available.',
    icon: <FaBrain />,
    link: '/fine-tuning/continual',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Dataset Selection & Preparation',
    description: 'Prepare and curate datasets for effective fine-tuning of models.',
    icon: <FaDatabase />,
    link: '/fine-tuning/dataset-selection',
    bgColor: 'bg-purple-500',
  },
];

export default function FineTuningScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = fineTuningSections.filter(section =>
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
        Fine-Tuning Techniques for LLMs 🛠️
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore various techniques and methods to fine-tune Large Language Models for specialized tasks and domains.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search for a technique..."
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
