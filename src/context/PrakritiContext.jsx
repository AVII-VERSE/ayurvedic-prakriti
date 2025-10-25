import { createContext, useContext, useReducer, useEffect } from 'react';

const PrakritiContext = createContext();

const initialState = {
  physicalTraits: {},
  mentalTraits: {},
  dailyHabits: {},
  environmentalReactions: {},
  results: null
};

function prakritiReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PHYSICAL':
      return { ...state, physicalTraits: { ...state.physicalTraits, ...action.payload } };
    case 'UPDATE_MENTAL':
      return { ...state, mentalTraits: { ...state.mentalTraits, ...action.payload } };
    case 'UPDATE_HABITS':
      return { ...state, dailyHabits: { ...state.dailyHabits, ...action.payload } };
    case 'UPDATE_ENVIRONMENTAL':
      return { ...state, environmentalReactions: { ...state.environmentalReactions, ...action.payload } };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function PrakritiProvider({ children }) {
  const [state, dispatch] = useReducer(prakritiReducer, initialState);

  useEffect(() => {
    localStorage.setItem('prakritiData', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const saved = localStorage.getItem('prakritiData');
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(saved) });
    }
  }, []);

  return (
    <PrakritiContext.Provider value={{ state, dispatch }}>
      {children}
    </PrakritiContext.Provider>
  );
}

export function usePrakriti() {
  const context = useContext(PrakritiContext);
  if (!context) {
    throw new Error('usePrakriti must be used within PrakritiProvider');
  }
  return context;
}
