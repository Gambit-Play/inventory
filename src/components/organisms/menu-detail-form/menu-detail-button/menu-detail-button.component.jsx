import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectMenu } from '../../../../redux/handlers/menu-detail/menu-detail.selectors';
import {
	updateMenuStart,
	createMenuStart,
	inputFailure,
} from '../../../../redux/handlers/menu-detail/menu-detail.actions';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const MenuDetailButton = props => {
	const {
		menu: { isNew, name },
		updateMenuStart,
		createMenuStart,
		inputFailure,
		history,
	} = props;

	const handleUpdate = event => {
		event.preventDefault();

		updateMenuStart();
		history.goBack();
	};

	const handleCreate = event => {
		event.preventDefault();
		if (name === '')
			return inputFailure('errorName', 'Menu name is required!');

		createMenuStart();
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

MenuDetailButton.propTypes = {
	menu: PropTypes.shape({
		isNew: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	}),
	updateMenuStart: PropTypes.func.isRequired,
	createMenuStart: PropTypes.func.isRequired,
	inputFailure: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	menu: selectMenu,
});

const mapStateToDispatch = dispatch => ({
	updateMenuStart: () => dispatch(updateMenuStart()),
	createMenuStart: () => dispatch(createMenuStart()),
	inputFailure: (errorType, errorMessage) =>
		dispatch(inputFailure(errorType, errorMessage)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(MenuDetailButton);
