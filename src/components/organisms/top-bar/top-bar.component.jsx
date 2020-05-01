import React from 'react';
import clsx from 'clsx';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectSideMenuOpen } from '../../../redux/ui/ui.selectors';
// import { selectCurrentUser } from '../../../redux/users/users.selectors';

// Redux
import { connect } from 'react-redux';
import { toggleSidemenu } from '../../../redux/ui/ui.actions';
// import * as usersActions from '../../../redux/users/users.actions';

// Mui Components & Icons
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import PowerSettingsIcon from '@material-ui/icons/PowerSettingsNewOutlined';

// Styles
import useStyles from './tob-bar.styles';

const TopBar = props => {
	const { toggleSidemenu, open } = props;
	const classes = useStyles();

	const handleToggleSidemenu = () => {
		toggleSidemenu();
	};
	return (
		<AppBar
			position='absolute'
			className={clsx(classes.appBar, open && classes.appBarShift)}
		>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={handleToggleSidemenu}
					className={clsx(
						classes.menuButton,
						open && classes.menuButtonHidden
					)}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					className={classes.title}
				>
					Dashboard
				</Typography>
				<IconButton color='inherit'>
					<Badge badgeContent={9} color='secondary'>
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<Divider
					orientation='vertical'
					flexItem
					className={classes.dividerToolbar}
				/>
				<Avatar
					alt='Remy Sharp'
					src='https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
					className={classes.avatar}
					// onClick={fetchCurrentUserStart}
				/>
				<Typography>
					{/* currentUser && currentUser.displayName */}
				</Typography>
				<IconButton
					color='inherit'
					// onClick={userGoogleLogoutStart}
				>
					<PowerSettingsIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleSidemenu: () => dispatch(toggleSidemenu()),
	// fetchCurrentUserStart: () => dispatch(usersActions.fetchCurrentUserStart()),
	// userGoogleLogoutStart: () => dispatch(usersActions.userGoogleLogoutStart()),
});

const mapStateToProps = createStructuredSelector({
	open: selectSideMenuOpen,
	// currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
