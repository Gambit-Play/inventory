import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
	},
	content: {
		padding: 24,
		marginTop: 64,
		maxHeight: 'calc(100vh - 64px)',
		overflow: 'auto',
		width: '100%',
	},
}));

export default useStyles;
