import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from '../../../../../../routes/routes';

// Components
import MenuListItem from './menu-list-item.component';

// Mui Components & Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

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
				selected={isCurrent(ROUTES.TABLES_LIST)}
				to={ROUTES.TABLES_LIST}
				iconColor={isIconActive(ROUTES.TABLES_LIST)}
				labelColor={isIconActive(ROUTES.TABLES_LIST)}
				label={'Tables'}
			>
				<ShoppingCartIcon color={isIconActive(ROUTES.TABLES_LIST)} />
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
			<MenuListItem
				selected={isCurrent(ROUTES.CATEGORIES_LIST)}
				to={ROUTES.CATEGORIES_LIST}
				iconColor={isIconActive(ROUTES.CATEGORIES_LIST)}
				labelColor={isIconActive(ROUTES.CATEGORIES_LIST)}
				label={'Categories'}
			>
				<LabelOutlinedIcon
					color={isIconActive(ROUTES.CATEGORIES_LIST)}
				/>
			</MenuListItem>
		</div>
	);
};

PrimaryList.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(PrimaryList);
