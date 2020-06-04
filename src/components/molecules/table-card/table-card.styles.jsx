// Mui Colors & Styles
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	paper: {
		height: 150,
		width: 150,
		paddingTop: theme.spacing(2),
		overflow: 'hidden',
	},
	tableName: {
		fontSize: 20,
		marginBottom: theme.spacing(1),
	},
	tableNumber: {
		fontSize: 36,
	},
	status: {
		height: '100%',
	},
	statusWaiting: {
		height: '100%',
		backgroundColor: red[500],
	},
	statusServed: {
		height: '100%',
		backgroundColor: green[500],
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(4),
		right: theme.spacing(4),
	},
}));

export default useStyles;
