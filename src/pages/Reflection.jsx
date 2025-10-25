import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrakriti } from '../context/PrakritiContext';
import { motion } from 'framer-motion';
import { FaDownload, FaLightbulb, FaPencilAlt } from 'react-icons/fa';

function Reflection() {
  const navigate = useNavigate();
  const { state, dispatch } = usePrakriti();
  const [reflection, setReflection] = useState(state.reflection || '');
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    if (!state.results) {
      navigate('/quiz');
    }
  }, [state.results, navigate]);

  useEffect(() => {
    let timeoutId;

    const saveReflection = () => {
      dispatch({
        type: 'SET_REFLECTION',
        payload: reflection
      });
      setSaveStatus('Saved!');
      timeoutId = setTimeout(() => setSaveStatus(''), 2000);
    };

    const debounceTimeout = setTimeout(saveReflection, 1000);

    return () => {
      clearTimeout(debounceTimeout);
      clearTimeout(timeoutId);
    };
  }, [reflection, dispatch]);

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([reflection], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'prakriti-reflection.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!state.results) return null;

  const { dominantDosha } = state.results;

  const reflectionPrompts = [
    `How does knowing your dominant ${dominantDosha} dosha explain your physical characteristics and tendencies?`,
    'What patterns in your daily routine align with your dosha profile?',
    'Which recommended lifestyle changes feel most relevant to you?',
    'How might you adapt your daily habits to better balance your constitution?'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Personal Reflection
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-semibold text-gray-900">Guiding Questions</h2>
          </div>
          
          <ul className="space-y-4">
            {reflectionPrompts.map((prompt, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-yellow-500"></span>
                {prompt}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FaPencilAlt className="w-6 h-6 text-blue-500" />
              <label 
                htmlFor="reflection" 
                className="text-2xl font-semibold text-gray-900"
              >
                Your Thoughts
              </label>
            </div>
            {saveStatus && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-medium"
              >
                {saveStatus}
              </motion.span>
            )}
          </div>
          
          <textarea
            id="reflection"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Share your reflections here..."
            rows={10}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition duration-200 ease-in-out text-gray-700 placeholder-gray-400"
          />

          <motion.div 
            className="flex justify-end mt-6"
            variants={itemVariants}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 ${!reflection ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'} text-white rounded-full font-semibold shadow-lg transition-all duration-200`}
              onClick={handleDownload}
              disabled={!reflection}
            >
              <FaDownload className="mr-2" />
              Download Reflection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Reflection;
