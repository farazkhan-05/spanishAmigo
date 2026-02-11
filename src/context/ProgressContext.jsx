import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Import the User Brain
import { db } from '../firebase';        // Import the Cloud Database
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firebase tools

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth(); // Check who is logged in
  const [completedLessons, setCompletedLessons] = useState([]);

  // 1. SYNC LOGIC (Runs when you login/logout)
  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        // --- SCENARIO A: USER IS LOGGED IN ---
        try {
          const docRef = doc(db, "users", user.uid); // Look for a file named after their User ID
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Found existing cloud data! Download it.
            setCompletedLessons(docSnap.data().completedLessons || []);
          } else {
            // New user? They have no cloud file yet.
            // Upload their current "Guest" progress to start their account.
            await setDoc(docRef, { completedLessons });
          }
        } catch (error) {
          console.error("Error loading cloud progress:", error);
        }
      } else {
        // --- SCENARIO B: GUEST MODE ---
        // Just read from the browser's memory
        const saved = localStorage.getItem('spanishProgress');
        if (saved) {
          setCompletedLessons(JSON.parse(saved));
        } else {
          setCompletedLessons([]);
        }
      }
    };

    loadProgress();
  }, [user]); // Only run this when the user changes (Login/Logout)

  // 2. SAVE LOGIC (Runs when you finish a lesson)
  const markLessonComplete = async (id) => {
    if (!completedLessons.includes(id)) {
      // Create the new list first
      const newProgress = [...completedLessons, id];
      
      // Update the App UI immediately (Instant feedback)
      setCompletedLessons(newProgress);

      if (user) {
        // --- SAVE TO CLOUD ---
        try {
          const docRef = doc(db, "users", user.uid);
          // { merge: true } means "update only this field, don't delete other stuff"
          await setDoc(docRef, { completedLessons: newProgress }, { merge: true });
        } catch (error) {
          console.error("Error saving to cloud:", error);
        }
      } else {
        // --- SAVE TO BROWSER ---
        localStorage.setItem('spanishProgress', JSON.stringify(newProgress));
      }
    }
  };

  return (
    <ProgressContext.Provider value={{ completedLessons, markLessonComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);