import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

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
	createOrderStart,
} from '../../../redux/handlers/order-form/order-form.actions';

// Components
import TotalPrice from './total-price/total-price.component';
import SelectedMenus from './selected-menus/selected-menus.component';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

// Styles
import useStyles from './pay-order.styles';

const PayOrder = ({
	totalPrice,
	selectedMenus,
	isCardPaymentStart,
	isCashPaymentStart,
	isCardPayment,
	isCashPayment,
	cancelPayment,
	createOrderStart,
}) => {
	const history = useHistory();
	const classes = useStyles();

	const handleClick = () => {
		history.goBack();
		createOrderStart();
	};

	if (isCardPayment) {
		return (
			<Fragment>
				<TotalPrice totalPrice={totalPrice} />
				<Button
					className={classes.button}
					variant='contained'
					color='primary'
					onClick={handleClick}
				>
					Payed
				</Button>
				<Button variant='outlined' onClick={cancelPayment}>
					Cancel
				</Button>
			</Fragment>
		);
	}

	if (isCashPayment) {
		return (
			<Fragment>
				<TotalPrice totalPrice={totalPrice} />
				<Button
					className={classes.button}
					variant='contained'
					color='primary'
					onClick={handleClick}
				>
					Payed
				</Button>
				<Button variant='outlined' onClick={cancelPayment}>
					Cancel
				</Button>
			</Fragment>
		);
	}

	return (
		<div>
			<TotalPrice totalPrice={totalPrice} />
			<SelectedMenus selectedMenus={selectedMenus} />
			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				onClick={isCashPaymentStart}
				startIcon={<AttachMoneyIcon />}
			>
				Cash
			</Button>
			<Button
				className={classes.button}
				variant='contained'
				color='secondary'
				onClick={isCardPaymentStart}
				startIcon={<PaymentIcon />}
			>
				Card
			</Button>
			<Button variant='outlined' onClick={history.goBack}>
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
	createOrderStart: PropTypes.func.isRequired,
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
	createOrderStart: () => dispatch(createOrderStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayOrder);
