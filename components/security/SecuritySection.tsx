import { useState } from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaBug, FaKey, FaExclamationTriangle, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const securitySections = [
  {
    name: 'Data Privacy & Encryption',
    description: 'Ensure data privacy and encryption during model training and inference.',
    icon: <FaLock />,
    link: '/security/data-privacy-encryption',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Access Control & Authentication',
    description: 'Manage who can access and modify your LLM models using robust authentication systems.',
    icon: <FaUserShield />,
    link: '/security/access-control-authentication',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Vulnerability Testing',
    description: 'Conduct thorough security testing to identify and mitigate vulnerabilities.',
    icon: <FaBug />,
    link: '/security/vulnerability-testing',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Model Poisoning Attacks',
    description: 'Prevent malicious actors from corrupting models during training or inference.',
    icon: <FaExclamationTriangle />,
    link: '/security/model-poisoning-attacks',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Secure APIs & Endpoints',
    description: 'Ensure secure communication with LLMs via API endpoints.',
    icon: <FaNetworkWired />,
    link: '/security/secure-apis',
    bgColor: 'bg-orange-500',
  },
  {
    name: 'Key Management & Encryption Keys',
    description: 'Manage encryption keys for securing sensitive data in LLM systems.',
    icon: <FaKey />,
    link: '/security/key-management',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Data Breach Prevention',
    description: 'Implement measures to protect against data breaches and leaks during LLM deployment.',
    icon: <FaDatabase />,
    link: '/security/data-breach-prevention',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'Adversarial Attack Defenses',
    description: 'Deploy defenses against adversarial attacks targeting LLMs.',
    icon: <FaShieldAlt />,
    link: '/security/adversarial-attack-defenses',
    bgColor: 'bg-pink-500',
  },
];

export default function SecurityScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = securitySections.filter(section =>
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
        LLM Security Practices 🔒
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Learn the best practices for securing Large Language Models (LLMs) from attacks, breaches, and vulnerabilities.
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
