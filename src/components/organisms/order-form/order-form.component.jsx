import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCurrentCategories } from '../../../redux/categories/categories.selectors';
import { selectCurrentMenus } from '../../../redux/menus/menus.selectors';
import {
	setCategoryOrderForm,
	removeOrderForm,
} from '../../../redux/handlers/order-form/order-form.actions';
import { selectCategoryId } from '../../../redux/handlers/order-form/order-form.selectors';

// Components
import CategoryCard from './category-card/category-card.component';
import { MenuCard, MenusContainer, Seperator } from './order-form.styles';

// Mui Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const OrderForm = props => {
	const {
		categories,
		menus,
		setCategoryOrderForm,
		removeOrderForm,
		categoryId,
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
					selectAll={removeOrderForm}
				/>
				{/* categories.map(category => (
					<CategoryCard
						key={category.id}
						handleClick={setCategoryOrderForm}
					>
						{category.name}
					</CategoryCard>
				)) */}
			</Grid>
			<Grid item xs={7}>
				{menusCategories.map(category => (
					<React.Fragment key={category.id}>
						<Seperator />
						<Typography variant='button' gutterBottom>
							{category.name}
						</Typography>
						<MenusContainer>
							{menus.map(
								menu =>
									menu.categoryId === category.id && (
										<MenuCard key={menu.id}>
											{menu.name}
										</MenuCard>
									)
							)}
						</MenusContainer>
					</React.Fragment>
				))}
			</Grid>
			<Grid item xs={3}></Grid>
		</Grid>
	);
};

OrderForm.propTypes = {
	categories: PropTypes.array.isRequired,
	menus: PropTypes.array.isRequired,
	categoryId: PropTypes.string.isRequired,
	removeOrderForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	categories: selectCurrentCategories,
	menus: selectCurrentMenus,
	categoryId: selectCategoryId,
});

// TODO: Remove if not used
const mapDispatchToProps = dispatch => ({
	setCategoryOrderForm: categoryId =>
		dispatch(setCategoryOrderForm(categoryId)),
	removeOrderForm: () => dispatch(removeOrderForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
