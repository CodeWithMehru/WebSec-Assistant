const btn = document.querySelector('.talk');
const sendBtn = document.querySelector('.send');
const textInput = document.querySelector('#textInput');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    function setVoice() {
        const voices = window.speechSynthesis.getVoices();
        text_speak.voice = voices.find(voice => voice.default) || voices[0];
        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;
        window.speechSynthesis.speak(text_speak);
    }

    if (window.speechSynthesis.getVoices().length > 0) {
        setVoice();
    } else {
        window.speechSynthesis.onvoiceschanged = setVoice;
    }
}

function wishMe(boss) {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak(`Good Morning ${boss}...`);
    } else if (hour >= 12 && hour < 17) {
        speak(`Good Afternoon ${boss}...`);
    } else {
        speak(`Good Evening ${boss}...`);
    }
}

window.addEventListener('load', () => {
    window.speechSynthesis.onvoiceschanged = () => {
        speak("Initializing WEBSEC AI");
        const userName = prompt("What should I call you?", "Sir") || "Sir";
        wishMe(userName);
    };
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const transcript = event.results[event.resultIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

// Voice input button event
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

// Handle text input when send button is clicked
sendBtn.addEventListener('click', () => {
    const userInput = textInput.value.trim();
    if (userInput) {
        takeCommand(userInput.toLowerCase());
        textInput.value = ""; // Clear input after sending
    }
});

// Handle Enter key for text input
textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendBtn.click();
    }
});

function takeCommand(message) {
    content.textContent = message; // Display message

    if (message.includes('who is your creator')) {
        speak("My creator is Code with Mehru, also known as Mehraan");

    } else if (message.includes('who are you')) {
        speak("I am WEBSEC AI, your personal assistant.");

    } else if (message.includes("what's your name") || message.includes("what is your name")) {
        speak("My name is WEBSEC AI.");

    } else if (message.includes("open my portfolio") || message.includes("open my website")) {
        speak("Sure, opening your portfolio website now.");
        window.open("https://codewithmehru.netlify.app", "_blank");

    } else if (message.includes('who is code with mehru') || message.includes('who is Mehraan')) {
        speak("Code with Mehru, also known as Mehraan, is a skilled professional who is a Full-Stack Developer and Ethical Hacker.");
    
    } else if (message.includes('certifications')) {
        speak("My creator, Code with Mehru, holds certifications in Full-Stack Development, Ethical Hacking, C I S S P, Cloud Security, and more.");        

    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("This is what I found on the internet regarding " + message);

    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        speak("This is what I found on Wikipedia regarding " + message);

    } else if (message.includes('good morning')) {
        speak("Good Morning Boss...");
    } else if (message.includes('good evening')) {
        speak("Good Evening Boss...");
    } else if (message.includes('good afternoon')) {
        speak("Good Afternoon Boss...");
    } else if (message.includes('hello')) {
        speak("Hello Boss, How May I Assist You?");

    } else if (message.includes("open spotify")) {
        window.open("spotify:", "_self");
        speak("Opening Spotify App...");        
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open my favorite song")) {
        window.open("https://youtu.be/sZrTJesvJeo?si=3dHxyVrkcvkn0C3M", "_blank");
        speak("Opening your favorite song...");
    } else if (message.includes("open chatgpt")) {
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening ChatGPT...");
    } else if (message.includes("open zoom")) {
        window.open("zoommtg://zoom.us", "_self");
        speak("Opening Zoom Workplace App..."); 
    } else if (message.includes("open telegram")) {
        window.open("tg:", "_self");
        speak("Opening Telegram App...");          
    } else if (message.includes('time')) {
        const time = new Date().toLocaleTimeString();
        speak("The current time is " + time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleDateString();
        speak("Today's date is " + date);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        speak("Opening Calculator");

    } else if (message.includes("what is your company") || message.includes("which company do you belong to")) {
        speak("Our company is WEBSEC AI.");

    } else if (message.includes("who is the ceo of WEBSEC AI")) {
        speak("Code with Mehru is the Founder and CEO of WEBSEC Ai.");

    } else if (message.includes("what does websec ai do")) {
        speak("WEBSEC AI is a web development company that specializes in creating secure and AI-powered websites.");

    } else if (message.includes("what services does websec ai provide")) {
        speak("WEBSEC AI provides services like Full-Stack Web Development, AI-Powered Websites, Cybersecurity Solutions, and Cloud-Based Web Applications.");

    } else if (message.includes("is websec ai a cybersecurity company")) {
        speak("Yes, security is one of our top priorities. WEBSEC AI integrates advanced cybersecurity measures into websites to ensure data protection and safety from cyber threats.");

    } else if (message.includes("who founded websec ai")) {
        speak("WEBSEC AI was founded by Code with Mehru, also known as Mehran, a Full-Stack Developer and Ethical Hacker.");

    } else if (message.includes("where is websec ai located")) {
        speak("WEBSEC AI operates globally and provides web development and security services to clients worldwide.");

    } else if (message.includes("does websec ai use ai")) {
        speak("Yes! WEBSEC AI integrates artificial intelligence into websites to enhance security, automate tasks, and improve user experience.");

    } else if (message.includes("can i hire websec ai")) {
        speak("Yes, you can hire WEBSEC AI for your project. You can contact us through our website or reach out to Code with Mehru directly.");

    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("I found some information for " + message + " on Google.");
    }
}
