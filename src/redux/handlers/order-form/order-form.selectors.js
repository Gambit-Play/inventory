import { createSelector } from 'reselect';

const selectOrderFormStore = state => state.orderForm;

// Selects orderForm from the state
export const selectOrderForm = createSelector(
	[selectOrderFormStore],
	orderForm => orderForm
);

// Selects orderForm.categoryId from the state
export const selectCategoryId = createSelector(
	[selectOrderForm],
	orderForm => orderForm.categoryId
);

// Selects orderForm.selectedMenus from the state
export const selectSelectedMenus = createSelector(
	[selectOrderForm],
	orderForm => orderForm.selectedMenus
);

// Selects orderForm.selectedOrder from the state
export const selectSelectedOrder = createSelector(
	[selectOrderForm],
	orderForm => orderForm.selectedOrder
);
