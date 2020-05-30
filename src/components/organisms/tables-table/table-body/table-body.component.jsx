import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectSelected,
	selectPage,
	selectRowsPerPage,
	selectFilteredTables,
} from '../../../../redux/handlers/tables-table/tables-table.selectors';
import { fetchTableStart } from '../../../../redux/handlers/table-detail/table-detail.actions';
import { setSelectStart } from '../../../../redux/handlers/tables-table/tables-table.actions';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
import useStyles from '../tables-table.styles';

const TableBody = props => {
	const {
		tables,
		selected,
		page,
		rowsPerPage,
		history,
		fetchTableStart,
		setSelectStart,
	} = props;
	const classes = useStyles();

	const isSelected = id => selected.indexOf(id) !== -1;

	const handleRowClick = (event, rowId) => {
		fetchTableStart(rowId);
		history.push(`${ROUTES.TABLES_LIST}/${rowId}`);
	};

	console.log(tables);

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? tables.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: tables
			).map((row, index) => {
				const isTableSelected = isSelected(row.id);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						aria-checked={isTableSelected}
						tabIndex={-1}
						key={row.id}
						selected={isTableSelected}
					>
						<TableCell padding='checkbox'>
							<Checkbox
								checked={isTableSelected}
								onClick={event => setSelectStart(row.id)}
								inputProps={{
									'aria-labelledby': labelId,
								}}
							/>
						</TableCell>
						<TableCell
							className={classes.name}
							component='th'
							id={labelId}
							scope='row'
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.name}
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
							{row.createdAt}
						</TableCell>
					</TableRow>
				);
			})}
		</MuiTableBody>
	);
};

TableBody.propTypes = {
	tables: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	fetchTableStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	setSelectStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	tables: selectFilteredTables,
	selected: selectSelected,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapStateToDispatch = dispatch => ({
	fetchTableStart: rowId => dispatch(fetchTableStart(rowId)),
	setSelectStart: selectedId => dispatch(setSelectStart(selectedId)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableBody);
