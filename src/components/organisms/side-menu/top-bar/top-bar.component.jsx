import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Firebase // TODO: Remove
import { createCollectionAndDocument } from '../../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../../firebase/collections.ids';

// Data // TODO: Remove
import * as Data from '../../../../data/database.schema';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectSideMenuOpen } from '../../../../redux/ui/ui.selectors';
import { selectCurrentUser } from '../../../../redux/users/users.selectors';

// Redux
import { connect } from 'react-redux';
import { toggleSidemenu } from '../../../../redux/ui/ui.actions';
import {
	googleSignInStart,
	googleLogoutStart,
} from '../../../../redux/users/users.actions';

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
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import PowerSettingsIcon from '@material-ui/icons/PowerSettingsNewOutlined';

// Styles
import useStyles from '../side-menu.styles';

const TopBar = props => {
	const {
		toggleSidemenu,
		open,
		googleSignInStart,
		googleLogoutStart,
		currentUser,
	} = props;
	const classes = useStyles();
	const UserName = () => {
		if (currentUser && currentUser.firstName) return currentUser.firstName;
		if (currentUser && !currentUser.firstName)
			return currentUser.displayName;
	};
	const handleCreateData = () => {
		createCollectionAndDocument(
			COLLECTION_IDS.CATEGORIES,
			Data.CategoriesData
		);
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
					onClick={toggleSidemenu}
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
				<Button
					variant='outlined'
					color='inherit'
					onClick={handleCreateData}
				>
					Create Data
				</Button>
				<Divider
					orientation='vertical'
					flexItem
					className={classes.dividerToolbar}
				/>
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
				{currentUser ? (
					<React.Fragment>
						<Avatar
							alt='Remy Sharp'
							src={currentUser.avatar}
							className={classes.avatar}
						/>
						<Typography className={classes.userName}>
							<UserName />
						</Typography>
						<IconButton color='inherit' onClick={googleLogoutStart}>
							<PowerSettingsIcon />
						</IconButton>
					</React.Fragment>
				) : (
					<Button
						variant='outlined'
						color='inherit'
						onClick={googleSignInStart}
					>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

TopBar.propTypes = {
	toggleSidemenu: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	googleSignInStart: PropTypes.func.isRequired,
	googleLogoutStart: PropTypes.func.isRequired,
	currentUser: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
	toggleSidemenu: () => dispatch(toggleSidemenu()),
	googleSignInStart: () => dispatch(googleSignInStart()),
	googleLogoutStart: () => dispatch(googleLogoutStart()),
});

const mapStateToProps = createStructuredSelector({
	open: selectSideMenuOpen,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
