// DOM Elements
const form = document.getElementById('prediction-form');
const inputSection = document.getElementById('input-section');
const resultSection = document.getElementById('result-section');
const lifePathNumber = document.getElementById('life-path-number');
const lifePathMeaning = document.getElementById('life-path-meaning');
const dailyPrediction = document.getElementById('daily-prediction');
const currentDateElement = document.getElementById('current-date');
const currentYearElement = document.getElementById('current-year');
const newPredictionBtn = document.getElementById('new-prediction');
const sharePredictionBtn = document.getElementById('share-prediction');
const newPersonBtn = document.getElementById('new-person');

// Life Path Meanings
const lifePathMeanings = {
    1: "You are a natural leader with strong individuality. Your path is to develop independence and self-confidence.",
    2: "You excel in cooperation and balance. Your path is about partnerships, diplomacy, and sensitivity to others.",
    3: "You have natural creativity and self-expression. Your path involves communication, optimism, and bringing joy to others.",
    4: "You are practical, organized, and hard-working. Your path is about building stability and creating solid foundations.",
    5: "You seek freedom and adventure. Your path is about embracing change, versatility, and sensory experiences.",
    6: "You are nurturing and responsible. Your path involves caring for others, creating harmony, and accepting duties.",
    7: "You have a analytical and spiritual mind. Your path is about seeking inner wisdom, analysis, and spiritual growth.",
    8: "You have natural leadership in material matters. Your path involves achievement, authority, and material success.",
    9: "You are humanitarian and compassionate. Your path involves selflessness, compassion, and completing spiritual lessons."
};

// Tarot Cards with Meanings
const tarotCards = {
    major: [
        { name: "The Fool", meaning: "new beginnings, spontaneity, faith", energy: "carefree" },
        { name: "The Magician", meaning: "manifestation, resourcefulness, inspired action", energy: "empowered" },
        { name: "The High Priestess", meaning: "intuition, sacred knowledge, divine feminine", energy: "intuitive" },
        { name: "The Empress", meaning: "abundance, nurturing, fertility", energy: "nurturing" },
        { name: "The Emperor", meaning: "authority, structure, control", energy: "disciplined" },
        { name: "The Hierophant", meaning: "tradition, conformity, morality", energy: "conventional" },
        { name: "The Lovers", meaning: "partnerships, duality, union", energy: "harmonious" },
        { name: "The Chariot", meaning: "determination, willpower, victory", energy: "driven" },
        { name: "Strength", meaning: "courage, patience, compassion", energy: "resilient" },
        { name: "The Hermit", meaning: "introspection, searching, guidance", energy: "reflective" },
        { name: "Wheel of Fortune", meaning: "change, cycles, fate", energy: "fortunate" },
        { name: "Justice", meaning: "fairness, truth, law", energy: "balanced" },
        { name: "The Hanged Man", meaning: "surrender, letting go, new perspective", energy: "sacrificial" },
        { name: "Death", meaning: "endings, transformation, transition", energy: "transformative" },
        { name: "Temperance", meaning: "balance, moderation, patience", energy: "moderate" },
        { name: "The Devil", meaning: "shadow self, attachment, restriction", energy: "tempted" },
        { name: "The Tower", meaning: "sudden change, revelation, awakening", energy: "disruptive" },
        { name: "The Star", meaning: "hope, faith, rejuvenation", energy: "inspired" },
        { name: "The Moon", meaning: "illusion, fear, subconscious", energy: "mysterious" },
        { name: "The Sun", meaning: "joy, success, celebration", energy: "radiant" },
        { name: "Judgment", meaning: "rebirth, inner calling, absolution", energy: "awakened" },
        { name: "The World", meaning: "completion, achievement, fulfillment", energy: "accomplished" }
    ],
    minor: [
        { name: "Ace of Wands", meaning: "inspiration, new opportunities, growth", energy: "creative" },
        { name: "Two of Wands", meaning: "planning, making decisions, leaving comfort", energy: "visionary" },
        { name: "Three of Cups", meaning: "celebration, friendship, community", energy: "joyful" },
        { name: "Four of Pentacles", meaning: "security, conservation, frugality", energy: "protective" },
        { name: "Five of Swords", meaning: "conflict, defeat, win at all costs", energy: "challenged" },
        { name: "Six of Wands", meaning: "victory, recognition, pride", energy: "successful" },
        { name: "Seven of Cups", meaning: "choices, fantasy, illusion", energy: "dreamy" },
        { name: "Eight of Pentacles", meaning: "skill, diligence, perfectionism", energy: "focused" },
        { name: "Nine of Swords", meaning: "anxiety, fear, nightmares", energy: "worried" },
        { name: "Ten of Cups", meaning: "happiness, fulfillment, harmony", energy: "blessed" },
        { name: "Knight of Wands", meaning: "action, adventure, impulsiveness", energy: "passionate" },
        { name: "Queen of Pentacles", meaning: "nurturing, practical, financial security", energy: "abundant" },
        { name: "King of Swords", meaning: "clarity, intellectual power, authority", energy: "analytical" },
        { name: "Page of Cups", meaning: "creativity, intuition, sensitivity", energy: "imaginative" }
    ]
};

