import styled from 'styled-components';

// Mui Components
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export const CategoryCard = styled(Paper)`
	padding: 16px;
	margin-bottom: 8px;
	font-size: 18px;
	font-weight: 500;
`;

export const MenuCard = styled(Paper)`
	width: 90px;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	margin: 0 12px 12px 0;
	padding: 8px;
`;

export const MenusContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;

export const Seperator = styled(Divider)`
	margin-bottom: 8px;
`;
