import React from 'react';

// Components
// import EnhancedTableHead from '../Lists/EnhancedTable/EnhancedTableHead.Component';
// import EnhancedTableToolbar from '../Lists/EnhancedTable/EnhancedTableToolbar.Component';
// import EnhancedTableBody from '../Lists/EnhancedTable/EnhancedTableBody.Component';
import TableToolbar from './table-toolbar/table-toolbar.component';
import TableHead from './table-head/table-head.component';
import TableBody from './table-body/table-body.component';

// Mui Components
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import useStyles from './items-table.styles';

const ItemsTable = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.filterBar}>
				<TableToolbar
					// numSelected={selected.length}
					items
				/>
			</Paper>
			<Paper className={classes.paper}>
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
			</Paper>
			<Paper></Paper>
		</div>
	);
};

export default ItemsTable;
