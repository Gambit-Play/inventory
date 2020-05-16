import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import { isNew } from '../../../redux/handlers/item-detail/item-detail.actions';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const ItemsList = props => {
	const { history, isNew } = props;

	return (
		<React.Fragment>
			<Table items />
			<FabButton
				url={`${ROUTES.ITEMS_LIST}/${ROUTES.NEW_ITEM}`}
				title='Create a new item'
				history={history}
				isNew={isNew}
			/>
		</React.Fragment>
	);
};

ItemsList.propTypes = {
	history: PropTypes.object.isRequired,
	isNew: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	isNew: () => dispatch(isNew()),
});

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(ItemsList);
