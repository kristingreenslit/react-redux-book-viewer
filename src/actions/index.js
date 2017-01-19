// selectBook is an action creator
// action creators need to return an object with a type property, 
// and sometimes a payload - more info about the action that was just taken
export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}