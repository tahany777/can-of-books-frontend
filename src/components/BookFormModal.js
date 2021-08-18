import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
export class BookFormModal extends Component {
  addBook = async(e) => {
    e.preventDefault();
    const bookFormData = {
    email: this.props.email,
    title: e.target.title.value,
    status : e.target.status.value,
    description : e.target.description.value,
    }
    let bookData = await axios.post(`${this.props.server}/books`,bookFormData);
    console.log(bookData);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.addBook}>
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

export default BookFormModal;
