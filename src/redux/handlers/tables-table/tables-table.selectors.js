import { createSelector } from 'reselect';

const selectTablesTable = state => state.tablesTable;

// Selects tablesTable.order from the state
export const selectOrder = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.order
);

// Selects tablesTable.orderBy from the state
export const selectOrderBy = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.orderBy
);

// Selects tablesTable.selected from the state
export const selectSelected = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.selected
);

// Selects tablesTable.page from the state
export const selectPage = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.page
);

// Selects tablesTable.rowsPerPage from the state
export const selectRowsPerPage = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.rowsPerPage
);

// Selects tablesTable.searchField from the state
export const selectSearchField = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.searchField
);

// Selects tablesTable.filteredTables from the state
export const selectFilteredTables = createSelector(
	[selectTablesTable],
	tablesTable => tablesTable.filteredTables
);
