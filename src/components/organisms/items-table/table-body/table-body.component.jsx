import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Utils
import { formatDate } from '../../../../utils/global.utils';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
	selectSelected,
	selectPage,
	selectRowsPerPage,
	selectFilteredItems,
} from '../../../../redux/handlers/items-table/items-table.selectors';
import { fetchItemStart } from '../../../../redux/handlers/item-detail/item-detail.actions';
import { setSelectStart } from '../../../../redux/handlers/items-table/items-table.actions';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TableBody = props => {
	const {
		items,
		selected,
		page,
		rowsPerPage,
		history,
		fetchItemStart,
		setSelectStart,
	} = props;

	const isSelected = id => selected.indexOf(id) !== -1;

	const handleRowClick = (event, rowId) => {
		fetchItemStart(rowId);
		history.push(`${ROUTES.ITEMS_LIST}/${rowId}`);
	};

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? items.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: items
			).map((row, index) => {
				const isItemSelected = isSelected(row.id);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						aria-checked={isItemSelected}
						tabIndex={-1}
						key={row.id}
						selected={isItemSelected}
					>
						<TableCell padding='checkbox'>
							<Checkbox
								checked={isItemSelected}
								onClick={event => setSelectStart(row.id)}
								inputProps={{
									'aria-labelledby': labelId,
								}}
							/>
						</TableCell>
						<TableCell
							component='th'
							id={labelId}
							scope='row'
							padding='none'
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.name}
						</TableCell>
						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							€{parseFloat(row.price).toFixed(2)}
						</TableCell>
						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.quantity}
						</TableCell>
						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							{!isNaN(row.cost) &&
								`€${parseFloat(row.cost).toFixed(2)}`}
						</TableCell>
						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.unit}
						</TableCell>

						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.createdBy}
						</TableCell>
						<TableCell
							align='right'
							onClick={event => handleRowClick(event, row.id)}
						>
							{formatDate(row.createdAt)}
						</TableCell>
					</TableRow>
				);
			})}
		</MuiTableBody>
	);
};

TableBody.propTypes = {
	items: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	fetchItemStart: PropTypes.func.isRequired,
	setSelectStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	items: selectFilteredItems,
	selected: selectSelected,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapStateToDispatch = dispatch => ({
	fetchItemStart: rowId => dispatch(fetchItemStart(rowId)),
	setSelectStart: selectedId => dispatch(setSelectStart(selectedId)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableBody);
