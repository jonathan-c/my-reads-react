import React, { Component } from 'react';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
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
			<ListBooks books={this.state.books}/>
		);
	}
}

export default Search;