import React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import { clearTableId } from '../../../redux/handlers/order-form/order-form.actions';

// Components
import CenterContainer from '../../atoms/center-container/center-container.styles';
import OrderButton from '../../atoms/order-button/order-button.component';

const TakeOrderButtons = ({ clearTableId }) => {
	const { url } = useRouteMatch();

	return (
		<CenterContainer>
			<OrderButton
				variant='contained'
				isTakeAway
				component={Link}
				to={`${url}/${ROUTES.TAKE_AWAY}`}
				onClick={clearTableId}
			>
				Take Away
			</OrderButton>
			<OrderButton
				variant='contained'
				isEatIn
				component={Link}
				to={`${url}/${ROUTES.EAT_IN}`}
			>
				Eat In
			</OrderButton>
		</CenterContainer>
	);
};

TakeOrderButtons.propTypes = {};

TakeOrderButtons.propTypes = {
	clearTableId: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	clearTableId: () => dispatch(clearTableId()),
});

export default connect(null, mapDispatchToProps)(TakeOrderButtons);
