// state argument is not application state, but the state this reducer is responsible for
// return state is for when the reducer doesn't care about the action it receives
// state = null is ES6 syntax for what should happen on initial page load:
// if state argument is undefined, set state to null
export default function(state = null, action) {
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state;
}