// Daily cosmic influences based on day of week
const cosmicInfluences = {
    0: { planet: "Sun", influence: "vitality and clarity", element: "fire" },
    1: { planet: "Moon", influence: "emotions and intuition", element: "water" },
    2: { planet: "Mars", influence: "energy and courage", element: "fire" },
    3: { planet: "Mercury", influence: "communication and intellect", element: "air" },
    4: { planet: "Jupiter", influence: "growth and abundance", element: "air" },
    5: { planet: "Venus", influence: "love and harmony", element: "earth" },
    6: { planet: "Saturn", influence: "discipline and responsibility", element: "earth" }
};

// Prediction Templates by Life Path
const predictionTemplates = {
    1: [
        "Today your confidence shines brightly, opening new doors of opportunity.",
        "Your leadership qualities will be tested today - stand firm in your decisions.",
        "Today is ideal for starting a new project that showcases your unique vision.",
        "Focus on independence today - try solving a problem without seeking help.",
        "Your pioneering spirit is activated today, leading you to innovative solutions."
    ],
    2: [
        "Your diplomatic skills will be needed to resolve a conflict today.",
        "A partnership opportunity may present itself - be open to collaboration.",
        "Your intuition is heightened today - trust your inner voice.",
        "Balance is key today - ensure you're giving attention to both work and personal life.",
        "Today favors heart-to-heart conversations that deepen your relationships."
    ],
    3: [
        "Your creative energy is at a peak today - express yourself boldly.",
        "An opportunity to showcase your talents may arise unexpectedly today.",
        "Your words have extra power today - use them to inspire others.",
        "Joy comes through social connections today - don't isolate yourself.",
        "A creative block will dissolve if you approach it with playfulness today."
    ],
    4: [
        "Today rewards methodical planning and attention to detail.",
        "Your disciplined approach will solve a long-standing problem today.",
        "Focus on building something lasting today, whether a project or relationship.",
        "Your reliability will be recognized and valued by someone important today.",
        "A practical solution to a financial matter becomes clear today."
    ],
    5: [
        "Embrace unexpected changes today - they're leading you to something better.",
        "Your adaptability will be your greatest asset in handling today's challenges.",
        "A surprise opportunity for adventure presents itself - say yes!",
        "Today favors breaking free from restrictive routines or relationships.",
        "Your versatility allows you to succeed where others might fail today."
    ],
    6: [
        "Your nurturing energy is needed by someone close to you today.",
        "Balance giving to others with self-care today to avoid depletion.",
        "Your natural sense of beauty helps you improve your surroundings today.",
        "Family matters take center stage - your mediating skills bring harmony.",
        "Your responsible nature earns you respect in a professional situation today."
    ],
    7: [
        "Take time for quiet reflection today to access deeper wisdom.",
        "Research and analysis lead to important discoveries today.",
        "Trust your intuition about someone's true intentions today.",
        "Spiritual practices bring special benefits and insights today.",
        "Your analytical mind finds solutions to complex problems that baffle others."
    ],
    8: [
        "Financial opportunities require decisive action today.",
        "Your natural authority helps you take charge of a challenging situation.",
        "Business connections made today have long-term benefit potential.",
        "Focus on manifesting abundance by visualizing your success clearly.",
        "A leadership opportunity that aligns with your values presents itself today."
    ],
    9: [
        "Your compassion makes a significant difference in someone's life today.",
        "Let go of something that's no longer serving you to make room for new beginnings.",
        "Your broad perspective helps others see beyond their limited viewpoint today.",
        "An opportunity for meaningful humanitarian work may present itself.",
        "Forgiveness brings unexpected healing and freedom today."
    ]
};

// Name Analysis by First Letter (simplified)
const nameAnalysis = {
    A: "ambitious", B: "balanced", C: "creative", D: "determined", E: "energetic",
    F: "friendly", G: "generous", H: "honest", I: "intuitive", J: "just",
    K: "kind", L: "loyal", M: "motivated", N: "nurturing", O: "optimistic",
    P: "patient", Q: "quick-witted", R: "responsible", S: "sensitive", T: "truthful",
    U: "understanding", V: "versatile", W: "wise", X: "exceptional", Y: "youthful", Z: "zealous"
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
    
    // Create magical star background
    createEnhancedStars();
    
    // Setup random twinkling star effect
    setTimeout(() => {
        createRandomTwinkle();
        
        // Setup recurring twinkling stars every 5 seconds
        setInterval(() => {
            createRandomTwinkle();
        }, 5000); // 5 seconds exactly
    }, 3000); // 3-second initial delay
    
    // Check for stored data
    checkStoredData();

    // Create animated background particles
    createBackgroundParticles();
});

