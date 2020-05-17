import React from 'react';
import PropTypes from 'prop-types';

// Mui Components & Icons
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const MultiChoiceDropdown = ({ data, setMenuIngridientsStart }) => {
	const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
	const checkedIcon = <CheckBoxIcon fontSize='small' />;

	const handleChange = (event, value) => {
		const res = value.map(item => item.id);
		setMenuIngridientsStart(res);
	};

	return (
		<Autocomplete
			multiple
			id='checkboxes-tags-demo'
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
	setMenuIngridientsStart: PropTypes.func.isRequired,
};

export default MultiChoiceDropdown;
