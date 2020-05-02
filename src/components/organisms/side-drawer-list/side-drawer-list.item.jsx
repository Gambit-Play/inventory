import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const MenuListItem = props => {
	const { children, selected, to, labelColor, label } = props;
	return (
		<ListItem selected={selected} button component={Link} to={to}>
			<ListItemIcon>{children}</ListItemIcon>
			<Typography variant='body1' component='h2' color={labelColor}>
				{label}
			</Typography>
		</ListItem>
	);
};

MenuListItem.propTypes = {
	selected: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	labelColor: PropTypes.string,
	label: PropTypes.string.isRequired,
};

export default MenuListItem;
