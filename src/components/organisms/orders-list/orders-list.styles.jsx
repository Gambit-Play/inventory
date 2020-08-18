import styled from 'styled-components';

export const OrderCard = styled.div`
	width: 300px;
	padding: 20px;
	margin-bottom: 8px;
	margin-right: 8px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const FlexBox = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
`;
