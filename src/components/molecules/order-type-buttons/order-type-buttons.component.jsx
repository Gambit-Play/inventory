import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

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
				New Orders
			</OrderButton>
			<OrderButton
				variant='contained'
				isEatIn
				component={Link}
				to={`${url}/${ROUTES.ORDERS_TABLE}`}
			>
				All Orders
			</OrderButton>
		</CenterContainer>
	);
};

export default OrderTypeButtons;
