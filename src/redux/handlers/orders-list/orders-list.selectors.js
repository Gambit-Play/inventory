import { createSelector } from 'reselect';

const selectOrdersListStore = state => state.ordersList;

// Selects ordersList from the state
export const selectOrdersList = createSelector(
	[selectOrdersListStore],
	ordersList => ordersList
);
