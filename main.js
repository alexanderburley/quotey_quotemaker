const quotes = require("./quotes.json");
const quotesArray = Object.keys(quotes).map(i => quotes[i]);
const generateQuote = () => {
    let randomQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)]
    quoteOfTheDay = randomQuote;
    console.log(randomQuote);
    setTimeout(() => {
        generateQuote();
    }, 1000*60*60*24);
};

generateQuote();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`${quoteOfTheDay.quoteText} - ${quoteOfTheDay.quoteAuthor}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));