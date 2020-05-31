import React from 'react';

import styled, { css } from 'styled-components';

// Mui Components
import Button from '@material-ui/core/Button';

const takeAwayStyles = css`
	border: 2px solid #388e3c;

	&:hover {
		background-color: #388e3c;
		color: #fff;
		border: unset;
	}
`;

const eatInStyles = css`
	border: 2px solid #e91e63;

	&:hover {
		background-color: #e91e63;
		color: #fff;
		border: unset;
	}
`;

const getButtonStyles = props => {
	if (props.isTakeAway) return takeAwayStyles;
	if (props.isEatIn) return eatInStyles;
};

const OrderButtonContainer = styled(({ isTakeAway, isEatIn, ...props }) => (
	<Button {...props} />
))`
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
