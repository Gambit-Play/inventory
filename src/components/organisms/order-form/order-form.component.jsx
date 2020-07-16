import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCurrentCategories } from '../../../redux/categories/categories.selectors';
import { selectCurrentMenus } from '../../../redux/menus/menus.selectors';
import {
	setCategoryOrderForm,
	clearCategoryFilter,
	selectMenuStart,
	clearOrderItemStart,
} from '../../../redux/handlers/order-form/order-form.actions';
import {
	selectCategoryId,
	selectSelectedMenus,
} from '../../../redux/handlers/order-form/order-form.selectors';

// Components
import CategoryCard from './category-card/category-card.component';
import MenuCard from './menu-card/menu-card.component';
import OrderCard from './order-card/order-card.component';
import MenuList from './order-card/menu-list/menu-list.component';

// Mui Components
import Grid from '@material-ui/core/Grid';

const OrderForm = props => {
	const {
		categories,
		menus,
		setCategoryOrderForm,
		clearCategoryFilter,
		categoryId,
		selectMenuStart,
		selectedMenus,
		clearOrderItemStart,
	} = props;

	const filterdCategories = categories.filter(
		category => category.id === categoryId
	);
	const menusCategories = filterdCategories.length
		? filterdCategories
		: categories;

	const handleClick = categoryId => {
		setCategoryOrderForm(categoryId);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<CategoryCard
					categories={categories}
					selectCategory={handleClick}
					selectAll={clearCategoryFilter}
					selected={categoryId}
				/>
			</Grid>
			<Grid item xs={7}>
				<MenuCard
					menusCategories={menusCategories}
					menus={menus}
					handleClick={selectMenuStart}
				/>
			</Grid>
			<Grid item xs={3}>
				<MenuList
					selectedMenus={selectedMenus}
					categories={categories}
					removeMenu={clearOrderItemStart}
				/>
				{/* <OrderCard menus={selectedMenus} /> */}
			</Grid>
		</Grid>
	);
};

OrderForm.propTypes = {
	categories: PropTypes.array.isRequired,
	menus: PropTypes.array.isRequired,
	setCategoryOrderForm: PropTypes.func.isRequired,
	clearCategoryFilter: PropTypes.func.isRequired,
	categoryId: PropTypes.string.isRequired,
	selectMenuStart: PropTypes.func.isRequired,
	clearOrderItemStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	categories: selectCurrentCategories,
	menus: selectCurrentMenus,
	categoryId: selectCategoryId,
	selectedMenus: selectSelectedMenus,
});

const mapDispatchToProps = dispatch => ({
	setCategoryOrderForm: categoryId =>
		dispatch(setCategoryOrderForm(categoryId)),
	clearCategoryFilter: () => dispatch(clearCategoryFilter()),
	selectMenuStart: menu => dispatch(selectMenuStart(menu)),
	clearOrderItemStart: index => dispatch(clearOrderItemStart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
