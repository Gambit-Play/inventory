import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Routes
import * as ROUTES from '../../routes/routes';

// Components
import TakeOrderButtons from '../../components/molecules/take-order-buttons/take-order-buttons.component';
import TableCard from '../../components/molecules/table-card/table-card.component';

const Test = () => <h1>Take Away</h1>;

const TakeOrder = props => {
	const { match } = props;

	return (
		<Switch>
			<Route exact path={match.path}>
				<TakeOrderButtons />
			</Route>
			<Route path={`${match.path}/${ROUTES.TAKE_AWAY}`}>
				<Test />
			</Route>
			<Route path={`${match.path}/${ROUTES.EAT_IN}`}>
				<TableCard />
			</Route>
		</Switch>
	);
};

TakeOrder.propTypes = {
	match: PropTypes.object.isRequired,
};

export default TakeOrder;
