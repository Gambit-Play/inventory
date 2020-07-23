import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectTotalPrice } from '../../../redux/handlers/order-form/order-form.selectors';

const PayOrder = ({ totalPrice }) => {
	return <h1>{`Total: € ${parseFloat(totalPrice).toFixed(2)}`}</h1>;
};

PayOrder.propTypes = {
	totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
	totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(PayOrder);
