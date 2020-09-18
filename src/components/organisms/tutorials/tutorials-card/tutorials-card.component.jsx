import React from 'react';
import PropTypes from 'prop-types';

// Data
import { TYPES } from '../tutorials-buttons/tutorials-buttons.data';

// Components
import { RightColumn } from './tutorials-card.styles';
import InventoryTutorial from './inventory/inventory-tutorial.component';
import CategoriesTutorial from './categories/categories-tutorial.component';

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
		default:
			return null;
	}
};

TutorialCard.propTypes = {
	currentType: PropTypes.string.isRequired,
};

export default TutorialCard;
