import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookControl extends Component {
	state = {
		selection: this.props.book.shelf
	}
	handleSelectionChanged = (e) => {
		BooksAPI.update(this.props.book, e.target.value)
		this.setState({selection: e.target.value})
	}

	render() {
		return (
			<div>
				<select name="shelf" value={this.props.book.shelf} onChange={this.handleSelectionChanged}>
					<option defaultValue disabled>Move to...</option>
					<option value="currentlyReading">Currently reading</option>
					<option value="wantToRead">Want to read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

export default BookControl;