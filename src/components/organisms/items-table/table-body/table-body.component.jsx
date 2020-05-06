import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentItems } from '../../../../redux/items/items.selectors';
import {
	selectSelected,
	selectPage,
	selectRowsPerPage,
} from '../../../../redux/handlers/items-table/items-table.selectors';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TableBody = props => {
	const { items, selected, page, rowsPerPage } = props;

	const isSelected = id => selected.indexOf(id) !== -1;

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
								// onClick={event => handleClick(event, row.id)}
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
							// onClick={event => handleRowClick(event, row.id)}
						>
							{row.name}
						</TableCell>
						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							€{parseFloat(row.price).toFixed(2)}
						</TableCell>
						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							{row.quantity}
						</TableCell>
						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							{!isNaN(row.cost) &&
								`€${parseFloat(row.cost).toFixed(2)}`}
						</TableCell>
						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							{row.unit}
						</TableCell>

						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							{row.createdBy}
						</TableCell>
						<TableCell
							align='right'
							// onClick={event => handleRowClick(event, row.id)}
						>
							{row.createdAt}
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
};

const mapStateToProps = createStructuredSelector({
	items: selectCurrentItems,
	selected: selectSelected,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

export default compose(withRouter, connect(mapStateToProps))(TableBody);