// Create enhanced animated stars in the background
function createEnhancedStars() {
    const body = document.body;
    const starCount = {
        tiny: 80,
        small: 60,
        medium: 30,
        large: 15
    };
    
    // Clear any existing stars
    document.querySelectorAll('.sparkle').forEach(star => star.remove());
    
    // Create stars of different sizes
    for (const size in starCount) {
        for (let i = 0; i < starCount[size]; i++) {
            const star = document.createElement('div');
            star.className = `sparkle ${size}`;
            
            // Random positioning
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            
            // Random animation delay
            const delay = Math.random() * 5;
            
            // Apply styles
            star.style.left = `${posX}px`;
            star.style.top = `${posY}px`;
            star.style.animationDelay = `${delay}s`;
            
            body.appendChild(star);
        }
    }
}

// Create a random twinkling star effect
function createRandomTwinkle() {
    const body = document.body;
    const twinkle = document.createElement('div');
    
    // Set class for twinkle effect
    twinkle.className = 'random-twinkle';
    
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get container width (approximating the central content area)
    const contentWidth = Math.min(900, windowWidth * 0.8); // Based on max-width of container
    const contentLeft = (windowWidth - contentWidth) / 2;
    const contentRight = contentLeft + contentWidth;
    
    // Determine x position - either on left or right edge
    let posX;
    if (Math.random() > 0.5) {
        // Left side
        posX = Math.random() * (contentLeft * 0.9);
    } else {
        // Right side
        posX = contentRight + Math.random() * (contentLeft * 0.9);
    }
    
    // Determine y position - avoid the middle 60% vertically when in the side areas
    let posY;
    const centerYStart = windowHeight * 0.2;
    const centerYEnd = windowHeight * 0.8;
    
    // For very wide screens, allow stars to appear at any height
    if (posX < contentLeft || posX > contentRight) {
        // Sides: any height, with slight bias toward edges
        if (Math.random() > 0.7) {
            // Top or bottom edge
            posY = Math.random() > 0.5 ? 
                Math.random() * windowHeight * 0.2 : // Top 20%
                windowHeight * 0.8 + Math.random() * windowHeight * 0.2; // Bottom 20%
        } else {
            // Anywhere in height
            posY = Math.random() * windowHeight;
        }
    } else {
        // Above or below content area (should be rare due to x-position logic)
        posY = Math.random() > 0.5 ? 
            Math.random() * centerYStart : // Top
            centerYEnd + Math.random() * (windowHeight - centerYEnd); // Bottom
    }
    
    // Random size (slightly varied)
    const size = Math.random() * 5 + 4; // 4-9px
    
    // Apply styles
    twinkle.style.left = `${posX}px`;
    twinkle.style.top = `${posY}px`;
    twinkle.style.width = `${size}px`;
    twinkle.style.height = `${size}px`;
    
    // Add to DOM
    body.appendChild(twinkle);
    
    // Remove the twinkle after animation completes
    setTimeout(() => {
        twinkle.remove();
    }, 2000); // Match the 2s animation duration
}

// Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    
    if (!fullName || !birthdate) {
        alert('Please enter both your name and date of birth');
        return;
    }
    
    // Calculate Life Path Number
    const lifePath = calculateLifePath(birthdate);
    
    // Generate Prediction
    generatePrediction(fullName, lifePath);
    
    // Store in localStorage
    localStorage.setItem('userData', JSON.stringify({
        name: fullName,
        birthdate: birthdate,
        lifePath: lifePath
    }));
    
    // Show result section
    inputSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    resultSection.classList.add('fade-in');
    
    // Set current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = new Date().toLocaleDateString('en-US', options);
});

