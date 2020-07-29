import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../routes/routes';

// Components
import TakeOrderButtons from '../../components/molecules/take-order-buttons/take-order-buttons.component';
import TableCard from '../../components/molecules/table-card/table-card.component';
import OrderForm from '../../components/organisms/order-form/order-form.component';
import PayOrder from '../../components/organisms/pay-order/pay-order.component';

/*============================================================================*/
// FIXME: Remove
const TestTakeAway = () => <h1>Take Away</h1>;
const TestEatIn = props => <h1>{props.match.params.tableId}</h1>;
const TestComponentOne = props => {
	console.log('@@ TestComponentOne - props:', props);

	return <h1>TestComponentOne</h1>;
};
const TestComponentTwo = props => {
	console.log('@@ TestComponentTwo - props:', props);

	return <h1>TestComponentTwo</h1>;
};
/*============================================================================*/

const TakeOrder = props => {
	const { path } = props.match;

	return (
		<Switch>
			<Route exact path={path} component={TakeOrderButtons} />
			<Route
				exact
				path={`${path}/${ROUTES.TAKE_AWAY}`}
				component={OrderForm}
			/>
			<Route
				exact
				path={`${path}/${ROUTES.EAT_IN}`}
				component={TableCard}
			/>
			<Route
				exact
				path={`${path}/${ROUTES.EAT_IN}/:tableId`}
				component={OrderForm}
			/>
			<Route
				path={`${path}/${ROUTES.EAT_IN}/:tableId/pay`}
				component={PayOrder}
			/>
			<Route
				path={`${path}/${ROUTES.TAKE_AWAY}/pay`}
				component={PayOrder}
			/>
		</Switch>
	);
};

TakeOrder.propTypes = {
	match: PropTypes.object.isRequired,
};

export default TakeOrder;
