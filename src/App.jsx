import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Import from here instead
import { createAppTheme } from './theme/theme';

import Layout from './components/layout/Layout';
import CourseMap from './pages/CourseMap';
import LessonPlayer from './pages/LessonPlayer';

function App() {
  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Create theme based on current mode
  const theme = createAppTheme(darkMode ? 'dark' : 'light');

  // Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProgressProvider>
        <BrowserRouter>
          <Layout darkMode={darkMode} onToggleDarkMode={toggleDarkMode}>
            <Routes>
              <Route path="/" element={<CourseMap />} /> 
              <Route path="/lesson/:id" element={<LessonPlayer />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;