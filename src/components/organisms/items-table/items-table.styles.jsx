import { makeStyles, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	toolbar: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
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
	title: {
		paddingRight: theme.spacing(2),
	},
	searchField: {
		paddingRight: theme.spacing(2),
		width: '100%',
	},
	filterIcon: {
		flex: '1 1 50%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
	loaderContainer: {
		minHeight: 323,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default useStyles;
