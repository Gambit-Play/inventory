import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import { isNew } from '../../../redux/handlers/menu-detail/menu-detail.actions';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const MenusList = props => {
	const { history, isNew } = props;

	return (
		<React.Fragment>
			<Table menus />
			<FabButton
				url={`${ROUTES.MENUS_LIST}/${ROUTES.NEW_MENU}`}
				title='Create a new menu'
				history={history}
				isNew={isNew}
			/>
		</React.Fragment>
	);
};

MenusList.propTypes = {
	history: PropTypes.object.isRequired,
	isNew: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	isNew: () => dispatch(isNew()),
});

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(MenusList);
