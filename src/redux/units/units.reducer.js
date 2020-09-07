import UnitsActionTypes from './units.types';

const INITIAL_STATE = {
	currentUnits: null,
	errorMessage: '',
};

const unitsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case UnitsActionTypes.FETCH_UNITS_SUCCESS:
			return {
				...state,
				currentUnits: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case UnitsActionTypes.FETCH_UNITS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case UnitsActionTypes.CLEAR_UNITS_COLLECTIONS:
			return {
				...state,
				currentUnits: null,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default unitsReducer;
