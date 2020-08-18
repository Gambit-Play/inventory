import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchOrdersStart } from '../../../redux/handlers/orders-list/orders-list.actions';
import { selectCurrentOrders } from '../../../redux/handlers/orders-list/orders-list.selectors';

// Components
import { OrderCard, FlexBox } from './orders-list.styles';

const OrdersList = ({ fetchOrdersStart, ordersList }) => {
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
						<Fragment>
							<h3 key={menuIndex}>{menu.selectedMenuName}</h3>
							{menu.extraMenuItems.map(
								(extraMenu, extraMenuIndex) => (
									<h6 key={extraMenuIndex}>
										{extraMenu.name}
									</h6>
								)
							)}
						</Fragment>
					))}
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
