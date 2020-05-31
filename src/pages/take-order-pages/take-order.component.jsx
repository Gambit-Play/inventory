import React from 'react';
import PropTypes from 'prop-types';

// Components
import CenterContainer from '../../components/atoms/center-container/center-container.styles';
import OrderButton from '../../components/atoms/order-button/order-button.component';

const TakeOrder = props => {
	console.log(props);
	return (
		<CenterContainer>
			<OrderButton variant='contained' isTakeAway>
				Take Away
			</OrderButton>
			<OrderButton variant='contained' isEatIn>
				Eat In
			</OrderButton>
		</CenterContainer>
	);
};

TakeOrder.propTypes = {};

export default TakeOrder;
