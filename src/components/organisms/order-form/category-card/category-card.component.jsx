import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CategoryPaper as Paper } from '../order-form.styles';

const CategoryCard = ({ categories, selectCategory, selectAll }) => {
	return (
		<React.Fragment>
			<Paper onClick={selectAll}>All</Paper>
			{categories.map(category => (
				<Paper
					key={category.id}
					onClick={event => selectCategory(category.id)}
					className='paper'
				>
					{category.name}
				</Paper>
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
