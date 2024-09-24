import { useState } from 'react';
import { FaServer, FaCloud, FaCogs, FaRocket, FaSyncAlt, FaToolbox, FaNetworkWired } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const deploymentSections = [
  {
    name: 'On-Premise Deployment',
    description: 'Deploy models on your local servers or internal cloud infrastructure.',
    icon: <FaServer />,
    link: '/model-deployment/on-premise',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Cloud-Based Deployment',
    description: 'Leverage cloud providers like AWS, GCP, and Azure to scale LLM deployments.',
    icon: <FaCloud />,
    link: '/model-deployment/cloud-based',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Model Serving',
    description: 'Use frameworks like TensorFlow Serving or TorchServe to serve LLMs efficiently.',
    icon: <FaNetworkWired />,
    link: '/model-deployment/model-serving',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Containerization & Docker',
    description: 'Containerize LLM deployments for portability and ease of use with Docker and Kubernetes.',
    icon: <FaToolbox />,
    link: '/model-deployment/containerization',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Scalability & Load Balancing',
    description: 'Implement horizontal scaling and load balancing for handling high-traffic LLM services.',
    icon: <FaSyncAlt />,
    link: '/model-deployment/scalability',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Edge Deployment',
    description: 'Deploy models to edge devices for low-latency inference at the edge of the network.',
    icon: <FaRocket />,
    link: '/model-deployment/edge-deployment',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Model Optimization for Deployment',
    description: 'Optimize LLMs for production deployment using quantization, pruning, and distillation.',
    icon: <FaCogs />,
    link: '/model-deployment/optimization',
    bgColor: 'bg-purple-500',
  },
];

export default function ModelDeploymentScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = deploymentSections.filter(section =>
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
        Model Deployment 🚀
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Learn about the best practices, tools, and platforms for deploying Large Language Models (LLMs) into production environments.
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
