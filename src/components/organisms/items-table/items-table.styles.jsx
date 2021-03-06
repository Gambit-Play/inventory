import { makeStyles, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	filterBar: {
		marginBottom: theme.spacing(2),
	},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(
						theme.palette.secondary.light,
						0.85
					),
			  }
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark,
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
}));

export default useStyles;
