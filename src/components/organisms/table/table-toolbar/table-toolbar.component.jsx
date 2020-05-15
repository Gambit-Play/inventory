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
import useStyles from '../table.styles';

const TableToolbar = ({
	selected,
	handleDeleteSelected,
	handleSearch,
	label,
}) => {
	const classes = useStyles();
	const numSelected = selected.length;

	const handleChange = event => {
		handleSearch(event.target.value);
	};

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
				<TextField
					id='standard-basic'
					type='search'
					label={label}
					margin='dense'
					onChange={handleChange}
					fullWidth
					className={classes.searchField}
				/>
			)}
			{numSelected > 0 ? (
				<div className={classes.filterIcon}>
					<Tooltip title='Delete'>
						<IconButton
							aria-label='delete'
							onClick={handleDeleteSelected}
						>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</div>
			) : (
				<div className={classes.filterIcon}>
					<Tooltip title='Filter'>
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
	selected: PropTypes.array.isRequired,
	handleDeleteSelected: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

export default TableToolbar;
