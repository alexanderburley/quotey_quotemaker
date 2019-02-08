const quotes = require("./quotes.json");
const quotesArray = Object.keys(quotes).map(i => quotes[i]);
// setTimeout(() => {
// }, 1000*60*60*24);

const generateQuote = () => {
    console.log(quotesArray[Math.floor(Math.random()*quotesArray.length)]);
    setTimeout(() => {
        generateQuote();
    }, 1000*5);
};

generateQuote();