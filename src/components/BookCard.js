import React, { Component } from 'react';

export class BookCard extends Component {
  render() {
    return (
      <>
        <h5 style={{color: '#FFD523'}}>Status : {this.props.status}</h5>
          <h2 style={{color: '#FFED99'}}>Title :{this.props.title}</h2>
          <h6>Description Of book : {this.props.desc}</h6>
      </>
    )
  }
}

export default BookCard
