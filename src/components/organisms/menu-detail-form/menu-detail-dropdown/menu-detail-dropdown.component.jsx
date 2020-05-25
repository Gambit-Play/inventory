import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCurrentCategories } from '../../../../redux/categories/categories.selectors';
import { selectMenu } from '../../../../redux/handlers/menu-detail/menu-detail.selectors';
import { setCategory } from '../../../../redux/handlers/menu-detail/menu-detail.actions';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MenuDetailDropdown = props => {
	const { currentCategories, menu, setCategory } = props;

	const handleChange = event => {
		const category = currentCategories.find(
			category => category.id === event.target.value
		);
		setCategory(category.id, category.name);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id='select-label'>Category</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				value={menu.categoryId}
				onChange={handleChange}
			>
				{currentCategories.map(category => (
					<MenuItem key={category.id} value={category.id}>
						{category.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

MenuDetailDropdown.propTypes = {
	currentCategories: PropTypes.array.isRequired,
	menu: PropTypes.object.isRequired,
	setCategory: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	currentCategories: selectCurrentCategories,
	menu: selectMenu,
});

const mapDispatchToProps = dispatch => ({
	setCategory: (categoryId, category) =>
		dispatch(setCategory(categoryId, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetailDropdown);