// Calculate Life Path Number
function calculateLifePath(birthdate) {
    const dateObj = new Date(birthdate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Months are 0-indexed
    const year = dateObj.getFullYear();
    
    // Add all digits together
    let sum = sumDigits(day) + sumDigits(month) + sumDigits(year);
    
    // If sum is a master number (11, 22) or single digit, return it
    if (sum === 11 || sum === 22 || sum < 10) {
        return sum;
    }
    
    // Otherwise, reduce to a single digit
    return sumDigits(sum);
}

// Helper function to sum digits
function sumDigits(num) {
    // If already single digit, return number
    if (num < 10) return num;
    
    // Convert to string and sum each digit
    return String(num).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

// Get daily tarot card based on date and name
function getDailyTarotCard(name, birthdate, variation = 0) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    // Create a deterministic but changing value based on date and first letter of name
    const firstLetter = name.charAt(0).toUpperCase();
    const letterValue = firstLetter.charCodeAt(0) - 64; // A=1, B=2, etc.
    
    // Combine values in a way that changes daily
    const dateSum = day + month + year;
    const combinedValue = ((dateSum * letterValue) % 22 + variation) % 22;
    
    // Get major arcana card for the day
    return tarotCards.major[combinedValue];
}

// Get daily minor arcana influence
function getDailyMinorArcana(lifePath, variation = 0) {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    // Use life path and day of year to select a minor arcana card
    const cardIndex = ((dayOfYear + parseInt(lifePath)) % tarotCards.minor.length + variation) % tarotCards.minor.length;
    return tarotCards.minor[cardIndex];
}

// Generate Prediction
function generatePrediction(name, path, refreshContent = false) {
    // Convert path to a valid key (handle cases where path is not 1-9)
    const validPath = (path >= 1 && path <= 9) ? path : 1;
    
    // Get personalized name form based on the number of names
    const nameParts = name.trim().split(' ').filter(part => part.length > 0);
    let displayName;
    
    if (nameParts.length === 1) {
        // Just one name
        displayName = nameParts[0];
    } else if (nameParts.length === 2) {
        // First and last name - use first name only
        displayName = nameParts[0];
    } else {
        // First, middle and last name(s) - use first and middle name
        displayName = `${nameParts[0]} ${nameParts[1]}`;
    }
    
    // Capitalize first letter of each part of the display name
    displayName = displayName.split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    
    // Display life path number
    lifePathNumber.textContent = path;
    
    // Display life path meaning
    lifePathMeaning.textContent = lifePathMeanings[validPath] || lifePathMeanings[1];
    
    // Get first letter of name for name analysis
    const firstLetter = name.charAt(0).toUpperCase();
    const nameAttribute = nameAnalysis[firstLetter] || 'remarkable';
    
    // Get random prediction for life path - ensure it's different if refreshing
    let predictions = predictionTemplates[validPath] || predictionTemplates[1];
    let prevPrediction = dailyPrediction.querySelector('.main-prediction')?.textContent || '';
    let randomPrediction;
    
    // Make sure we don't get the same prediction if refreshing
    if (refreshContent && predictions.length > 1) {
        let currentPredictions = [...predictions]; // Create a copy
        // Filter out the current prediction
        currentPredictions = currentPredictions.filter(pred => !prevPrediction.includes(pred));
        
        // If we have alternatives, select one randomly
        if (currentPredictions.length > 0) {
            randomPrediction = currentPredictions[Math.floor(Math.random() * currentPredictions.length)];
        } else {
            // Fallback if no alternatives (shouldn't happen with our prediction counts)
            randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
        }
    } else {
        randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    }
    
    // Get today's cosmic influences
    const today = new Date();
    const dayOfWeek = today.getDay();
    const cosmic = cosmicInfluences[dayOfWeek];
    
    // Get daily tarot cards - ensure different cards if refreshing
    let majorArcana, minorArcana;
    
    if (refreshContent) {
        // For refresh, get different cards based on a slight variation
        const dayShift = today.getHours() % 5 + 1; // Use hours to shift 1-5 positions
        majorArcana = getDailyTarotCard(name, document.getElementById('birthdate').value, dayShift);
        minorArcana = getDailyMinorArcana(path, dayShift);
    } else {
        majorArcana = getDailyTarotCard(name, document.getElementById('birthdate').value);
        minorArcana = getDailyMinorArcana(path);
    }
    
    // Add additional personalized prediction elements
    const timeOfDay = getTimeOfDay(refreshContent);
    const luckyNumber = getLuckyNumber(path, refreshContent);
    const color = getLuckyColor(path, refreshContent);
    
    // Format birthdate correctly - fix the timezone issue
    const birthdate = document.getElementById('birthdate').value;
    const [year, month, day] = birthdate.split('-').map(num => parseInt(num, 10));
    
    // Create date directly from components to avoid timezone issues
    const formattedBirthdate = new Date(year, month - 1, day).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC' // Use UTC to avoid timezone issues
    });
    
    // Get personalized sign-off based on life path
    const signOff = getPersonalizedSignOff(displayName, validPath, refreshContent);
    
    // Get personalized birth date message
    const birthDateMessage = getBirthDateMessage(formattedBirthdate, validPath, refreshContent);
    
    // Get professional/business insight aligned with life path
    const professionalInsight = getBusinessInsight(validPath, displayName, refreshContent);
    
    // Generate cosmic insight based on daily factors
    const cosmicInsight = generateCosmicInsight(displayName, cosmic, majorArcana, minorArcana, validPath, refreshContent);
    
    // Personalize prediction with name analysis
    dailyPrediction.innerHTML = `
        <div class="personalized-greeting">Greetings, <span class="user-name">${displayName}</span>!</div>
        <p class="birth-note">${birthDateMessage}</p>
        <p class="main-prediction"><strong>As a ${nameAttribute} person with ${cosmic.planet}'s ${cosmic.influence} surrounding you today:</strong> ${randomPrediction}</p>
        <p>${cosmicInsight}</p>
        <p>${professionalInsight}</p>
        <div class="magic-divider">
            <div class="celestial-icon moon-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <!-- Smaller moon to match sun size -->
                    <path fill="#e8e8ff" d="M12 7a4 4 0 0 0 6 6 6 6 0 1 1-6-6Z"></path>
                </svg>
            </div>
            <div class="celestial-icon star-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <!-- Improved five-pointed star with no borders -->
                    <path fill="#ffe44d" d="M12 2l2.4 5.4L20 8.5l-4 3.9 1 5.6-5-2.6-5 2.6 1-5.6-4-3.9 5.6-1.1z">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <!-- Inner glow -->
                    <path fill="#fff5a0" opacity="0.5" d="M12 5l1.2 2.7 2.8 0.5-2 1.9 0.5 2.9-2.5-1.3-2.5 1.3 0.5-2.9-2-1.9 2.8-0.5z">
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
                    </path>
                </svg>
            </div>
            <div class="celestial-icon sun-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <!-- Simple sun with no borders -->
                    <circle cx="12" cy="12" r="5" fill="#ffcc00"/>
                    <!-- Simple rays with no strokes -->
                    <path fill="#ffcc00" d="M12 3V5M12 19v2M5 12H3M21 12h-2M6.3 6.3L7.7 7.7M17.7 17.7l1.4 1.4M6.3 17.7l-1.4 1.4M17.7 6.3l1.4-1.4"/>
                    <circle cx="12" cy="12" r="3" fill="#ffe44d"/>
                </svg>
            </div>
        </div>
        <div class="extra-insights">
            <p><strong>Today's Tarot Guidance:</strong> ${majorArcana.name} - ${majorArcana.meaning}</p>
            <p><strong>Supporting Energy:</strong> ${minorArcana.name} - ${minorArcana.energy}</p>
            <p><strong>Best time for action:</strong> ${timeOfDay}</p>
            <p><strong>Lucky number today:</strong> ${luckyNumber}</p>
            <p><strong>Harmonious color:</strong> <span class="harmonious-color ${color.toLowerCase()}">${color}</span></p>
        </div>
        <p class="personal-sign-off">${signOff}</p>
    `;
    
    // Add styling to make prediction more prominent
    dailyPrediction.classList.add('enhanced');
}

