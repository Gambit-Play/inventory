import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectSideMenuOpen } from '../../../redux/ui/ui.selectors';

// Redux
import { connect } from 'react-redux';
import { toggleSidemenu } from '../../../redux/ui/ui.actions';
import {
	googleSignInStart,
	userGoogleLogoutStart,
} from '../../../redux/users/users.actions';

// Components
import TopBarTitle from './top-bar.title';

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
	const {
		toggleSidemenu,
		open,
		googleSignInStart,
		userGoogleLogoutStart,
	} = props;
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
					<TopBarTitle />
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
					onClick={googleSignInStart}
				/>
				<Typography>
					{/* currentUser && currentUser.displayName */}
				</Typography>
				<IconButton color='inherit' onClick={userGoogleLogoutStart}>
					<PowerSettingsIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

TopBar.propTypes = {
	toggleSidemenu: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
	toggleSidemenu: () => dispatch(toggleSidemenu()),
	googleSignInStart: () => dispatch(googleSignInStart()),
	userGoogleLogoutStart: () => dispatch(userGoogleLogoutStart()),
});

const mapStateToProps = createStructuredSelector({
	open: selectSideMenuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
