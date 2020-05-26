import TablesActionTypes from './tables.types';

const INITIAL_STATE = {
	currentTables: null,
	isFetching: false,
	errorMessage: '',
};

const tablesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case TablesActionTypes.FETCH_TABLES_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Update                                                  */
		/* ================================================================ */
		case TablesActionTypes.FETCH_TABLES_COLLECTIONS_UPDATE:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case TablesActionTypes.FETCH_TABLES_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentTables: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case TablesActionTypes.FETCH_TABLES_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Clear Tables                                                    */
		/* ================================================================ */
		case TablesActionTypes.CLEAR_TABLES_COLLECTIONS:
			return {
				...state,
				currentTables: [],
				isFetching: false,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default tablesReducer;
