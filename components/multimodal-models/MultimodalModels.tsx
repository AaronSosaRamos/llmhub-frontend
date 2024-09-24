import { useState } from 'react';
import { FaMicrophone, FaFileVideo, FaImage, FaHeadphones, FaTools, FaBrain, FaCogs } from 'react-icons/fa';
import { GiArtificialHive } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const multimodalSections = [
  {
    name: 'Text-Image Models',
    description: 'Explore models that can understand and generate both text and images.',
    icon: <FaImage />,
    link: '/multimodal-models/text-image',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Text-Audio Models',
    description: 'Learn about models that work with both text and audio data.',
    icon: <FaMicrophone />,
    link: '/multimodal-models/text-audio',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Text-Video Models',
    description: 'Discover models that can generate or process text and video simultaneously.',
    icon: <FaFileVideo />,
    link: '/multimodal-models/text-video',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Vision-Language Models',
    description: 'Understand models that combine visual and language processing.',
    icon: <FaBrain />,
    link: '/multimodal-models/vision-language',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Speech-to-Text & Text-to-Speech',
    description: 'Explore models that convert speech to text and vice versa.',
    icon: <FaHeadphones />,
    link: '/multimodal-models/speech-text',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Cross-Modal Generation',
    description: 'Understand how models can generate one modality from another (e.g., image from text).',
    icon: <FaTools />,
    link: '/multimodal-models/cross-modal-generation',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Multimodal Fusion',
    description: 'Explore techniques to combine multiple data modalities into a single model.',
    icon: <FaCogs />,
    link: '/multimodal-models/fusion',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Multimodal Applications',
    description: 'Learn about real-world applications of multimodal models, from healthcare to art.',
    icon: <GiArtificialHive />,
    link: '/multimodal-models/applications',
    bgColor: 'bg-pink-500',
  },
];

export default function MultimodalModelsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = multimodalSections.filter(section =>
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
        Multimodal Models 🎥🎧💬
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore models that work with multiple data types, from text and images to video and audio.
      </motion.p>

      {/* Search Input */}
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
