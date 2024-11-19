function askQuestion() {
    const question = document.getElementById('question').value.trim();
    const responseText = document.getElementById('response-text');
    const coin = document.querySelector('.coin');

    if (question === "") {
        responseText.innerText = "Please ask a question.";
        return;
    }

    responseText.innerText = "The spirits are thinking...";

const audioElement = document.getElementById("audio");

audioElement.addEventListener('canplaythrough', function() {
  
    const fallbackMessage = document.querySelector('audio').textContent;
    if (fallbackMessage) {
        
        const fallbackText = document.querySelector('audio').nextElementSibling;
        if (fallbackText) fallbackText.style.display = 'none';
    }
});

    let steps = 20;
    let currentStep = 0;
    let interval = setInterval(() => {
        const randomTop = Math.floor(Math.random() * 400) - 100;
        const randomLeft = Math.floor(Math.random() * 400) - 100;

        coin.style.top = randomTop + 'px';
        coin.style.left = randomLeft + 'px';
        coin.style.left = randomLeft + 'px';

        currentStep++;
        if (currentStep >= steps) {
            clearInterval(interval);
            generateResponse(question);
        }
    }, 200);
}

function generateResponse(question) {
    const responseText = document.getElementById('response-text');

    const responses = [
        "Yes, it is certain.",
        "No, it is not meant to be.",
        "The spirits are unclear.",
        "Ask again later...",
        "Ippo Parayan mood illa",
        "Ayin nee araa",
        "Nalla Question ,Adutha question",
        "You already know the answer.",
        "Perhaps, but not now.",
        "The future is uncertain.",
        "Focus and ask again.",
        "That's none of your business."
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    responseText.innerText = response;
}
