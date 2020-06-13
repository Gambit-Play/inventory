import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import {
	MenuCard as Paper,
	MenusContainer,
	Seperator,
} from '../order-form.styles';

// Mui Components
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// Styles
import useStyles from './menu-card.styles';

const MenuCard = ({ menusCategories, menus, handleClick }) => {
	const classes = useStyles();

	return (
		<Fragment>
			{menusCategories.map((category, index) => (
				<Fragment key={category.id}>
					{index !== 0 && <Seperator />}
					<Typography variant='button' gutterBottom>
						{category.name}
					</Typography>
					<MenusContainer>
						{menus.map(
							menu =>
								menu.categoryId === category.id && (
									<ButtonBase
										key={menu.id}
										className={classes.button}
										onClick={event => handleClick(menu)}
									>
										<Paper key={menu.id}>{menu.name}</Paper>
									</ButtonBase>
								)
						)}
					</MenusContainer>
				</Fragment>
			))}
		</Fragment>
	);
};

MenuCard.propTypes = {
	menusCategories: PropTypes.array.isRequired,
	menus: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default MenuCard;
