import React from 'react';
import styled, { css } from 'styled-components';

// Mui Components
import Button from '@material-ui/core/Button';

const buttonStyles = {
	takeAway: css`
		border: 2px solid #388e3c;

		&:hover {
			background-color: #388e3c;
			color: #fff;
			border: unset;
		}
	`,
	eatIn: css`
		border: 2px solid #e91e63;

		&:hover {
			background-color: #e91e63;
			color: #fff;
			border: unset;
		}
	`,
};

const getButtonStyles = props => {
	if (props.isTakeAway) return buttonStyles.takeAway;
	if (props.isEatIn) return buttonStyles.eatIn;
};

const OrderButtonContainer = styled(
	({ isTakeAway, isEatIn, ...otherProps }) => <Button {...otherProps} />
)`
	width: 200px;
	height: 70px;
	font-size: large;
	color: #000;
	background-color: #f5f5f5;
	margin-left: 32px;
	margin-right: 32px;
	margin-bottom: 20%;

	${getButtonStyles}
`;

export default OrderButtonContainer;
