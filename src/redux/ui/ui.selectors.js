import { createSelector } from 'reselect';

const selectUiStore = state => state.ui;

// Selects ui.sideMenu from the state
export const selectSideMenu = createSelector(
	[selectUiStore],
	ui => ui.sideMenu
);

// Selects ui.sideMenu.open from the state
export const selectSideMenuOpen = createSelector(
	[selectSideMenu],
	sideMenu => sideMenu.open
);
