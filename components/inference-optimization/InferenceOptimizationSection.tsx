import { useState } from 'react';
import { FaCogs, FaMicrochip, FaBolt, FaTachometerAlt, FaChartBar, FaDatabase, FaBalanceScale, FaCloud } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const optimizationSections = [
  {
    name: 'Quantization',
    description: 'Reduce model size and increase efficiency by using lower precision data types like INT8 or FP16.',
    icon: <FaBalanceScale />,
    link: '/inference-optimization/quantization',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Model Pruning',
    description: 'Optimize model inference by removing unnecessary weights or neurons.',
    icon: <FaChartBar />,
    link: '/inference-optimization/model-pruning',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Hardware Acceleration',
    description: 'Leverage hardware accelerators like GPUs, TPUs, or dedicated AI chips to speed up inference.',
    icon: <FaMicrochip />,
    link: '/inference-optimization/hardware-acceleration',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Batching & Parallelism',
    description: 'Use batching and parallelism to process multiple inputs concurrently for faster inference.',
    icon: <FaBolt />,
    link: '/inference-optimization/batching-parallelism',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Distillation',
    description: 'Reduce the size of a large LLM by transferring its knowledge to a smaller, faster model.',
    icon: <GiArtificialHive />,
    link: '/inference-optimization/distillation',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Caching Mechanisms',
    description: 'Implement caching techniques to store results of repeated computations for faster inference.',
    icon: <FaDatabase />,
    link: '/inference-optimization/caching',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Optimized Kernels',
    description: 'Use optimized libraries like cuDNN, Intel MKL, and OpenVINO for faster matrix computations.',
    icon: <FaCogs />,
    link: '/inference-optimization/optimized-kernels',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Cloud-based Optimization',
    description: 'Explore cloud-based inference optimization techniques like serverless computing and edge computing.',
    icon: <FaCloud />,
    link: '/inference-optimization/cloud-based',
    bgColor: 'bg-pink-500',
  },
];

export default function InferenceOptimizationScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = optimizationSections.filter(section =>
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
        Inference Optimization 🏎️
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Discover various techniques and strategies to optimize the inference speed and efficiency of Large Language Models.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
