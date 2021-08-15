import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, Container, Nav } from 'react-bootstrap';
class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">My Favorite Books</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
