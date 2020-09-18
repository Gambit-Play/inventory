import React from 'react';
import PropTypes from 'prop-types';

// Data
import { TYPES } from '../tutorials-buttons/tutorials-buttons.data';

// Components
import { RightColumn } from './tutorials-card.styles';
import InventoryTutorial from './inventory/inventory-tutorial.component';
import CategoriesTutorial from './categories/categories-tutorial.component';
import MenusTutorial from './menus/menus-tutorial.component';
import TablesTutorial from './tables/tables-tutorial.component';
import TakeOrderTutorial from './take-order/take-order-tutorial.component';
import OrdersTutorial from './orders/orders-tutorial.component';

const TutorialCard = ({ currentType }) => {
	switch (currentType) {
		case TYPES.INVENTORY:
			return (
				<RightColumn>
					<InventoryTutorial />
				</RightColumn>
			);
		case TYPES.CATEGORIES:
			return (
				<RightColumn>
					<CategoriesTutorial />
				</RightColumn>
			);
		case TYPES.MENUS:
			return (
				<RightColumn>
					<MenusTutorial />
				</RightColumn>
			);
		case TYPES.TABLES:
			return (
				<RightColumn>
					<TablesTutorial />
				</RightColumn>
			);
		case TYPES.TAKE_ORDERS:
			return (
				<RightColumn>
					<TakeOrderTutorial />
				</RightColumn>
			);
		case TYPES.ORDERS:
			return (
				<RightColumn>
					<OrdersTutorial />
				</RightColumn>
			);
		default:
			return null;
	}
};

TutorialCard.propTypes = {
	currentType: PropTypes.string.isRequired,
};

export default TutorialCard;
