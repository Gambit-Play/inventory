import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../routes/routes';

// Component
import OrdersList from '../../components/organisms/orders-list/orders-list.component';
import OrderTypeButtons from '../../components/molecules/order-type-buttons/order-type-buttons.component';
import Table from '../../components/organisms/table/table.component';

const Orders = ({ match }) => {
	const { path } = match;
	const OrderTable = <Table orders />;

	console.log(match);

	return (
		<Switch>
			<Route exact path={path} component={OrderTypeButtons} />
			<Route
				path={`${path}/${ROUTES.ORDERS_LIST}`}
				component={OrdersList}
			/>
			<Route
				path={`${path}/${ROUTES.ORDERS_TABLE}`}
				render={() => <Table orders />}
			/>
		</Switch>
	);
};

Orders.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Orders;
