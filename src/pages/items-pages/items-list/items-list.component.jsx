import React from 'react';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const ItemsList = () => {
	return (
		<React.Fragment>
			<Table items />
			<FabButton
				url={`${ROUTES.ITEMS_LIST}/${ROUTES.NEW_ITEM}`}
				title='Create a new item'
			/>
		</React.Fragment>
	);
};

export default ItemsList;
