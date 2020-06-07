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
