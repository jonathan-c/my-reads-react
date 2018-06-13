import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

	render() {
		const books = this.props.books
		return (
			<div className="bookshelf">
				{books.map((book) => (
					<div className="shelved-book" key={book.id}>
						<Book book={book}/>
					</div>
				))}
			</div>
		);
	}
}

export default BookShelf;