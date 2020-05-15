import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	toolbar: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
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
}));

export default useStyles;
