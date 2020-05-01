import React from 'react';
import clsx from 'clsx';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectSideMenuOpen } from '../../../redux/ui/ui.selectors';

// Redux
import { connect } from 'react-redux';
import { toggleSidemenu } from '../../../redux/ui/ui.actions';

// Side menu list
import SideMenuList from '../side-menu/side-menu.list';

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
			<SideMenuList />
		</Drawer>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleSidemenu: () => dispatch(toggleSidemenu()),
});

const mapStateToProps = createStructuredSelector({
	open: selectSideMenuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
