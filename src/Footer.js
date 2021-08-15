import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand>&copy; Best Books</Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
}

export default Footer;
