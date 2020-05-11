import { createSelector } from 'reselect';

const selectItemsStore = state => state.items;

// Selects items.currentItems from the state
export const selectCurrentItems = createSelector(
	[selectItemsStore],
	items => items.currentItems
);

// Selects items.isFetching from the state
export const selectIsFetching = createSelector(
	[selectItemsStore],
	items => items.isFetching
);

// Selects a single item based on the 'itemId' input
export const selectSingleItem = itemId =>
	createSelector([selectCurrentItems], currentItems =>
		currentItems.find(item => item.id === itemId)
	);

export const selectItemsTotal = createSelector(
	[selectCurrentItems],
	currentItems =>
		currentItems.reduce((accCost, item) => accCost + item.cost, 0)
);
