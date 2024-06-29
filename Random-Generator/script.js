const quotes = [
   "If you can't explain it simply, you don't understand it well enough",
   "What we think we become",
   "Well done is better than well said",
   "A problem is a chance for you to do your best",
   "A person who never made a mistake never tried anything new",
   "When you have a dream, you've got to grab it and never let go",
   "Life is not a problem to be solved, but a reality to be experienced"
]

const quoteHeader = document.querySelector("#header-quote");
const btn = document.querySelector("#generate-btn");

quoteHeader.textContent = `"${quotes[0]}"`;
btn.addEventListener("click", () => {
     const randomQuotes = Math.floor(Math.random() * quotes.length-1 + 1);
     quoteHeader.textContent = `"${quotes[randomQuotes]}"`;
})
