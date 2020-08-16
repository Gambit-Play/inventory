import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { fetchMenuStart } from '../../../redux/handlers/orders-list/orders-list.actions';

const OrdersList = ({ fetchMenuStart }) => {
	useEffect(() => {
		fetchMenuStart();
		return () => {
			// Cleanup Listeners
		};
	}, [fetchMenuStart]);

	return <h1>Orders List</h1>;
};

OrdersList.propTypes = {
	fetchMenuStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	fetchMenuStart: () => dispatch(fetchMenuStart()),
});

export default connect(null, mapDispatchToProps)(OrdersList);
