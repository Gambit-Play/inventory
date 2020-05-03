import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../side-drawer/side-drawer.styles';

const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	toolbar: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	avatar: {
		marginRight: theme.spacing(1),
		boxShadow: theme.shadows[4],
		cursor: 'pointer',
	},
	dividerToolbar: {
		backgroundColor: 'rgba(255, 255, 255, 0.24)',
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
	},
	userName: {
		marginRight: theme.spacing(3),
	},
}));

export default useStyles;
