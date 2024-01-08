const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning Roopesh");
    } else if (hr == 12) {
        speak("Good noon Roopesh");
    } else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon Roopesh");
    } else {
        speak("Good Evening Roopesh");
    }
}

window.addEventListener('load', () => {
    speak("Activating Phoenix just a minute sir");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Roopesh";
        speech.text = finalText;
    } else if (message.includes('how are you')) {
        const finalText = "I am fine Roopesh tell me how can i help you";
        speech.text = finalText;
    } else if (message.includes('name')) {
        const finalText = "My name is phoenix";
        speech.text = finalText;
    } else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    } else if (message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;

    } else if (message.includes('play kala chashma')) {
        window.open("https://www.youtube.com/watch?v=k4yXQkG2s1E", "_blank");
        const finalText = "playing kala chashma ";
        speech.text = finalText;

    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speech.text = finalText;
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speech.text = finalText;
    } else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;

    } else if (message.includes('my mode')) {
        setTimeout(function() {
            window.open("https://leetcode.com/problemset/", "_blank");
        }, 1000); // Delay in milliseconds

        setTimeout(function() {
            window.open("https://www.youtube.com/", "_blank");
        }, 2000);

        setTimeout(function() {
            window.open("https://chat.openai.com/", "_blank");
        }, 3000);

        setTimeout(function() {
            window.open("https://web.whatsapp.com/", "_blank");
        }, 4000);

        const finalText = "Opening my mode     all the best for your coding";
        speech.text = finalText;
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }



    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
