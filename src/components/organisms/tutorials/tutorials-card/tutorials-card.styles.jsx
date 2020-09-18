import styled from 'styled-components';

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100%;
	overflow: scroll;

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
	width: ${props => (props.full ? '100%' : 'fit-content')};
	margin-bottom: ${props => props.theme.spacing(-5)};
	margin-top: ${props => props.theme.spacing(3)};
`;
