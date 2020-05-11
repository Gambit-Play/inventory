import { createSelector } from 'reselect';

const selectUiStore = state => state.ui;

export const selectSideMenu = createSelector(
	[selectUiStore],
	ui => ui.sideMenu
);

export const selectSideMenuOpen = createSelector(
	[selectSideMenu],
	sideMenu => sideMenu.open
);
