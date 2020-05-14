import React from 'react';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const MenusList = () => {
	return (
		<React.Fragment>
			<Table menus />
			<FabButton
				url={`${ROUTES.MENUS_LIST}/${ROUTES.NEW_MENU}`}
				title='Create a new menu'
			/>
		</React.Fragment>
	);
};

export default MenusList;
