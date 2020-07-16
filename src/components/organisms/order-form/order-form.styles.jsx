import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

// Mui Components
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export const CategoryPaper = styled(Paper)`
	padding: 16px;
	font-size: 16px;
	font-weight: 600;
	width: 100%;
	cursor: pointer;
	text-align: start;
	border-left: 6px solid #f50057;
`;

export const MenuCard = styled(Paper)`
	width: 120px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
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

const useStyles = makeStyles(theme => ({
	payButton: {
		marginBottom: theme.spacing(3),
	},
}));

export default useStyles;
