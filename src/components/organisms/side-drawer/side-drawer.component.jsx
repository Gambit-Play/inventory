import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectSideMenuOpen } from '../../../redux/ui/ui.selectors';

// Redux
import { connect } from 'react-redux';
import { toggleSidemenu } from '../../../redux/ui/ui.actions';

// Side menu list
import SideDrawerList from '../side-drawer-list/side-drawer-list.component';

// Mui Components & Icons
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Styles
import useStyles from './side-drawer.styles';

const SideDrawer = ({ open, toggleSidemenu }) => {
	const classes = useStyles();

	const handleToggleSidemenu = () => {
		toggleSidemenu();
	};

	return (
		<Drawer
			variant='permanent'
			classes={{
				paper: clsx(
					classes.drawerPaper,
					!open && classes.drawerPaperClose
				),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleToggleSidemenu}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<SideDrawerList />
		</Drawer>
	);
};

SideDrawer.propTypes = {
	open: PropTypes.bool.isRequired,
	toggleSidemenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	toggleSidemenu: () => dispatch(toggleSidemenu()),
});

const mapStateToProps = createStructuredSelector({
	open: selectSideMenuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
