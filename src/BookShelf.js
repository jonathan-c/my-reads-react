import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

	render() {
		const { books, type, alternate } = this.props
		return (
			<div className={"bookshelf "+"book-shelf-"+alternate}>
				<h2>{type}</h2>
				<hr/>
				{books.map((book) => (
					<Book book={book} key={book.id}/>
				))}
			</div>
		);
	}
}

export default BookShelf;