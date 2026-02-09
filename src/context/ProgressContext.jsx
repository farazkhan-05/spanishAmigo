import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  // Load from local storage or start empty
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('spanishProgress');
    return saved ? JSON.parse(saved) : [];
  });

  // Save whenever it changes
  useEffect(() => {
    localStorage.setItem('spanishProgress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markLessonComplete = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  return (
    <ProgressContext.Provider value={{ completedLessons, markLessonComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);