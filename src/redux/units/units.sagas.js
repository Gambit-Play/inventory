import { takeLatest, put, all, call } from 'redux-saga/effects';

// Utils
import { convertArrayToObject } from '../../utils/global.utils';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Action Types
import UnitsActionTypes from './units.types';

// Action
import { fetchUnitsSuccess, fetchUnitsFailure } from './units.actions';
import { fetchItemsCollectionStart } from '../items/items.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchUnitsStart() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.UNITS);
		const snapshot = yield collectionRef.get();
		const units = yield snapshot.docs.map(doc => doc.data());
		const newUnits = yield call(convertArrayToObject, units, 'id');

		yield put(fetchUnitsSuccess(newUnits));
		yield put(fetchItemsCollectionStart());
	} catch (error) {
		console.log(error);
		yield put(fetchUnitsFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchUnitsStart() {
	yield takeLatest(UnitsActionTypes.FETCH_UNITS_START, fetchUnitsStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* unitsSagas() {
	yield all([call(onFetchUnitsStart)]);
}
