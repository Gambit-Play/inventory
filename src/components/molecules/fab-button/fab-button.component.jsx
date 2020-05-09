import React from 'react';
import { withRouter } from 'react-router-dom';

// Routes
import * as ROUTES from '../../../routes/routes';

// Components
import Fab from './fab-button.styles';

// Mui Components & Icons
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const FabButton = props => {
	const { history } = props;

	const handleClick = () => {
		history.push(`${ROUTES.ITEMS_LIST}/${ROUTES.NEW_ITEM}`);
	};

	return (
		<Tooltip title='Create new item'>
			<Fab color='secondary' aria-label='add' onClick={handleClick}>
				<AddIcon />
			</Fab>
		</Tooltip>
	);
};

export default withRouter(FabButton);
