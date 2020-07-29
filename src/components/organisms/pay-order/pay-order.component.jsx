import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectTotalPrice,
	selectSelectedMenus,
} from '../../../redux/handlers/order-form/order-form.selectors';

const PayOrder = ({ totalPrice, selectedMenus }) => {
	console.log('@@ PayOrder - selectedMenus:', selectedMenus);
	return (
		<div>
			<h1>{`Total: € ${parseFloat(totalPrice).toFixed(2)}`}</h1>
			{selectedMenus[0].map((menu, menuIndex) => (
				<React.Fragment key={menuIndex}>
					<h4> {menu.name} </h4>
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
