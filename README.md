# SpanishAmigo

A modern, gamified Spanish learning web app with interactive lessons, quizzes, and progress tracking.

---

## ✨ Features

* **Interactive Lessons** - Context slides, reveal cards, and practice quizzes
* **Gamified Progress** - Visual journey map with unlockable lessons and an XP system
* **User Authentication** - Secure Google Sign-In powered by Firebase Authentication
* **Cloud Sync** - Progress is securely saved to the cloud using Firestore and synced across devices
* **Dark Mode** - Toggle between light and dark themes with persistent preferences
* **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
* **Glassmorphism UI** - Modern frosted-glass effects and smooth gradient animations
* **Celebration Effects** - Confetti explosions and animations on lesson completion

---

## 🚀 Installation

```bash
# Install dependencies
npm install

# Install additional packages
npm install lucide-react react-confetti firebase

# Start development server
npm run dev
```

### 🔐 Environment Setup

This project uses Firebase. You must create a `.env.local` file in the root directory and add your Firebase configuration keys.

Create a file named:

```
.env.local
```

Add the following template and replace the values with your own Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

After adding the environment variables, restart the development server if it is already running.

---

## 🧭 Usage

The app consists of three main screens:

### Course Map

Shows your learning journey with locked and unlocked lessons.

Navigate to: `/`

### Lesson Player

Interactive lessons with slides and quizzes.

Navigate to: `/lesson/:id`

### Success Screen

A celebration page displayed after completing a lesson.

You can now click **Sign In** (Google) to securely log in and sync your progress across devices.

Dark Mode can be toggled using the moon/sun icon in the navbar. Your preference is automatically saved.

---

## 🗂 Project Structure

```text
src/
├── components/
│   ├── common/
│   └── layout/
│       └── Layout.jsx              # Main layout with navbar and footer
├── context/
│   ├── AuthContext.jsx             # Firebase authentication state management
│   └── ProgressContext.jsx         # User progress management (Firestore synced)
├── data/
│   ├── lessons/
│   │   ├── lesson1.js
│   │   ├── lesson2.js
│   │   ├── lesson3.js
│   │   ├── lesson4.js
│   │   └── lesson5.js
│   └── curriculum.js               # Lesson content index
├── firebase.js                     # Firebase configuration and initialization
├── hooks/
│   └── useLessonNavigation.js      # Lesson navigation logic
├── pages/
│   ├── lesson/
│   │   ├── ContextSlide.jsx        # Introduction slides
│   │   ├── QuizSlide.jsx           # Multiple-choice quizzes
│   │   ├── RevealSlide.jsx         # Translation reveal cards
│   │   └── SuccessScreen.jsx       # Completion celebration
│   ├── CourseMap.jsx               # Journey map view
│   ├── Home.jsx
│   ├── LessonPlayer.jsx            # Lesson container
│   └── NotFound.jsx
├── theme/
│   └── theme.js                    # MUI theme configuration
├── utils/
│   └── storage.js                  # Utility helpers
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
* Firebase Authentication
* Cloud Firestore

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
