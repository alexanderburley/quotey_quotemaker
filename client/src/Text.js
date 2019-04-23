import React, { Component } from 'react';
class Text extends React.Component {
  render() {
    return (
      <h1 className="quoteText">
        {this.props.text}
      </h1>
    );
  }
}

export default Text;