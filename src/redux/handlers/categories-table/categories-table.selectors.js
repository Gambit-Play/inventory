import { createSelector } from 'reselect';

const selectCategoriesTable = state => state.categoriesTable;

// Selects categoriesTable.order from the state
export const selectOrder = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.order
);

// Selects categoriesTable.orderBy from the state
export const selectOrderBy = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.orderBy
);

// Selects categoriesTable.selected from the state
export const selectSelected = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.selected
);

// Selects categoriesTable.page from the state
export const selectPage = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.page
);

// Selects categoriesTable.rowsPerPage from the state
export const selectRowsPerPage = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.rowsPerPage
);

// Selects categoriesTable.searchField from the state
export const selectSearchField = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.searchField
);

// Selects categoriesTable.filteredCategories from the state
export const selectFilteredCategories = createSelector(
	[selectCategoriesTable],
	categoriesTable => categoriesTable.filteredCategories
);
