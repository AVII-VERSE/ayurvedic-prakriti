/**
 * Calculates the dosha percentages based on quiz responses
 * @param {Object} state - The state object containing all quiz responses
 * @returns {Object} - Object containing vata, pitta, and kapha percentages
 */
export const calculateDosha = (state) => {
  // Count occurrences of each dosha type in responses
  let vataCount = 0;
  let pittaCount = 0;
  let kaphaCount = 0;
  let totalResponses = 0;

  // Process physical traits
  Object.values(state.physicalTraits).forEach(value => {
    if (value === 'vata') vataCount++;
    if (value === 'pitta') pittaCount++;
    if (value === 'kapha') kaphaCount++;
    totalResponses++;
  });

  // Process mental traits
  Object.values(state.mentalTraits).forEach(value => {
    if (value === 'vata') vataCount++;
    if (value === 'pitta') pittaCount++;
    if (value === 'kapha') kaphaCount++;
    totalResponses++;
  });

  // Process daily habits
  Object.values(state.dailyHabits).forEach(value => {
    if (value === 'vata') vataCount++;
    if (value === 'pitta') pittaCount++;
    if (value === 'kapha') kaphaCount++;
    totalResponses++;
  });

  // Process environmental reactions
  Object.values(state.environmentalReactions).forEach(value => {
    if (value === 'vata') vataCount++;
    if (value === 'pitta') pittaCount++;
    if (value === 'kapha') kaphaCount++;
    totalResponses++;
  });

  // Calculate percentages
  const vataPercentage = totalResponses > 0 ? Math.round((vataCount / totalResponses) * 100) : 0;
  const pittaPercentage = totalResponses > 0 ? Math.round((pittaCount / totalResponses) * 100) : 0;
  const kaphaPercentage = totalResponses > 0 ? Math.round((kaphaCount / totalResponses) * 100) : 0;

  // Determine dominant dosha
  let dominantDosha = 'balanced';
  let maxPercentage = Math.max(vataPercentage, pittaPercentage, kaphaPercentage);
  
  if (maxPercentage === vataPercentage && maxPercentage > 40) {
    dominantDosha = 'vata';
  } else if (maxPercentage === pittaPercentage && maxPercentage > 40) {
    dominantDosha = 'pitta';
  } else if (maxPercentage === kaphaPercentage && maxPercentage > 40) {
    dominantDosha = 'kapha';
  }

  return {
    vata: vataPercentage,
    pitta: pittaPercentage,
    kapha: kaphaPercentage,
    dominantDosha
  };
};