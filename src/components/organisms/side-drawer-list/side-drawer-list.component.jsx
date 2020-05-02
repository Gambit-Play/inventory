import React from 'react';

// Components
import MainList from './side-drawer-list.primary';

// Mui Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const SideDrawerList = () => {
	return (
		<React.Fragment>
			<List>
				<MainList />
			</List>
			<Divider />
			<List></List>
		</React.Fragment>
	);
};

export default SideDrawerList;
