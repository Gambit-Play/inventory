import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// // Redux
// import { selectCurrentCategories } from '../../../../redux/categories/categories.selectors';
// import { selectMenu } from '../../../../redux/handlers/menu-detail/menu-detail.selectors';
// import { setCategory } from '../../../../redux/handlers/menu-detail/menu-detail.actions';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MenuListDropdown = ({ extraMenuItemsId, setExtraMenuItem }) => {
	console.log('@@ OrderCard - props:');

	// const handleChange = event => {
	// 	const extraItem = extraMenuItemsId.find(
	// 		extraItem => extraItem.id === event.target.value
	// 	);
	// 	setExtraMenuItem(extraItem.id, extraItem.name);
	// };

	return (
		<FormControl fullWidth>
			<InputLabel id='select-label'>Select</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				value={'None'}
				// onChange={handleChange}
			>
				{extraMenuItemsId.map(extraItem => (
					<MenuItem key={extraItem.id} value={extraItem.id}>
						{extraItem.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

MenuListDropdown.propTypes = {
	extraMenuItemsId: PropTypes.array.isRequired,
	setExtraMenuItem: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
// 	currentCategories: selectCurrentCategories,
// 	menu: selectMenu,
// });

// const mapDispatchToProps = dispatch => ({
// 	setCategory: (categoryId, category) =>
// 		dispatch(setCategory(categoryId, category)),
// });

export default /* connect(mapStateToProps, mapDispatchToProps)(MenuListDropdown) */ MenuListDropdown;
