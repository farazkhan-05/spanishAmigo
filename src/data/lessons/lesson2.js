export const lesson2 = {
  id: 2,
  title: "The Magic Verbs (Survival Mode)",
  intro: "Learn how to ask for what you want, refuse what you don't, and tell people what you have.",
  slides: [
    // ============================================================
    // CHAPTER 1: I WANT (The Foundation)
    // ============================================================
    {
      type: "context",
      text: "🔥 In English, you say 'I want'. It's two words. Spanish is more efficient. We pack it all into one word.",
    },
    {
      type: "reveal",
      question: "I want",
      answer: "Quiero",
      pronunciation: "Key-eh-ro",
      explanation: "You might see 'Yo quiero', but locals usually drop the 'Yo' (I). 'Quiero' already contains the 'I' inside the 'O' at the end.",
    },
    {
      type: "practice",
      question: "If you want to sound like a native, which do you say?",
      options: [
        { text: "Yo quiero", isCorrect: false },
        { text: "Quiero", isCorrect: true }, // Preferred natural way
      ],
      feedback: "Exactly. Less is more.",
    },
    {
      type: "context",
      text: "Now let's get specific. You don't just 'want'. You want *something*.",
    },
    {
      type: "reveal",
      question: "A coffee",
      answer: "Un café",
      pronunciation: "Oon kah-feh",
      explanation: "Standard espresso. The fuel of Spain.",
    },
    {
      type: "practice",
      question: "Build the sentence: 'I want a coffee'.",
      options: [
        { text: "Quiero un café", isCorrect: true },
        { text: "Un café quiero", isCorrect: false }, // Poetic but weird
        { text: "Quiero café un", isCorrect: false },
      ],
      feedback: "Perfect. Verb + Object.",
    },

    // ============================================================
    // CHAPTER 2: GENDER (Un vs Una)
    // ============================================================
    {
      type: "context",
      text: "🍷 Time for your first grammar secret. In Spanish, words have gender. They are either 'Boys' (Masculine) or 'Girls' (Feminine).",
    },
    {
      type: "context",
      text: "Café is masculine, so we say 'UN café'. But Beer is feminine. We can't use 'Un'. We need 'Una'.",
    },
    {
      type: "reveal",
      question: "A beer",
      answer: "Una cerveza",
      pronunciation: "Oo-na Ser-veh-za",
      explanation: "Notice the 'A' at the end of 'Una'. It matches the 'A' at the end of 'Cerveza'.",
    },
    {
      type: "practice",
      question: "You are at a bar. You want a beer.",
      options: [
        { text: "Quiero un cerveza", isCorrect: false },
        { text: "Quiero una cerveza", isCorrect: true },
        { text: "Quiero cerveza", isCorrect: false }, // Grammatically okay but specific is better
      ],
      feedback: "Cheers! Remember: Un for boys, Una for girls.",
    },
    {
      type: "reveal",
      question: "A wine (Red/White)",
      answer: "Un vino",
      pronunciation: "Oon Bee-no",
      explanation: "The 'V' sounds like a soft 'B'. Vino ends in 'O', so it's masculine (Un).",
    },
    {
      type: "practice",
      question: "Select the Masculine order:",
      options: [
        { text: "Una cerveza", isCorrect: false },
        { text: "Un vino", isCorrect: true },
      ],
      feedback: "Correct. 'Un' goes with 'Vino'.",
    },

    // ============================================================
    // CHAPTER 3: THE NEGATION (The Power of No)
    // ============================================================
    {
      type: "context",
      text: "🚫 Sometimes you don't want something. In English we add 'don't'. In Spanish, we just put 'No' at the front.",
    },
    {
      type: "reveal",
      question: "I don't want",
      answer: "No quiero",
      pronunciation: "No Key-eh-ro",
      explanation: "Simple math: No + Quiero = I don't want.",
    },
    {
      type: "practice",
      question: "The waiter offers you a wine, but you hate wine. You say:",
      options: [
        { text: "Quiero no vino", isCorrect: false },
        { text: "No quiero vino", isCorrect: true },
        { text: "Vino no", isCorrect: false },
      ],
      feedback: "Correct. The 'No' acts like a shield in front of the verb.",
    },
    {
      type: "context",
      text: "Let's learn a very useful word to refuse politely.",
    },
    {
      type: "reveal",
      question: "Water",
      answer: "Agua",
      pronunciation: "Ah-gwah",
      explanation: "Feminine word, but tricky usage. For now, just know 'Agua'.",
    },
    {
      type: "practice",
      question: "You want water, not beer.",
      options: [
        { text: "No quiero cerveza, quiero agua", isCorrect: true },
        { text: "Quiero cerveza, no agua", isCorrect: false },
      ],
      feedback: "Perfect comparison.",
    },

    // ============================================================
    // CHAPTER 4: I NEED (Urgency)
    // ============================================================
    {
      type: "context",
      text: "⚠️ 'Quiero' is for desire. 'Necesito' is for survival. Use this when it's important.",
    },
    {
      type: "reveal",
      question: "I need",
      answer: "Necesito",
      pronunciation: "Neh-seh-see-toh",
      explanation: "Think 'Necessary'. It is 4 syllables. Take your time saying it.",
    },
    {
      type: "reveal",
      question: "A taxi",
      answer: "Un taxi",
      pronunciation: "Oon Taxi",
      explanation: "Easy one. It's the same word, just pronounced with a Spanish accent.",
    },
    {
      type: "practice",
      question: "You are late for the airport. Do you 'Want' or 'Need' a taxi?",
      options: [
        { text: "Quiero un taxi", isCorrect: false }, // Too casual
        { text: "Necesito un taxi", isCorrect: true }, // Urgent
      ],
      feedback: "Right. Use 'Necesito' when time matters.",
    },
    {
      type: "reveal",
      question: "Help",
      answer: "Ayuda",
      pronunciation: "Ah-yoo-dah",
      explanation: "If you are in trouble, yell this.",
    },
    {
      type: "practice",
      question: "You are lost and confused. You find a police officer.",
      options: [
        { text: "Quiero ayuda", isCorrect: false },
        { text: "Necesito ayuda", isCorrect: true },
      ],
      feedback: "Yes. 'Necesito ayuda' gets immediate attention.",
    },

    // ============================================================
    // CHAPTER 5: I HAVE (Possession)
    // ============================================================
    {
      type: "context",
      text: "💼 Verification is key. Sometimes you need to prove you have something (a ticket, a reservation).",
    },
    {
      type: "reveal",
      question: "I have",
      answer: "Tengo",
      pronunciation: "Ten-go",
      explanation: "Like the 'Tango' dance, but with an 'E'. Tengo.",
    },
    {
      type: "reveal",
      question: "A reservation",
      answer: "Una reserva",
      pronunciation: "Oo-na Reh-ser-bah",
      explanation: "Feminine word (ends in A).",
    },
    {
      type: "practice",
      question: "You arrive at the hotel check-in desk. You say:",
      options: [
        { text: "Quiero una reserva", isCorrect: false }, // That means you want to MAKE one
        { text: "Tengo una reserva", isCorrect: true }, // That means you HAVE one
      ],
      feedback: "Context matters! 'Tengo' means you already possess it.",
    },
    {
      type: "reveal",
      question: "A ticket",
      answer: "Un billete",
      pronunciation: "Oon Bee-yeh-teh",
      explanation: "Used for trains, buses, and planes. (In Latin America, often 'Boleto').",
    },
    {
      type: "practice",
      question: "The conductor asks for your ticket.",
      options: [
        { text: "Tengo un billete", isCorrect: true },
        { text: "Necesito un billete", isCorrect: false },
      ],
      feedback: "Correct.",
    },

    // ============================================================
    // CHAPTER 6: ASKING QUESTIONS (The Flip)
    // ============================================================
    {
      type: "context",
      text: "❓ You know how to say 'I want' (Quiero). How do you ask a friend 'Do YOU want?'",
    },
    {
      type: "context",
      text: "Magic Trick: Change the 'O' at the end to 'ES'.",
    },
    {
      type: "reveal",
      question: "Do you want?",
      answer: "¿Quieres?",
      pronunciation: "Key-eh-res",
      explanation: "QuierO (I want). QuierES (You want).",
    },
    {
      type: "practice",
      question: "You are buying a round of drinks. You ask your friend:",
      options: [
        { text: "¿Quiero una cerveza?", isCorrect: false }, // Do I want?
        { text: "¿Quieres una cerveza?", isCorrect: true }, // Do YOU want?
      ],
      feedback: "Exactly. The 'S' marks 'You'.",
    },
    {
      type: "reveal",
      question: "Do you have?",
      answer: "¿Tienes?",
      pronunciation: "Tee-eh-nes",
      explanation: "TengO (I have). TienES (You have). The stem changes slightly, but the 'S' is the key.",
    },
    {
      type: "practice",
      question: "You want to know if the hotel has a bathroom in the lobby.",
      options: [
        { text: "¿Tienes un baño?", isCorrect: true },
        { text: "Tengo un baño", isCorrect: false },
      ],
      feedback: "Good question.",
    },

    // ============================================================
    // CHAPTER 7: FINAL BOSS (The Bar Scenario)
    // ============================================================
    {
      type: "context",
      text: "🎓 Final Exam. You are at a busy tapas bar in Barcelona. Let's order.",
    },
    {
      type: "practice",
      question: "1. The waiter approaches. You want a beer.",
      options: [
        { text: "Necesito una cerveza", isCorrect: false }, // Too dramatic!
        { text: "Quiero una cerveza", isCorrect: true },
        { text: "Tengo una cerveza", isCorrect: false },
      ],
      feedback: "Right. 'Quiero' is standard for ordering.",
    },
    {
      type: "practice",
      question: "2. Your friend is with you. You ask what they want.",
      options: [
        { text: "¿Qué quieres?", isCorrect: true },
        { text: "¿Qué quiero?", isCorrect: false },
      ],
      feedback: "Perfect 'S' ending.",
    },
    {
      type: "practice",
      question: "3. Your friend says 'No wine'.",
      options: [
        { text: "No quiero vino", isCorrect: true },
        { text: "Vino no quiero", isCorrect: false },
      ],
      feedback: "Good negation.",
    },
    {
      type: "practice",
      question: "4. You realize you lost your wallet. You need help.",
      options: [
        { text: "Quiero ayuda", isCorrect: false },
        { text: "Necesito ayuda", isCorrect: true },
      ],
      feedback: "This is an emergency. Necesito is correct.",
    },
    {
      type: "context",
      text: "🎉 Lesson Complete! You now command the 3 most powerful verbs in Spanish.",
    },
  ],
};