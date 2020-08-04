import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectTotalPrice,
	selectSelectedMenus,
	selectIsCardPayment,
	selectIsCashPayment,
} from '../../../redux/handlers/order-form/order-form.selectors';
import {
	isCardPaymentStart,
	isCashPaymentStart,
	cancelPayment,
} from '../../../redux/handlers/order-form/order-form.actions';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const PayOrder = ({
	totalPrice,
	selectedMenus,
	isCardPaymentStart,
	isCashPaymentStart,
	isCardPayment,
	isCashPayment,
	cancelPayment,
}) => {
	console.log('@@ PayOrder - selectedMenus:', selectedMenus);
	console.log('@@ PayOrder - isCardPayment:', isCardPayment);
	console.log('@@ PayOrder - isCashPayment:', isCashPayment);
	return (
		<div>
			<h1>{`Total: € ${parseFloat(totalPrice).toFixed(2)}`}</h1>
			{selectedMenus[0].map((menu, menuIndex) => (
				<React.Fragment key={menuIndex}>
					<h4>
						{`${menu.name} | €${parseFloat(menu.price).toFixed(2)}`}
					</h4>
					{menu.extraMenuItemsId.map((extraMenu, extraMenuIndex) =>
						extraMenu[2] ? (
							<h6 key={extraMenuIndex}>
								{
									extraMenu[1].find(
										item => item.id === extraMenu[2]
									).name
								}
							</h6>
						) : (
							<h6 key={extraMenuIndex}>{extraMenu[1][0].name}</h6>
						)
					)}
				</React.Fragment>
			))}
			<Button
				variant='contained'
				color='primary'
				onClick={isCashPaymentStart}
				startIcon={<AttachMoneyIcon />}
			>
				Cash
			</Button>
			<Button
				variant='contained'
				color='secondary'
				onClick={isCardPaymentStart}
				startIcon={<PaymentIcon />}
			>
				Card
			</Button>
			<Button variant='outlined' onClick={cancelPayment}>
				Cancel
			</Button>
		</div>
	);
};

PayOrder.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	selectedMenus: PropTypes.array.isRequired,
	isCardPayment: PropTypes.bool.isRequired,
	isCashPayment: PropTypes.bool.isRequired,
	isCardPaymentStart: PropTypes.func.isRequired,
	isCashPaymentStart: PropTypes.func.isRequired,
	cancelPayment: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	totalPrice: selectTotalPrice,
	selectedMenus: selectSelectedMenus,
	isCardPayment: selectIsCardPayment,
	isCashPayment: selectIsCashPayment,
});

const mapDispatchToProps = dispatch => ({
	isCardPaymentStart: () => dispatch(isCardPaymentStart()),
	isCashPaymentStart: () => dispatch(isCashPaymentStart()),
	cancelPayment: () => dispatch(cancelPayment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayOrder);
