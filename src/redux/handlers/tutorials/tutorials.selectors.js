import { createSelector } from 'reselect';

const selectTutorialsStore = state => state.tutorials;

// Selects tutorials from the state
export const selectTutorials = createSelector(
	[selectTutorialsStore],
	tutorials => tutorials
);

// Selects tutorials.type from the state
export const selectType = createSelector(
	[selectTutorials],
	tutorials => tutorials.type
);

// Sele
