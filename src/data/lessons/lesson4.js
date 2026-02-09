export const lesson4 = {
  id: 4,
  title: "Where is it? (The GPS Module)",
  intro: "Learn to navigate cities, find bathrooms, and understand directions without getting lost.",
  slides: [
    // ============================================================
    // CHAPTER 1: THE GOLDEN QUESTION
    // ============================================================
    {
      type: "context",
      text: "🗺️ You are in a new city. Your phone battery is dead. You are lost. You need to ask a human for help.",
    },
    {
      type: "context",
      text: "You need the phrase: 'Where is...?'",
    },
    {
      type: "reveal",
      question: "Where is...?",
      answer: "¿Dónde está...?",
      pronunciation: "Don-deh Es-tah",
      explanation: "Two parts: 'Dónde' (Where) + 'Está' (Is). The accent mark on 'tá' puts the stress at the end.",
    },
    {
      type: "practice",
      question: "How do you pronounce 'Está'?",
      options: [
        { text: "ES-ta (Stress on start)", isCorrect: false },
        { text: "es-TAH (Stress on end)", isCorrect: true },
      ],
      feedback: "Correct. It's punchy at the end.",
    },
    {
      type: "context",
      text: "Grammar Note: We use 'Está' because locations are temporary (you move around) or specific. Just remember: For locations, use Está.",
    },

    // ============================================================
    // CHAPTER 2: BIOLOGICAL URGENCY (The Bathroom)
    // ============================================================
    {
      type: "context",
      text: "🚽 Let's start with the most important room in the world.",
    },
    {
      type: "reveal",
      question: "The bathroom",
      answer: "El baño",
      pronunciation: "El Ban-yo",
      explanation: "The 'ñ' sounds like 'Canyon' or 'Onion'. It is crucial.",
    },
    {
      type: "practice",
      question: "It is an emergency. Ask correctly.",
      options: [
        { text: "¿Dónde está el baño?", isCorrect: true },
        { text: "Quiero baño", isCorrect: false }, // Caveman style
        { text: "El baño, por favor", isCorrect: false }, // Okay, but not a question
      ],
      feedback: "Memorize this. It will save your life.",
    },

    // ============================================================
    // CHAPTER 3: LODGING (The Silent H)
    // ============================================================
    {
      type: "context",
      text: "🏨 You need to find your bed. The word is the same as English, but the sound is different.",
    },
    {
      type: "reveal",
      question: "The hotel",
      answer: "El hotel",
      pronunciation: "El Oh-tel",
      explanation: "STOP! 🛑 Do not say the 'H'. It is silent. Say 'Otel'.",
    },
    {
      type: "practice",
      question: "Select the correct pronunciation guide:",
      options: [
        { text: "HOH-tel", isCorrect: false },
        { text: "oh-TEL", isCorrect: true },
      ],
      feedback: "Yes. Silent H, stress on the end.",
    },
    {
      type: "reveal",
      question: "The Hospital",
      answer: "El hospital",
      pronunciation: "El Os-pee-tal",
      explanation: "Another silent 'H'. Hopefully you don't need this, but good to know.",
    },

    // ============================================================
    // CHAPTER 4: TRANSPORT (The Station vs The Stop)
    // ============================================================
    {
      type: "context",
      text: "🚆 Leaving town? You need the big hubs.",
    },
    {
      type: "reveal",
      question: "The station (Train/Bus)",
      answer: "La estación",
      pronunciation: "Lah Es-tah-see-on",
      explanation: "Used for big buildings (Train station, Metro station).",
    },
    {
      type: "context",
      text: "But if you are waiting on the street for a city bus, it's not a 'station'. It's a 'stop'.",
    },
    {
      type: "reveal",
      question: "The stop (Bus/Taxi)",
      answer: "La parada",
      pronunciation: "Lah Pah-rah-dah",
      explanation: "Think of the word 'Parade' stopping. 'La parada de taxi'.",
    },
    {
      type: "practice",
      question: "You are on the street corner looking for a taxi. You ask for:",
      options: [
        { text: "¿Dónde está la estación?", isCorrect: false },
        { text: "¿Dónde está la parada de taxi?", isCorrect: true },
      ],
      feedback: "Correct. Parada is for street stops.",
    },
    {
      type: "reveal",
      question: "The Airport",
      answer: "El aeropuerto",
      pronunciation: "Ah-eh-ro-pwer-to",
      explanation: "A tongue twister! Aero-puerto. Take it slow.",
    },

    // ============================================================
    // CHAPTER 5: MONEY (The ATM)
    // ============================================================
    {
      type: "context",
      text: "💸 Cash is king in many places. You need to find a machine.",
    },
    {
      type: "reveal",
      question: "The Bank",
      answer: "El banco",
      pronunciation: "El Ban-koh",
      explanation: "Easy cognate. Sounds like 'Bank'.",
    },
    {
      type: "reveal",
      question: "The ATM (Cash machine)",
      answer: "El cajero",
      pronunciation: "El Kah-heh-ro",
      explanation: "Short for 'Cajero automático'. Just say 'Cajero'. The 'J' sounds like a harsh 'H' (Ka-Hero).",
    },
    {
      type: "practice",
      question: "You have no cash. You ask a stranger:",
      options: [
        { text: "¿Dónde está el cajero?", isCorrect: true },
        { text: "Quiero dinero", isCorrect: false }, // I want money (Don't say this to strangers!)
        { text: "El banco por favor", isCorrect: false },
      ],
      feedback: "Right. '¿Dónde está el cajero?' is the specific question.",
    },

    // ============================================================
    // CHAPTER 6: READING SIGNS (In & Out)
    // ============================================================
    {
      type: "context",
      text: "🚪 You are in the airport. You see two doors. Which one do you use?",
    },
    {
      type: "reveal",
      question: "Entrance",
      answer: "Entrada",
      pronunciation: "En-trah-dah",
      explanation: "Think 'Enter'.",
    },
    {
      type: "reveal",
      question: "Exit",
      answer: "Salida",
      pronunciation: "Sah-lee-dah",
      explanation: "Memorize this. You will see green 'Salida' signs everywhere.",
    },
    {
      type: "practice",
      question: "You see a fire. You look for the sign that says:",
      options: [
        { text: "Entrada", isCorrect: false },
        { text: "Salida", isCorrect: true },
        { text: "Baño", isCorrect: false },
      ],
      feedback: "Run towards the Salida!",
    },

    // ============================================================
    // CHAPTER 7: UNDERSTANDING THE ANSWER (Directions)
    // ============================================================
    {
      type: "context",
      text: "👂 Crucial moment: You asked 'Where is it?'. Now they are answering. If you don't know these three words, asking was useless.",
    },
    {
      type: "reveal",
      question: "Here",
      answer: "Aquí",
      pronunciation: "Ah-key",
      explanation: "If they point at the ground, it's Aquí.",
    },
    {
      type: "reveal",
      question: "There",
      answer: "Allí",
      pronunciation: "Ah-yee",
      explanation: "If they point far away, it's Allí.",
    },
    {
      type: "practice",
      question: "The local points down the street and says 'El hotel está allí'.",
      options: [
        { text: "The hotel is here.", isCorrect: false },
        { text: "The hotel is over there.", isCorrect: true },
      ],
      feedback: "Good. Start walking.",
    },
    {
      type: "context",
      text: "Now, the hard part. Left vs Right.",
    },
    {
      type: "reveal",
      question: "Right ➡️",
      answer: "Derecha",
      pronunciation: "Deh-reh-cha",
      explanation: "Think: You write 'Directly' with your Right hand (usually).",
    },
    {
      type: "reveal",
      question: "Left ⬅️",
      answer: "Izquierda",
      pronunciation: "Iz-key-er-dah",
      explanation: "A weird word. Just remember: Derecha is Right, so the crazy looking word is Left.",
    },
    {
      type: "practice",
      question: "They say: 'A la derecha'. Which way do you turn?",
      options: [
        { text: "Left", isCorrect: false },
        { text: "Right", isCorrect: true },
      ],
      feedback: "Right! (Literally).",
    },

    // ============================================================
    // CHAPTER 8: THE POLITENESS WRAPPER
    // ============================================================
    {
      type: "context",
      text: "👮‍♂️ You can't just walk up to a policeman and scream 'BATHROOM!'. You need to soften the approach.",
    },
    {
      type: "context",
      text: "Use 'Perdón' (Excuse me) to start, and 'Gracias' (Thank you) to finish.",
    },
    {
      type: "practice",
      question: "Construct the perfect sentence:",
      options: [
        { text: "Baño, ¿dónde está?", isCorrect: false },
        { text: "Perdón, ¿dónde está el baño?", isCorrect: true },
        { text: "Hola, quiero baño", isCorrect: false },
      ],
      feedback: "Perfect. Polite, grammatically correct, and effective.",
    },

    // ============================================================
    // CHAPTER 9: FINAL BOSS (The Lost Tourist)
    // ============================================================
    {
      type: "context",
      text: "🎓 Simulation: You are in Madrid Atocha Station. It is huge. You are lost.",
    },
    {
      type: "practice",
      question: "1. You need to find the exit. You look for signs saying:",
      options: [
        { text: "Entrada", isCorrect: false },
        { text: "Salida", isCorrect: true },
        { text: "Cajero", isCorrect: false },
      ],
      feedback: "You found the door.",
    },
    {
      type: "practice",
      question: "2. Outside, you need a taxi. You ask a stranger:",
      options: [
        { text: "¿Dónde está la parada de taxi?", isCorrect: true },
        { text: "¿Dónde está la estación?", isCorrect: false }, // You are already there
        { text: "Quiero taxi", isCorrect: false },
      ],
      feedback: "They point down the street.",
    },
    {
      type: "practice",
      question: "3. They say 'A la izquierda'. You turn:",
      options: [
        { text: "Right", isCorrect: false },
        { text: "Left", isCorrect: true },
      ],
      feedback: "You found the taxis.",
    },
    {
      type: "practice",
      question: "4. You get in the taxi. You want to go to your hotel.",
      options: [
        { text: "Hola hotel", isCorrect: false },
        { text: "Al hotel, por favor", isCorrect: true }, // To the hotel, please
        { text: "Donde esta hotel", isCorrect: false },
      ],
      feedback: "You made it! Safe and sound.",
    },
    {
      type: "context",
      text: "🎉 Lesson Complete! You can now navigate the world without a GPS.",
    },
  ],
};