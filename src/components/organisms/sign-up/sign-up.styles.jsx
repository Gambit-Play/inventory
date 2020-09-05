import React from 'react';
import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';

// Icons
import { ReactComponent as GoogleLogo } from '../../../assets/svg/google-logo.svg';

export const GoogleIcon = props => {
	return <SvgIcon {...props} component={GoogleLogo} viewBox='0 0 512 512' />;
};

export const Box = styled.div`
	display: flex;
	flex-direction: column;

	& .input {
		margin-bottom: ${props => props.theme.spacing(3)};
	}

	& .button {
		margin-top: ${props => props.theme.spacing(5)};
	}
`;

export const Text = styled.div`
	font-size: ${props => props.theme.fontSize(props.fontSize)};
	color: ${props => props.fontColor};
	text-align: center;
`;