// Get business/professional insight based on life path
function getBusinessInsight(lifePath, name, isRefresh = false) {
    // Different professional insights for each life path
    const insights = {
        1: [
            `Your leadership qualities attract business opportunities today. A chance to take charge of a project aligns perfectly with your natural talents.`,
            `Professional connections respond to your confidence today. Your ability to make decisive choices opens doors to new possibilities.`,
            `Your innovative ideas gain traction in professional settings today. Those in authority positions are especially receptive to your unique perspective.`
        ],
        2: [
            `Your diplomatic approach creates valuable bridges in your professional life today. A collaboration opportunity brings unexpected benefits.`,
            `Your intuitive understanding of others' needs makes you an essential mediator in workplace dynamics today.`,
            `Partnership energies are strongly aligned with your path today. A cooperative venture may yield results beyond expectations.`
        ],
        3: [
            `Your creative communication skills attract positive attention in professional settings today. Express your ideas with confidence.`,
            `Artistic or expressive work receives favorable responses today. Your natural charisma helps you stand out in group settings.`,
            `Your ability to inspire others makes you a valuable team member today. Creative solutions to old problems bring recognition.`
        ],
        4: [
            `Your methodical approach to challenges impresses key decision-makers today. Steady progress on long-term projects yields rewards.`,
            `Reliability in your professional commitments creates lasting impressions today. Your organizational abilities solve an important problem.`,
            `Your practical wisdom provides structure that others rely on. An opportunity to demonstrate your dependability leads to greater responsibility.`
        ],
        5: [
            `Your adaptability opens unexpected professional pathways today. Embracing a sudden change leads to exciting new connections.`,
            `Freedom-seeking energies attract dynamic opportunities today. Your versatility impresses someone with influence in your field.`,
            `Your progressive thinking breaks through stagnant professional patterns today. A chance encounter may lead to an exciting new direction.`
        ],
        6: [
            `Your nurturing leadership style creates harmony in professional environments today. Others seek your guidance on sensitive matters.`,
            `Service-oriented work brings special satisfaction today. Your responsible nature earns recognition from those who matter.`,
            `Your ability to create balance and beauty in your work environment attracts positive attention today. A chance to improve workplace conditions leads to lasting benefits.`
        ],
        7: [
            `Your analytical insights solve an important professional puzzle today. Research and investigation reveal valuable information.`,
            `Specialized knowledge sets you apart in professional settings today. Your thoughtful approach to complex problems impresses key decision-makers.`,
            `Your unique perspective helps colleagues see beyond conventional solutions today. Time spent in quiet reflection yields professional breakthroughs.`
        ],
        8: [
            `Your natural business acumen identifies a valuable opportunity that others miss today. Executive energies flow strongly in your favor.`,
            `Financial matters respond positively to your attention today. Your organizational abilities create efficiency that improves bottom-line results.`,
            `Your leadership in material matters earns respect today. A chance to restructure resources leads to improved outcomes for all involved.`
        ],
        9: [
            `Your humanitarian approach creates meaningful connections in professional settings today. Your broad perspective helps resolve a complex situation.`,
            `Completion energies surround your work today. Bringing a project to its conclusion opens doors to more fulfilling opportunities.`,
            `Your compassionate leadership inspires others to contribute their best efforts today. A chance to serve a greater cause through your work brings deep satisfaction.`
        ]
    };
    
    // Get array of insights for this life path
    const pathInsights = insights[lifePath] || insights[1];
    
    // If refreshing, use a different selection method to ensure variety
    if (isRefresh) {
        // Use current minute as seed for variation
        const minute = new Date().getMinutes();
        return pathInsights[minute % pathInsights.length];
    }
    
    // Return random insight from the array
    return pathInsights[Math.floor(Math.random() * pathInsights.length)];
}

