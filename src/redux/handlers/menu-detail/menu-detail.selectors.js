import { createSelector } from 'reselect';

const selectMenuDetailStore = state => state.menuDetail;

// Selects menuDetail from the state
export const selectMenu = createSelector(
	[selectMenuDetailStore],
	menuDetail => menuDetail
);
