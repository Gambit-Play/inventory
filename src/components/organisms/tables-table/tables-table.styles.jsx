import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	filterBar: {
		marginBottom: theme.spacing(2),
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	loaderContainer: {
		minHeight: 323,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		paddingLeft: 0,
	},
}));

export default useStyles;
