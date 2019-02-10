const quotes = require("./quotes.json");
const quotesArray = Object.keys(quotes).map(i => quotes[i]);
let quoteOfTheDay;
let currTimeoutId;

const generateQuote = () => {
    let randomQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)]
    quoteOfTheDay = randomQuote;
    currTimeoutId = setTimeout(() => {
        generateQuote();
    }, 1000*60*60*24);
    return randomQuote;
};

const getQuoteOfTheDay = () => {
    return quoteOfTheDay
        ? quoteOfTheDay
        : generateQuote();
}

const freeze = (() => {
    if (quoteOfTheDay && currTimeoutId) {
        clearTimeout(currTimeoutId);
        currTimeoutId = null;
    } else {
        throw new Error("quote not running or you have already frozen the quote");
    }
});

module.exports = { getQuoteOfTheDay, freeze };

