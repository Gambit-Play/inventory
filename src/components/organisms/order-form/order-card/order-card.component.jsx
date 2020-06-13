import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Mui Components
import Paper from '@material-ui/core/Paper';

// Styles
// import useStyles from './menu-card.styles';

const OrderCard = ({ menus }) => {
	// const classes = useStyles();

	return (
		<Paper>
			{menus.map(order =>
				order.map((menu, index) => <h4 key={index}>{menu.name}</h4>)
			)}
		</Paper>
	);
};

OrderCard.propTypes = {
	menus: PropTypes.array.isRequired,
};

export default OrderCard;