// Generate cosmic insight based on daily cards and influences
function generateCosmicInsight(name, cosmic, majorCard, minorCard, lifePath, isRefresh = false) {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const moonPhase = getMoonPhase(today);
    
    // Array of cosmic insights that change with the date
    const insights = [
        `The cosmos reveals that ${majorCard.name} is guiding your day with ${majorCard.energy} energy, while ${minorCard.name} provides supporting influence. With ${cosmic.planet}'s ${cosmic.influence}, you'll find yourself especially attuned to ${cosmic.element} energies.`,
        
        `My inner tarot reader sees the ${majorCard.name} card appearing prominently in your cosmic chart today. Its energy of ${majorCard.meaning} blends with ${cosmic.planet}'s ${cosmic.influence}, creating a day where your ${minorCard.energy} nature can truly shine.`,
        
        `The stars have aligned to place the ${majorCard.name} card at the center of your day. This powerful card suggests ${majorCard.meaning}, especially when combined with the ${cosmic.planet}'s current position enhancing your ${cosmic.element} element.`,
        
        `Today's ${moonPhase} moon amplifies the message of the ${majorCard.name} card in your cosmic reading. This suggests a focus on ${majorCard.meaning}, while ${minorCard.name} indicates you should approach challenges with ${minorCard.energy} energy.`,
        
        `The cosmic patterns reveal the ${majorCard.name} card crossing paths with ${cosmic.planet}'s ${cosmic.influence} in your chart today. This rare alignment suggests opportunities related to ${majorCard.meaning} that resonate with your life path ${lifePath}.`
    ];
    
    // If refreshing, use a different selection formula
    if (isRefresh) {
        // Use hours + minutes as a seed for variation
        const hourMinute = new Date().getHours() + new Date().getMinutes();
        return insights[hourMinute % insights.length];
    }
    
    // Select an insight based on the day of year to ensure it changes daily
    const insightIndex = dayOfYear % insights.length;
    return insights[insightIndex];
}

// Determine moon phase
function getMoonPhase(date) {
    const phases = ["new", "waxing crescent", "first quarter", "waxing gibbous", 
                   "full", "waning gibbous", "last quarter", "waning crescent"];
    
    // Simple calculation based on date
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Use a simple algorithm to approximate moon phase
    const c = Math.floor((month + 9) / 12);
    const y = year - c;
    const m = month - 12 * c;
    const d = day + (y * 365) + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((m*306 + 5)/10);
    
    // Simplify to get a value between 0-7
    const phaseIndex = Math.floor(((d % 29.5) / 29.5) * 8) % 8;
    
    return phases[phaseIndex];
}

