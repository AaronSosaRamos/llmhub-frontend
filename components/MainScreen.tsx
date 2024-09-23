import { FaRobot, FaCogs, FaBook, FaNetworkWired, FaShieldAlt, FaProjectDiagram, FaSearch, FaToolbox } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import React from 'react';

const services = [
  { name: 'Fundamentals', icon: <FaRobot />, description: 'Learn the basics of LLMs.', bgColor: 'bg-blue-500' },
  { name: 'Prompt Engineering', icon: <FaCogs />, description: 'Master crafting effective prompts.', bgColor: 'bg-green-500' },
  { name: 'RAG (Retrieval-Augmented Generation)', icon: <FaSearch />, description: 'Combine retrieval with generation.', bgColor: 'bg-purple-500' },
  { name: 'Papers', icon: <FaBook />, description: 'Access the latest research papers.', bgColor: 'bg-yellow-500' },
  { name: 'Open Source', icon: <FaToolbox />, description: 'Explore open-source projects.', bgColor: 'bg-red-500' },
  { name: 'Fine-Tuning', icon: <FaCogs />, description: 'Optimize LLMs for specific tasks.', bgColor: 'bg-indigo-500' },
  { name: 'Architecture', icon: <GiArtificialHive />, description: 'Understand LLM architectures.', bgColor: 'bg-pink-500' },
  { name: 'Model Deployment', icon: <FaNetworkWired />, description: 'Learn how to deploy models.', bgColor: 'bg-teal-500' },
  { name: 'Security', icon: <FaShieldAlt />, description: 'Explore security best practices.', bgColor: 'bg-orange-500' },
  { name: 'Multimodal Models', icon: <FaProjectDiagram />, description: 'Work with multimodal LLMs.', bgColor: 'bg-lime-500' },
  { name: 'Frameworks', icon: <FaToolbox />, description: 'Discover LLM development frameworks.', bgColor: 'bg-cyan-500' },
  { name: 'Inference Optimization', icon: <FaCogs />, description: 'Boost model inference efficiency.', bgColor: 'bg-amber-500' },
];

export default function MainScreen() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-10">Welcome to LLMHub</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">Your hub for everything related to Large Language Models (LLMs)</p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${service.bgColor}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-white flex items-center space-x-4">
              <div className="text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{service.name}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
