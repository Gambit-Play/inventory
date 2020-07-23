import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, useRouteMatch } from 'react-router-dom';

// Redux
import { selectCurrentCategories } from '../../../redux/categories/categories.selectors';
import { selectCurrentMenus } from '../../../redux/menus/menus.selectors';
import {
	setCategoryOrderForm,
	clearCategoryFilter,
	selectMenuStart,
	clearOrderItemStart,
	setTotalPrice,
} from '../../../redux/handlers/order-form/order-form.actions';
import {
	selectCategoryId,
	selectSelectedMenus,
	selectHasError,
} from '../../../redux/handlers/order-form/order-form.selectors';

// Components
import CategoryCard from './category-card/category-card.component';
import MenuCard from './menu-card/menu-card.component';
import OrderCard from './order-card/order-card.component';
import MenuList from './order-card/menu-list/menu-list.component';

// Mui Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Styles
import useStyles from './order-form.styles';

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
		hasError,
		setTotalPrice,
	} = props;

	const { url } = useRouteMatch();

	const classes = useStyles();

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
		<React.Fragment>
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
					<Button
						fullWidth
						variant={'contained'}
						color={'primary'}
						disabled={hasError}
						className={classes.payButton}
						component={Link}
						to={`${url}/pay`}
					>
						Pay
					</Button>
					<MenuList
						selectedMenus={selectedMenus}
						categories={categories}
						removeMenu={clearOrderItemStart}
						setTotalPrice={setTotalPrice}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
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
	hasError: PropTypes.bool.isRequired,
	setTotalPrice: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	categories: selectCurrentCategories,
	menus: selectCurrentMenus,
	categoryId: selectCategoryId,
	selectedMenus: selectSelectedMenus,
	hasError: selectHasError,
});

const mapDispatchToProps = dispatch => ({
	setCategoryOrderForm: categoryId =>
		dispatch(setCategoryOrderForm(categoryId)),
	clearCategoryFilter: () => dispatch(clearCategoryFilter()),
	selectMenuStart: menu => dispatch(selectMenuStart(menu)),
	clearOrderItemStart: index => dispatch(clearOrderItemStart(index)),
	setTotalPrice: totalPrice => dispatch(setTotalPrice(totalPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
