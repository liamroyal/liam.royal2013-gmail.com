import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from'./data.json';

import { Container, ListGroup, ProgressBar } from 'react-bootstrap';

 class App extends Component {

  constructor() {
    super();

    //holds list of books
    this.state = {
      books: data
    };

    this.books = data;

    //store JSON book data in state (replace with firebase fetch eventually)
    this.componentDidMount = () => {

    }

  }

  render () {
    return (

      <div>
        <h1>Lyzz's Book Tracker</h1>
        <Container >
          <ListGroup>
          {
            this.state.books.map((book, i) => {
              return (
                <ListGroup.Item key={i}>
                  {book.title} 
                  <p><cite class="blockquote g-sm">started reading: </cite>{book.startDate}</p>
                  <footer class="blockquote-footer"><cite title="Source Title">{book.author}</cite></footer>
                  <ProgressBar 
                    label={`${((book.currentPage/book.totalPages)*100).toFixed(1)}%`}
                    now={book.currentPage} 
                    max={book.totalPages}>
                  </ProgressBar>
                </ListGroup.Item>
              )
            })
          }
          </ListGroup>
        </Container>
      </div>

    );
  }

}

export default App;
