import React from 'react';

// Components
import PrimaryList from './menu-list/primary-list.component';

// Mui Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const SideDrawerList = () => {
	return (
		<React.Fragment>
			<List>
				<PrimaryList />
			</List>
			<Divider />
			<List>{/* Secondary List */}</List>
		</React.Fragment>
	);
};

export default SideDrawerList;
