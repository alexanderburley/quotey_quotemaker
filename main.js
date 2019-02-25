
const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const quoteOfTheDay = require('./lib/quoteBuilder.js').getQuoteOfTheDay();
app.get('/', (req, res) => {
  quoteOfTheDay.then((quote) => {
    res.send(`${quote.text} - ${quote.author} - ${quote.lifespan}`)
  })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));