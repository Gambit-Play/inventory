import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { NumberFormatter } from '../../../../utils/global.utils';

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
import useStyles from '../menu-detail-form.styles';

const MenuDetailItemsList = ({ selectedItems, removeItem }) => {
	const classes = useStyles();

	return (
		selectedItems.length !== 0 && (
			<Paper className={classes.root}>
				<Typography component='h2' variant='h5' color='inherit' noWrap>
					Ingridients
				</Typography>
				{selectedItems.map((item, index) => (
					<List key={item.id}>
						<ListItem className={classes.itemsList}>
							<ListItemText primary={item.name} />
							<TextField
								id={item.unit}
								name={item.unit}
								label={`Quantity (${item.unit})`}
								// value={item.quantity}
								className={classes.quantity}
								color='primary'
								// onChange={handleChange}
								InputProps={{
									inputComponent: NumberFormatter,
								}}
							/>
							<ListItemSecondaryAction>
								<IconButton
									color='secondary'
									edge='end'
									aria-label='delete'
									onClick={event => removeItem(item.id)}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
						{index !== selectedItems.length - 1 && (
							<Divider className={classes.divider} />
						)}
					</List>
				))}
			</Paper>
		)
	);
};

MenuDetailItemsList.propTypes = {
	selectedItems: PropTypes.array.isRequired,
	removeItem: PropTypes.func.isRequired,
};

export default MenuDetailItemsList;
