import React, { Component } from 'react';
import BookControl from './BookControl';
import * as BooksAPI from './BooksAPI';

class Book extends Component {

	state = {
		shelf: this.props.book.shelf
	}

	changeShelf(shelf) {
		this.setState({ shelf })
		BooksAPI.update(this.props.book, shelf)
	}

	render() {
		const { book } = this.props
		return (
			<div key={book.id} className="shelved-book">
				<div className="book-thumbnail-img">
					<img src={book.imageLinks.smallThumbnail} alt="book-cover" />
				</div>
				<h3>{book.title}</h3>
				<h4>{book.authors}</h4>
				<BookControl book={book} onChangeShelf={(shelf) => {this.changeShelf(shelf)}}/>
			</div>
		);
	}
}

export default Book;