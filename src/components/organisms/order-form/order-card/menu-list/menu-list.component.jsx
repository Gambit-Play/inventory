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
	hasExtraMenuItems,
	removeMenu,
	index,
	setExtraMenuItem,
}) => {
	const classes = useStyles();

	const handleChange = (event, index) => {
		const { value } = event.target;
		// setExtraMenuItem();
	};

	// FIXME: replace selectedMenus.length with hasExtraMenuItems
	return (
		selectedMenus.length !== 0 && (
			<Paper className={classes.selected}>
				<Typography component='h2' variant='h5' color='inherit' noWrap>
					Order
				</Typography>
				{selectedMenus[0].map((menu, idx) => {
					console.log(menu.extraMenuItemsId);
					return (
						<List key={idx}>
							<ListItem className={classes.itemsList}>
								<ListItemText primary={menu.name} />
								<ListItemSecondaryAction>
									<IconButton
										color='secondary'
										edge='end'
										aria-label='delete'
										// FIXME: Change it to the index instead of menu.id @ removeMenu()
										// 		  because there could be more then 1 with the same menu.id in the list
										onClick={event => removeMenu(menu.id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							{menu.extraMenuItemsId.map((item, index) => {
								const categoryName = categories.find(
									category => category.id === item[0]
								).name;
								return (
									<React.Fragment>
										<ListItemText
											key={index}
											primary={categoryName}
										/>
										{item[1].map((menuItem, index) => (
											<ListItemText
												key={index}
												primary={`--${menuItem.name}`}
											/>
										))}
									</React.Fragment>
								);
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
	hasExtraMenuItems: PropTypes.bool.isRequired,
	removeMenu: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	setExtraMenuItem: PropTypes.func.isRequired,
};

export default MenuList;
