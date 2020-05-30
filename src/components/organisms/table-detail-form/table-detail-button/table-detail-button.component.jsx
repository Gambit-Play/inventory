import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectTable } from '../../../../redux/handlers/table-detail/table-detail.selectors';
import {
	updateTableStart,
	createTableStart,
	inputFailure,
} from '../../../../redux/handlers/table-detail/table-detail.actions';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const TableDetailButton = props => {
	const {
		table: { isNew, name },
		updateTableStart,
		createTableStart,
		inputFailure,
		history,
	} = props;

	const handleUpdate = event => {
		event.preventDefault();

		updateTableStart();
		history.goBack();
	};

	const handleCreate = event => {
		event.preventDefault();
		if (name === '')
			return inputFailure('errorName', 'Table name is required!');

		createTableStart();
		history.goBack();
	};

	if (isNew) {
		return (
			<Button
				variant='contained'
				color='primary'
				size='small'
				startIcon={<SaveIcon />}
				onClick={handleCreate}
			>
				Save
			</Button>
		);
	}
	if (!isNew) {
		return (
			<Button
				variant='contained'
				color='primary'
				size='small'
				startIcon={<SaveIcon />}
				onClick={handleUpdate}
			>
				Update
			</Button>
		);
	}
};

TableDetailButton.propTypes = {
	table: PropTypes.shape({
		isNew: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	}),
	updateTableStart: PropTypes.func.isRequired,
	createTableStart: PropTypes.func.isRequired,
	inputFailure: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	table: selectTable,
});

const mapStateToDispatch = dispatch => ({
	updateTableStart: () => dispatch(updateTableStart()),
	createTableStart: () => dispatch(createTableStart()),
	inputFailure: (errorType, errorMessage) =>
		dispatch(inputFailure(errorType, errorMessage)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(TableDetailButton);
