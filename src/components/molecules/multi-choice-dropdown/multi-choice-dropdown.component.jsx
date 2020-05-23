import React from 'react';
import PropTypes from 'prop-types';

// Mui Components & Icons
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const MultiChoiceDropdown = ({ data, setselectedData }) => {
	const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
	const checkedIcon = <CheckBoxIcon fontSize='small' />;

	const handleChange = (event, values) => {
		const selected = values.map(value => ({
			id: value.id,
			quantity: 0,
		}));
		setselectedData(selected);
	};

	return (
		<Autocomplete
			multiple
			id='checkboxes-tags-demo'
			key={data}
			options={data}
			disableCloseOnSelect
			onChange={handleChange}
			getOptionLabel={option => option.name}
			renderOption={(option, { selected }) => (
				<React.Fragment>
					<Checkbox
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option.name}
				</React.Fragment>
			)}
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
	setselectedData: PropTypes.func.isRequired,
};

export default MultiChoiceDropdown;