// Get personalized sign-off message based on life path
function getPersonalizedSignOff(name, path, isRefresh = false) {
    const signOffs = {
        1: [
            `Lead with confidence, ${name}. Your path is illuminated today.`,
            `Your independent spirit guides you, ${name}. Trust your inner compass.`,
            `${name}, your pioneering nature opens doorways today. Step boldly through them.`
        ],
        2: [
            `Your sensitivity is your gift, ${name}. The cosmos speaks through your intuition.`,
            `Balance will find you today, ${name}. You are the peacekeeper the world needs.`,
            `${name}, your diplomatic soul shines brightly. The universe honors your harmony.`
        ],
        3: [
            `Creative energy surrounds you, ${name}. Express your truth freely today.`,
            `${name}, your words carry magic today. Speak your vision into reality.`,
            `The universe celebrates your joyful spirit, ${name}. Share your light generously.`
        ],
        4: [
            `Your solid foundation supports great achievements, ${name}. Build with purpose.`,
            `Steady progress leads to lasting success, ${name}. Your dedication is noticed.`,
            `${name}, your practical wisdom provides answers others seek. Trust your method.`
        ],
        5: [
            `Embrace the winds of change, ${name}. Your adaptability is your superpower.`,
            `Adventure calls your name, ${name}. The cosmos rewards your brave heart.`,
            `${name}, your freedom-loving spirit dances with possibilities today. Follow its rhythm.`
        ],
        6: [
            `Your nurturing heart creates harmony, ${name}. The universe mirrors your compassion.`,
            `Beautiful balance flows through your actions, ${name}. Your care for others returns tenfold.`,
            `${name}, your responsible nature builds legacies. The stars honor your service.`
        ],
        7: [
            `Wisdom whispers in quiet moments, ${name}. Listen for deeper truths today.`,
            `Your analytical mind pierces illusions, ${name}. Trust your unique perspective.`,
            `${name}, spiritual insights await in moments of reflection. The cosmos values your depth.`
        ],
        8: [
            `Abundance flows toward your capable hands, ${name}. Direct it with wisdom.`,
            `Your natural authority establishes order, ${name}. The universe respects your strength.`,
            `${name}, your ambitious vision materializes with focused intention. Claim your power.`
        ],
        9: [
            `Your compassionate heart heals the world, ${name}. The universe works through you.`,
            `Completion and new beginnings circle you, ${name}. Embrace this sacred transition.`,
            `${name}, your humanitarian spirit touches many lives. The cosmos amplifies your impact.`
        ]
    };
    
    // Get array of sign-offs for this life path
    const pathSignOffs = signOffs[path] || signOffs[1];
    
    // Return random sign-off from that array with refresh consideration
    if (isRefresh) {
        // Use seconds as seed for variation
        const seconds = new Date().getSeconds();
        return pathSignOffs[seconds % pathSignOffs.length];
    }
    
    return pathSignOffs[Math.floor(Math.random() * pathSignOffs.length)];
}

// Helper function to get time of day recommendation
function getTimeOfDay(isRefresh = false) {
    const times = ["early morning", "mid-morning", "noon", "early afternoon", "late afternoon", "evening", "night"];
    
    if (isRefresh) {
        // Use seconds as seed for variation
        const seconds = new Date().getSeconds();
        return times[seconds % times.length];
    }
    
    return times[Math.floor(Math.random() * times.length)];
}

// Helper function to get lucky number based on life path
function getLuckyNumber(path, isRefresh = false) {
    if (isRefresh) {
        // Create a different but still complementary number
        let base = parseInt(path) || 1;
        let lucky = (base + new Date().getHours()) % 9;
        if (lucky === 0) lucky = 9;
        return lucky;
    }
    
    // Create a number that's complementary to the life path
    let base = parseInt(path) || 1;
    let lucky = (base + 4) % 9;
    if (lucky === 0) lucky = 9;
    return lucky;
}

// Helper function to get lucky color
function getLuckyColor(path, isRefresh = false) {
    const colors = {
        1: ["red", "crimson", "ruby"],
        2: ["blue", "teal", "azure"],
        3: ["yellow", "gold", "amber"],
        4: ["green", "emerald", "jade"],
        5: ["orange", "coral", "tangerine"],
        6: ["indigo", "purple", "lavender"],
        7: ["violet", "amethyst", "magenta"],
        8: ["gold", "bronze", "copper"],
        9: ["silver", "pearl", "platinum"]
    };
    
    const pathColors = colors[path] || colors[1];
    
    if (isRefresh) {
        // Use minutes as seed for variation
        const minutes = new Date().getMinutes();
        return pathColors[minutes % pathColors.length];
    }
    
    return pathColors[0]; // Default to first color if not refreshing
}

// Check for stored data
function checkStoredData() {
    const userData = localStorage.getItem('userData');
    
    if (userData) {
        const { name, birthdate } = JSON.parse(userData);
        
        // Pre-fill the form
        document.getElementById('fullName').value = name;
        document.getElementById('birthdate').value = birthdate;
    }
}

