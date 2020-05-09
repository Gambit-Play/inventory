import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectItem } from '../../../../redux/handlers/item-detail/item-detail.selectors';
import { updateItemStart } from '../../../../redux/handlers/item-detail/item-detail.actions';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const ItemDetailButton = props => {
	const {
		item: { isNew },
		updateItemStart,
		history,
	} = props;

	const handleUpdate = event => {
		event.preventDefault();

		updateItemStart();
		history.goBack();
	};

	if (isNew) {
		return (
			<Button
				variant='contained'
				color='primary'
				size='small'
				startIcon={<SaveIcon />}
				// onClick={handleSubmit}
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

ItemDetailButton.propTypes = {
	item: PropTypes.shape({
		isNew: PropTypes.bool.isRequired,
	}),
};

const mapStateToProps = createStructuredSelector({
	item: selectItem,
});

const mapStateToDispatch = dispatch => ({
	updateItemStart: () => dispatch(updateItemStart()),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(ItemDetailButton);
