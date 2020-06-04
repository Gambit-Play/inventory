import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentTables } from '../../../redux/tables/tables.selectors';

// Mui Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

// Styles
import useStyles from './table-card.styles';

const SelectTable = ({ tables }) => {
	const classes = useStyles();

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
					<ButtonBase>
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
};

const mapStateToProps = createStructuredSelector({
	tables: selectCurrentTables,
});

export default connect(mapStateToProps)(SelectTable);
