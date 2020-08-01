import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectTotalPrice,
	selectSelectedMenus,
} from '../../../redux/handlers/order-form/order-form.selectors';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const PayOrder = ({ totalPrice, selectedMenus }) => {
	console.log('@@ PayOrder - selectedMenus:', selectedMenus);
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
				startIcon={<AttachMoneyIcon />}
			>
				Cash
			</Button>
			<Button
				variant='contained'
				color='secondary'
				startIcon={<PaymentIcon />}
			>
				Card
			</Button>
		</div>
	);
};

PayOrder.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	selectedMenus: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
	totalPrice: selectTotalPrice,
	selectedMenus: selectSelectedMenus,
});

export default connect(mapStateToProps)(PayOrder);
