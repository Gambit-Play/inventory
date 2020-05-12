import UnitsActionTypes from './units.types';

const INITIAL_STATE = {
	units: null,
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
				units: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case UnitsActionTypes.FETCH_UNITS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default unitsReducer;
