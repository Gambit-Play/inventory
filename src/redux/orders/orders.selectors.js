import { createSelector } from 'reselect';

const selectOrdersStore = state => state.orders;

// Selects orders.currentOrders from the state
export const selectCurrentOrders = createSelector(
	[selectOrdersStore],
	orders => orders.currentOrders
);

// Selects orders.isFetching from the state
export const selectIsFetching = createSelector(
	[selectOrdersStore],
	orders => orders.isFetching
);
