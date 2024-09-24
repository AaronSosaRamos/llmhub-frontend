import { useState } from 'react';
import { FaSearch, FaCog, FaLayerGroup, FaStream, FaBrain, FaProjectDiagram, FaFilter, FaTools, FaChartLine, FaSyncAlt, FaNetworkWired } from 'react-icons/fa';
import { GiArtificialHive, GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RAGTechniquesScreen() {
  const techniques = [
    {
        name: 'Basic RAG',
        description: 'Understand the basics and fundamentals about RAG',
        icon: <FaLayerGroup />,
        link: '/rag/basic',
        bgColor: 'bg-green-500',
    },
    {
      name: 'Query Transformations',
      description: 'Enhance query formulation through transformations and sub-queries.',
      icon: <FaSearch />,
      link: '/rag/query-transformations',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Hypothetical Questions (HyDE Approach)',
      description: 'Generate hypothetical questions to align queries better with data.',
      icon: <FaStream />,
      link: '/rag/hyde-approach',
      bgColor: 'bg-green-500',
    },
    {
      name: 'Contextual Chunk Headers',
      description: 'Add context-based headers to chunks for better retrieval accuracy.',
      icon: <FaCog />,
      link: '/rag/contextual-chunk-headers',
      bgColor: 'bg-purple-500',
    },
    {
      name: 'Relevant Segment Extraction',
      description: 'Dynamically extract multi-chunk segments relevant to queries.',
      icon: <FaLayerGroup />,
      link: '/rag/relevant-segment-extraction',
      bgColor: 'bg-pink-500',
    },
    {
      name: 'Context Enrichment Techniques',
      description: 'Enrich retrieval accuracy by providing additional contextual data.',
      icon: <FaBrain />,
      link: '/rag/context-enrichment-techniques',
      bgColor: 'bg-teal-500',
    },
    {
      name: 'Contextual Compression',
      description: 'Compress information while retaining relevant content.',
      icon: <FaCog />,
      link: '/rag/contextual-compression',
      bgColor: 'bg-red-500',
    },
    {
      name: 'Document Augmentation via Question Generation',
      description: 'Augment documents with questions for improved retrieval.',
      icon: <FaProjectDiagram />,
      link: '/rag/document-augmentation',
      bgColor: 'bg-yellow-500',
    },
    {
      name: 'Fusion Retrieval',
      description: 'Combine different retrieval models for optimal results.',
      icon: <FaCog />,
      link: '/rag/fusion-retrieval',
      bgColor: 'bg-indigo-500',
    },
    {
      name: 'Intelligent Reranking',
      description: 'Advanced reranking to improve retrieval relevance.',
      icon: <FaChartLine />,
      link: '/rag/intelligent-reranking',
      bgColor: 'bg-orange-500',
    },
    {
      name: 'Two-Stage Retrieval',
      description: 'Implement a two-step retrieval process for better accuracy.',
      icon: <FaSyncAlt />,
      link: '/rag/two-stage-retrieval',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Multi-faceted Filtering',
      description: 'Filter retrieved results using metadata, relevance scores, and diversity.',
      icon: <FaFilter />,
      link: '/rag/multi-faceted-filtering',
      bgColor: 'bg-green-500',
    },
    {
      name: 'Hierarchical Indices',
      description: 'Organize information in a hierarchical index for efficient retrieval.',
      icon: <GiArtificialHive />,
      link: '/rag/hierarchical-indices',
      bgColor: 'bg-purple-500',
    },
    {
      name: 'Ensemble Retrieval',
      description: 'Apply multiple retrieval methods and models for robust results.',
      icon: <FaTools />,
      link: '/rag/ensemble-retrieval',
      bgColor: 'bg-pink-500',
    },
    {
      name: 'Multi-modal Retrieval',
      description: 'Extend retrieval to handle multiple data types like images and videos.',
      icon: <GiBrain />,
      link: '/rag/multi-modal-retrieval',
      bgColor: 'bg-teal-500',
    },
    {
      name: 'Retrieval with Feedback Loops',
      description: 'Iteratively improve retrieval by incorporating user feedback.',
      icon: <FaSyncAlt />,
      link: '/rag/retrieval-feedback-loops',
      bgColor: 'bg-red-500',
    },
    {
      name: 'Adaptive Retrieval',
      description: 'Dynamically adjust retrieval strategies based on query types.',
      icon: <FaNetworkWired />,
      link: '/rag/adaptive-retrieval',
      bgColor: 'bg-yellow-500',
    },
    {
      name: 'Iterative Retrieval',
      description: 'Refine results by performing multiple rounds of retrieval.',
      icon: <FaSyncAlt />,
      link: '/rag/iterative-retrieval',
      bgColor: 'bg-indigo-500',
    },
    {
      name: 'Explainable Retrieval',
      description: 'Provide transparency in the retrieval process to build user trust.',
      icon: <FaProjectDiagram />,
      link: '/rag/explainable-retrieval',
      bgColor: 'bg-orange-500',
    },
    {
      name: 'Knowledge Graph Integration (Graph RAG)',
      description: 'Use knowledge graphs to enrich retrieved information.',
      icon: <GiArtificialHive />,
      link: '/rag/graph-rag',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'RAPTOR: Recursive Abstractive Processing',
      description: 'Organize retrieved information in a tree structure for better context.',
      icon: <FaLayerGroup />,
      link: '/rag/raptor',
      bgColor: 'bg-green-500',
    },
    {
      name: 'Self RAG',
      description: 'A dynamic method that combines both retrieval and generation-based approaches.',
      icon: <FaCog />,
      link: '/rag/self-rag',
      bgColor: 'bg-purple-500',
    },
    {
      name: 'Corrective RAG',
      description: 'Dynamically evaluates and corrects the retrieval process.',
      icon: <FaTools />,
      link: '/rag/corrective-rag',
      bgColor: 'bg-pink-500',
    },
    {
      name: 'Sophisticated Controllable Agent for Complex RAG Tasks',
      description: 'Uses advanced planning to answer complex questions that simple retrieval cannot solve.',
      icon: <GiBrain />,
      link: '/rag/controllable-agent',
      bgColor: 'bg-teal-500',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredTechniques = techniques.filter(technique =>
    technique.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <motion.h1
        className="text-center text-5xl font-bold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Advanced RAG Techniques 🚀
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Explore all the advanced RAG and Query Enhancement techniques for improving retrieval and generation.
      </motion.p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search for a technique..."
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
        {filteredTechniques.map((technique, index) => (
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
