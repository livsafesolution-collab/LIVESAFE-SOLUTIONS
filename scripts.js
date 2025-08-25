// Example JavaScript code for functionality

// Function to display a random quote (if needed)
function displayRandomQuote() {
    const quotes = [
        "Welcome and thank you for visiting our Authorised Service Centre",
        "Your satisfaction is our priority!",
        "Quality service you can trust.",
        "We are here to help you with your chimney needs."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').innerText = quotes[randomIndex];
}

// Call the function to display a random quote on page load
window.onload = function() {
    displayRandomQuote();
};

// Add any additional JavaScript functionality here
