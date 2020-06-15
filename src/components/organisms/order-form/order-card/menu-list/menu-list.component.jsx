import React from 'react';
import PropTypes from 'prop-types';

// Mui Components & Icons
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import DeleteIcon from '@material-ui/icons/Delete';

// Styles
import useStyles from './menu-list.styles';

const MenuList = ({ selectedMenus, removeMenu, setExtraMenuItem }) => {
	const classes = useStyles();

	const handleChange = (event, index) => {
		const { value } = event.target;
		// setExtraMenuItem();
	};

	console.log('@@ MenuList - selectedMenus:', selectedMenus);

	return (
		selectedMenus.length !== 0 && (
			<Paper className={classes.selected}>
				<Typography component='h2' variant='h5' color='inherit' noWrap>
					Order
				</Typography>
				{selectedMenus[0].map((menu, idx) => (
					<List key={idx}>
						<ListItem className={classes.itemsList}>
							<ListItemText primary={menu.name} />
							<ListItemSecondaryAction>
								<IconButton
									color='secondary'
									edge='end'
									aria-label='delete'
									onClick={event => removeMenu(menu.id)}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
						{idx !== selectedMenus[0].length - 1 && (
							<Divider className={classes.divider} />
						)}
					</List>
				))}
			</Paper>
		)
	);
};

MenuList.propTypes = {
	selectedMenus: PropTypes.array.isRequired,
	removeMenu: PropTypes.func.isRequired,
	setExtraMenuItem: PropTypes.func.isRequired,
};

export default MenuList;
