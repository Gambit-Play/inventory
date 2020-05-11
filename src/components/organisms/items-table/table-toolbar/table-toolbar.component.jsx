import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelected } from '../../../../redux/handlers/items-table/items-table.selectors';
import { deleteMultipleItemsStart } from '../../../../redux/handlers/item-detail/item-detail.actions';
import {} from '../../../../redux/items/items.actions';

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
	const { selected, deleteMultipleItemsStart } = props;
	const numSelected = selected.length;

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
				<React.Fragment>
					<Typography
						className={classes.title}
						variant='h6'
						id='tableTitle'
					>
						Items
					</Typography>
					<TextField
						id='standard-basic'
						label='Search'
						variant='outlined'
						margin='dense'
						fullWidth
						className={classes.searchField}
					/>
				</React.Fragment>
			)}

			{numSelected > 0 ? (
				<div className={classes.filterIcon}>
					<Tooltip title='Delete'>
						<IconButton
							aria-label='delete'
							onClick={deleteMultipleItemsStart}
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
	deleteMultipleItemsStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	selected: selectSelected,
});

const mapDispatchToProps = dispatch => ({
	deleteMultipleItemsStart: () => dispatch(deleteMultipleItemsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableToolbar);
