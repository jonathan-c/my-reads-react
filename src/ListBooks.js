import React, { Component } from 'react';
import Book from './Book';
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp';

class ListBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	resetQuery = () => {
		this.setState({
			query: ''
		})
	}

	render() {
		let showingBooks
		const { books } = this.props
		const { query } = this.state

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingBooks = books.filter((book) => match.test(book.title))
		} else {
			showingBooks = books
		}

		showingBooks.sort(sortBy('title'))

		return (
			<div className="list-books">
				<input 
					className="search-books"
					type="text"
					placeholder="Search books"
					value={query}
					onChange={(event) => this.updateQuery(event.target.value)}
				/>
				{showingBooks.length !== books.length && (
					<div className="showing-books">
						<span>Now showing {showingBooks.length} books of {books.length} total.</span>
						<button onClick={() => this.resetQuery()}>Show all</button>
					</div>
				)}

				<ol className="book-list">
					{showingBooks.map((book) => (
						<li key={book.id} className="book-list-item">
							<Book book={book} />
						</li>
					))}
				</ol>
			</div>
		);
	}
}

export default ListBooks;