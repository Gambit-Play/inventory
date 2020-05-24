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
	selectFilteredCategories,
} from '../../../../redux/handlers/categories-table/categories-table.selectors';
// import { fetchCategoryStart } from '../../../../redux/handlers/category-detail/category-detail.actions';
import { setSelectStart } from '../../../../redux/handlers/categories-table/categories-table.actions';

// Routes
import * as ROUTES from '../../../../routes/routes';

import MuiTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
import useStyles from '../categories-table.styles';

const TableBody = props => {
	const {
		categories,
		selected,
		page,
		rowsPerPage,
		history,
		// fetchCategoryStart,
		setSelectStart,
	} = props;
	const classes = useStyles();

	const isSelected = id => selected.indexOf(id) !== -1;

	const handleRowClick = (event, rowId) => {
		// fetchCategoryStart(rowId);
		history.push(`${ROUTES.CATEGORIES_LIST}/${rowId}`);
	};

	return (
		<MuiTableBody>
			{(rowsPerPage > 0
				? categories.slice(
						page * rowsPerPage,
						page * rowsPerPage + rowsPerPage
				  )
				: categories
			).map((row, index) => {
				const isCategorySelected = isSelected(row.id);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						hover
						aria-checked={isCategorySelected}
						tabIndex={-1}
						key={row.id}
						selected={isCategorySelected}
					>
						<TableCell padding='checkbox'>
							<Checkbox
								checked={isCategorySelected}
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
							onClick={event => handleRowClick(event, row.id)}
						>
							{row.name}
						</TableCell>
					</TableRow>
				);
			})}
		</MuiTableBody>
	);
};

TableBody.propTypes = {
	categories: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	// fetchCategoryStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	setSelectStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	categories: selectFilteredCategories,
	selected: selectSelected,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapStateToDispatch = dispatch => ({
	// fetchCategoryStart: rowId => dispatch(fetchCategoryStart(rowId)),
	setSelectStart: selectedId => dispatch(setSelectStart(selectedId)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableBody);
