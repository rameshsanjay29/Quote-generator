const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote:"Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it .",
        author: "Henry David Thoreau"
    },
    {
        quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "Success is how high you bounce when you hit bottom.",
        author: "George S. Patton"
    },
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = `"${quotes[randomIndex].quote}"`;
    document.getElementById('author').textContent = `- ${quotes[randomIndex].author}`;
}

document.getElementById('new-quote').addEventListener('click', newQuote);

// Initialize with a quote
newQuote();
