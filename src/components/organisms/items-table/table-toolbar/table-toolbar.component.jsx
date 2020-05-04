import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Mui Components & Icons
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

// Styles
import useStyles from '../items-table.styles';

const TableToolbar = props => {
	const classes = useStyles();
	const { numSelected, items, menus } = props;

	return (
		<Toolbar
			className={clsx(classes.toolbar, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography
					className={classes.title}
					color='inherit'
					variant='subtitle1'
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					className={classes.title}
					variant='h6'
					id='tableTitle'
				>
					{items && 'Items'}
					{menus && 'Menus'}
				</Typography>
			)}
			<TextField
				id='standard-basic'
				label='Search'
				variant='outlined'
				margin='dense'
				fullWidth
				className={classes.searchField}
			/>
			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton aria-label='delete'>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<div className={classes.filterIcon}>
					<Tooltip title='Filter list'>
						<IconButton aria-label='filter list'>
							<FilterListIcon />
						</IconButton>
					</Tooltip>
				</div>
			)}
		</Toolbar>
	);
};

TableToolbar.propTypes = {
	// numSelected: PropTypes.number.isRequired,
};

export default TableToolbar;
