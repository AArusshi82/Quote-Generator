const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch and display a new quote
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        console.log(response);  // Log the response to check for issues

        // Check if the response status is OK (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);  // Log the data to ensure it's being fetched correctly

        // Update the DOM with the fetched quote and author
        quoteText.innerText = `"${data.content}"`;
        authorText.innerText = `- ${data.author}`;
    } catch (error) {
        quoteText.innerText = "Oops! Something went wrong.";
        authorText.innerText = "";
        console.error("Error fetching quote:", error);
    }
}

// Add event listener to button
newQuoteBtn.addEventListener('click', fetchQuote);

// Fetch the first quote when the page loads
fetchQuote();
