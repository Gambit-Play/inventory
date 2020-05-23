import { createSelector } from 'reselect';

const selectCategoriesStore = state => state.categories;

// Selects categories.currentCategories from the state
export const selectCurrentCategories = createSelector(
	[selectCategoriesStore],
	categories => categories.currentCategories
);
