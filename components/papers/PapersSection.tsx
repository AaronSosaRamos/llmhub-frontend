import { useState } from 'react';
import { FaBrain, FaCogs, FaSearch, FaBook, FaNetworkWired, FaBookOpen, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PapersScreen() {
  const sections = [
    {
      name: 'Foundational Papers',
      description: 'Key papers that laid the groundwork for LLM research.',
      icon: <FaBook />,
      link: '/papers/foundational',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Fine-Tuning & Transfer Learning',
      description: 'Research focused on fine-tuning models for specific tasks.',
      icon: <FaCogs />,
      link: '/papers/fine-tuning',
      bgColor: 'bg-green-500',
    },
    {
      name: 'RAG and Retrieval Methods',
      description: 'Papers focused on retrieval-augmented generation techniques.',
      icon: <FaNetworkWired />,
      link: '/papers/rag',
      bgColor: 'bg-orange-500',
    },
    {
      name: 'Multimodal Learning',
      description: 'Explore papers that combine text, image, and other modalities.',
      icon: <FaGlobe />,
      link: '/papers/multimodal',
      bgColor: 'bg-purple-500',
    },
    {
      name: 'Prompt Engineering',
      description: 'Research on optimizing and crafting prompts for LLMs.',
      icon: <FaSearch />,
      link: '/papers/prompt-engineering',
      bgColor: 'bg-red-500',
    },
    {
      name: 'Scaling Laws & Model Efficiency',
      description: 'Papers studying the relationship between model size and performance.',
      icon: <FaBrain />,
      link: '/papers/scaling-laws',
      bgColor: 'bg-teal-500',
    },
    {
      name: 'Continual Learning & Adaptation',
      description: 'Research focused on continual learning for LLMs.',
      icon: <FaBookOpen />,
      link: '/papers/continual-learning',
      bgColor: 'bg-yellow-500',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = sections.filter(section =>
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
        Research Papers on LLMs 📚
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore the general sections of research papers that cover key areas in LLM development and application.
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
              className={`relative p-6 rounded-lg shadow-lg ${section.bgColor} transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-center">{section.name}</h3>
                <p className="text-md text-center mt-2">{section.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
