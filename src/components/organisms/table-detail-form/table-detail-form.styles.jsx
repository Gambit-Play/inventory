import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3),
	},
	deleteButton: {
		marginLeft: 'auto',
	},
	cancelButton: {
		marginLeft: theme.spacing(3),
	},
}));

export default useStyles;
