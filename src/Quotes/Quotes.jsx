import { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]); // Since map works only with arrays, we hae to make sure we add here an empty array.

  // Should only happen once but as it is, will loop it without stopping
  useEffect(() => {
    // UseEffect takes two arguments: the first is 'what yo want to happen i.e. fetch request. The second one is the array
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []); // The empty array tells the program 'show it only once, when we load the page'

  return (
    <>
      {quotes.map((quote) => (
        <div>
          <span>
            {quote.quote} - {quote.author}
          </span>
        </div>
      ))}
    </>
  );
}

export default Quotes;
