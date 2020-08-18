import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { fetchOrdersStart } from '../../../redux/handlers/orders-list/orders-list.actions';

const OrdersList = ({ fetchOrdersStart }) => {
	useEffect(() => {
		fetchOrdersStart();
		return () => {
			// Cleanup
		};
	}, [fetchOrdersStart]);

	return <h1>Orders List</h1>;
};

OrdersList.propTypes = {
	fetchOrdersStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(null, mapDispatchToProps)(OrdersList);
