import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3),
	},
	divider: {
		marginTop: theme.spacing(2),
	},
	deleteButton: {
		marginLeft: 'auto',
	},
	cancelButton: {
		marginLeft: theme.spacing(3),
	},
	quantity: {
		width: '40%',
		marginRight: theme.spacing(2),
	},
	itemsList: {
		alignItems: 'flex-end',
	},
}));

export default useStyles;
