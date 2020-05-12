import React from 'react';
import { connect } from 'react-redux';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ItemDetailDropdown = () => {
	return (
		<FormControl>
			<InputLabel id='select-label'>Age</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				// value={age}
				// onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
};

export default connect()(ItemDetailDropdown);
