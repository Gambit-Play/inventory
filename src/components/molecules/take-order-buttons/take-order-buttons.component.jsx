import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import CenterContainer from '../../atoms/center-container/center-container.styles';
import OrderButton from '../../atoms/order-button/order-button.component';

const TakeOrderButtons = () => {
	const { url } = useRouteMatch();

	return (
		<CenterContainer>
			<OrderButton
				variant='contained'
				isTakeAway
				component={Link}
				to={`${url}/${ROUTES.TAKE_AWAY}`}
			>
				Take Away
			</OrderButton>
			<OrderButton
				variant='contained'
				isEatIn
				component={Link}
				to={`${url}/${ROUTES.EAT_IN}`}
			>
				Eat In
			</OrderButton>
		</CenterContainer>
	);
};

TakeOrderButtons.propTypes = {};

export default TakeOrderButtons;
