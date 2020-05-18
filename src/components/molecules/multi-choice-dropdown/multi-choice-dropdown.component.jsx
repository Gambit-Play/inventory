import React from 'react';
import PropTypes from 'prop-types';

// Mui Components & Icons
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const MultiChoiceDropdown = ({ data, setselectedItemsIdStart }) => {
	const handleChange = (event, value) => {
		setselectedItemsIdStart(value ? value.id : '');
	};

	return (
		<Autocomplete
			id='checkboxes-tags-demo'
			key={data}
			options={data}
			onChange={handleChange}
			getOptionLabel={option => option.name}
			renderInput={params => (
				<TextField
					{...params}
					variant='standard'
					label='Ingredients'
					placeholder='Search'
				/>
			)}
		/>
	);
};

MultiChoiceDropdown.propTypes = {
	data: PropTypes.array.isRequired,
	setselectedItemsIdStart: PropTypes.func.isRequired,
};

export default MultiChoiceDropdown;
