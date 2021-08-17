import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel } from 'react-bootstrap';
import './BestBooks.css';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
    }
  }
  componentDidMount = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/books?email=tahany.ali9995@gmail.com`;
      axios.get(url).then(res => {
        this.setState({
          books: res.data.books,
        })
      });
      console.log(this.state.books)
    } catch(err) {
      console.log(err)
    }
  }
  render() {
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>My Favorite Books</Card.Title>
        <Card.Text>
        This is a collection of my favorite books
        <Carousel>
        <Carousel.Caption>
        {this.state.books && <>
        {this.state.books.map(el => {
            return <li>{el.name}</li>
        })
        }</>}
        </Carousel.Caption>
        </Carousel>
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}

export default MyFavoriteBooks;


/*<Carousel activeIndex={0}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    */
