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
        <Route exact path="/" render={() => (
          <div>
            <Link to="/search">Search</Link>
            <BookShelf books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} />
            <BookShelf books={this.state.books.filter((book) => book.shelf === 'wantToRead')} />
            <BookShelf books={this.state.books.filter((book) => book.shelf === 'read')} />
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
