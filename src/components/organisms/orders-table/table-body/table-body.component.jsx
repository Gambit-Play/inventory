import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Utils
import { normalizeString } from '../../../../utils/global.utils';

// Redux
import {
	selectPage,
	selectRowsPerPage,
	selectOrderTable,
} from '../../../../redux/handlers/orders-table/orders-table.selectors';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Styles
import useStyles from '../orders-table.styles';

const TableBody = ({ orders, page, rowsPerPage, history }) => {
	const classes = useStyles();

	// const handleRowClick = (event, rowId) => {
	// 	fetchMenuStart(rowId);
	// 	history.push(`${ROUTES.MENUS_LIST}/${rowId}`);
	// };

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? orders.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: orders
			).map((row, index) => {
				return (
					<TableRow hover tabIndex={-1} key={row.id}>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							€{parseFloat(row.totalPrice).toFixed(2)}
						</TableCell>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							{normalizeString(row.orderStatus)}
						</TableCell>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							{row.createdBy}
						</TableCell>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							{row.createdAt}
						</TableCell>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							{row.updatedBy}
						</TableCell>
						<TableCell
							align='right'
							// FIXME: Apply new handler
							//onClick={event => handleRowClick(event, row.id)}
						>
							{row.updatedAt}
						</TableCell>
					</TableRow>
				);
			})}
		</MuiTableBody>
	);
};

TableBody.propTypes = {
	orders: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	orders: selectOrderTable,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

// const mapStateToDispatch = dispatch => ({
// 	fetchMenuStart: rowId => dispatch(fetchMenuStart(rowId)),
// 	setSelectStart: selectedId => dispatch(setSelectStart(selectedId)),
// });

export default compose(withRouter, connect(mapStateToProps))(TableBody);
