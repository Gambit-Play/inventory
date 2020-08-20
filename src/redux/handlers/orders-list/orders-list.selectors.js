import { createSelector } from 'reselect';

const selectOrdersListStore = state => state.ordersList;

// Selects ordersList.currentOrders from the state
export const selectCurrentOrders = createSelector(
	[selectOrdersListStore],
	ordersList => ordersList.currentOrders
);

// Selects ordersList.id from the state
export const selectUpdatedOrderId = createSelector(
	[selectOrdersListStore],
	ordersList => ordersList.id
);

// Selects ordersList.status from the state
export const selectUpdatedOrderStatus = createSelector(
	[selectOrdersListStore],
	ordersList => ordersList.status
);
