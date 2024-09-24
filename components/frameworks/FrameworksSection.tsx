import { useState } from 'react';
import { FaPython, FaCodeBranch, FaCog, FaCloud, FaToolbox } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const frameworksSections = [
  {
    name: 'PyTorch',
    description: 'Learn how to build and fine-tune LLMs using PyTorch, a flexible deep learning library.',
    icon: <FaPython />,
    link: '/frameworks/pytorch',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'TensorFlow',
    description: 'Explore the TensorFlow ecosystem for training and deploying LLMs.',
    icon: <FaCog />,
    link: '/frameworks/tensorflow',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Hugging Face Transformers',
    description: 'Leverage pre-trained LLMs and state-of-the-art models with the Hugging Face library.',
    icon: <FaCodeBranch />,
    link: '/frameworks/huggingface',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'ONNX (Open Neural Network Exchange)',
    description: 'Optimize and export your models for efficient inference using ONNX.',
    icon: <FaCloud />,
    link: '/frameworks/onnx',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Keras',
    description: 'Use Keras for building and training LLMs with an easy-to-use high-level API.',
    icon: <FaPython />,
    link: '/frameworks/keras',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'DeepSpeed',
    description: 'Enhance model efficiency with Microsoft’s DeepSpeed, built for large-scale models.',
    icon: <FaToolbox />,
    link: '/frameworks/deepspeed',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Ray Serve',
    description: 'Scale model deployment with Ray Serve for distributed and low-latency inference.',
    icon: <FaCloud />,
    link: '/frameworks/ray-serve',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Megatron-LM',
    description: 'Train massive LLMs with NVIDIA’s Megatron-LM for high-performance models.',
    icon: <GiArtificialHive />,
    link: '/frameworks/megatron-lm',
    bgColor: 'bg-pink-500',
  },
];

export default function FrameworksScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = frameworksSections.filter(section =>
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
        LLM Development Frameworks 🛠️
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore the most popular frameworks and tools for building, fine-tuning, and deploying Large Language Models.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search for a framework..."
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
