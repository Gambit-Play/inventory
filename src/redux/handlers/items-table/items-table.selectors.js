import { createSelector } from 'reselect';

const selectItemsTable = state => state.itemsTable;

// Selects itemsTable.order from the state
export const selectOrder = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.order
);

// Selects itemsTable.orderBy from the state
export const selectOrderBy = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.orderBy
);

// Selects itemsTable.selected from the state
export const selectSelected = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.selected
);

// Selects itemsTable.page from the state
export const selectPage = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.page
);

// Selects itemsTable.rowsPerPage from the state
export const selectRowsPerPage = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.rowsPerPage
);

// Selects itemsTable.searchField from the state
export const selectSearchField = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.searchField
);

// Selects itemsTable.filteredItems from the state
export const selectFilteredItems = createSelector(
	[selectItemsTable],
	itemsTable => itemsTable.filteredItems
);
