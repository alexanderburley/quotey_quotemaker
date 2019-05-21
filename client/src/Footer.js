import Container from 'react-bootstrap/Container';
import React from 'react';

class PageFooter extends React.Component {
  render() {
    return (
      <footer class="footer">
        <Container>
          <span class="text-muted">© Alex Burley - <a href="https://github.com/alexanderburley/quotey_quotemaker">Quotey Quotemaker</a></span>
        </Container>
      </footer>
    );
  }
}

export default PageFooter;