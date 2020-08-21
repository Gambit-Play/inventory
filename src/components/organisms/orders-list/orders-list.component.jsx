import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// Status
import STATUS from '../../../status/status';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	fetchOrdersStart,
	setOrderStatus,
	updateOrderStatusStart,
	removeOrderStatus,
} from '../../../redux/handlers/orders-list/orders-list.actions';
import {
	selectCurrentOrders,
	selectUpdatedOrderId,
} from '../../../redux/handlers/orders-list/orders-list.selectors';

// Components
import { OrderCard, FlexBox } from './orders-list.styles';

// Material Components
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const OrdersList = ({
	fetchOrdersStart,
	ordersList,
	setOrderStatus,
	updatedOrderId,
	updateOrderStatusStart,
	removeOrderStatus,
}) => {
	useEffect(() => {
		fetchOrdersStart();
		return () => {
			// Cleanup
		};
	}, [fetchOrdersStart]);

	return ordersList !== undefined ? (
		<FlexBox row>
			{ordersList.map((order, orderIndex) => (
				<OrderCard key={orderIndex}>
					<div>
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
					</div>
					{updatedOrderId === order.id ? (
						<div>
							<Button
								variant='contained'
								color='primary'
								onClick={updateOrderStatusStart}
							>
								Update
							</Button>
							<Button
								variant='contained'
								onClick={removeOrderStatus}
							>
								Cancel
							</Button>
						</div>
					) : (
						<FormControl component='fieldset'>
							<RadioGroup
								aria-label='status'
								name={order.id}
								value={order.orderStatus}
								onChange={event =>
									setOrderStatus(
										event.target.name,
										event.target.value
									)
								}
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
					)}
				</OrderCard>
			))}
		</FlexBox>
	) : null;
};

OrdersList.propTypes = {
	fetchOrdersStart: PropTypes.func.isRequired,
	ordersList: PropTypes.array.isRequired,
	setOrderStatus: PropTypes.func.isRequired,
	updatedOrderId: PropTypes.string.isRequired,
	updateOrderStatusStart: PropTypes.func.isRequired,
	removeOrderStatus: PropTypes.func.isRequired,
};

const mapStateToDispatch = createStructuredSelector({
	ordersList: selectCurrentOrders,
	updatedOrderId: selectUpdatedOrderId,
});

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart()),
	setOrderStatus: (id, status) => dispatch(setOrderStatus(id, status)),
	updateOrderStatusStart: () => dispatch(updateOrderStatusStart()),
	removeOrderStatus: () => dispatch(removeOrderStatus()),
});

export default connect(mapStateToDispatch, mapDispatchToProps)(OrdersList);
