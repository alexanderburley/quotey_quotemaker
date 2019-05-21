import React, { Component } from 'react';
import Quote from './Quote'
import PageFooter from './Footer'
class App extends Component {
  
  render() {
    document.body.style.backgroundColor = "black";
    return <div class="QuoteOfTheDay"><Quote /><PageFooter/></div>
  }
}

export default App;
