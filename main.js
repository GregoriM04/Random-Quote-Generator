const quote = document.querySelector(".quote-message");
const author = document.querySelector(".author");
const loader = document.querySelector(".quote-picture");

// Get a new quote
async function fetchQuotes() {
  try {
    const response = await fetch(
      "https://www.stands4.com/services/v2/quotes.php?uid=12572&tokenid=Swsp3oFgp9C2kIMC&searchtype=RANDOM&format=json"
    );

    loader.classList.add("blink");

    if (!response.ok) {
      throw new Error("Ops! Something went wrong with the fetch");
    }

    const data = await response.json();
    const newQuote = data.result.quote;
    const newAuthor = data.result.author;

    setTimeout(() => {
      loader.classList.remove("blink");
      quote.innerHTML = newQuote;
      author.innerHTML = newAuthor;
    }, 4000);
  } catch (error) {
    console.log(error);
  }
}
