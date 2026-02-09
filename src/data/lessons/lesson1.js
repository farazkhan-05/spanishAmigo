export const lesson1 = {
  id: 1,
  title: "The Ultimate Greeting Masterclass",
  intro: "From 'Hola' to 'See you later': The complete guide to starting and ending conversations like a local.",
  slides: [
    // ============================================================
    // CHAPTER 1: THE FUNDAMENTALS (The Silent H)
    // ============================================================
    {
      type: "context",
      text: "👋 Welcome. We are going to learn how to survive the first 10 seconds of any interaction in Spanish.",
    },
    {
      type: "context",
      text: "Let's start with the most famous word. You know it. But do you pronounce it right?",
    },
    {
      type: "reveal",
      question: "Hello",
      answer: "Hola",
      pronunciation: "Oh-la",
      explanation: "Rule #1 of Spanish: The letter 'H' is a ghost. It is completely silent. Never say 'Hhhhola'.",
    },
    {
      type: "practice",
      question: "Which English word starts with the same sound as 'Hola'?",
      options: [
        { text: "House", isCorrect: false },
        { text: "Octopus", isCorrect: true },
        { text: "Hamster", isCorrect: false },
      ],
      feedback: "Yes! 'Octopus', 'Opera', 'Olive'. No 'H' sound at all.",
    },
    {
      type: "context",
      text: "Now, 'Hola' is perfect. But it's informal. If you want to sound respectful, you need to look at the clock ⌚.",
    },

    // ============================================================
    // CHAPTER 2: THE CLOCK (Morning, Afternoon, Night)
    // ============================================================
    {
      type: "context",
      text: "Spanish splits the day into three zones. And unlike English, we wish people 'Good Days' (plural). Generous, right?",
    },
    {
      type: "reveal",
      question: "Good Morning (Before Lunch)",
      answer: "Buenos días",
      pronunciation: "Bweh-nos Dee-as",
      explanation: "Use this from the moment you wake up until you eat lunch (which is late in Spain/Latin America, often 2 PM!).",
    },
    {
      type: "practice",
      question: "It is 11:00 AM. You walk into a bakery. What do you say?",
      options: [
        { text: "Hola, buenos días", isCorrect: true },
        { text: "Hola, buenas tardes", isCorrect: false },
        { text: "Buenas noches", isCorrect: false },
      ],
      feedback: "Perfect. It's before lunch, so it's 'Días'.",
    },
    {
      type: "context",
      text: "Now, grammar alert. 'Día' looks like a feminine word ending in 'A', but it's actually MASCULINE. That's why we say 'Buenos' (with an O).",
    },
    {
      type: "context",
      text: "But once lunch hits (2 PM+), the gender flips. Everything becomes feminine.",
    },
    {
      type: "reveal",
      question: "Good Afternoon",
      answer: "Buenas tardes",
      pronunciation: "Bweh-nas Tar-des",
      explanation: "Note the 'A'. 'Buenas'. This is used from lunch until the sun goes down.",
    },
    {
      type: "practice",
      question: "Select the correct pair:",
      options: [
        { text: "Buenas días / Buenos tardes", isCorrect: false },
        { text: "Buenos días / Buenas tardes", isCorrect: true }, // correct
      ],
      feedback: "You got it. Masculine mornings, Feminine afternoons.",
    },
    {
      type: "context",
      text: "Finally, when the sun is gone, we switch to the night shift.",
    },
    {
      type: "reveal",
      question: "Good Night / Good Evening",
      answer: "Buenas noches",
      pronunciation: "Bweh-nas No-ches",
      explanation: "We use this for both 'Hello' (at a dinner) and 'Goodbye' (going to sleep).",
    },
    {
      type: "practice",
      question: "You arrive at a restaurant at 8:00 PM. The waiter greets you.",
      options: [
        { text: "¡Buenos días!", isCorrect: false },
        { text: "¡Buenas noches!", isCorrect: true },
        { text: "¡Hola!", isCorrect: true }, // Technically acceptable but less specific
      ],
      feedback: "Buenas noches is the specific, polite choice.",
    },
    {
      type: "reveal",
      question: "The Lazy Option",
      answer: "Buenas",
      pronunciation: "Bweh-nas",
      explanation: "Locals often just shorten everything to 'Buenas'. It works for Afternoon OR Night. It's casual and friendly.",
    },

    // ============================================================
    // CHAPTER 3: HOW ARE YOU? (The Matrix)
    // ============================================================
    {
      type: "context",
      text: "Okay, greeting delivered. Now comes the awkward pause. Let's ask how they are.",
    },
    {
      type: "context",
      text: "There are two ways to talk in Spanish: Casual (to friends) and Formal (to bosses/elders).",
    },
    {
      type: "reveal",
      question: "How are you? (Formal / Standard)",
      answer: "¿Cómo está?",
      pronunciation: "Koh-moh Es-tah",
      explanation: "Use this with your boss, a police officer, or someone older than you. It shows respect.",
    },
    {
      type: "reveal",
      question: "How are you? (Casual / Friendly)",
      answer: "¿Cómo estás?",
      pronunciation: "Koh-moh Es-tahs",
      explanation: "Add the 'S' on the end for friends. 'Estás' = You (friend) are.",
    },
    {
      type: "practice",
      question: "You are talking to your little brother.",
      options: [
        { text: "¿Cómo está?", isCorrect: false },
        { text: "¿Cómo estás?", isCorrect: true },
      ],
      feedback: "Right! The 'S' makes it friendly.",
    },
    {
      type: "context",
      text: "Want to sound even cooler? Let's use the slang version everyone actually uses.",
    },
    {
      type: "reveal",
      question: "What's up?",
      answer: "¿Qué tal?",
      pronunciation: "Keh Tal",
      explanation: "Short, fast, and works with everyone. It literally means 'Such as what?'.",
    },
    {
      type: "practice",
      question: "Which of these is the most casual/cool?",
      options: [
        { text: "¿Cómo está usted?", isCorrect: false },
        { text: "¿Qué tal?", isCorrect: true },
        { text: "Buenos días", isCorrect: false },
      ],
      feedback: "Boom. You're sounding like a local.",
    },

    // ============================================================
    // CHAPTER 4: THE ANSWERS (Emotional State)
    // ============================================================
    {
      type: "context",
      text: "Someone asked you '¿Qué tal?'. Don't just stare at them. You need an answer.",
    },
    {
      type: "reveal",
      question: "Good / Well",
      answer: "Bien",
      pronunciation: "Bee-en",
      explanation: "The default answer. Even if your house is on fire, you probably say 'Bien'.",
    },
    {
      type: "reveal",
      question: "Very good",
      answer: "Muy bien",
      pronunciation: "Moo-ee Bee-en",
      explanation: "Double the enthusiasm.",
    },
    {
      type: "reveal",
      question: "Bad",
      answer: "Mal",
      pronunciation: "Mahl",
      explanation: "Opposite of 'Bien'. Use this if you are sick or angry.",
    },
    {
      type: "context",
      text: "What if you are just... meh? Average? Ordinary?",
    },
    {
      type: "reveal",
      question: "So-so / More or less",
      answer: "Más o menos",
      pronunciation: "Mas oh Meh-nos",
      explanation: "Literally 'More or less'. It is the perfect phrase for a mediocre day.",
    },
    {
      type: "practice",
      question: "Your team lost the game, but you found $5 on the street. How are you?",
      options: [
        { text: "Muy bien", isCorrect: false },
        { text: "Mal", isCorrect: false },
        { text: "Más o menos", isCorrect: true },
      ],
      feedback: "Exactly. Balanced.",
    },

    // ============================================================
    // CHAPTER 5: THE PING PONG (Keeping it going)
    // ============================================================
    {
      type: "context",
      text: "Conversation is a game of tennis. You caught the ball ('Bien'). Now hit it back.",
    },
    {
      type: "reveal",
      question: "And you? (Casual)",
      answer: "¿Y tú?",
      pronunciation: "Ee too",
      explanation: "'Y' = And. 'Tú' = You (friend).",
    },
    {
      type: "reveal",
      question: "And you? (Formal)",
      answer: "¿Y usted?",
      pronunciation: "Ee Oos-ted",
      explanation: "'Usted' is the polite version of 'You'. Use this with the waiter or the grandmother.",
    },
    {
      type: "practice",
      question: "The waiter asks how you are. You answer 'Bien'. Now ask him back.",
      options: [
        { text: "¿Y tú?", isCorrect: false }, // Too casual for a waiter usually
        { text: "¿Y usted?", isCorrect: true },
        { text: "Gracias", isCorrect: false },
      ],
      feedback: "Correct. Use 'Usted' for service staff to be polite.",
    },

    // ============================================================
    // CHAPTER 6: INTRODUCTIONS (Names)
    // ============================================================
    {
      type: "context",
      text: "The conversation is going well! Time to introduce yourself.",
    },
    {
      type: "reveal",
      question: "My name is... (Literally: I call myself)",
      answer: "Me llamo...",
      pronunciation: "Meh Yah-moh",
      explanation: "The double 'LL' sounds like a 'Y'. So it's 'Ya-mo', not 'La-mo'.",
    },
    {
      type: "practice",
      question: "If your name is Bond, how do you say it?",
      options: [
        { text: "Mi nombre Bond", isCorrect: false },
        { text: "Me llamo Bond", isCorrect: true },
        { text: "Yo Bond", isCorrect: false },
      ],
      feedback: "Perfect. 'Me llamo Bond, James Bond.'",
    },
    {
      type: "reveal",
      question: "Nice to meet you",
      answer: "Mucho gusto",
      pronunciation: "Moo-cho Goose-toh",
      explanation: "Literally 'Much pleasure'. You say this while shaking hands.",
    },
    {
      type: "practice",
      question: "Someone says 'Me llamo Maria'. You reply:",
      options: [
        { text: "Buenos días", isCorrect: false },
        { text: "Mucho gusto", isCorrect: true },
        { text: "Más o menos", isCorrect: false },
      ],
      feedback: "Correct. Manners matter!",
    },

    // ============================================================
    // CHAPTER 7: THE EXIT STRATEGY (Goodbyes)
    // ============================================================
    {
      type: "context",
      text: "You've crushed the intro. Now you need to escape. Don't just walk away.",
    },
    {
      type: "reveal",
      question: "Goodbye (Permanent)",
      answer: "Adiós",
      pronunciation: "Ah-dee-os",
      explanation: "The classic. But sometimes it sounds like you are leaving forever.",
    },
    {
      type: "reveal",
      question: "See you later",
      answer: "Hasta luego",
      pronunciation: "Ah-sta Lweh-go",
      explanation: "The silent 'H' strikes again! This is the most common way to say bye in shops/cafes.",
    },
    {
      type: "reveal",
      question: "See you tomorrow",
      answer: "Hasta mañana",
      pronunciation: "Ah-sta Man-yah-na",
      explanation: "Use this with coworkers or classmates.",
    },
    {
      type: "reveal",
      question: "Bye (Short & Sweet)",
      answer: "Chao",
      pronunciation: "Ch-ow",
      explanation: "Just like the Italian 'Ciao'. Extremely popular in Spanish speaking countries.",
    },
    {
      type: "practice",
      question: "You are leaving work on Friday. You won't see them until Monday.",
      options: [
        { text: "Hasta mañana", isCorrect: false }, // Incorrect, tomorrow is Saturday
        { text: "Hasta luego", isCorrect: true }, // Safe bet
        { text: "Hola", isCorrect: false },
      ],
      feedback: "Right. 'Hasta luego' works anytime.",
    },

    // ============================================================
    // CHAPTER 8: CULTURAL ETIQUETTE (The Kiss)
    // ============================================================
    {
      type: "context",
      text: "🚨 Cultural Alert: In Spain and Latin America, personal space is smaller.",
    },
    {
      type: "context",
      text: "When meeting friends, men often shake hands or hug. Women (and mixed pairs) often do 'Dos Besos' (Two kisses on the cheek).",
    },
    {
      type: "reveal",
      question: "The Kiss",
      answer: "El beso",
      pronunciation: "El Beh-so",
      explanation: "Don't actually kiss the skin! Just touch cheeks and make a kissing sound. Right cheek first.",
    },

    // ============================================================
    // CHAPTER 9: THE FINAL EXAM (Simulation)
    // ============================================================
    {
      type: "context",
      text: "🎓 You made it to the end of the Masterclass. Let's test everything in a rapid-fire round.",
    },
    {
      type: "practice",
      question: "1. It's 9:00 AM. You enter a meeting. You say:",
      options: [
        { text: "Buenas tardes", isCorrect: false },
        { text: "Buenos días", isCorrect: true },
        { text: "Adiós", isCorrect: false },
      ],
      feedback: "Good.",
    },
    {
      type: "practice",
      question: "2. Your boss asks '¿Cómo está?'. You answer politely:",
      options: [
        { text: "Muy bien, ¿y usted?", isCorrect: true },
        { text: "Bien, ¿y tú?", isCorrect: false }, // Too casual
        { text: "Chao", isCorrect: false },
      ],
      feedback: "Excellent politeness.",
    },
    {
      type: "practice",
      question: "3. You meet a new colleague. He says 'Me llamo Juan'. You say:",
      options: [
        { text: "Mucho gusto", isCorrect: true },
        { text: "Lo siento", isCorrect: false },
        { text: "Por favor", isCorrect: false },
      ],
      feedback: "Nice to meet you, too!",
    },
    {
      type: "practice",
      question: "4. You are leaving the office. You say:",
      options: [
        { text: "Hola", isCorrect: false },
        { text: "Buenos días", isCorrect: false },
        { text: "Hasta mañana", isCorrect: true },
      ],
      feedback: "See you tomorrow!",
    },
    {
      type: "context",
      text: "🎉 YOU DID IT! You have mastered the Greeting. You are now ready to walk into any room in the Spanish-speaking world.",
    },
  ],
};