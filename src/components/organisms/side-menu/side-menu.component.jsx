import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopBar from '../top-bar/top-bar.component';
import SideDrawer from '../side-drawer/side-drawer.component';

// Mui Components
import Box from '@material-ui/core/Box';

import useStyles from './side-menu.styles';

const SideMenu = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TopBar />
			<SideDrawer />
			<Box className={classes.content}>{children}</Box>
		</div>
	);
};

export default SideMenu;
