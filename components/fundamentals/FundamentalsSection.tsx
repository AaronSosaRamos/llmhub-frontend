import { motion } from 'framer-motion';
import { FaBrain, FaCogs, FaRobot, FaLaptopCode, FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';

export default function FundamentalsMainScreen() {
  const sections = [
    {
      title: 'Overview',
      description: 'Understand the basics of LLMs. 🧠',
      icon: <FaBrain className="text-5xl text-blue-500" />,
      link: '/fundamentals/overview',
      bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      title: 'Key Concepts',
      description: 'Explore core concepts in LLMs. 🔑',
      icon: <FaCogs className="text-5xl text-green-500" />,
      link: '/fundamentals/key-concepts',
      bgGradient: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
      title: 'How LLMs Work',
      description: 'Learn how large language models function. 🤖',
      icon: <FaRobot className="text-5xl text-purple-500" />,
      link: '/fundamentals/how-llms-work',
      bgGradient: 'bg-gradient-to-r from-purple-500 to-purple-700',
    },
    {
      title: 'Applications',
      description: 'Discover real-world applications of LLMs. 💻',
      icon: <FaLaptopCode className="text-5xl text-red-500" />,
      link: '/fundamentals/applications',
      bgGradient: 'bg-gradient-to-r from-red-500 to-red-700',
    },
    {
      title: 'Resources',
      description: 'Access resources to dive deeper. 📚',
      icon: <FaBookOpen className="text-5xl text-yellow-500" />,
      link: '/fundamentals/resources',
      bgGradient: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-8">
      <motion.h1
        className="text-center text-5xl font-extrabold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Fundamentals of Large Language Models
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sections.map((section, index) => (
          <Link href={section.link} key={index}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-8 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-all ${section.bgGradient} text-white`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 opacity-30 blur-lg bg-white/10 rounded-full w-96 h-96 -top-16 -right-16"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {section.icon}
                <h2 className="text-2xl font-bold mt-6">{section.title}</h2>
                <p className="text-lg mt-2 opacity-90">{section.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
