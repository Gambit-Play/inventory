import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// // Redux
// import { selectCurrentCategories } from '../../../../redux/categories/categories.selectors';
// import { selectMenu } from '../../../../redux/handlers/menu-detail/menu-detail.selectors';
import { setExtraMenuItemStart } from '../../../../../../redux/handlers/order-form/order-form.actions';
import { selectSelectedMenus } from '../../../../../../redux/handlers/order-form/order-form.selectors';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const MenuListDropdown = ({
	extraMenuItemsId,
	setExtraMenuItemStart,
	selectedMenusIndex,
	selectedExtraIndex,
}) => {
	const handleChange = event => {
		const id = event.target.value;

		setExtraMenuItemStart({
			id,
			selectedMenusIndex,
			selectedExtraIndex,
		});
	};

	return (
		<FormControl
			fullWidth
			error={extraMenuItemsId[2] === '' ? true : false}
		>
			<InputLabel id='select-label'>Select</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				value={extraMenuItemsId[2]}
				onChange={handleChange}
			>
				{extraMenuItemsId[1].map((extraItem, extraItemIndex) => (
					<MenuItem key={extraItemIndex} value={extraItem.id}>
						{extraItem.name}
					</MenuItem>
				))}
			</Select>
			{extraMenuItemsId[2] === '' && (
				<FormHelperText>Please select an option</FormHelperText>
			)}
		</FormControl>
	);
};

MenuListDropdown.propTypes = {
	extraMenuItemsId: PropTypes.array.isRequired,
	setExtraMenuItemStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	// This state is not being used but helps displaying the selected option
	// for the "Select" component. Need to understand why is that.
	selectedMenus: selectSelectedMenus,
});

const mapDispatchToProps = dispatch => ({
	setExtraMenuItemStart: props => dispatch(setExtraMenuItemStart(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuListDropdown);
