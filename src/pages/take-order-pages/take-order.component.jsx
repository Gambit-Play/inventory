import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../routes/routes';

// Components
import TakeOrderButtons from '../../components/molecules/take-order-buttons/take-order-buttons.component';
import TableCard from '../../components/molecules/table-card/table-card.component';

const TestTakeAway = () => <h1>Take Away</h1>;
const TestEatIn = ({ match }) => {
	console.log(match);

	return <h1> {match.params.tableId} </h1>;
};

const TakeOrder = props => {
	const { match } = props;

	return (
		<Switch>
			<Route exact path={match.path} component={TakeOrderButtons} />
			<Route
				path={`${match.path}/${ROUTES.TAKE_AWAY}`}
				component={TestTakeAway}
			/>
			<Route
				path={`${match.path}/${ROUTES.EAT_IN}/:tableId`}
				component={TestEatIn}
			/>
			<Route
				exact
				path={`${match.path}/${ROUTES.EAT_IN}`}
				component={TableCard}
			/>
		</Switch>
	);
};

TakeOrder.propTypes = {
	match: PropTypes.object.isRequired,
};

export default TakeOrder;
