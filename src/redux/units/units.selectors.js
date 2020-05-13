import { createSelector } from 'reselect';

const selectUnitsStore = state => state.units;

// Selects units.selectCurrentUnits from the state
export const selectCurrentUnits = createSelector(
	[selectUnitsStore],
	units => units.currentUnits
);
