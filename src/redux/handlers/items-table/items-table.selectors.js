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
