import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// Status
import STATUS from '../../../status/status';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchOrdersStart } from '../../../redux/handlers/orders-list/orders-list.actions';
import { selectCurrentOrders } from '../../../redux/handlers/orders-list/orders-list.selectors';

// Components
import { OrderCard, FlexBox } from './orders-list.styles';

// Material Components
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const OrdersList = ({ fetchOrdersStart, ordersList }) => {
	const [value, setValue] = React.useState(STATUS.NOT_STARTED);

	const handleChange = event => {
		// setValue(event.target.value);
		console.log(event.target);
	};

	useEffect(() => {
		fetchOrdersStart();
		return () => {
			// Cleanup
		};
	}, [fetchOrdersStart]);

	console.log('@@@@@ ordersList:', ordersList);

	return (
		<FlexBox row>
			{ordersList.map((order, orderIndex) => (
				<OrderCard key={orderIndex}>
					{order.selectedMenus.map((menu, menuIndex) => (
						<Fragment key={menuIndex}>
							<h3>{menu.selectedMenuName}</h3>
							{menu.extraMenuItems.map(
								(extraMenu, extraMenuIndex) => (
									<h6 key={extraMenuIndex}>
										{extraMenu.name}
									</h6>
								)
							)}
							<Divider />
						</Fragment>
					))}
					<FormControl component='fieldset'>
						<RadioGroup
							aria-label='status'
							name={order.id}
							value={order.orderStatus}
							onChange={handleChange}
						>
							<FormControlLabel
								value={STATUS.NOT_STARTED}
								control={<Radio />}
								label='Not Started'
							/>
							<FormControlLabel
								value={STATUS.STARTED}
								control={<Radio />}
								label='Started'
							/>
							<FormControlLabel
								value={STATUS.FINISHED}
								control={<Radio />}
								label='Finished'
							/>
						</RadioGroup>
					</FormControl>
				</OrderCard>
			))}
		</FlexBox>
	);
};

OrdersList.propTypes = {
	fetchOrdersStart: PropTypes.func.isRequired,
	ordersList: PropTypes.array.isRequired,
};

const mapStateToDispatch = createStructuredSelector({
	ordersList: selectCurrentOrders,
});

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToDispatch, mapDispatchToProps)(OrdersList);
