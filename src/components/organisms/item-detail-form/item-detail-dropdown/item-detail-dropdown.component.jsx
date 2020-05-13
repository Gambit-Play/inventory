import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectCurrentUnits } from '../../../../redux/units/units.selectors';
import { selectItem } from '../../../../redux/handlers/item-detail/item-detail.selectors';
import { setUnit } from '../../../../redux/handlers/item-detail/item-detail.actions';

// Mui Component
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ItemDetailDropdown = props => {
	const { currentUnits, item, setUnit } = props;
	const unitsArray = Object.values(currentUnits);

	const handleChange = event => {
		const { id, unit } = currentUnits[event.target.value];

		setUnit(id, unit);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id='select-label'>Unit</InputLabel>
			<Select
				labelId='select-label'
				id='select'
				value={item.unitId}
				onChange={handleChange}
			>
				{unitsArray.map(unitArr => (
					<MenuItem key={unitArr.id} value={unitArr.id}>
						{unitArr.unit}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

ItemDetailDropdown.propTypes = {
	currentUnits: PropTypes.object.isRequired,
	item: PropTypes.object.isRequired,
	setUnit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	currentUnits: selectCurrentUnits,
	item: selectItem,
});

const mapDispatchToProps = dispatch => ({
	setUnit: (unitId, unit) => dispatch(setUnit(unitId, unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailDropdown);
