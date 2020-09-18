import React from 'react';

// Images
import tablesMenu from '../../../../../documentation/images/tables-images/tables-menu.png';
import tablesAddButton from '../../../../../documentation/images/tables-images/tables-add-button.png';
import tablesForm from '../../../../../documentation/images/tables-images/tables-form.png';
import tablesFormError from '../../../../../documentation/images/tables-images/tables-form-error.png';
import tablesTable from '../../../../../documentation/images/tables-images/tables-table.png';
import tablesFormEdit from '../../../../../documentation/images/tables-images/tables-form-edit.png';
import tablesTableDelete from '../../../../../documentation/images/tables-images/tables-table-delete.png';
import tablesFormDelete from '../../../../../documentation/images/tables-images/tables-form-delete.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const TablesTutorial = () => {
	return (
		<React.Fragment>
			<Title>Create a new table</Title>
			<Image src={tablesMenu} alt='' />
			<BodyText>1. Click here if you want to add a table.</BodyText>
			<Image src={tablesAddButton} alt='' />
			<BodyText>
				2. Click on the red plus button in the bottom right corner, if
				you want to create a new table.
			</BodyText>
			<Image src={tablesForm} alt='' />
			<BodyText lineHeight>
				3. Fill in the form.
				<br />
				4. Click on the ‘SAVE’ button
			</BodyText>
			<Image src={tablesFormError} alt='' />
			<BodyText>
				5. Make sure that a name is provided otherwise you can’t save
				the table.
			</BodyText>
			<Divider className='divider' />
			<Title>Edit a table</Title>
			<Image src={tablesTable} alt='' />
			<BodyText>1. Click on a table if you want to edit.</BodyText>
			<Image src={tablesFormEdit} alt='' />
			<BodyText>
				2. Edit the table and click on the ‘UPDATE’ button.
			</BodyText>
			<Divider className='divider' />
			<Title>Delete tables</Title>
			<BodyText>There are 2 ways to delete an item:</BodyText>
			<Image src={tablesTableDelete} alt='' />
			<BodyText lineHeight>
				1. You can delete a single or multiple tables by selecting the
				check-box.
				<br />
				2. Click on the delete icon.
			</BodyText>
			<Image src={tablesFormDelete} alt='' />
			<BodyText>
				3. The other way to delete a table is to select one of them in
				the table and click on the delete button.
			</BodyText>
		</React.Fragment>
	);
};

export default TablesTutorial;
