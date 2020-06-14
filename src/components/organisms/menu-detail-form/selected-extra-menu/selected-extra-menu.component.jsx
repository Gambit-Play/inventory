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
import Divider from '@material-ui/core/Divider';

import DeleteIcon from '@material-ui/icons/Delete';

// Styles
import useStyles from '../menu-detail-form.styles';

const SelectedExtraMenu = ({ selectedExtraMenuItems, removeExtraMenuItem }) => {
	const classes = useStyles();

	return (
		selectedExtraMenuItems.length !== 0 && (
			<Paper className={classes.selected}>
				<Typography component='h2' variant='h5' color='inherit' noWrap>
					Extra Menu Items
				</Typography>
				{selectedExtraMenuItems.map((extraMenuItem, index) => (
					<List key={extraMenuItem.id}>
						<ListItem className={classes.extraMenuItemsList}>
							<ListItemText primary={extraMenuItem.name} />
							<ListItemSecondaryAction>
								<IconButton
									color='secondary'
									edge='end'
									aria-label='delete'
									onClick={event =>
										removeExtraMenuItem(extraMenuItem.id)
									}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
						{index !== selectedExtraMenuItems.length - 1 && (
							<Divider className={classes.divider} />
						)}
					</List>
				))}
			</Paper>
		)
	);
};

SelectedExtraMenu.propTypes = {
	selectedExtraMenuItems: PropTypes.array.isRequired,
	removeExtraMenu: PropTypes.func.isRequired,
};

export default SelectedExtraMenu;
