import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>My Favorite Books</Card.Title>
        <Card.Text>
        This is a collection of my favorite books
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}

export default MyFavoriteBooks;
