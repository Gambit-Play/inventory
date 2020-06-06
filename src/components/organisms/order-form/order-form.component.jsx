import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCurrentCategories } from '../../../redux/categories/categories.selectors';
import { selectCurrentMenus } from '../../../redux/menus/menus.selectors';

// Components
import {
	CategoryCard,
	MenuCard,
	MenusContainer,
	Seperator,
} from './order-form.styles';

// Mui Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const OrderForm = props => {
	const { categories, menus } = props;
	console.log(menus);

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<Typography variant='h5' gutterBottom>
					Categories
				</Typography>
				<Seperator />
				{categories.map(category => (
					<CategoryCard key={category.id}>
						{category.name}
					</CategoryCard>
				))}
			</Grid>
			<Grid item xs={7}>
				<Typography variant='h5' gutterBottom>
					Menus
				</Typography>
				<Seperator />
				<MenusContainer>
					{menus.map(menu => (
						<MenuCard key={menu.id}>{menu.name}</MenuCard>
					))}
				</MenusContainer>
			</Grid>
			<Grid item xs={3}>
				<Typography variant='h5' gutterBottom>
					Ticket
				</Typography>
				<Seperator />
				<CategoryCard></CategoryCard>
			</Grid>
		</Grid>
	);
};

OrderForm.propTypes = {
	categories: PropTypes.array.isRequired,
	menus: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
	categories: selectCurrentCategories,
	menus: selectCurrentMenus,
});

// TODO: Remove if not used
const mapDispatchToProps = dispatch => ({
	// setSearchFieldStart: search => dispatch(setSearchFieldStart(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
