import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectIsFetching,
	selectCurrentItems,
} from '../../../redux/items/items.selectors';
import {
	setSearchFieldStart,
	setOrderStart,
	setSelectAllStart,
	setPageStart,
	setRowsPerPageStart,
} from '../../../redux/handlers/items-table/items-table.actions';
import { deleteMultipleItemsStart } from '../../../redux/handlers/item-detail/item-detail.actions';
import {
	selectSelected,
	selectOrder,
	selectOrderBy,
	selectPage,
	selectRowsPerPage,
} from '../../../redux/handlers/items-table/items-table.selectors';

// Headcells
import { headCells } from './table-head.cells';

// Components
import TableToolbar from '../table/table-toolbar/table-toolbar.component';
import TableHead from '../table/table-head/table-head.component';
import TableBody from './table-body/table-body.component';

// Mui Components
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import useStyles from './items-table.styles';

const ItemsTable = props => {
	const {
		isFetching,
		setSearchFieldStart,
		deleteMultipleItemsStart,
		selected,
		items,
		order,
		orderBy,
		setOrderStart,
		setSelectAllStart,
		page,
		rowsPerPage,
		setPageStart,
		setRowsPerPageStart,
	} = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.filterBar}>
				<TableToolbar
					label='Search by name'
					selected={selected}
					handleSearch={setSearchFieldStart}
					handleDeleteSelected={deleteMultipleItemsStart}
				/>
			</Paper>
			<Paper className={classes.paper}>
				{isFetching ? (
					<div className={classes.loaderContainer}>
						<CircularProgress />
					</div>
				) : (
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby='tableTitle'
							// size={dense ? 'small' : 'medium'}
							aria-label='enhanced table'
						>
							<TableHead
								data={items}
								order={order}
								orderBy={orderBy}
								selected={selected}
								setOrderStart={setOrderStart}
								setSelectAllStart={setSelectAllStart}
								headCells={headCells}
							/>
							<TableBody />
						</Table>
					</TableContainer>
				)}
			</Paper>
			<Paper>
				<TablePagination
					rowsPerPageOptions={[
						5,
						10,
						25,
						{ label: 'All', value: -1 },
					]}
					component='div'
					count={items.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={setPageStart}
					onChangeRowsPerPage={setRowsPerPageStart}
				/>
			</Paper>
		</div>
	);
};

ItemsTable.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	setSearchFieldStart: PropTypes.func.isRequired,
	deleteMultipleItemsStart: PropTypes.func.isRequired,
	selected: PropTypes.array.isRequired,
	items: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	setOrderStart: PropTypes.func.isRequired,
	setSelectAllStart: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	setPageStart: PropTypes.func.isRequired,
	setRowsPerPageStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
	selected: selectSelected,
	items: selectCurrentItems,
	order: selectOrder,
	orderBy: selectOrderBy,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapDispatchToProps = dispatch => ({
	setSearchFieldStart: search => dispatch(setSearchFieldStart(search)),
	deleteMultipleItemsStart: () => dispatch(deleteMultipleItemsStart()),
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	setSelectAllStart: event => dispatch(setSelectAllStart(event)),
	setPageStart: (event, page) => dispatch(setPageStart(page)),
	setRowsPerPageStart: event =>
		dispatch(setRowsPerPageStart(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
