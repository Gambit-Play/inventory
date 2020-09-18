import TutorialsActionTypes from './tutorials.types';

const INITIAL_STATE = {
	type: 'INVENTORY',
};

const tutorialsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case TutorialsActionTypes.SET_TUTORRIAL_TYPE:
			return {
				...state,
				type: action.payload,
			};
		default:
			return state;
	}
};

export default tutorialsReducer;
