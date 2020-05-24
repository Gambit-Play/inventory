import { takeLatest, put, all, call } from 'redux-saga/effects';

// Utils
import { convertArrayToObject } from '../../utils/global.utils';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Action Types
import CategoriesActionTypes from './categories.types';

// Action
import {
	fetchCategoriesSuccess,
	fetchCategoriesFailure,
} from './categories.actions';
import { setFilteredCategoriesStart } from '../handlers/categories-table/categories-table.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchCategoriesStart() {
	try {
		const collectionRef = yield call(
			getCollection,
			COLLECTION_IDS.CATEGORIES
		);
		const snapshot = yield collectionRef.get();
		const categories = yield snapshot.docs.map(doc => doc.data());

		yield put(fetchCategoriesSuccess(categories));
		yield put(setFilteredCategoriesStart());
	} catch (error) {
		console.log(error);
		yield put(fetchCategoriesFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchCategoriesStart() {
	yield takeLatest(
		CategoriesActionTypes.FETCH_CATEGORIES_START,
		fetchCategoriesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* categoriesSagas() {
	yield all([call(onFetchCategoriesStart)]);
}
