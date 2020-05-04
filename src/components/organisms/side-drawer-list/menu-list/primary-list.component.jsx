import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../../../routes/routes';

// Components
import MenuListItem from './menu-list-item.component';

// Mui Components
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

/* ================================================================ */
/*  Main List Items                                                 */
/* ================================================================ */

const PrimaryList = props => {
	const { location } = props;

	const isCurrent = linkLocation => {
		if (linkLocation === location.pathname) return true;
		return false;
	};
	const isIconActive = linkLocation => {
		if (linkLocation === location.pathname) return 'primary';
		return;
	};

	return (
		<div>
			<MenuListItem
				selected={isCurrent(ROUTES.DASHBOARD)}
				to={ROUTES.DASHBOARD}
				labelColor={isIconActive(ROUTES.DASHBOARD)}
				label={'Dashboard'}
			>
				<DashboardIcon color={isIconActive(ROUTES.DASHBOARD)} />
			</MenuListItem>
			<MenuListItem
				selected={isCurrent(ROUTES.TABLE)}
				to={ROUTES.TABLE}
				iconColor={isIconActive(ROUTES.TABLE)}
				labelColor={isIconActive(ROUTES.TABLE)}
				label={'Tables'}
			>
				<ShoppingCartIcon color={isIconActive(ROUTES.TABLE)} />
			</MenuListItem>
			<MenuListItem
				selected={isCurrent(ROUTES.MENUS_LIST)}
				to={ROUTES.MENUS_LIST}
				iconColor={isIconActive(ROUTES.MENUS_LIST)}
				labelColor={isIconActive(ROUTES.MENUS_LIST)}
				label={'Menus'}
			>
				<PeopleIcon color={isIconActive(ROUTES.MENUS_LIST)} />
			</MenuListItem>
			<MenuListItem
				selected={isCurrent(ROUTES.ITEMS_LIST)}
				to={ROUTES.ITEMS_LIST}
				iconColor={isIconActive(ROUTES.ITEMS_LIST)}
				labelColor={isIconActive(ROUTES.ITEMS_LIST)}
				label={'Items'}
			>
				<BarChartIcon color={isIconActive(ROUTES.ITEMS_LIST)} />
			</MenuListItem>
		</div>
	);
};

PrimaryList.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(PrimaryList);
