import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// Utils
import { formatDate } from '../../../../utils/global.utils';

// Redux
import {
	selectSelected,
	selectPage,
	selectRowsPerPage,
	selectFilteredMenus,
} from '../../../../redux/handlers/menus-table/menus-table.selectors';
import { fetchMenuStart } from '../../../../redux/handlers/menu-detail/menu-detail.actions';
import { setSelectStart } from '../../../../redux/handlers/menus-table/menus-table.actions';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
import useStyles from '../menus-table.styles';

const TableBody = props => {
	const {
		menus,
		selected,
		page,
		rowsPerPage,
		history,
		fetchMenuStart,
		setSelectStart,
	} = props;
	const classes = useStyles();

	const isSelected = id => selected.indexOf(id) !== -1;

	const handleRowClick = (event, rowId) => {
		fetchMenuStart(rowId);
		history.push(`${ROUTES.MENUS_LIST}/${rowId}`);
	};

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? menus.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: menus
			).map((row, index) => {
				const isMenuSelected = isSelected(row.id);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						aria-checked={isMenuSelected}
						tabIndex={-1}
						key={row.id}
						selected={isMenuSelected}
					>
						<TableCell padding='checkbox'>
							<Checkbox
								checked={isMenuSelected}
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
							className={classes.rowDescription}
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.description}
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
	menus: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	fetchMenuStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	setSelectStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	menus: selectFilteredMenus,
	selected: selectSelected,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapStateToDispatch = dispatch => ({
	fetchMenuStart: rowId => dispatch(fetchMenuStart(rowId)),
	setSelectStart: selectedId => dispatch(setSelectStart(selectedId)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableBody);
