import React from 'react';

// Images
import inventoryMenu from '../../../../../documentation/images/inventory-images/inventory-menu.png';
import inventoryAddButton from '../../../../../documentation/images/inventory-images/inventory-add-button.png';
import inventoryForm from '../../../../../documentation/images/inventory-images/inventory-form.png';
import inventoryFormError from '../../../../../documentation/images/inventory-images/inventory-form-error.png';
import inventoryTable from '../../../../../documentation/images/inventory-images/inventory-table.png';
import inventoryFormEdit from '../../../../../documentation/images/inventory-images/inventory-form-edit.png';
import inventoryTableDelete from '../../../../../documentation/images/inventory-images/inventory-table-delete.png';
import inventoryFormDelete from '../../../../../documentation/images/inventory-images/inventory-form-delete.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const InventoryTutorial = () => {
	return (
		<React.Fragment>
			<Title>Create new inventory item</Title>
			<Image src={inventoryMenu} alt='' />
			<BodyText>
				1. Click here if you want to add an inventory items.
			</BodyText>
			<Image src={inventoryAddButton} alt='' />
			<BodyText>
				2. Click on the red plus button in the bottom right corner, if
				you want to create a new item.
			</BodyText>
			<Image src={inventoryForm} alt='' />
			<BodyText lineHeight>
				3. Fill in the form.
				<br />
				4. Click on the ‘SAVE’ button
			</BodyText>
			<Image src={inventoryFormError} alt='' />
			<BodyText>
				5. Make sure that a name is provided otherwise you can’t save
				the item.
			</BodyText>
			<Divider className='divider' />
			<Title>Edit an inventory item</Title>
			<Image src={inventoryTable} alt='' />
			<BodyText>1. Click on an item if you want to edit one.</BodyText>
			<Image src={inventoryFormEdit} alt='' />
			<BodyText>
				2. Edit the item and click on the ‘UPDATE’ button.
			</BodyText>
			<Divider className='divider' />
			<Title>Delete inventory items</Title>
			<BodyText>There are 2 ways to delete an item:</BodyText>
			<Image src={inventoryTableDelete} alt='' />
			<BodyText lineHeight>
				1. You can delete a single or multiple items by selecting the
				check-box.
				<br />
				2. Click on the delete icon.
			</BodyText>
			<Image src={inventoryFormDelete} alt='' />
			<BodyText>
				3. The other way to delete an item is to select one of them in
				the table and click on the delete button.
			</BodyText>
		</React.Fragment>
	);
};

export default InventoryTutorial;
