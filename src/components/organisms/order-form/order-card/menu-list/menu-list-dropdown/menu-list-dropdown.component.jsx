import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// // Redux
// import { selectCurrentCategories } from '../../../../redux/categories/categories.selectors';
// import { selectMenu } from '../../../../redux/handlers/menu-detail/menu-detail.selectors';
import { setExtraMenuItemStart } from '../../../../../../redux/handlers/order-form/order-form.actions';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const MenuListDropdown = ({
	extraMenuItemsId,
	setExtraMenuItemStart,
	selectedMenusIndex,
	selectedExtraIndex,
}) => {
	const handleChange = event => {
		const { id, extraItemIndex } = event.target.value;
		// FIXME: Remove "const extraItem".
		// const extraItem = extraMenuItemsId.find(
		// 	extraItem => extraItem.id === event.target.value
		// );

		setExtraMenuItemStart({
			id,
			extraItemIndex,
			selectedMenusIndex,
			selectedExtraIndex,
		});

		// TODO: The "event.target.value" contains an object with id,name and categoryId.
		//  	 You can remove "const extraItem".
		console.log(
			'@@ MenuListDropdown - event.target.value:',
			event.target.value
		);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id='select-label'>Select</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				value={extraMenuItemsId[2]}
				onChange={handleChange}
			>
				{extraMenuItemsId[1].map((extraItem, extraItemIndex) => (
					<MenuItem
						key={extraItem.id}
						value={{
							id: extraItem.id,
							extraItemIndex,
						}}
					>
						{extraItem.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

MenuListDropdown.propTypes = {
	extraMenuItemsId: PropTypes.array.isRequired,
	setExtraMenuItemStart: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
// 	currentCategories: selectCurrentCategories,
// 	menu: selectMenu,
// });

const mapDispatchToProps = dispatch => ({
	setExtraMenuItemStart: props => dispatch(setExtraMenuItemStart(props)),
});

export default connect(null, mapDispatchToProps)(MenuListDropdown);
