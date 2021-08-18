import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel } from "react-bootstrap";
import "./BestBooks.css";
import BookCard from "./components/BookCard";
import img from "./assets/black.jpg";
import axios from "axios";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books?email=tahany.ali9995@gmail.com`;
    try {
      axios.get(url).then((res) => this.setState({ books: res.data.books }));
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "34rem", width: "100%" }}
              src={img}
              alt="First slide"
            />
            <Carousel.Caption>
              <Card style={{ width: "30rem", margin: "18px auto" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    My Favorite Books
                  </Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    This is a collection of my favorite books
                  </Card.Text>
                </Card.Body>
              </Card>
              {this.state.books && (
                <>
                  {this.state.books.map((el) => (
                    <BookCard
                      title={el.title}
                      desc={el.description}
                      status={el.status}
                      key={el.title}
                    />
                  ))}
                </>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default BestBooks;

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
