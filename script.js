// Array of quotes with dates (newest first)
const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        color: "#d35400",
        date: "2023-01-07"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        color: "#1abc9c",
        date: "2022-11-15"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        color: "#9b59b6",
        date: "2022-09-22"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
        color: "#f39c12",
        date: "2022-05-30"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        color: "#2ecc71",
        date: "2021-12-10"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        color: "#e74c3c",
        date: "2021-08-05"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        color: "#3498db",
        date: "2020-04-28"
    }
];

// Sort quotes by date (newest first)
quotes.sort((a, b) => new Date(b.date) - new Date(a.date));

let currentIndex = 0;

// Function to get next quote in chronological order
function getNextQuote() {
    const quote = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length; // Cycle back to start when reaching end
    return quote;
}

// Function to update colors
function updateColors(color) {
    document.body.style.backgroundColor = color;
    document.getElementById('text').style.color = color;
    document.getElementById('author').style.color = color;
    document.getElementById('new-quote').style.backgroundColor = color;
    document.getElementById('tweet-quote').style.backgroundColor = color;
}

// Function to update the quote display
function updateQuote() {
    const quote = getNextQuote();
    document.getElementById('text').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `- ${quote.author}`;
    
    // Update tweet link
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    document.getElementById('tweet-quote').setAttribute(
        'href', 
        `https://twitter.com/intent/tweet?text=${tweetText}`
    );
    
    // Update colors
    updateColors(quote.color);
}

// Event listener for new quote button
document.getElementById('new-quote').addEventListener('click', updateQuote);

// Initialize with the first quote on page load
window.addEventListener('DOMContentLoaded', updateQuote);