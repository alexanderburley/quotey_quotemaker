const quotes = require("./quotes.json");
const Quote = require('./quote');
const quotesArray = Object.keys(quotes).map(i => quotes[i]);
let quoteOfTheDay;
let currTimeoutId;

const generateQuote = async () => {
    let randomQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)]
    quoteOfTheDay = randomQuote;
    currTimeoutId = setTimeout(() => {
        generateQuote();
    }, 1000*60*60*24);
    let quote = new Quote(quoteOfTheDay.quoteText, quoteOfTheDay.quoteAuthor);
    await quote.init();
    return quote;

};

const getQuoteOfTheDay = async () => {
    return quoteOfTheDay
        ? quoteOfTheDay
        : await generateQuote();
}

const freeze = () => {
    if (quoteOfTheDay && currTimeoutId) {
        clearTimeout(currTimeoutId);
        currTimeoutId = null;
    } else {
        throw new Error("quote not running or you have already frozen the quote");
    }
};

module.exports = { getQuoteOfTheDay, freeze };
