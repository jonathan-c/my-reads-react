import React, { Component } from 'react';

class BookControl extends Component {
	
	handleSelectionChanged = (e) => {
		this.props.onChangeShelf(e.target.value)
	}

	render() {
		const { book } = this.props
		return (
			<div>
				<select name="shelf" value={book.shelf} onChange={this.handleSelectionChanged}>
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