import { useState } from 'react';
import { FaCogs, FaLayerGroup, FaProjectDiagram, FaBrain, FaCodeBranch } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const architectureSections = [
  {
    name: 'Transformer Architecture',
    description: 'Learn about the backbone architecture behind models like GPT and BERT.',
    icon: <FaProjectDiagram />,
    link: '/architecture/transformer',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Attention Mechanism',
    description: 'Explore the attention mechanism that powers modern language models.',
    icon: <FaBrain />,
    link: '/architecture/attention-mechanism',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Feedforward Neural Networks',
    description: 'Understand the feedforward components in LLM architectures.',
    icon: <FaLayerGroup />,
    link: '/architecture/feedforward-networks',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Self-Attention vs. Cross-Attention',
    description: 'Compare self-attention and cross-attention layers in transformer models.',
    icon: <FaCodeBranch />,
    link: '/architecture/self-vs-cross-attention',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Encoder-Decoder Models',
    description: 'Delve into models like T5 that use both encoder and decoder layers.',
    icon: <GiArtificialHive />,
    link: '/architecture/encoder-decoder',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Positional Encoding',
    description: 'Learn how positional encodings are used to represent word order in sequences.',
    icon: <FaCogs />,
    link: '/architecture/positional-encoding',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Layer Normalization',
    description: 'Explore how layer normalization improves training stability in deep networks.',
    icon: <FaLayerGroup />,
    link: '/architecture/layer-normalization',
    bgColor: 'bg-teal-500',
  },
];

export default function ArchitectureScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = architectureSections.filter(section =>
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
        LLM Architectures 🏗️
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore the underlying architectures that power modern Large Language Models.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search for an architecture..."
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
