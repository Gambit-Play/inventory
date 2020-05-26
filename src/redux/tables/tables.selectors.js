import { createSelector } from 'reselect';

const selectTablesStore = state => state.tables;

// Selects tables.currentTables from the state
export const selectCurrentTables = createSelector(
	[selectTablesStore],
	tables => tables.currentTables
);

// Selects tables.isFetching from the state
export const selectIsFetching = createSelector(
	[selectTablesStore],
	tables => tables.isFetching
);

// Selects a single table based on the 'tableId' input
export const selectSingleCategory = tableId =>
	createSelector([selectCurrentTables], currentTables =>
		currentTables.find(table => table.id === tableId)
	);
