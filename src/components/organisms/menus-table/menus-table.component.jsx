import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectIsFetching,
	selectCurrentMenus,
} from '../../../redux/menus/menus.selectors';
import {
	setSearchFieldStart,
	setOrderStart,
	setSelectAllStart,
	setPageStart,
	setRowsPerPageStart,
} from '../../../redux/handlers/menus-table/menus-table.actions';
import {
	selectSelected,
	selectOrder,
	selectOrderBy,
	selectPage,
	selectRowsPerPage,
	selectSearchField,
} from '../../../redux/handlers/menus-table/menus-table.selectors';
import { deleteMultipleMenusStart } from '../../../redux/handlers/menu-detail/menu-detail.actions';

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
import useStyles from './menus-table.styles';

const MenusTable = props => {
	const {
		isFetching,
		setSearchFieldStart,
		deleteMultipleMenusStart,
		selected,
		menus,
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
					handleDeleteSelected={deleteMultipleMenusStart}
					searchField={searchField}
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
								data={menus}
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
					count={menus.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={setPageStart}
					onChangeRowsPerPage={setRowsPerPageStart}
				/>
			</Paper>
		</div>
	);
};

MenusTable.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	setSearchFieldStart: PropTypes.func.isRequired,
	deleteMultipleMenusStart: PropTypes.func.isRequired,
	selected: PropTypes.array.isRequired,
	menus: PropTypes.array.isRequired,
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
	menus: selectCurrentMenus,
	order: selectOrder,
	orderBy: selectOrderBy,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
	searchField: selectSearchField,
});

const mapDispatchToProps = dispatch => ({
	setSearchFieldStart: search => dispatch(setSearchFieldStart(search)),
	deleteMultipleMenusStart: () => dispatch(deleteMultipleMenusStart()),
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	setSelectAllStart: event => dispatch(setSelectAllStart(event)),
	setPageStart: (event, page) => dispatch(setPageStart(page)),
	setRowsPerPageStart: event =>
		dispatch(setRowsPerPageStart(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusTable);
