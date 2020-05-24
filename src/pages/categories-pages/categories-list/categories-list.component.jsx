import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import { isNew } from '../../../redux/handlers/category-detail/category-detail.actions';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const CategoriesList = props => {
	const { history, isNew } = props;

	return (
		<React.Fragment>
			<Table categories />
			<FabButton
				url={`${ROUTES.CATEGORIES_LIST}/${ROUTES.NEW_CATEGORY}`}
				title='Create a new category'
				history={history}
				isNew={isNew}
			/>
		</React.Fragment>
	);
};

CategoriesList.propTypes = {
	history: PropTypes.object.isRequired,
	isNew: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	isNew: () => dispatch(isNew()),
});

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(CategoriesList);
