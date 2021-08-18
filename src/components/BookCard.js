import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Form } from 'react-bootstrap';
export class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: true,
      showForm: false
    }
  }
  handleDelete = () => {
    
  }
  handleUpdate = (e) => {
    e.preventDefault();
    let index = this.props.index1;
    console.log(index);
    const bookForm = {
    title: e.target.title.value,
    status : e.target.status.value,
    description : e.target.description.value,
    }
    axios.put(`${this.props.server}/books/${index}`, bookForm);
  }
  render() {
    return (
      <div>
      <Card show={this.state.showCard} style={{ width: "30rem", margin: "18px auto",backgroundColor: '#555' }}>
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
          <div>
          <Button style={{ backgroundColor: "#FFED99", width: '50%', color: 'black', border: 'none'}} onClick={this.handleDelete}>Delete</Button>
          <Button style={{ backgroundColor: "#FFED99", width: '50%', color: 'black', border: 'none'}} onClick={this.handleUpdate} >Update</Button>
          </div>
        </Card>
      <Form onSubmit={this.addBook} show={this.state.showForm}>
          <Form.Group className="mb-3">
            <Form.Control name="title" type="text" placeholder="Add The Book Title" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control name="status" type="text" placeholder="Add The Book Status" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control name="description" type="text" placeholder="Add The Book Description"required />
          </Form.Group>
          <Button style={{backgroundColor: '#FFED99', color: '#333', border: 'none'}} type="submit">
            Add Book
          </Button>
        </Form>
      </div>
    );
  }
}

export default BookCard;
