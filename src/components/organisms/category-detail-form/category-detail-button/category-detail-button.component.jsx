import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCategory } from '../../../../redux/handlers/category-detail/category-detail.selectors';
import {
	updateCategoryStart,
	createCategoryStart,
	inputFailure,
} from '../../../../redux/handlers/category-detail/category-detail.actions';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const CategoryDetailButton = props => {
	const {
		category: { isNew, name },
		updateCategoryStart,
		createCategoryStart,
		inputFailure,
		history,
	} = props;

	const handleUpdate = event => {
		event.preventDefault();

		updateCategoryStart();
		history.goBack();
	};

	const handleCreate = event => {
		event.preventDefault();
		if (name === '')
			return inputFailure('errorName', 'Category name is required!');

		createCategoryStart();
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

CategoryDetailButton.propTypes = {
	category: PropTypes.shape({
		isNew: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	}),
	updateCategoryStart: PropTypes.func.isRequired,
	createCategoryStart: PropTypes.func.isRequired,
	inputFailure: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	category: selectCategory,
});

const mapStateToDispatch = dispatch => ({
	updateCategoryStart: () => dispatch(updateCategoryStart()),
	createCategoryStart: () => dispatch(createCategoryStart()),
	inputFailure: (errorType, errorMessage) =>
		dispatch(inputFailure(errorType, errorMessage)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(CategoryDetailButton);
