import { createSelector } from 'reselect';

const selectItemDetailStore = state => state.itemDetail;

// Selects itemDetail from the state
export const selectItem = createSelector(
	[selectItemDetailStore],
	itemDetail => itemDetail
);
