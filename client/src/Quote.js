import React from 'react';
import Container from 'react-bootstrap/Container';
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

  renderText(quote) {
    return <Text text={quote.text} author={quote.author} lifespan={quote.lifespan}/>;
  }

  render() {
    const { error, isLoaded, quote } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <div>
            <div className="quote">
              {this.renderText(quote)}
            </div>
          </div>
        </Container>
      );
    }
  }
}

export default Quote;