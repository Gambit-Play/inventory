import { createSelector } from 'reselect';

const selectOrdersListStore = state => state.ordersList;

// Selects ordersList.currentOrders from the state
export const selectCurrentOrders = createSelector(
	[selectOrdersListStore],
	ordersList => ordersList.currentOrders
);
