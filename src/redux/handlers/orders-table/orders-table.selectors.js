import { createSelector } from 'reselect';

const selectOrdersTable = state => state.ordersTable;

// Selects ordersTable.order from the state
export const selectOrder = createSelector(
	[selectOrdersTable],
	ordersTable => ordersTable.order
);

// Selects ordersTable.orderBy from the state
export const selectOrderBy = createSelector(
	[selectOrdersTable],
	ordersTable => ordersTable.orderBy
);

// Selects ordersTable.page from the state
export const selectPage = createSelector(
	[selectOrdersTable],
	ordersTable => ordersTable.page
);

// Selects ordersTable.rowsPerPage from the state
export const selectRowsPerPage = createSelector(
	[selectOrdersTable],
	ordersTable => ordersTable.rowsPerPage
);
