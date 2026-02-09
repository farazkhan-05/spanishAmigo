export const lesson5 = {
  id: 5,
  title: "The Ultimate Café Simulation (RPG Mode)",
  intro: "A massive, step-by-step roleplaying scenario. From getting a table to leaving a tip.",
  slides: [
    // ============================================================
    // ACT 1: THE ARRIVAL (Getting Seated)
    // ============================================================
    {
      type: "context",
      text: "📍 SCENE START: You are in a bustling plaza in Seville. The sun is hot. You find a café called 'El Gato Negro'.",
    },
    {
      type: "context",
      text: "There are two areas: The Bar (La Barra) and The Terrace (La Terraza). You want to sit outside in the sun.",
    },
    {
      type: "reveal",
      question: "A table",
      answer: "Una mesa",
      pronunciation: "Oo-na Meh-sa",
      explanation: "Essential start.",
    },
    {
      type: "reveal",
      question: "For two people",
      answer: "Para dos",
      pronunciation: "Pah-rah Dos",
      explanation: "Para = For. Dos = Two.",
    },
    {
      type: "practice",
      question: "The waiter approaches. Ask for a table for two.",
      options: [
        { text: "Una mesa para dos, por favor", isCorrect: true },
        { text: "Quiero dos mesas", isCorrect: false }, // I want two tables (Greedy!)
        { text: "Hola mesa", isCorrect: false },
      ],
      feedback: "He points to a nice table in the shade.",
    },

    // ============================================================
    // ACT 2: THE SETUP (The Menu)
    // ============================================================
    {
      type: "context",
      text: "You sit down. 5 minutes pass. No menu. You need to ask for it.",
    },
    {
      type: "context",
      text: "⚠️ WARNING: Do not ask for 'La Cuenta'. That is the bill. You want 'The Menu'.",
    },
    {
      type: "reveal",
      question: "The Menu",
      answer: "La carta",
      pronunciation: "Lah Kar-ta",
      explanation: "Think of 'A La Carte'. La Carta is the list of food. La Cuenta is the money.",
    },
    {
      type: "practice",
      question: "Call the waiter over and ask for the menu.",
      options: [
        { text: "Perdón, la cuenta por favor", isCorrect: false }, // You just got here!
        { text: "Perdón, la carta por favor", isCorrect: true },
      ],
      feedback: "He hands you the menu.",
    },

    // ============================================================
    // ACT 3: THE DRINKS (Specificity)
    // ============================================================
    {
      type: "context",
      text: "He asks: '¿Para beber?' (To drink?). It is hot, so you want something cold.",
    },
    {
      type: "reveal",
      question: "Orange Juice",
      answer: "Zumo de naranja",
      pronunciation: "Thoo-mo deh Na-ran-ha",
      explanation: "In Spain, 'Zumo'. In Latin America, often 'Jugo'. Freshly squeezed is standard.",
    },
    {
      type: "reveal",
      question: "With ice",
      answer: "Con hielo",
      pronunciation: "Kon Yeh-lo",
      explanation: "The 'H' is silent! Say 'Yellow' without the 'ow'. Yeh-lo.",
    },
    {
      type: "practice",
      question: "Order an Orange Juice with ice.",
      options: [
        { text: "Quiero zumo de naranja con hielo", isCorrect: true },
        { text: "Zumo de naranja sin hielo", isCorrect: false },
        { text: "Un hielo con naranja", isCorrect: false }, // An ice with orange
      ],
      feedback: "Refreshing choice.",
    },
    {
      type: "context",
      text: "Your friend wants a coffee. But a specific one.",
    },
    {
      type: "reveal",
      question: "Espresso with a dash of milk",
      answer: "Un cortado",
      pronunciation: "Oon Kor-tah-doh",
      explanation: "Literally 'Cut'. Coffee 'cut' with a tiny bit of milk. Very popular.",
    },
    {
      type: "practice",
      question: "Order the Cortado.",
      options: [
        { text: "Un café con leche", isCorrect: false }, // Too much milk
        { text: "Un cortado, por favor", isCorrect: true },
      ],
      feedback: "You sound like a local.",
    },

    // ============================================================
    // ACT 4: THE FOOD (Tapas)
    // ============================================================
    {
      type: "context",
      text: "Drinks ordered. Now, food. You are in Spain, so you must eat the classics.",
    },
    {
      type: "reveal",
      question: "Potato Omelette",
      answer: "Tortilla de patatas",
      pronunciation: "Tor-tee-ya deh Pah-ta-tas",
      explanation: "The national dish. Eggs and potatoes. Essential.",
    },
    {
      type: "reveal",
      question: "Spicy Potatoes",
      answer: "Patatas bravas",
      pronunciation: "Pah-ta-tas Brah-vas",
      explanation: "Fried potatoes with spicy sauce.",
    },
    {
      type: "practice",
      question: "The waiter asks '¿Para comer?' (To eat?). Order the Tortilla.",
      options: [
        { text: "Una tortilla de patatas, por favor", isCorrect: true },
        { text: "Una patata", isCorrect: false }, // Just one potato?
        { text: "Quiero huevos", isCorrect: false },
      ],
      feedback: "Good choice.",
    },

    // ============================================================
    // ACT 5: THE PROBLEM (Missing Tools)
    // ============================================================
    {
      type: "context",
      text: "🍽️ The food arrives! It smells amazing. But you have no tools to eat it with.",
    },
    {
      type: "reveal",
      question: "The Fork",
      answer: "El tenedor",
      pronunciation: "El Teh-neh-dor",
      explanation: "Looks like 'Ten' + 'Door'.",
    },
    {
      type: "reveal",
      question: "The Knife",
      answer: "El cuchillo",
      pronunciation: "El Koo-chee-yo",
      explanation: "Double 'LL' = 'Y'. Koo-chee-yo.",
    },
    {
      type: "practice",
      question: "Call the waiter. Tell him you need a fork.",
      options: [
        { text: "Perdón, necesito un tenedor", isCorrect: true },
        { text: "Quiero una cuchara", isCorrect: false }, // That's a spoon
        { text: "Tengo un tenedor", isCorrect: false },
      ],
      feedback: "He apologizes and brings one.",
    },
    {
      type: "context",
      text: "You spill a little juice. You need to clean it up.",
    },
    {
      type: "reveal",
      question: "The Napkin",
      answer: "La servilleta",
      pronunciation: "Lah Ser-bee-yeh-ta",
      explanation: "Often just 'Una servi' in slang.",
    },
    {
      type: "practice",
      question: "Ask for a napkin.",
      options: [
        { text: "Una servilleta, por favor", isCorrect: true },
        { text: "Una carta, por favor", isCorrect: false },
      ],
      feedback: "Crisis averted.",
    },

    // ============================================================
    // ACT 6: THE DIGITAL AGE (WiFi)
    // ============================================================
    {
      type: "context",
      text: "📱 You want to post a photo of your Tortilla. But you have no data.",
    },
    {
      type: "reveal",
      question: "The Password",
      answer: "La contraseña",
      pronunciation: "Lah Kon-tra-sen-ya",
      explanation: "Long word. Break it down: Con-tra-se-ña.",
    },
    {
      type: "reveal",
      question: "Of the WiFi",
      answer: "Del Wifi",
      pronunciation: "Del Wee-fee",
      explanation: "In Spanish, we say 'Wee-Fee', not 'Wai-Fai'.",
    },
    {
      type: "practice",
      question: "Ask: 'Do you have the WiFi password?'",
      options: [
        { text: "¿Tienes la contraseña del Wifi?", isCorrect: true },
        { text: "Quiero Wifi", isCorrect: false },
        { text: "¿Dónde está el Wifi?", isCorrect: false },
      ],
      feedback: "He gives you the code: 'Madrid123'.",
    },

    // ============================================================
    // ACT 7: THE MISTAKE (Conflict Resolution)
    // ============================================================
    {
      type: "context",
      text: "😟 You ordered a second round. You asked for 'Agua sin gas' (Still water).",
    },
    {
      type: "context",
      text: "He brings you 'Agua con gas' (Sparkling). You hate bubbles. You must send it back politely.",
    },
    {
      type: "practice",
      question: "How do you say: 'I don't want this' politely?",
      options: [
        { text: "¡No! ¡Mal!", isCorrect: false }, // Too aggressive
        { text: "Perdón, no quiero agua con gas", isCorrect: true },
        { text: "Gracias, muy bien", isCorrect: false },
      ],
      feedback: "He says 'Lo siento' (Sorry) and swaps it.",
    },
    {
      type: "reveal",
      question: "The Mistake / Error",
      answer: "El error",
      pronunciation: "El Eh-rror",
      explanation: "Simple cognate.",
    },

    // ============================================================
    // ACT 8: THE BATHROOM (Advanced Navigation)
    // ============================================================
    {
      type: "context",
      text: "🚽 Time for the bathroom break.",
    },
    {
      type: "practice",
      question: "Ask the Golden Question.",
      options: [
        { text: "¿Dónde está el baño?", isCorrect: true },
        { text: "Quiero baño", isCorrect: false },
      ],
      feedback: "He points to the back of the café.",
    },
    {
      type: "reveal",
      question: "In the back / At the end",
      answer: "Al fondo",
      pronunciation: "Al Fon-doh",
      explanation: "Very common direction. It means walk until you hit a wall.",
    },
    {
      type: "practice",
      question: "He says: 'Al fondo a la derecha'. Where do you go?",
      options: [
        { text: "To the back and left", isCorrect: false },
        { text: "To the back and right", isCorrect: true },
      ],
      feedback: "You found it.",
    },

    // ============================================================
    // ACT 9: THE BILL (La Dolorosa)
    // ============================================================
    {
      type: "context",
      text: "💸 You are finished. You call the waiter one last time.",
    },
    {
      type: "practice",
      question: "Ask for the bill.",
      options: [
        { text: "La carta, por favor", isCorrect: false }, // That's the menu!
        { text: "La cuenta, por favor", isCorrect: true },
      ],
      feedback: "He brings it. Total: €12.50.",
    },
    {
      type: "context",
      text: "You want to pay with card.",
    },
    {
      type: "practice",
      question: "Say: 'With card, please.'",
      options: [
        { text: "Con tarjeta, por favor", isCorrect: true },
        { text: "Con dinero", isCorrect: false },
      ],
      feedback: "He brings the machine.",
    },
    {
      type: "context",
      text: "💰 Tipping Culture Alert: In Spain, you don't need to leave 20%. But leaving small change is polite.",
    },
    {
      type: "reveal",
      question: "The Tip",
      answer: "La propina",
      pronunciation: "Lah Pro-pee-na",
      explanation: "Usually just round up. If the bill is €12.50, leave €13 or €14.",
    },
    {
      type: "practice",
      question: "You want to leave a small tip. You say:",
      options: [
        { text: "No quiero propina", isCorrect: false },
        { text: "Esto es para ti (This is for you)", isCorrect: true },
      ],
      feedback: "He smiles and says 'Gracias'.",
    },

    // ============================================================
    // ACT 10: THE DEPARTURE (Review)
    // ============================================================
    {
      type: "context",
      text: "👋 You stand up. You are full, caffeinated, and happy.",
    },
    {
      type: "reveal",
      question: "It was very tasty",
      answer: "Estaba muy rico",
      pronunciation: "Es-tah-bah Moo-ee Ree-koh",
      explanation: "A great compliment to the chef/waiter.",
    },
    {
      type: "practice",
      question: "Final Step: Say goodbye politely.",
      options: [
        { text: "Adiós, muchas gracias", isCorrect: true },
        { text: "Hola", isCorrect: false },
        { text: "Perdón", isCorrect: false },
      ],
      feedback: "Congratulations. You just survived 2 hours in a Spanish café completely in Spanish.",
    },
    {
      type: "context",
      text: "🌟 LEVEL UP: You have completed the Beginner Survival Course.",
    },
  ],
};