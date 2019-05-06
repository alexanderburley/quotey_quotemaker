import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Text extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className = "Text">
          <div className="quoteText"><h3>{this.props.text}</h3></div>
          <div className="quoteAuthor"><i>{this.props.author}</i></div>
          <div className="quoteAuthorLifespan"><b>{this.props.lifespan}</b></div>
        </div>
      </Jumbotron>
    );
  }
}

export default Text;