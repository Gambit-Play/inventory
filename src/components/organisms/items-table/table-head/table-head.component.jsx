import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// Redux
import { connect } from 'react-redux';
import { selectCurrentItems } from '../../../../redux/items/items.selectors';
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
} from '../../../../redux/handlers/items-table/items-table.selectors';
import {
	setOrderStart,
	setSelectAllStart,
} from '../../../../redux/handlers/items-table/items-table.actions';

// Headcells
import { headCells } from './table-head.cells';

// Mui Components
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
import useStyles from '../items-table.styles';

const ItemsTableHead = props => {
	const {
		items,
		order,
		orderBy,
		selected,
		setOrderStart,
		setSelectAllStart,
	} = props;
	const classes = useStyles();

	const numSelected = selected.length;
	const itemCount = items.length;

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={
							numSelected > 0 && numSelected < itemCount
						}
						checked={itemCount > 0 && numSelected === itemCount}
						onChange={event =>
							setSelectAllStart(event.target.checked)
						}
						inputProps={{ 'aria-label': 'select all items' }}
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
							onClick={event => setOrderStart(headCell.id)}
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
	items: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	selected: PropTypes.array.isRequired,
	setOrderStart: PropTypes.func.isRequired,
	setSelectAllStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	items: selectCurrentItems,
	order: selectOrder,
	orderBy: selectOrderBy,
	selected: selectSelected,
});

const mapStateToDispatch = dispatch => ({
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	setSelectAllStart: event => dispatch(setSelectAllStart(event)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ItemsTableHead);
