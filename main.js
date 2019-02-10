

const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const quoteOfTheDay = require('./lib/quote.js').getQuoteOfTheDay();
app.get('/', (req, res) => res.send(`${quoteOfTheDay.quoteText} - ${quoteOfTheDay.quoteAuthor}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));