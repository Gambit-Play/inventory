import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import CenterContainer from '../../atoms/center-container/center-container.styles';
import OrderButton from '../../atoms/order-button/order-button.component';

const OrderTypeButtons = () => {
	const { url } = useRouteMatch();

	return (
		<CenterContainer>
			<OrderButton
				variant='contained'
				isTakeAway
				component={Link}
				to={`${url}/${ROUTES.ORDERS_LIST}`}
			>
				Orders List
			</OrderButton>
			<OrderButton
				variant='contained'
				isEatIn
				component={Link}
				to={`${url}/${ROUTES.ORDERS_TABLE}`}
			>
				Orders Table
			</OrderButton>
		</CenterContainer>
	);
};

OrderTypeButtons.propTypes = {};

export default OrderTypeButtons;
