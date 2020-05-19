import React from 'react';
import PropTypes from 'prop-types';

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
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default FabButton;
