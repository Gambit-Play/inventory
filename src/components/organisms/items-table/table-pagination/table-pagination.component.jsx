import React from 'react';

// Mui Components
import TablePagination from '@material-ui/core/TablePagination';

const Pagination = props => {
	const {
		rows,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage,
	} = props;
	return (
		<TablePagination
			rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
			component='div'
			count={rows.length}
			rowsPerPage={rowsPerPage}
			page={page}
			onChangePage={handleChangePage}
			onChangeRowsPerPage={handleChangeRowsPerPage}
		/>
	);
};

export default Pagination;
