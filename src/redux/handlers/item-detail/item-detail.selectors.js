import { createSelector } from 'reselect';

const selectItemDetail = state => state.itemDetail;

// Selects itemDetail.item from the state
export const selectItem = createSelector(
	[selectItemDetail],
	itemDetail => itemDetail.item
);
