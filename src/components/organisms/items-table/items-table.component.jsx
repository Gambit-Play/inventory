import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../../redux/items/items.selectors';

// Components
import TableToolbar from './table-toolbar/table-toolbar.component';
import TableHead from './table-head/table-head.component';
import TableBody from './table-body/table-body.component';
import TablePagination from './table-pagination/table-pagination.component';

// Mui Components
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import useStyles from './items-table.styles';

const ItemsTable = ({ isFetching }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.filterBar}>
				<TableToolbar />
			</Paper>
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
							<TableHead />
							<TableBody />
						</Table>
					</TableContainer>
				)}
			</Paper>
			<Paper>
				<TablePagination />
			</Paper>
		</div>
	);
};

ItemsTable.propTypes = {
	isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
});

export default connect(mapStateToProps)(ItemsTable);
