import React from 'react';
import PropTypes from 'prop-types';

// Comment
import MenuListDropdown from './menu-list-dropdown/menu-list-dropdown.component';

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
	hasExtraMenuItems,
	removeMenu,
	index,
	setExtraMenuItem,
}) => {
	const classes = useStyles();

	const totalPrice = selectedMenus.length
		? selectedMenus[0].reduce(
				(acc, selectedMenu) => acc + selectedMenu.price,
				0
		  )
		: 0;

	// FIXME: replace selectedMenus.length with hasExtraMenuItems
	return (
		<Paper className={classes.selected}>
			<Typography component='h2' variant='h5' color='inherit' noWrap>
				{`Order | Total: € ${parseFloat(totalPrice).toFixed(2)}`}
			</Typography>
			{selectedMenus.length !== 0 &&
				selectedMenus[0].map((menu, menuIndex) => {
					return (
						<List key={menuIndex}>
							<ListItem className={classes.itemsList}>
								<ListItemText primary={menu.name} />
								<ListItemSecondaryAction>
									<IconButton
										color='secondary'
										edge='end'
										aria-label='delete'
										onClick={event => removeMenu(menuIndex)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							{menu.extraMenuItemsId.map((item, itemIndex) => {
								const categoryName = categories.find(
									category => category.id === item[0]
								).name;
								return (
									<React.Fragment key={itemIndex}>
										<ListItemText primary={categoryName} />
										{item[1].length === 1 ? (
											item[1][0].name
										) : (
											<MenuListDropdown
												extraMenuItemsId={item}
												selectedMenusIndex={menuIndex}
												selectedExtraIndex={itemIndex}
											/>
										)}
									</React.Fragment>
								);
							})}
							{menuIndex !== selectedMenus[0].length - 1 && (
								<Divider className={classes.divider} />
							)}
						</List>
					);
				})}
		</Paper>
	);
};

MenuList.propTypes = {
	selectedMenus: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	hasExtraMenuItems: PropTypes.bool.isRequired,
	removeMenu: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	setExtraMenuItem: PropTypes.func.isRequired,
};

export default MenuList;
