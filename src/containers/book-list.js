import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
	});
}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}
// takes application state in as an object - provides link between Redux and React
// whatever object is returned will show up as props within BookList
function mapStateToProps(state) {
	// if application state changes, container (BookList) will re-render
	return {
		books: state.books
	};
}

// connect is the glue between React and Redux
export default connect(mapStateToProps)(BookList);