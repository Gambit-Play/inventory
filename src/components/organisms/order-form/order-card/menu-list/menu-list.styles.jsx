import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	divider: {
		marginTop: theme.spacing(2),
	},
	itemsList: {
		alignItems: 'flex-end',
	},
	selected: {
		marginBottom: theme.spacing(3),
		padding: theme.spacing(3),
		width: '100%',
		height: 'fit-content',
	},
}));

export default useStyles;
