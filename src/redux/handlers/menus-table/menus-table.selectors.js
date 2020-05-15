import { createSelector } from 'reselect';

const selectMenusTable = state => state.menusTable;

// Selects menusTable.order from the state
export const selectOrder = createSelector(
	[selectMenusTable],
	menusTable => menusTable.order
);

// Selects menusTable.orderBy from the state
export const selectOrderBy = createSelector(
	[selectMenusTable],
	menusTable => menusTable.orderBy
);

// Selects menusTable.selected from the state
export const selectSelected = createSelector(
	[selectMenusTable],
	menusTable => menusTable.selected
);

// Selects menusTable.page from the state
export const selectPage = createSelector(
	[selectMenusTable],
	menusTable => menusTable.page
);

// Selects menusTable.rowsPerPage from the state
export const selectRowsPerPage = createSelector(
	[selectMenusTable],
	menusTable => menusTable.rowsPerPage
);

// Selects menusTable.searchField from the state
export const selectSearchField = createSelector(
	[selectMenusTable],
	menusTable => menusTable.searchField
);

// Selects menusTable.filteredMenus from the state
export const selectFilteredMenus = createSelector(
	[selectMenusTable],
	menusTable => menusTable.filteredMenus
);
