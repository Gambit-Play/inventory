import styled from 'styled-components';

// Mui Components
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

export const TutorialButton = styled(Paper)`
	padding: ${props => props.theme.spacing(3)};
	font-size: 16px;
	width: 100%;
	font-weight: 600;
	cursor: pointer;
	text-align: start;
	border-left: ${props => (props.isActive ? '6px solid #f50057' : '')};
`;

export const TutorialButtonBase = styled(ButtonBase)`
	margin-bottom: ${props => props.theme.spacing(3)};
	width: 100%;
`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	margin-right: ${props => props.theme.spacing(3)};

	& .sticky {
		position: sticky;
		top: 0;
	}
`;
