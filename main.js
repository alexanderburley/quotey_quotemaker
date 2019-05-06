/* eslint-disable no-undef */

const port = process.env.PORT || 3001
const path = require('path');
const express = require('express')
const app = express()
const quoteOfTheDay = require('./lib/quoteBuilder.js').getQuoteOfTheDay();

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/quote', (req, res) => {
  quoteOfTheDay.then(quote => res.send(quote));
})

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));