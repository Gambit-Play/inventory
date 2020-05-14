import { createSelector } from 'reselect';

const selectMenusStore = state => state.menus;

// Selects menus.currentMenus from the state
export const selectCurrentMenus = createSelector(
	[selectMenusStore],
	menus => menus.currentMenus
);

// Selects menus.isFetching from the state
export const selectIsFetching = createSelector(
	[selectMenusStore],
	menus => menus.isFetching
);

// Selects a single menu based on the 'menuId' input
export const selectSingleMenu = menuId =>
	createSelector([selectCurrentMenus], currentMenus =>
		currentMenus.find(menu => menu.id === menuId)
	);
