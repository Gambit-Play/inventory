import React, { useState } from 'react';
import PropTypes from 'prop-types';
import orderData from 'lodash/orderBy';
import { createStructuredSelector } from 'reselect';

// Redux
import { connect } from 'react-redux';
import { selectCurrentItems } from '../../../../redux/items/items.selectors';
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
} from '../../../../redux/items-table/items-table.selectors';
import { setOrderStart } from '../../../../redux/items-table/items-table.actions';

// Headcells
import { headCells } from './table-head.cells';

// Mui Components
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Global Utils
import { updateDataWithUsersName } from '../../../../utils/global-utils';

// Styles
import useStyles from '../items-table.styles';

const ItemsTableHead = props => {
	const { items, order, orderBy, selected, setOrderStart } = props;
	const classes = useStyles();

	const numSelected = selected.length;
	const itemCount = items.length;

	// FIXME: I might need to move the function below to the table body
	// const rows = () => {
	// 	const sorter =
	// 		orderBy === 'price' || orderBy === 'cost'
	// 			? orderBy
	// 			: item => {
	// 					return item[orderBy].toLowerCase();
	// 			  };

	// 	const updatedItems = items.map(item =>
	// 		updateDataWithUsersName(allUsers, item)
	// 	);

	// 	return orderData(updatedItems, [sorter], order);
	// };

	const handleRequestSort = property => event => {
		setOrderStart(property);
	};

	// const handleSelectAllClick = event => {
	// 	if (event.target.checked) {
	// 		const newSelecteds = items.map(item => item.name);
	// 		setSelected(newSelecteds);
	// 		return;
	// 	}
	// 	setSelected([]);
	// };

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={
							numSelected > 0 && numSelected < itemCount
						}
						checked={itemCount > 0 && numSelected === itemCount}
						// onChange={handleSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={handleRequestSort(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc'
										? 'sorted descending'
										: 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

ItemsTableHead.propTypes = {
	items: PropTypes.array,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	selected: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
	items: selectCurrentItems,
	order: selectOrder,
	orderBy: selectOrderBy,
	selected: selectSelected,
});

const mapStateToDispatch = dispatch => ({
	setOrderStart: name => dispatch(setOrderStart(name)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ItemsTableHead);
