import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="App">
        <div class="header">
            <h1>MyReads</h1>
        </div>
        <Route exact path="/" render={() => (
          <div className="bookshelves">
            <Link className="search-button" to="/search">Search</Link>
            <BookShelf 
              type="Currently Reading" 
              alternate="odd" 
              books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} 
            />
            <BookShelf 
              type="Want to Read" 
              alternate="even" 
              books={this.state.books.filter((book) => book.shelf === 'wantToRead')} 
            />
            <BookShelf 
              type="Read" 
              alternate="odd" 
              books={this.state.books.filter((book) => book.shelf === 'read')} 
            />
          </div>
        )} />
        <Route path="/search" render={() => (
          <Search />
        )}/>
      </div>
    );
  }
}

export default App;
