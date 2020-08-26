import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectIsFetching } from '../../../redux/orders/orders.selectors';
import {
	selectOrderTable,
	selectOrder,
	selectOrderBy,
	selectPage,
	selectRowsPerPage,
} from '../../../redux/handlers/orders-table/orders-table.selectors';
import {
	setOrderStart,
	fetchOrdersTableStart,
	setPageStart,
	setRowsPerPageStart,
} from '../../../redux/handlers/orders-table/orders-table.actions';

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
import useStyles from './orders-table.styles';

const OrdersTable = ({
	isFetching,
	setOrderStart,
	fetchOrdersTableStart,
	orders,
	order,
	orderBy,
	page,
	rowsPerPage,
	setPageStart,
	setRowsPerPageStart,
}) => {
	const classes = useStyles();

	useEffect(() => {
		fetchOrdersTableStart();
		return () => {
			// Cleanup
		};
	}, [fetchOrdersTableStart]);

	return (
		<div className={classes.root}>
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
								data={orders}
								order={order}
								orderBy={orderBy}
								headCells={headCells}
								setOrderStart={setOrderStart}
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
					count={orders.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={setPageStart}
					onChangeRowsPerPage={setRowsPerPageStart}
				/>
			</Paper>
		</div>
	);
};

OrdersTable.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	setOrderStart: PropTypes.func.isRequired,
	fetchOrdersTableStart: PropTypes.func.isRequired,
	orders: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	setPageStart: PropTypes.func.isRequired,
	setRowsPerPageStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
	orders: selectOrderTable,
	order: selectOrder,
	orderBy: selectOrderBy,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapDispatchToProps = dispatch => ({
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	fetchOrdersTableStart: () => dispatch(fetchOrdersTableStart()),
	setPageStart: (event, page) => dispatch(setPageStart(page)),
	setRowsPerPageStart: event =>
		dispatch(setRowsPerPageStart(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);
