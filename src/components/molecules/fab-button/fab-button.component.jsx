import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux
import { isNew } from '../../../redux/handlers/item-detail/item-detail.actions';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import Fab from './fab-button.styles';

// Mui Components & Icons
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const FabButton = props => {
	const { history, isNew, url, title } = props;

	const handleClick = () => {
		isNew();
		history.push(url);
	};

	return (
		<Tooltip title={title}>
			<Fab color='secondary' aria-label='add' onClick={handleClick}>
				<AddIcon />
			</Fab>
		</Tooltip>
	);
};

FabButton.propTypes = {
	history: PropTypes.object.isRequired,
	isNew: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	isNew: () => dispatch(isNew()),
});

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(FabButton);