// New Prediction Button
newPredictionBtn.addEventListener('click', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (userData) {
        // Use true flag to indicate this is a refresh and should generate different content
        generatePrediction(userData.name, userData.lifePath, true);
        dailyPrediction.classList.add('bounce');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            dailyPrediction.classList.remove('bounce');
        }, 500);
    }
});

// Share Prediction Button
sharePredictionBtn.addEventListener('click', () => {
    const prediction = dailyPrediction.textContent;
    const lifePathText = `Life Path Number: ${lifePathNumber.textContent}`;
    
    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'My Life Path Prediction',
            text: `${lifePathText}\n\n${prediction}`
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback - copy to clipboard
        const shareText = `${lifePathText}\n\n${prediction}`;
        
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Prediction copied to clipboard!'))
            .catch(err => alert('Could not copy: ' + err));
    }
});

// New Person Button
newPersonBtn.addEventListener('click', () => {
    // Hide result section
    resultSection.classList.add('hidden');
    
    // Show input section with a fade-in effect
    inputSection.classList.remove('hidden');
    inputSection.classList.add('fade-in');
    
    // Clear the form for a fresh start
    document.getElementById('fullName').value = '';
    document.getElementById('birthdate').value = '';
    
    // Remove any stored data to ensure a fresh start
    localStorage.removeItem('userData');
    
    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get personalized birth date message
function getBirthDateMessage(birthdate, path, isRefresh = false) {
    const messages = {
        1: [
            `Born on ${birthdate}, your leadership energy reaches its peak today.`,
            `Your ${birthdate} birth date aligns with powerful cosmic forces today, enhancing your natural authority.`,
            `The stars honor your ${birthdate} birth by amplifying your pioneering spirit today.`
        ],
        2: [
            `Born on ${birthdate}, your intuitive powers are heightened by today's celestial alignment.`,
            `Your ${birthdate} birth date brings harmonious vibrations that enhance your diplomatic abilities today.`,
            `The moon's position today resonates deeply with your ${birthdate} birth, amplifying your sensitivity.`
        ],
        3: [
            `Born on ${birthdate}, your creative channels are wide open under today's expressive sky.`,
            `Your ${birthdate} birth date brings a surge of artistic inspiration through today's planetary alignment.`,
            `The universe celebrates your ${birthdate} birth by magnifying your natural expressiveness today.`
        ],
        4: [
            `Born on ${birthdate}, your practical wisdom is especially valuable under today's grounding influences.`,
            `Your ${birthdate} birth date connects with earth energies today, strengthening your foundation.`,
            `The cosmic structure today perfectly complements your ${birthdate} birth, enhancing your methodical nature.`
        ],
        5: [
            `Born on ${birthdate}, your adventurous spirit is activated by today's dynamic cosmic currents.`,
            `Your ${birthdate} birth date resonates with freedom-seeking energies that are particularly strong today.`,
            `The winds of change honor your ${birthdate} birth, bringing exciting opportunities to your path.`
        ],
        6: [
            `Born on ${birthdate}, your nurturing abilities are magnified by today's heart-centered cosmic flow.`,
            `Your ${birthdate} birth date aligns with harmonious vibrations that enhance your natural caregiving instincts.`,
            `The loving energies of Venus highlight your ${birthdate} birth, making your compassion especially powerful today.`
        ],
        7: [
            `Born on ${birthdate}, your analytical mind is exceptionally sharp under today's contemplative sky.`,
            `Your ${birthdate} birth date connects with mystical forces that deepen your intuitive insights today.`,
            `The cosmos honors your ${birthdate} birth with clarity of vision and enhanced spiritual awareness today.`
        ],
        8: [
            `Born on ${birthdate}, your manifestation powers reach their zenith under today's abundant cosmic flow.`,
            `Your ${birthdate} birth date aligns perfectly with prosperity currents flowing strongly today.`,
            `The universe recognizes your ${birthdate} birth by opening channels of achievement and success for you.`
        ],
        9: [
            `Born on ${birthdate}, your humanitarian spirit is blessed by today's compassionate cosmic energies.`,
            `Your ${birthdate} birth date resonates with universal love that amplifies your natural generosity today.`,
            `The completion energies surrounding your ${birthdate} birth bring profound wisdom to your interactions today.`
        ]
    };
    
    // Get array of messages for this life path
    const pathMessages = messages[path] || messages[1];
    
    // Return random message from that array with refresh consideration
    if (isRefresh) {
        // Use minutes as seed for variation
        const minutes = new Date().getMinutes();
        return pathMessages[minutes % pathMessages.length];
    }
    
    return pathMessages[Math.floor(Math.random() * pathMessages.length)];
}

// Create floating particles in the background
function createBackgroundParticles() {
    const container = document.getElementById('particles-container');
    const numParticles = 50;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        // Random animation duration between 15 and 40 seconds
        const duration = Math.random() * 25 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay so they don't all start at the same time
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
} 