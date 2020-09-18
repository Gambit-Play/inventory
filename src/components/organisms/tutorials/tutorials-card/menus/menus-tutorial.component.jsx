import React from 'react';

// Images
import menusMenu from '../../../../../documentation/images/menus-images/menus-menu.png';
import menusAddButton from '../../../../../documentation/images/menus-images/menus-add-button.png';
import menusForm from '../../../../../documentation/images/menus-images/menus-form.png';
import menusFormError from '../../../../../documentation/images/menus-images/menus-form-error.png';
import menusFormOtherInputs from '../../../../../documentation/images/menus-images/menus-form-other-inputs.png';
import menusTable from '../../../../../documentation/images/menus-images/menus-table.png';
import menusFormEdit from '../../../../../documentation/images/menus-images/menus-form-edit.png';
import menusTableDelete from '../../../../../documentation/images/menus-images/menus-table-delete.png';
import menusFormDelete from '../../../../../documentation/images/menus-images/menus-form-delete.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const MenusTutorial = () => {
	return (
		<React.Fragment>
			<Title>Create a new menu</Title>
			<Image src={menusMenu} alt='' />
			<BodyText>1. Click here if you want to add a menu.</BodyText>
			<Image src={menusAddButton} alt='' />
			<BodyText>
				2. Click on the red plus button in the bottom right corner, if
				you want to create a new menu.
			</BodyText>
			<Image src={menusForm} alt='' />
			<BodyText lineHeight>
				3. Fill in the form.
				<br />
				4. Click on the ‘SAVE’ button
			</BodyText>
			<Image src={menusFormError} alt='' />
			<BodyText>
				5. Make sure that a name is provided otherwise you can’t save
				the menu.
			</BodyText>
			<Image src={menusFormOtherInputs} alt='' />
			<BodyText lineHeight>
				Other inputs:
				<br />
				6. Select the type of category the menu is.
				<br />
				7. Select ingridients and the app will update the inventory once
				an order has been finished.
				<br />
				8. Click ’+ Add’ to add the ingridient and fill in the amount.
				<br />
				9. Select extra menu item if the menu is a combination of items.
				The extra menu item comes from the ‘Menus’ list.
				<br />
				10. Click ’+ Add’ to add the extra menu item.
			</BodyText>
			<Divider className='divider' />
			<Title>Edit a menu</Title>
			<Image src={menusTable} alt='' />
			<BodyText>1. Click on a menu if you want to edit.</BodyText>
			<Image src={menusFormEdit} alt='' />
			<BodyText>
				2. Edit the category and click on the ‘UPDATE’ button.
			</BodyText>
			<Divider className='divider' />
			<Title>Delete menus</Title>
			<BodyText>There are 2 ways to delete an item:</BodyText>
			<Image src={menusTableDelete} alt='' />
			<BodyText lineHeight>
				1. You can delete a single or multiple menus by selecting the
				check-box.
				<br />
				2. Click on the delete icon.
			</BodyText>
			<Image src={menusFormDelete} alt='' />
			<BodyText>
				3. The other way to delete a category is to select one of them
				in the table and click on the delete button.
			</BodyText>
		</React.Fragment>
	);
};

export default MenusTutorial;
