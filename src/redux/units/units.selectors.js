import { createSelector } from 'reselect';

const selectUnitsStore = state => state.units;

// Selects units.currentUnits from the state
export const selectCurrentUnits = createSelector(
	[selectUnitsStore],
	units => units.currentUnits
);
