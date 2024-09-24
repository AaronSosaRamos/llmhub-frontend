import { FaRobot, FaLightbulb, FaCog, FaLink, FaBrain, FaSearch, FaSync, FaStream, FaCogs, FaTree, FaSitemap } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PromptEngineeringScreen() {
  const techniques = [
    { name: 'Chain-of-Thought Prompting', description: 'Encourage models to explain their reasoning.', icon: <FaStream />, link: '/prompt-engineering/chain-of-thought', bgColor: 'bg-blue-500' },
    { name: 'Tree of Thoughts', description: 'Use decision trees for reasoning paths.', icon: <FaTree />, link: '/prompt-engineering/tree-of-thoughts', bgColor: 'bg-green-500' },
    { name: 'Zero-shot Prompting', description: 'Directly generate answers without examples.', icon: <FaRobot />, link: '/prompt-engineering/zero-shot', bgColor: 'bg-indigo-500' },
    { name: 'Few-shot Prompting', description: 'Provide few examples to guide the model.', icon: <FaLightbulb />, link: '/prompt-engineering/few-shot', bgColor: 'bg-red-500' },
    { name: 'Self-Consistency', description: 'Improve model confidence with consistent outputs.', icon: <FaSync />, link: '/prompt-engineering/self-consistency', bgColor: 'bg-purple-500' },
    { name: 'Meta Prompting', description: 'Leverage multiple prompts to improve performance.', icon: <FaCog />, link: '/prompt-engineering/meta', bgColor: 'bg-pink-500' },
    { name: 'Prompt Chaining', description: 'Link prompts together for more complex tasks.', icon: <FaLink />, link: '/prompt-engineering/prompt-chaining', bgColor: 'bg-yellow-500' },
    { name: 'Generate Knowledge Prompting', description: 'Guide models to generate knowledge.', icon: <FaBrain />, link: '/prompt-engineering/generate-knowledge', bgColor: 'bg-teal-500' },
    { name: 'Retrieval Augmented Generation', description: 'Combine information retrieval with generation.', icon: <FaSearch />, link: '/prompt-engineering/rag', bgColor: 'bg-orange-500' },
    { name: 'Automatic Prompt Engineer', description: 'Automate prompt creation and optimization.', icon: <FaCogs />, link: '/prompt-engineering/automatic-prompt', bgColor: 'bg-lime-500' },
    { name: 'Active-Prompt', description: 'Actively adjust prompts during the generation process.', icon: <FaRobot />, link: '/prompt-engineering/active-prompt', bgColor: 'bg-cyan-500' },
    { name: 'Automatic Reasoning and Tool-use', description: 'Integrate reasoning with tool use.', icon: <GiNetworkBars />, link: '/prompt-engineering/automatic-reasoning', bgColor: 'bg-amber-500' },
    { name: 'Directional Stimulus Prompting', description: 'Direct model attention with stimulus.', icon: <FaSearch />, link: '/prompt-engineering/directional-stimulus', bgColor: 'bg-gray-500' },
    { name: 'Reflexion', description: 'Enable models to reflect on past outputs.', icon: <FaBrain />, link: '/prompt-engineering/reflexion', bgColor: 'bg-fuchsia-500' },
    { name: 'Multimodal CoT', description: 'Work with different types of inputs, including text and images.', icon: <FaSitemap />, link: '/prompt-engineering/multimodal-cot', bgColor: 'bg-blue-700' },
    { name: 'Graph Prompting', description: 'Use graph structures to guide model responses.', icon: <FaSitemap />, link: '/prompt-engineering/graph-prompting', bgColor: 'bg-green-700' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <motion.h1
        className="text-center text-5xl font-bold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Prompt Engineering Techniques 💡
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore advanced techniques to craft better prompts for Large Language Models.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
        }}
      >
        {techniques.map((technique, index) => (
          <Link href={technique.link} key={index}>
            <motion.div
              className={`relative p-6 rounded-lg shadow-lg ${technique.bgColor} transition-colors duration-300 cursor-pointer hover:bg-opacity-90 text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-4">{technique.icon}</div>
                <h3 className="text-xl font-bold text-center">{technique.name}</h3>
                <p className="text-md text-center mt-2">{technique.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
