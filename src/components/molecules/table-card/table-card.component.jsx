import React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentTables } from '../../../redux/tables/tables.selectors';
import { setTableIdStart } from '../../../redux/handlers/order-form/order-form.actions';

// Mui Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

// Styles
import useStyles from './table-card.styles';

const SelectTable = ({ tables, setTableIdStart }) => {
	const classes = useStyles();
	const { path } = useRouteMatch();

	const TableStatus = props => {
		const classes = useStyles();
		const { status } = props;

		if (status === 'waiting')
			return <Box className={classes.statusWaiting} />;
		if (status === 'served')
			return <Box className={classes.statusServed} />;
		if (status === '') return <Box className={classes.status} />;
	};

	return (
		<Grid container spacing={3}>
			{tables.map(table => (
				<Grid item key={table.id}>
					<ButtonBase
						component={Link}
						to={`${path}/${table.id}`}
						onClick={event => setTableIdStart(table.id)}
					>
						<Paper className={classes.paper}>
							<Typography
								align='center'
								className={classes.tableName}
							>
								Table
							</Typography>
							<Typography
								align='center'
								className={classes.tableNumber}
							>
								{table.name}
							</Typography>
							<TableStatus status={table.status} />
						</Paper>
					</ButtonBase>
				</Grid>
			))}
		</Grid>
	);
};

SelectTable.propTypes = {
	tables: PropTypes.array.isRequired,
	setTableIdStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	tables: selectCurrentTables,
});

const mapDispatchToProps = dispatch => ({
	setTableIdStart: tableId => dispatch(setTableIdStart(tableId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTable);
