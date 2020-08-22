import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../routes/routes';

// Component
import OrdersList from '../../components/organisms/orders-list/orders-list.component';
import OrderTypeButtons from '../../components/molecules/order-type-buttons/order-type-buttons.component';

const Orders = ({ match }) => {
	const { path } = match;

	console.log(match);

	return (
		<Switch>
			<Route exact path={path} component={OrderTypeButtons} />
			<Route
				exact
				path={`${path}/${ROUTES.ORDERS_LIST}`}
				component={OrdersList}
			/>
		</Switch>
	);
};

Orders.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Orders;
