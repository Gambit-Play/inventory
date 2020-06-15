import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Mui Components
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

// Styles
// import useStyles from './menu-card.styles';

const OrderCard = ({ menus }) => {
	// const classes = useStyles();
	console.log('@@ OrderCard - menus:', menus);
	return (
		<Paper>
			{menus.map(order =>
				order.map((menu, index) => (
					<Fragment key={index}>
						<h4>{menu.name}</h4>
						<h4>{parseFloat(menu.price).toFixed(2)}</h4>

						<Divider
						// className={classes.divider}
						/>
					</Fragment>
				))
			)}
		</Paper>
	);
};

OrderCard.propTypes = {
	menus: PropTypes.array.isRequired,
};

export default OrderCard;
