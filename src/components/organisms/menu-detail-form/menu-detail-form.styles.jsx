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
		width: '50%',
		marginRight: theme.spacing(2),
	},
	itemsList: {
		alignItems: 'flex-end',
	},
	gridMultiDropdown: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	multiDropdown: {
		width: '100%',
		paddingRight: 24,
	},
	selected: {
		marginBottom: theme.spacing(3),
		padding: theme.spacing(3),
		width: '100%',
		height: 'fit-content',
	},
}));

export default useStyles;
