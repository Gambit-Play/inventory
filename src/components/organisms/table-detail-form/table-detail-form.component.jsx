import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectTable } from '../../../redux/handlers/table-detail/table-detail.selectors';
import {
	removeTable,
	setTableStart,
	deleteTableStart,
} from '../../../redux/handlers/table-detail/table-detail.actions';

// Component
import TableDetailButton from './table-detail-button/table-detail-button.component';

// Mui Components & Icons
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';

// Styles
import useStyles from './table-detail-form.styles';

const TableDetailForm = props => {
	const classes = useStyles();
	const {
		table,
		removeTable,
		setTableStart,
		deleteTableStart,
		history,
	} = props;

	useEffect(() => {
		return () => {
			removeTable();
		};
	}, [removeTable]);

	const handleChange = event => {
		const { name, value } = event.target;
		setTableStart(name, value);
	};

	const handleDelete = () => {
		deleteTableStart();
		history.goBack();
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={8}>
				<Paper className={classes.root}>
					<Box display='flex' alignItems='start' paddingBottom={3}>
						<Typography
							component='h2'
							variant='h5'
							color='inherit'
							noWrap
						>
							Basic Info
						</Typography>
						{!table.isNew && (
							<Button
								variant='contained'
								color='secondary'
								size='small'
								className={classes.deleteButton}
								startIcon={<DeleteIcon />}
								onClick={handleDelete}
							>
								Delete
							</Button>
						)}
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField
								id='name'
								name='name'
								label='Name'
								value={table.name}
								fullWidth
								color='primary'
								helperText={table.errorName}
								error={table.errorName ? true : false}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Box display='flex' paddingTop={5}>
						<TableDetailButton />
						<Button
							variant='contained'
							className={classes.cancelButton}
							size='small'
							startIcon={<BlockIcon />}
							onClick={history.goBack}
						>
							Cancel
						</Button>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

TableDetailForm.propTypes = {
	table: PropTypes.object.isRequired,
	removeTable: PropTypes.func.isRequired,
	setTableStart: PropTypes.func.isRequired,
	deleteTableStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	table: selectTable,
});

const mapStateToDispatch = dispatch => ({
	removeTable: () => dispatch(removeTable()),
	setTableStart: (inputName, value) =>
		dispatch(setTableStart(inputName, value)),
	deleteTableStart: () => dispatch(deleteTableStart()),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableDetailForm);
