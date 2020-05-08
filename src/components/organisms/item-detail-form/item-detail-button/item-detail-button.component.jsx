import React from 'react';
import PropTypes from 'prop-types';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';

const ItemDetailButton = ({ isNew }) => {
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
				// onClick={handleSubmit}
			>
				Update
			</Button>
		);
	}
};

ItemDetailButton.propTypes = {
	isNew: PropTypes.bool.isRequired,
};

export default ItemDetailButton;
