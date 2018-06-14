import React, { Component } from 'react';
import BookControl from './BookControl';

class Book extends Component {
	render() {
		const { book } = this.props
		return (
			<div key={book.id} className="shelved-book">
				<div className="book-thumbnail-img">
					<img src={book.imageLinks.smallThumbnail} alt="book-cover" />
				</div>
				<h3>{book.title}</h3>
				<h4>{book.authors}</h4>
				<BookControl book={book} />
			</div>
		);
	}
}

export default Book;