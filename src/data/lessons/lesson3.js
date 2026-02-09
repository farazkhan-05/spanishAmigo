export const lesson3 = {
  id: 3,
  title: "Polite & Thirsty (Dining 101)",
  intro: "How to order food, say thanks, and not look like a barbarian at the dinner table.",
  slides: [
    // ============================================================
    // CHAPTER 1: THE MAGIC WORD (Please)
    // ============================================================
    {
      type: "context",
      text: "🍽️ In Lesson 2, you learned to say 'Quiero' (I want). That is functional. But if you use it alone, you sound demanding. Let's soften it.",
    },
    {
      type: "reveal",
      question: "Please",
      answer: "Por favor",
      pronunciation: "Por fah-vor",
      explanation: "Literally 'For a favor'. You can put this at the start OR the end of a sentence. It works everywhere.",
    },
    {
      type: "practice",
      question: "Which sounds friendlier?",
      options: [
        { text: "Quiero un café", isCorrect: false },
        { text: "Un café, por favor", isCorrect: true },
      ],
      feedback: "Yes. You don't even need the verb 'Quiero' if you use 'Por favor'.",
    },
    {
      type: "context",
      text: "You can simply point at something and say 'Por favor'. It is the ultimate travel hack.",
    },

    // ============================================================
    // CHAPTER 2: GRATITUDE (Thanks)
    // ============================================================
    {
      type: "context",
      text: "🙏 The waiter brings your coffee. Now you must complete the cycle.",
    },
    {
      type: "reveal",
      question: "Thank you",
      answer: "Gracias",
      pronunciation: "Grah-see-as",
      explanation: "In Spain, the 'C' is often a 'Th' sound (Grah-thee-as). In Latin America, it's an 'S' (Grah-see-as). Both are correct!",
    },
    {
      type: "reveal",
      question: "Thank you very much",
      answer: "Muchas gracias",
      pronunciation: "Moo-chas Grah-see-as",
      explanation: "Use this when someone goes out of their way to help you.",
    },
    {
      type: "practice",
      question: "The waiter gives you free dessert. What do you say?",
      options: [
        { text: "Gracias", isCorrect: false },
        { text: "Muchas gracias", isCorrect: true },
        { text: "De nada", isCorrect: false },
      ],
      feedback: "Double the thanks for free food!",
    },
    {
      type: "context",
      text: "What if you want to refuse something? Like a receipt you don't need?",
    },
    {
      type: "reveal",
      question: "No thank you",
      answer: "No, gracias",
      pronunciation: "No Grah-see-as",
      explanation: "Simple and polite. Always say the 'Gracias' part, even when saying 'No'.",
    },

    // ============================================================
    // CHAPTER 3: THE RESPONSE (You're Welcome)
    // ============================================================
    {
      type: "context",
      text: "🔄 Someone says 'Gracias' to you. You can't just stand there silently.",
    },
    {
      type: "reveal",
      question: "You're welcome",
      answer: "De nada",
      pronunciation: "Deh Nah-dah",
      explanation: "Literally 'Of nothing'. It means 'It was no trouble'.",
    },
    {
      type: "practice",
      question: "Complete the loop: 'Gracias' -> _____",
      options: [
        { text: "Por favor", isCorrect: false },
        { text: "De nada", isCorrect: true },
        { text: "Hola", isCorrect: false },
      ],
      feedback: "Perfect interaction.",
    },

    // ============================================================
    // CHAPTER 4: LIQUID SURVIVAL (Water)
    // ============================================================
    {
      type: "context",
      text: "💧 Let's talk hydration. In many countries, you have to specify what kind of water you want.",
    },
    {
      type: "reveal",
      question: "Water",
      answer: "Agua",
      pronunciation: "Ah-gwah",
      explanation: "Start with 'Agua'.",
    },
    {
      type: "practice",
      question: "How do you order it politely?",
      options: [
        { text: "Quiero agua", isCorrect: false }, // A bit rude
        { text: "Un agua, por favor", isCorrect: true }, // Perfect
      ],
      feedback: "Excellent manners.",
    },
    {
      type: "context",
      text: "Wait! Do you want bubbles or no bubbles? If you don't say, you might get a surprise.",
    },
    {
      type: "reveal",
      question: "Still water (No gas)",
      answer: "Sin gas",
      pronunciation: "Seen Gas",
      explanation: "'Sin' = Without. 'Gas' = Gas/Fizz.",
    },
    {
      type: "reveal",
      question: "Sparkling water (With gas)",
      answer: "Con gas",
      pronunciation: "Kon Gas",
      explanation: "'Con' = With. Easy to remember: Chili Con Carne (Chili WITH meat).",
    },
    {
      type: "practice",
      question: "You hate bubbles. You order:",
      options: [
        { text: "Agua con gas", isCorrect: false },
        { text: "Agua sin gas", isCorrect: true },
      ],
      feedback: "Safe choice.",
    },

    // ============================================================
    // CHAPTER 5: THE MENU (Essential Food Words)
    // ============================================================
    {
      type: "context",
      text: "🍗 You can't survive on liquid alone. Let's learn the Big 3 food groups found on every menu.",
    },
    {
      type: "reveal",
      question: "The Chicken",
      answer: "El pollo",
      pronunciation: "El Poyo",
      explanation: "Remember the double 'LL' sounds like 'Y'. Poyo.",
    },
    {
      type: "reveal",
      question: "The Meat (Beef/Steak)",
      answer: "La carne",
      pronunciation: "Lah Kar-neh",
      explanation: "Think 'Carnivore'.",
    },
    {
      type: "reveal",
      question: "The Salad",
      answer: "La ensalada",
      pronunciation: "Lah En-sah-lah-dah",
      explanation: "Looks very similar to the English word.",
    },
    {
      type: "practice",
      question: "You are a vegetarian. What do you order?",
      options: [
        { text: "Una ensalada, por favor", isCorrect: true },
        { text: "Un pollo, por favor", isCorrect: false },
        { text: "Una carne, por favor", isCorrect: false },
      ],
      feedback: "Healthy choice!",
    },
    {
      type: "reveal",
      question: "Bread",
      answer: "Pan",
      pronunciation: "Pan",
      explanation: "Just like 'Pan' in English, but shorter 'A'. Bread is life in Spain.",
    },
    {
      type: "practice",
      question: "The waiter asks '¿Algo más?' (Anything else?). You want bread.",
      options: [
        { text: "Pan, por favor", isCorrect: true },
        { text: "No pan", isCorrect: false },
      ],
      feedback: "Bread basket incoming.",
    },

    // ============================================================
    // CHAPTER 6: GETTING ATTENTION (Excuse Me)
    // ============================================================
    {
      type: "context",
      text: "🙋‍♂️ The waiter is ignoring you. How do you get their attention politely?",
    },
    {
      type: "reveal",
      question: "Excuse me (To get attention)",
      answer: "Perdón",
      pronunciation: "Pehr-don",
      explanation: "Use this to stop someone walking by. It also means 'Sorry' if you bump into someone.",
    },
    {
      type: "reveal",
      question: "Excuse me (Formal / Apology)",
      answer: "Disculpe",
      pronunciation: "Dees-kool-peh",
      explanation: "A bit more formal. Good for asking strangers a question.",
    },
    {
      type: "practice",
      question: "You need to pass someone on a crowded bus.",
      options: [
        { text: "Hola", isCorrect: false },
        { text: "Perdón", isCorrect: true },
      ],
      feedback: "Right. 'Perdón' clears the path.",
    },

    // ============================================================
    // CHAPTER 7: THE CHECK (Paying)
    // ============================================================
    {
      type: "context",
      text: "💳 Meal over. In Spain/Latin America, waiters will NOT bring the check until you ask. It is considered rude to rush you.",
    },
    {
      type: "context",
      text: "So you must ask.",
    },
    {
      type: "reveal",
      question: "The bill / The check",
      answer: "La cuenta",
      pronunciation: "Lah Kwen-tah",
      explanation: "Make a 'scribbling' motion with your hand in the air while saying this. It's the universal sign.",
    },
    {
      type: "practice",
      question: "How do you ask to pay?",
      options: [
        { text: "La cuenta, por favor", isCorrect: true },
        { text: "Quiero dinero", isCorrect: false }, // I want money (Don't say this!)
        { text: "Adios", isCorrect: false },
      ],
      feedback: "Perfect. They will bring it immediately.",
    },

    // ============================================================
    // CHAPTER 8: FINAL BOSS (The Restaurant Simulation)
    // ============================================================
    {
      type: "context",
      text: "🎓 Simulation: You are at a restaurant in Mexico City. Let's eat.",
    },
    {
      type: "practice",
      question: "1. The waiter fills your water glass. You say:",
      options: [
        { text: "De nada", isCorrect: false },
        { text: "Gracias", isCorrect: true },
        { text: "Hola", isCorrect: false },
      ],
      feedback: "Manners first.",
    },
    {
      type: "practice",
      question: "2. He asks what you want to eat. You want chicken.",
      options: [
        { text: "El pollo, por favor", isCorrect: true },
        { text: "El pan, por favor", isCorrect: false }, // That's bread
        { text: "Agua", isCorrect: false },
      ],
      feedback: "Tasty.",
    },
    {
      type: "practice",
      question: "3. You dropped your fork and need a new one. You call the waiter:",
      options: [
        { text: "¡Hola!", isCorrect: false }, // Too casual
        { text: "Perdón", isCorrect: true }, // Perfect
        { text: "Adiós", isCorrect: false },
      ],
      feedback: "He turns around to help you.",
    },
    {
      type: "practice",
      question: "4. You are full. You want to leave.",
      options: [
        { text: "La cuenta, por favor", isCorrect: true },
        { text: "Quiero la cuenta", isCorrect: true }, // Also okay, but option 1 is better
      ],
      feedback: "You pay and leave. Excellent work!",
    },
    {
      type: "context",
      text: "🎉 Lesson Complete! You are now polite enough to dine with the Queen of Spain.",
    },
  ],
};