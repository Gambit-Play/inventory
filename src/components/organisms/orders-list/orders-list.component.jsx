import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchOrdersStart } from '../../../redux/handlers/orders-list/orders-list.actions';
import { selectCurrentOrders } from '../../../redux/handlers/orders-list/orders-list.selectors';

const OrdersList = ({ fetchOrdersStart, ordersList }) => {
	useEffect(() => {
		fetchOrdersStart();
		return () => {
			// Cleanup
		};
	}, [fetchOrdersStart]);

	console.log('@@@@@ ordersList:', ordersList);

	return (
		<Fragment>
			{ordersList.map(order => (
				<Fragment>
					{order.selectedMenus.map((menu, menuIndex) => (
						<div>
							<h1 key={menuIndex}>{menu.selectedMenuName}</h1>
							{menu.extraMenuItems.map(
								(extraMenu, extraMenuIndex) => (
									<h4 key={extraMenuIndex}>
										{extraMenu.name}
									</h4>
								)
							)}
						</div>
					))}
				</Fragment>
			))}
		</Fragment>
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
