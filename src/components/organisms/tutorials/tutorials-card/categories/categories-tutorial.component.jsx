import React from 'react';

// Images
import categoriesMenu from '../../../../../documentation/images/categories-images/categories-menu.png';
import categoriesAddButton from '../../../../../documentation/images/categories-images/categories-add-button.png';
import categoriesForm from '../../../../../documentation/images/categories-images/categories-form.png';
import categoriesFormError from '../../../../../documentation/images/categories-images/categories-form-error.png';
import categoriesTable from '../../../../../documentation/images/categories-images/categories-table.png';
import categoriesFormEdit from '../../../../../documentation/images/categories-images/categories-form-edit.png';
import categoriesTableDelete from '../../../../../documentation/images/categories-images/categories-table-delete.png';
import categoriesFormDelete from '../../../../../documentation/images/categories-images/categories-form-delete.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const CategoriesTutorial = () => {
	return (
		<React.Fragment>
			<Title>Create a new category</Title>
			<Image src={categoriesMenu} alt='' />
			<BodyText>1. Click here if you want to add a category.</BodyText>
			<Image src={categoriesAddButton} alt='' />
			<BodyText>
				2. Click on the red plus button in the bottom right corner, if
				you want to create a new category.
			</BodyText>
			<Image src={categoriesForm} alt='' />
			<BodyText lineHeight>
				3. Fill in the form.
				<br />
				4. Click on the ‘SAVE’ button
			</BodyText>
			<Image src={categoriesFormError} alt='' />
			<BodyText>
				5. Make sure that a name is provided otherwise you can’t save
				the category.
			</BodyText>
			<Divider className='divider' />
			<Title>Edit a category</Title>
			<Image src={categoriesTable} alt='' />
			<BodyText>1. Click on a category if you want to edit.</BodyText>
			<Image src={categoriesFormEdit} alt='' />
			<BodyText>
				2. Edit the item and click on the ‘UPDATE’ button.
			</BodyText>
			<Divider className='divider' />
			<Title>Delete inventory items</Title>
			<BodyText>There are 2 ways to delete an item:</BodyText>
			<Image src={categoriesTableDelete} alt='' />
			<BodyText lineHeight>
				1. You can delete a single or multiple items by selecting the
				check-box.
				<br />
				2. Click on the delete icon.
			</BodyText>
			<Image src={categoriesFormDelete} alt='' />
			<BodyText>
				3. The other way to delete an item is to select one of them in
				the table and click on the delete button.
			</BodyText>
		</React.Fragment>
	);
};

export default CategoriesTutorial;
