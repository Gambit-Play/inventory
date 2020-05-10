import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import { MenuItem } from './menu-list-item.styles';

// Mui Components
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const MenuListItem = props => {
	const { children, selected, to, labelColor, label } = props;
	return (
		<MenuItem selected={selected} button component={Link} to={to}>
			<ListItemIcon>{children}</ListItemIcon>
			<Typography variant='body1' component='h2' color={labelColor}>
				{label}
			</Typography>
		</MenuItem>
	);
};

MenuListItem.propTypes = {
	children: PropTypes.object.isRequired,
	selected: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	labelColor: PropTypes.string,
	label: PropTypes.string.isRequired,
};

export default MenuListItem;
