import styled from 'styled-components';

export const RightColumn = styled.div`
	width: 80%;

	& .divider {
		margin: 24px 0 24px 0;
	}
`;

export const Title = styled.div`
	font-size: ${props => props.theme.fontSize(6)};
	font-weight: 500;
	margin-bottom: ${props => props.theme.spacing(3)};
`;

export const BodyText = styled.p`
	font-size: ${props => props.theme.fontSize(3)};
	line-height: ${props => (props.lineHeight ? '24px' : '')};
`;

export const Image = styled.img`
	margin-bottom: ${props => props.theme.spacing(-5)};
	margin-top: ${props => props.theme.spacing(3)};
`;
