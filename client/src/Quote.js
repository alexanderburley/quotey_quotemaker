import React, { Component } from 'react';
import Text from './Text';
class Quote extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quote: {}
    };
  }

  componentDidMount() {
    fetch("/quote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quote: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderText(text) {
    return <Text text={text} />;
  }

  render() {
    const { error, isLoaded, quote } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="quote">
            {this.renderText(quote.text)}
          </div>
        </div>
      );
    }
  }
}

export default Quote;