import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentItems } from '../../../../redux/items/items.selectors';
import {
	selectPage,
	selectRowsPerPage,
} from '../../../../redux/handlers/items-table/items-table.selectors';
import {
	setPageStart,
	setRowsPerPageStart,
} from '../../../../redux/handlers/items-table/items-table.actions';

// Mui Components
import TablePagination from '@material-ui/core/TablePagination';

const Pagination = props => {
	const {
		items,
		rowsPerPage,
		page,
		setPageStart,
		setRowsPerPageStart,
	} = props;

	return (
		<TablePagination
			rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
			component='div'
			count={items.length}
			rowsPerPage={rowsPerPage}
			page={page}
			onChangePage={setPageStart}
			onChangeRowsPerPage={setRowsPerPageStart}
		/>
	);
};

Pagination.propTypes = {
	items: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	setPageStart: PropTypes.func.isRequired,
	setRowsPerPageStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	items: selectCurrentItems,
	page: selectPage,
	rowsPerPage: selectRowsPerPage,
});

const mapStateToDispatch = dispatch => ({
	setPageStart: (event, page) => dispatch(setPageStart(page)),
	setRowsPerPageStart: event =>
		dispatch(setRowsPerPageStart(event.target.value)),
});

export default connect(mapStateToProps, mapStateToDispatch)(Pagination);
