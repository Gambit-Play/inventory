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
} from '../../../redux/handlers/orders-table/orders-table.selectors';
import {
	setOrderStart,
	fetchOrdersTableStart,
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
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
	orders: selectOrderTable,
	order: selectOrder,
	orderBy: selectOrderBy,
});

const mapDispatchToProps = dispatch => ({
	setOrderStart: columnName => dispatch(setOrderStart(columnName)),
	fetchOrdersTableStart: () => dispatch(fetchOrdersTableStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);
