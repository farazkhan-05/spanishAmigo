# SpanishAmigo

A modern, **gamified Spanish learning web app** with interactive lessons, quizzes, and progress tracking.

---

## ✨ Features

* **Interactive Lessons** – Context slides, reveal cards, and practice quizzes
* **Gamified Progress** – Visual journey map with unlockable lessons and an XP system
* **Dark Mode** – Toggle between light and dark themes with persistent preferences
* **Responsive Design** – Works seamlessly on mobile, tablet, and desktop
* **Glassmorphism UI** – Modern frosted-glass effects and smooth gradient animations
* **Progress Tracking** – Saves completed lessons using local storage
* **Celebration Effects** – Confetti explosions and animations on lesson completion

---

## 🚀 Installation

```bash
# Install dependencies
npm install

# Install additional packages
npm install lucide-react react-confetti

# Start development server
npm run dev
```

---

## 🧭 Usage

The app consists of three main screens:

### **Course Map**

Shows your learning journey with locked and unlocked lessons.

```bash
Navigate to: /
```

### **Lesson Player**

Interactive lessons with slides and quizzes.

```bash
Navigate to: /lesson/:id
```

### **Success Screen**

A celebration page displayed after completing a lesson.

You can toggle **Dark Mode** using the moon/sun icon in the navbar. Your preference is automatically saved.

---

## 🗂 Project Structure

```text
src/
├── components/
│   ├── common/
│   └── layout/
│       └── Layout.jsx          # Main layout with navbar and footer
├── context/
│   └── ProgressContext.jsx     # Progress state management
├── data/
│   ├── lessons/
│   │   ├── lesson1.js
│   │   ├── lesson2.js
│   │   ├── lesson3.js
│   │   ├── lesson4.js
│   │   └── lesson5.js
│   └── curriculum.js           # Lesson content index
├── hooks/
│   └── useLessonNavigation.js  # Lesson navigation logic
├── pages/
│   ├── lesson/
│   │   ├── ContextSlide.jsx    # Introduction slides
│   │   ├── QuizSlide.jsx       # Multiple-choice quizzes
│   │   ├── RevealSlide.jsx     # Translation reveal cards
│   │   └── SuccessScreen.jsx   # Completion celebration
│   ├── CourseMap.jsx           # Journey map view
│   ├── Home.jsx
│   ├── LessonPlayer.jsx        # Lesson container
│   └── NotFound.jsx
├── theme/
│   └── theme.js                # MUI theme configuration
├── utils/
│   └── storage.js              # LocalStorage helpers
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🛠 Tech Stack

* React 18
* React Router DOM
* Material UI (MUI)
* Lucide React (icons)
* React Confetti
* Vite

---

## 🎨 Customization

* **Add new lessons**: Create a new file in `src/data/lessons/` and update `curriculum.js`
* **Change colors**: Modify gradient values in `src/theme/theme.js`
* **Adjust animations**: Update transition durations in component `sx` props

---

## 🤝 Contributing

This is a personal learning project. Feel free to fork and modify it for your own use.

---

## 📄 License

MIT
