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

const MenuList = ({
	selectedMenus,
	categories,
	hasExtreMenuItems,
	removeMenu,
	index,
	setExtraMenuItem,
}) => {
	const classes = useStyles();

	const handleChange = (event, index) => {
		const { value } = event.target;
		// setExtraMenuItem();
	};

	console.log('@@ MenuList - selectedMenus:', selectedMenus);
	console.log('@@ MenuList - categories:', categories);

	// FIXME: replace selectedMenus.length with hasExtreMenuItems
	return (
		selectedMenus.length !== 0 && (
			<Paper className={classes.selected}>
				<Typography component='h2' variant='h5' color='inherit' noWrap>
					Order
				</Typography>
				{selectedMenus[0].map((menu, idx) => {
					// console.log(menu.extraMenuItemsId);

					return (
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
							{menu.extraMenuItemsId.map(item => {
								const categoryName = categories.find(
									category => category.id === item[0]
								).name;
								return <ListItemText primary={categoryName} />;
							})}
							{idx !== selectedMenus[0].length - 1 && (
								<Divider className={classes.divider} />
							)}
						</List>
					);
				})}
			</Paper>
		)
	);
};

MenuList.propTypes = {
	selectedMenus: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	hasExtreMenuItems: PropTypes.bool.isRequired,
	removeMenu: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	setExtraMenuItem: PropTypes.func.isRequired,
};

export default MenuList;
