import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// redux function to make sure action flows through all reducers
import { bindActionCreators } from 'redux';

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

// passing redux an object w/a key and a value, value is from action creator imported at the top of the file
// second argument after the object is "dispatch" function
// anything returned from action container function will end up as props in the BookList container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all reducers in the application by way of BindActionCreators
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect is the glue between React and Redux
// mapDispatchToProps promotes BookList from a component to a container, makes new dispatch method "SelectBook" available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);