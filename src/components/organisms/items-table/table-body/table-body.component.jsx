import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentItems } from '../../../../redux/items/items.selectors';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const TableBody = props => {
	const { items, history, itemsTotal } = props;
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('name');
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [dense, setDense] = useState(false);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const isSelected = name => selected.indexOf(name) !== -1;

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? items.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: items
			).map((row, index) => {
				const isItemSelected = isSelected(row.name);
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
								// onClick={event => handleClick(event, row.name)}
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

// TableBody.propTypes = {
// 	order: PropTypes.string.isRequired,
// 	orderBy: PropTypes.string.isRequired,
// 	page: PropTypes.number.isRequired,
// 	dense: PropTypes.bool.isRequired,
// 	rowsPerPage: PropTypes.number.isRequired,
// 	rows: PropTypes.array.isRequired,
// 	selected: PropTypes.array.isRequired,
// 	setSelected: PropTypes.func.isRequired,
// 	history: PropTypes.object.isRequired,
// 	items: PropTypes.bool,
// 	menus: PropTypes.bool,
// 	itemsTotal: PropTypes.number.isRequired,
// };

const mapStateToProps = createStructuredSelector({
	items: selectCurrentItems,
});

export default compose(withRouter, connect(mapStateToProps))(TableBody);
