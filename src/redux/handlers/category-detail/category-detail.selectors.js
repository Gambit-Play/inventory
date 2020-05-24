import { createSelector } from 'reselect';

const selectCategoryDetailStore = state => state.categoryDetail;

// Selects categoryDetail from the state
export const selectCategory = createSelector(
	[selectCategoryDetailStore],
	categoryDetail => categoryDetail
);
