import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
export class BookCard extends Component {
  handleDelete = () => {
    let id= this.props.key;
  }
  render() {
    return (
      <>
        <Card style={{ width: "30rem", margin: "18px auto",backgroundColor: '#555' }}>
          <Card.Body>
            <Card.Title style={{ color: "#FDF5CA" }}>
            Title :{this.props.title}
            </Card.Title>
            <Card.Text style={{ color: "#FFED99" }}>
            Status : {this.props.status}
            </Card.Text>
            <Card.Text style={{ color: "#f0f0f0" }}>
            Description Of book : {this.props.desc}
            </Card.Text>
          </Card.Body>
          <Button onClick={this.handleDelete}>Delete</Button>
        </Card>
      </>
    );
  }
}

export default BookCard;

/*<h5 style={{ color: "#FFD523" }}>Status : {this.props.status}</h5>
<h2 style={{ color: "#FFED99" }}>Title :{this.props.title}</h2>
<h6>Description Of book : {this.props.desc}</h6>*/