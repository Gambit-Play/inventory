import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CategoryPaper as Paper } from '../order-form.styles';

// Mui Components
import ButtonBase from '@material-ui/core/ButtonBase';

// Styles
import useStyles from './category-card.styles';

const CategoryCard = ({ categories, selectCategory, selectAll }) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ButtonBase className={classes.button}>
				<Paper onClick={selectAll}>All</Paper>
			</ButtonBase>
			{categories.map(category => (
				<ButtonBase key={category.id} className={classes.button}>
					<Paper
						key={category.id}
						onClick={event => selectCategory(category.id)}
					>
						{category.name}
					</Paper>
				</ButtonBase>
			))}
		</React.Fragment>
	);
};

CategoryCard.propTypes = {
	categories: PropTypes.array.isRequired,
	selectCategory: PropTypes.func.isRequired,
	selectAll: PropTypes.func.isRequired,
};
export default CategoryCard;
