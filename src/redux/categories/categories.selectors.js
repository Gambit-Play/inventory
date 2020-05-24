import { createSelector } from 'reselect';

const selectCategoriesStore = state => state.categories;

// Selects categories.currentCategories from the state
export const selectCurrentCategories = createSelector(
	[selectCategoriesStore],
	categories => categories.currentCategories
);

// Selects categories.isFetching from the state
export const selectIsFetching = createSelector(
	[selectCategoriesStore],
	categories => categories.isFetching
);

// Selects a single category based on the 'categoryId' input
export const selectSingleCategory = categoryId =>
	createSelector([selectCurrentCategories], currentCategories =>
		currentCategories.find(category => category.id === categoryId)
	);
