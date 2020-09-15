import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../../routes/routes';

const TopBarTitle = ({ location }) => {
	// Is the homepage "/"
	if (location.pathname === ROUTES.DASHBOARD) return 'Tutorial';

	// The correct order is from the bottom to the top
	// The "/take-order" route is the starting point.
	if (location.pathname.includes(ROUTES.PAYMENT)) return 'Payment';
	if (location.pathname.includes(ROUTES.TAKE_AWAY)) return 'Take Away';
	if (location.pathname.includes(ROUTES.EAT_IN)) return 'Eat In';
	if (location.pathname.includes(ROUTES.TAKE_ORDER)) return 'Take Orders';

	// The correct order is from the bottom to the top
	// The "/orders" route is the starting point.
	if (location.pathname.includes(ROUTES.ORDERS_LIST)) return 'Current Orders';
	if (location.pathname.includes(ROUTES.ORDERS_TABLE)) return 'All Orders';
	if (location.pathname.includes(ROUTES.ORDERS)) return 'Orders';

	// Main pages
	if (location.pathname.includes(ROUTES.TABLES_LIST)) return 'Tables';
	if (location.pathname.includes(ROUTES.MENUS_LIST)) return 'Menus';
	if (location.pathname.includes(ROUTES.ITEMS_LIST)) return 'Inventory';
	if (location.pathname.includes(ROUTES.CATEGORIES_LIST)) return 'Categories';

	return '';
};

TopBarTitle.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(TopBarTitle);
