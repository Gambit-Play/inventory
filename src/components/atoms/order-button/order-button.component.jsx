import React from 'react';

// Components
import OrderButtonContainer from './order-button.styles';

const OrderButton = ({ children, ...props }) => (
	<OrderButtonContainer {...props}>{children}</OrderButtonContainer>
);

export default OrderButton;
