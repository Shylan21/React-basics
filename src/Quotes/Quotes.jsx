import { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]); // Since map works only with arrays, we hae to make sure we add here an empty array.

  // Should only happen once but without the [] as second argument, it will loop it without stopping
  useEffect(() => {
    // UseEffect takes two arguments: the first is 'what yo want to happen, or in other words, the funcition to run. In our case the fetch request.
    // By default, an effect will run after every render, but we can control this by adding its second argument: an array of dependencies
    // Which is the array of dependencies.
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []); // The empty array tells the program to run the code just once and 'show it only once, when we load the page'.

  return (
    <>
      {quotes.map((quote) => (
        <div>
          <span>
            {quote.quote} - {quote.author}
          </span>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default Quotes;
