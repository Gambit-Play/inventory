import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectIsFetching,
	selectCurrentCategories,
} from '../../../redux/categories/categories.selectors';
import {
	setSearchFieldStart,
	setOrderStart,
	setSelectAllStart,
	setPageStart,
	setRowsPerPageStart,
} from '../../../redux/handlers/categories-table/categories-table.actions';
import {
	selectSelected,
	selectOrder,
	selectOrderBy,
	selectPage,
	selectRowsPerPage,
	selectSearchField,
} from '../../../redux/handlers/categories-table/categories-table.selectors';
import { deleteMultipleCategoriesStart } from '../../../redux/handlers/category-detail/category-detail.actions';

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
import useStyles from './categories-table.styles';

const CategoriesTable = props => {
	const {
		isFetching,
		setSearchFieldStart,
		deleteMultipleCategoriesStart,
		selected,
		categories,
		order,
		orderBy,
		setOrderStart,
		setSelectAllStart,
		page,
		rowsPerPage,
		setPageStart,
		setRowsPerPageStart,
		searchField,
	} = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.filterBar}>
				<TableToolbar
					label='Search by name'
					selected={selected}
					handleSearch={setSearchFieldStart}
					searchField={searchField}
					handleDeleteSelected={deleteMultipleCategoriesStart}
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
								data={categories}
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
					count={categories.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={setPageStart}
					onChangeRowsPerPage={setRowsPerPageStart}
				/>
			</Paper>
		</div>
	);
};

CategoriesTable.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	setSearchFieldStart: PropTypes.func.isRequired,
	deleteMultipleCategoriesStart: PropTypes.func.isRequired,
	selected: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	setOrderStart: PropTypes.func.isRequired,
	setSelectAllStart: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	setPageStart: PropTypes.func.isRequired,
	setRowsPerPageStart: PropTypes.func.isRequired,
	searchField: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
	selected: selectSelected,
	categories: selectCurrentCategories,
	order: selectOrder,
	orderBy: selectOrderBy,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
	searchField: selectSearchField,
});

const mapDispatchToProps = dispatch => ({
	setSearchFieldStart: search => dispatch(setSearchFieldStart(search)),
	deleteMultipleCategoriesStart: () =>
		dispatch(deleteMultipleCategoriesStart()),
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	setSelectAllStart: event => dispatch(setSelectAllStart(event)),
	setPageStart: (event, page) => dispatch(setPageStart(page)),
	setRowsPerPageStart: event =>
		dispatch(setRowsPerPageStart(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTable);
