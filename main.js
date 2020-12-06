/* eslint-disable no-undef */

const port = process.env.PORT || 3001;
const express = require("express");
const app = express();
const quoteOfTheDay = require("./lib/quoteBuilder.js").getQuoteOfTheDay();

app.get("/quote", (req, res) => {
  quoteOfTheDay.then((quote) => res.send(quote));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
