import React, { Fragment } from 'react';

const SelectedMenus = ({ selectedMenus }) => {
	return selectedMenus[0].map((menu, menuIndex) => (
		<Fragment key={menuIndex}>
			<h4>{`${menu.name} | €${parseFloat(menu.price).toFixed(2)}`}</h4>
			{menu.extraMenuItemsId.map((extraMenu, extraMenuIndex) =>
				extraMenu[2] ? (
					<h6 key={extraMenuIndex}>
						{
							extraMenu[1].find(item => item.id === extraMenu[2])
								.name
						}
					</h6>
				) : (
					<h6 key={extraMenuIndex}>{extraMenu[1][0].name}</h6>
				)
			)}
		</Fragment>
	));
};

export default SelectedMenus;
