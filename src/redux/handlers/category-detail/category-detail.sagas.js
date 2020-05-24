import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import {
	updateDocument,
	createCollectionAndDocument,
	deleteDocuments,
} from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Action Types
import CategoryDetailActionTypes from './category-detail.types';

// Actions
import { removeSelectedCategories } from '../categories-table/categories-table.actions';
import {
	fetchCategorySuccess,
	fetchCategoryFailure,
	updateCategorySuccess,
	updateCategoryFailure,
	createCategorySuccess,
	createCategoryFailure,
	deleteCategorySuccess,
	deleteCategoryFailure,
} from './category-detail.actions';

// Selectors
import { selectSingleCategory } from '../../categories/categories.selectors';
import { selectCategory } from './category-detail.selectors';
import { selectSelected } from '../categories-table/categories-table.selectors';
import { selectCurrentUser } from '../../users/users.selectors';

/* ================================================================ */
/*  Reusable Actions                                                */
/* ================================================================ */

export function* deleteDocumentsFromCollection(deleteCategories) {
	try {
		yield call(
			deleteDocuments,
			COLLECTION_IDS.CATEGORIES,
			deleteCategories
		);
		yield put(deleteCategorySuccess());
	} catch (error) {
		console.log(error);
		yield put(deleteCategoryFailure());
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchCategoryStart({ payload: categoryId }) {
	try {
		const category = yield select(selectSingleCategory(categoryId));
		yield put(fetchCategorySuccess(category));
	} catch (error) {
		console.log(error);
		yield put(fetchCategoryFailure(error));
	}
}

export function* updateCategoryStart() {
	try {
		const category = yield select(selectCategory);
		const currentUser = yield select(selectCurrentUser);
		const updatedCategory = {
			id: category.id,
			name: category.name,
			createdAt: category.createdAt,
			createdById: category.createdById,
			updatedAt: new Date().toISOString(),
			updatedById: currentUser.id,
		};

		yield call(
			updateDocument,
			COLLECTION_IDS.CATEGORIES,
			category.id,
			updatedCategory
		);
		yield put(updateCategorySuccess());
	} catch (error) {
		console.log(error);
		yield put(updateCategoryFailure());
	}
}

export function* createCategoryStart() {
	try {
		const category = yield select(selectCategory);
		const currentUser = yield select(selectCurrentUser);
		const newCategory = [
			{
				name: category.name,
				createdAt: new Date().toISOString(),
				createdById: currentUser.id,
				updatedAt: '',
				updatedById: '',
			},
		];

		yield call(
			createCollectionAndDocument,
			COLLECTION_IDS.CATEGORIES,
			newCategory
		);
		yield put(createCategorySuccess());
	} catch (error) {
		console.log(error);
		yield put(createCategoryFailure(error));
	}
}

export function* deleteCategoryStart() {
	try {
		const category = yield select(selectCategory);
		const deleteCategory = [category.id];
		yield deleteDocumentsFromCollection(deleteCategory);
	} catch (error) {
		console.log(error);
		yield put(deleteCategoryFailure());
	}
}

export function* deleteMultipleCategoriesStart() {
	try {
		const selected = yield select(selectSelected);

		yield deleteDocumentsFromCollection(selected);
		yield put(removeSelectedCategories());
	} catch (error) {
		console.log(error);
		yield put(deleteCategoryFailure());
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchCategoryStart() {
	yield takeLatest(
		CategoryDetailActionTypes.FETCH_CATEGORY_START,
		fetchCategoryStart
	);
}

export function* onUpdateCategoryStart() {
	yield takeLatest(
		CategoryDetailActionTypes.UPDATE_CATEGORY_START,
		updateCategoryStart
	);
}

export function* onCreateCategoryStart() {
	yield takeLatest(
		CategoryDetailActionTypes.CREATE_CATEGORY_START,
		createCategoryStart
	);
}

export function* onDeleteCategoryStart() {
	yield takeLatest(
		CategoryDetailActionTypes.DELETE_CATEGORY_START,
		deleteCategoryStart
	);
}

export function* onDeleteMultipleCategoriesStart() {
	yield takeLatest(
		CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORIES_START,
		deleteMultipleCategoriesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* categoryDetailSagas() {
	yield all([
		call(onFetchCategoryStart),
		call(onUpdateCategoryStart),
		call(onCreateCategoryStart),
		call(onDeleteCategoryStart),
		call(onDeleteMultipleCategoriesStart),
	]);
}
