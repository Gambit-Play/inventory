import React from 'react';

// Components
import Table from '../../../components/organisms/table/table.component';
import FabButton from '../../../components/molecules/fab-button/fab-button.component';

const ItemsList = () => {
	return (
		<React.Fragment>
			<Table items />
			<FabButton />
		</React.Fragment>
	);
};

export default ItemsList;
