import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../../routes/routes';

const TopBarTitle = ({ location }) => {
	if (ROUTES.TABLES_LIST === location.pathname) return 'Tables';
	if (ROUTES.DASHBOARD === location.pathname) return 'Dashboard';
	if (ROUTES.MENUS_LIST === location.pathname) return 'Menus';
	if (ROUTES.ITEMS_LIST === location.pathname) return 'Items';
	if (ROUTES.CATEGORIES_LIST === location.pathname) return 'Categories';
	return '';
};

TopBarTitle.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(TopBarTitle);
