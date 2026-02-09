const STORAGE_KEY = 'spanish_friend_progress';

export const storage = {
  saveProgress: (completedLessonIds) => {
    try {
      const data = JSON.stringify(completedLessonIds);
      localStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  },

  loadProgress: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Failed to load progress", error);
      return [];
    }
  },
  
  // Future proofing: Easy to add "reset progress" feature
  clearProgress: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};