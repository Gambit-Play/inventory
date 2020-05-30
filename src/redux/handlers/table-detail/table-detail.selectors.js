import { createSelector } from 'reselect';

const selectTableDetailStore = state => state.tableDetail;

// Selects tableDetail from the state
export const selectTable = createSelector(
	[selectTableDetailStore],
	tableDetail => tableDetail
);
